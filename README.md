# Initiative Website Project

A course website for AP Computer Science A. Students read lessons, get help from **Starr** (the star mascot), quiz themselves on vocabulary, mark lessons complete, and take a unit test at the end of each unit, with Duolingo-style celebrations along the way.

Everything is plain **HTML, CSS and JavaScript**. There is no build step, no framework and no npm install. You edit a file, refresh the browser, and see the change.

---

## Table of contents

1. [Running the site](#running-the-site)
2. [File map](#file-map)
3. [Animations](#animations)
   1. [How animation works on this site (5-minute primer)](#1-how-animation-works-on-this-site-5-minute-primer)
   2. [Starr the mascot](#2-starr-the-mascot)
   3. [Lesson complete celebration](#3-lesson-complete-celebration)
   4. [Unit complete celebration (the grand one)](#4-unit-complete-celebration-the-grand-one)
   5. [The confetti engine](#5-the-confetti-engine)
   6. [What triggers the celebrations: progress and the unit test](#6-what-triggers-the-celebrations-progress-and-the-unit-test)
   7. [Cookbook: "I want to…"](#7-cookbook-i-want-to)
   8. [Testing animations from the browser console](#8-testing-animations-from-the-browser-console)
   9. [Accessibility and performance rules](#9-accessibility-and-performance-rules)
4. [Known gaps](#known-gaps)

---

## Running the site

Some browsers block scripts when a page is opened straight from the file system, so run a tiny local server from the project folder:

```bash
# any one of these works
python -m http.server 8765
npx serve .
```

Then open `http://localhost:8765/course_content.html` (or `dashboard.html`).

---

## File map

| File | What it is |
|---|---|
| `dashboard.html`, `dashboard.css`, `dashboard.js` | The home page with course cards. |
| `course_content.html`, `course-content.css`, `course-content.js` | The lesson reader: unit list, lesson flyout, tabs, lesson body. |
| `course-data.js` | The list of units and lesson names. |
| `lessons/unit0.js` … `unit4.js` | The lesson content itself, as HTML strings. |
| `shared.css` | Styles shared by both pages (profile card, Starr AI card, logo). |
| **`mascot.js`, `mascot.css`** | Starr: the animated mascot, speech bubble, menu, tour, quiz. |
| **`progress.js`, `progress.css`** | Lesson completion, the "Mark lesson complete" bar, sidebar progress marks, the "Unit test" flyout entry. |
| **`celebrations.js`, `celebrations.css`** | The lesson-complete and unit-complete animations, plus the confetti engine. |
| **`unit-test.js`, `unit-test.css`** | The unit test modal (10 vocabulary questions). |
| **`vocab.js`** | Pulls vocabulary terms out of lesson content. Used by the quiz and the unit test. |

The bold files are the animation and gamification layer. They are loaded at the bottom of `course_content.html` in this order, and the order matters (each one may use the ones before it):

```html
<script src="course-content.js"></script>
<script src="vocab.js"></script>
<script src="mascot.js"></script>
<script src="progress.js"></script>
<script src="celebrations.js"></script>
<script src="unit-test.js"></script>
```

---

## Animations

This section explains every moving thing on the site, how it is built, and exactly what to edit to change it. You do not need any animation background. If you can change a number in a file and refresh a page, you can change everything here.

### 1. How animation works on this site (5-minute primer)

Only three techniques are used. Once you recognise them you can read every animation in the project.

#### Technique A: CSS transitions (smooth changes)

A transition tells the browser "when this property changes, ease into the new value instead of snapping".

```css
.starr-btn {
    transition: transform .08s;   /* any change to transform takes 0.08 seconds */
}
.starr-btn:active {
    transform: translateY(4px);   /* pressed: move down 4px (the chunky-button press) */
}
```

Used for: button presses, hover colours, the progress bars growing, the bubble fading.

**To change it:** edit the time (`.08s`), or the property being changed.

#### Technique B: CSS keyframe animations (a recipe that plays)

A keyframe animation is a named recipe that describes what something looks like at different points in time. Then you attach the recipe to an element.

```css
/* 1. The recipe. 0% is the start, 100% is the end. */
@keyframes starr-float {
    0%, 100% { transform: translateY(0); }     /* start and end: normal position */
    50%      { transform: translateY(-7px); }  /* halfway: 7px higher */
}

/* 2. Attach it. */
.starr-anim {
    animation: starr-float 3.2s ease-in-out infinite;
}
```

Read the `animation:` line left to right:

| Part | Meaning | Example values |
|---|---|---|
| `starr-float` | which recipe | any `@keyframes` name |
| `3.2s` | how long one play takes | `.5s` is snappy, `3s` is slow |
| `ease-in-out` | the speed curve | `linear` (robotic), `ease-out` (fast then settles), `cubic-bezier(.2,1.4,.4,1)` (overshoots, bouncy) |
| `.45s` (optional) | wait this long before starting | used to stagger things |
| `infinite` or `1` or `2` | how many times to play | leave out for once |
| `forwards` (optional) | when finished, stay at the 100% look instead of snapping back | used for "settle into a pose" |

So `cele-rise .5s ease-out .45s forwards` means: play the `cele-rise` recipe, take half a second, ease out, start after 0.45s, and stay at the end state.

The properties you will see inside recipes:

| Property | What it does |
|---|---|
| `transform: translateY(-20px)` | move up 20px (`translateX` for sideways) |
| `transform: rotate(-12deg)` | tilt |
| `transform: scale(1.1)` | grow 10% (`scale(1.1, .9)` squashes: wider and shorter) |
| `opacity: 0` | invisible; `1` is fully visible |

You can combine transforms: `transform: translateY(-26px) scale(.94, 1.08)` (jump up while stretching tall).

**Almost every visible motion in this project is Technique B.** Poses, the card popping in, the crown dropping, the letters wobbling, the shockwave rings. To change how any of them look, find the `@keyframes` block with that name and change the numbers.

#### Technique C: JavaScript-driven animation

Used only where CSS cannot do it:

* **Confetti** is drawn on a `<canvas>` every frame (`celebrations.js`, the `Confetti` class). See [section 5](#5-the-confetti-engine).
* **Numbers counting up** (the ring percentage, the "3 of 15", the score) use the `countUp()` helper in `celebrations.js`.
* **The progress ring sweeping** uses the browser's Web Animations API: `element.animate([from, to], { duration, delay })`. Same idea as keyframes, written in JavaScript.

#### How a pose or a celebration gets started

CSS animations do not start by themselves. JavaScript either adds a class (`is-open`) or sets an attribute (`data-pose="happy"`), and the CSS is written so that state has an animation attached:

```css
.starr[data-pose="happy"] .starr-anim { animation: starr-jump .9s ... }
```

So the pattern throughout the project is: **JavaScript decides *when*, CSS decides *what it looks like*.** If you want to change the look, you are almost always editing CSS. If you want to change when or why, you are editing JavaScript.

---

### 2. Starr the mascot

**Files:** `mascot.js` (behaviour, speech, what it says) and `mascot.css` (how it looks and moves).

Starr is an inline SVG star with a face, sitting in the bottom-right corner above the "Starr AI" card. It:

* idles with a gentle bob and random blinks,
* changes **pose** to react to things (wave, jump, think, shake, lean, sleep),
* talks through a speech bubble with buttons,
* has a click menu (Where am I?, Quiz me, Watch out for Starrfalls, Show me around, Hide Starr),
* runs a first-visit tour that spotlights the unit list and the tabs,
* naps after 90 seconds of no activity and wakes on the next mouse move.

#### 2.1 How poses work

A pose is just a value on the `data-pose` attribute of the mascot's container. `mascot.js` sets it; `mascot.css` reacts to it.

```js
Starr.pose("happy", 2500);   // set the pose, go back to idle after 2.5 seconds
```

| Pose | What you see | Recipe(s) in `mascot.css` |
|---|---|---|
| `idle` | gentle bob, smile | `starr-float` |
| `wave` | rocks side to side | `starr-wave` |
| `happy` | two jumps with squash and stretch, grin, sparkles | `starr-jump`, `starr-sparkle` |
| `oops` | shakes, "o" mouth, eyes look down | `starr-shake` |
| `think` | tilts, flat mouth, eyes look up-right | `starr-tilt` |
| `point-left` | leans toward the sidebar, eyes look left | `starr-lean-left` |
| `point-up` | leans up toward the tabs | `starr-lean-up` |
| `sleep` | eyes closed, slow sway, floating "z"s | `starr-sleep`, `starr-zzz` |

Each pose is three small CSS rules in `mascot.css`:

1. **Body motion** (the "poses (whole-body motion)" block):
   ```css
   .starr[data-pose="happy"] .starr-anim {
       animation: starr-jump .9s cubic-bezier(.3,.9,.4,1.1) 2,     /* the pose itself, played twice */
                  starr-float 3.2s ease-in-out 1.8s infinite;      /* then resume idling after 1.8s */
   }
   ```
   The second animation is the idle bob, delayed by however long the first one takes, so Starr goes back to floating smoothly.
2. **Mouth**: the block starting `.starr[data-pose="idle"] .starr-mouth-smile,` lists which mouth is shown for which pose. There are four mouths: `starr-mouth-smile`, `starr-mouth-grin`, `starr-mouth-flat`, `starr-mouth-o`.
3. **Eyes** (optional): `.starr[data-pose="think"] .starr-pupil { transform: translate(1.6px, -1.6px); }` moves the pupils.

#### 2.2 Change an existing pose (worked examples)

**Make the jump higher.** In `mascot.css`, find `@keyframes starr-jump` and change the `45%` line:

```css
45% { transform: translateY(-26px) scale(.94, 1.08); }   /* -26px → -40px for a bigger jump */
```

**Make the wave faster.** Find `.starr[data-pose="wave"] .starr-anim` and change `1.2s` to `.7s`. Also change the idle delay on the same line (`starr-float 3.2s ease-in-out 1.2s infinite` → `.7s`) so the bob resumes when the wave ends.

**Make Starr bob more slowly.** In `@keyframes starr-float`'s attachment (`.starr-anim { animation: starr-float 3.2s ... }`), change `3.2s` to `5s`.

**Make the happy pose jump once instead of twice.** Change the `2` after the timing function to `1`, and shorten the idle delay from `1.8s` to `.9s`.

#### 2.3 Add a brand-new pose

Say you want a `spin` pose.

1. **Write the recipe** in `mascot.css`, next to the other `@keyframes`:
   ```css
   @keyframes starr-spin {
       to { transform: rotate(360deg); }
   }
   ```
2. **Attach it to the pose name**, in the "poses (whole-body motion)" block:
   ```css
   .starr[data-pose="spin"] .starr-anim { animation: starr-spin .8s ease-in-out 1, starr-float 3.2s ease-in-out .8s infinite; }
   ```
3. **Give it a mouth.** Add `.starr[data-pose="spin"] .starr-mouth-grin,` to the mouth list. If you skip this step Starr will have no mouth during the pose.
4. **(Optional) eyes:** `.starr[data-pose="spin"] .starr-pupil { transform: translate(0, -1.8px); }`
5. **Use it** from JavaScript: `Starr.pose("spin", 1000)`, or inside a bubble: `say("Wheee!", { pose: "spin" })`.

#### 2.4 Change the face or colours

The star drawing is the `starSvg()` function near the top of `mascot.js`. It is a normal SVG, so:

* **Colours:** the gradient stops `#6A4CF5` (purple) and `#2AD4E6` (cyan) in `<linearGradient id="starr-grad">`.
* **Eyes:** the two `<g class="starr-eye">` groups. `cx`/`cy` is the position, `rx`/`ry` the size.
* **Mouths:** the four `starr-mouth-*` shapes. Only one is shown per pose (see 2.1).
* **Cheeks:** the two pink circles.
* **Sparkles:** the three small yellow paths in `<g class="starr-sparkles">`. They animate only in the `happy` pose.

The celebrations clone this same SVG, so a face change shows up everywhere automatically.

#### 2.5 Change what Starr says

All text lives in `mascot.js`:

| What | Where in `mascot.js` |
|---|---|
| The first-visit tour (four steps on the course page, three on the dashboard) | `tourSteps()`: each step has `text`, `pose`, and an optional `target` selector to spotlight |
| "Welcome back" greeting | the `init` block at the very bottom |
| "Now on 1.2 …" when a lesson loads | the `document.addEventListener("lesson:loaded", …)` handler |
| "Heads up: N Starrfalls" and end-of-lesson prompt | `watchSections()` |
| Menu items | `buildMenu()`: add a line like `items.push({ icon: "★", label: "…", hint: "…", run: someFunction })` |
| "Where am I?" wording | `whereAmI()` |
| Quiz feedback | `renderQuestion()` and `finishQuiz()` |

To make Starr say anything from your own code:

```js
Starr.say("Nice work on that table!", {
    pose: "happy",        // optional pose while talking
    duration: 6000,       // auto-hide after 6s; use 0 to stay until closed
    actions: [            // optional buttons
        { label: "Show me", onClick: () => { /* … */ } },
        { label: "No thanks", primary: false }
    ]
});
```

#### 2.6 Timing knobs

| Behaviour | Where | Default |
|---|---|---|
| Blink frequency | `blinkLoop()` in `mascot.js`: `2800 + Math.random() * 3200` ms | every 2.8–6 s |
| Falls asleep after | `armSleep()` in `mascot.js`: `90000` | 90 s |
| Bubble auto-hide | the `duration` passed to each `say()` call, default `7000` | 7 s |
| Tour starts after page load | `setTimeout(tour, 900)` at the bottom of `mascot.js` | 0.9 s |
| Bubble pop-in speed | `.starr-bubble.is-open { animation: starr-pop-in .28s … }` in `mascot.css` | 0.28 s |
| Spotlight pulse | `@keyframes starr-pulse` in `mascot.css` | 1.3 s loop |

#### 2.7 Position and size

At the top of `mascot.css`:

```css
.starr { right: 22px; bottom: 108px; width: 118px; }   /* bottom: 108px keeps it above the Starr AI card (95px tall) */
.starr-body { width: 118px; height: 118px; }
```

The small-screen sizes are in the `@media (max-width: 640px)` block at the bottom.

---

### 3. Lesson complete celebration

**Files:** `celebrations.js` (function `lesson()`) and `celebrations.css` (everything starting with `.cele`).

It plays when a student clicks **Mark lesson complete** (or Starr's "Mark complete" button). This is the sequence, in order. Every time here is a number you can change.

| When | What happens | Where to edit |
|---|---|---|
| 0 s | Dark blurred overlay fades in | `.cele { transition: opacity .35s }` |
| 0.1 s | White card pops in with a little overshoot | `.cele.is-open .cele-card { animation: cele-pop .6s … .1s }` and `@keyframes cele-pop` |
| 0.15 s | Two confetti cannons fire from the bottom corners | `lesson()` in `celebrations.js`: the two `confetti.burst({ x: 0, y: 1 … })` lines |
| 0.35 s | Starr drops onto the top of the card, then floats | `.cele-mascot { animation: cele-drop .7s … .35s, cele-float … }` |
| 0.45 s | "LESSON COMPLETE" label rises in | `.cele.is-open .cele-kicker { … .45s }` |
| 0.55 s | Lesson title rises in | `.cele.is-open .cele-title { … .55s }` |
| 0.6 s | A small confetti pop behind the card | `confetti.burst({ x: .5, y: .4 … })` |
| 0.65 s | Progress ring sweeps from the old % to the new % (1 s long) | `fg.animate(…, { duration: 1000, delay: 650 })` and `countUp(… "%")` |
| 0.7 s | Stats row rises in | `.cele.is-open .cele-stats { … .7s }` |
| 0.8 s | "3 of 15 lessons" counter ticks up | `countUp(el.querySelector(".cele-count") …, { duration: 500, delay: 800 })` |
| 0.85 s | (only when the whole unit is done) yellow "unit test unlocked" note | `.cele.is-open .cele-unlock` |
| 1.0 s | Buttons rise in | `.cele.is-open .cele-actions { … 1s }` |

All the "rises in" effects share one recipe, `@keyframes cele-rise` (fade up 14px). Each element just has a different delay, which is what creates the stagger. To make the whole card feel snappier, reduce every delay by the same amount.

**What the parts are called** (so you can find them in the CSS):

```
.cele                overlay covering the page
  .cele-canvas       the confetti layer
  .cele-card         the white card
    .cele-mascot     Starr (a copy of the live mascot's SVG, forced into a grin)
    .cele-kicker     small purple "LESSON COMPLETE"
    .cele-title      the lesson name
    .cele-stats      the ring + the counter
      .cele-ring     circular progress (an SVG circle whose dash offset is animated)
      .cele-stat     "3 of 15 lessons"
    .cele-unlock     yellow note (only when the unit is finished)
    .cele-actions    the buttons (.cele-btn, .cele-btn.ghost)
```

**Common edits**

* **Text:** the strings are in `lesson()` in `celebrations.js` ("Lesson complete", "of … lessons", "Next lesson", "Stay here", the unlock note).
* **Card colour or size:** `.cele-card { width: min(440px, 100%); background: white; border-radius: 28px; }`
* **Ring colours:** the `<linearGradient id="cele-ring-grad">` inside `lesson()`, and `.cele-ring .bg { stroke: #EEF2FF }` for the track.
* **Make the pop bouncier:** the `cubic-bezier(.2,1.4,.4,1)` on `.cele-card`. The third number above 1 is the overshoot; try `1.8`.
* **Less confetti:** lower the `count` values in the three `burst` calls, or delete the middle one.
* **No confetti on lessons:** delete the `if (confetti) { … }` block in `lesson()`.

---

### 4. Unit complete celebration (the grand one)

**Files:** `celebrations.js` (function `unit()`) and the `UNIT COMPLETE` half of `celebrations.css`.

It plays when a unit test is finished. It is deliberately bigger and longer than the lesson one.

| When | What happens | Where to edit |
|---|---|---|
| 0 s | Deep purple overlay fades in | `.cele-unit { background: radial-gradient(…) }` |
| 0.1 s | Dark card pops in | `.cele.is-open .cele-card` (shared with the lesson card) |
| 0.25 s | Big confetti fountain from the bottom centre | `unit()`: `confetti.burst({ x: .5, y: 1.02, count: 280 … })` |
| 0.3 s | Sunburst rays fade in behind everything and rotate very slowly (one turn every 40 s) | `.cele-rays { transition: opacity 1.2s ease .3s; animation: cele-spin 40s … }` |
| 0.35 s | Crowned Starr scales in from nothing with a spin and overshoot | `.cele-mascot-big { animation: cele-badge-in .9s … .35s }` |
| 0.45 s | "UNIT COMPLETE" label (gold) rises in | `.cele-unit .cele-kicker` |
| 0.6 s | Two shockwave rings expand out of the badge (gold, then cyan) | `.cele-shock { animation: cele-shock 1.2s ease-out .6s }` and `.cele-shock.two { animation-delay: .85s }` |
| 0.6 s → | Title letters wobble in one at a time, 0.03 s apart | `letters()` in `celebrations.js` sets each letter's delay; `@keyframes cele-letter` is the motion |
| 0.9 s, 1.25 s, 1.7 s | Three fireworks: a white dot rises, then bursts | `confetti.firework({ x: .22, y: .32, delay: 900 })` etc. |
| 1.0 s | Score row rises in | `.cele.is-open .cele-score` |
| 1.05 s | The crown drops onto Starr's head | `.cele-crown { animation: cele-crown .6s … 1.05s }` |
| 1.1 s | Score counts from 0 to the result over 1.2 s | `countUp(… { duration: 1200, delay: 1100 })` |
| 1.0 s → | Slow shower of stars from the top for 4.5 s | `confetti.rain({ count: 90, duration: 4500 })` |
| 1.3 s | Message rises in | `.cele.is-open .cele-msg` |
| 1.6 s | Buttons rise in | `.cele-unit.is-open .cele-actions { animation-delay: 1.6s }` |
| 2.0 s | "PERFECT!" stamp slams in (only on a full score) | `.cele-stamp { animation: cele-stamp .4s … 2s }` |
| 2.3 s | Side cannons fire from both edges | the two `confetti.after(2300, …)` lines |

**The parts:**

```
.cele.cele-unit          overlay (purple radial gradient)
  .cele-rays             rotating sunburst (a repeating-conic-gradient, masked to fade out at the edges)
  .cele-card             dark navy card
    .cele-badge          wrapper for the star + rings
      .cele-shock (x2)   expanding rings
      .cele-mascot-big   crowned Starr (the crown is added in starMarkup({ crown: true }))
    .cele-kicker         "UNIT COMPLETE"
    .cele-title-letters  the title, one <span> per letter
    .cele-score          big gold number + "/ 10"
    .cele-stamp          "PERFECT!"
    .cele-msg            the sentence under the score
    .cele-actions        "Start Unit 2" (gold) and "Back to lessons"
```

**Common edits**

* **The messages** ("Flawless…", "Outstanding work…", "Solid pass…", "You made it through…") are the `msg` lines in `unit()`. The thresholds are `ratio >= .8` and `ratio >= .6`.
* **Rays:** the stripe width is the `9deg` / `20deg` pair in `.cele-rays`'s `repeating-conic-gradient`. Brightness is the `.09` alpha. Speed is `40s` in `cele-spin`. Delete the `.cele-rays` div in `open()` (or set `display: none`) to remove them.
* **Crown:** the `<g class="cele-crown">` SVG inside `starMarkup()` in `celebrations.js`. Its colours are `#FBBF24` / `#D97706`.
* **Letter wobble:** `@keyframes cele-letter`. The `0.03` in `letters()` is the gap between letters; `0.6` is when the first letter starts.
* **Stamp:** change the word in `unit()`; the tilt is `rotate(-8deg)` in `.cele-stamp` and `@keyframes cele-stamp`.
* **Shorter overall:** the show is paced by the delays in the table. Halving every delay makes it twice as fast.
* **Fewer fireworks:** delete one or more `confetti.firework(…)` lines.

---

### 5. The confetti engine

All confetti comes from the `Confetti` class at the top of `celebrations.js`. It draws on a full-screen `<canvas>` and moves each piece with simple physics (velocity, drag, gravity, a little wobble). You never need to touch the physics; you only call three functions with options.

#### `burst({ … })`: a single explosion

```js
confetti.burst({
    x: 0,        // where it starts, as a fraction of the screen width  (0 = left edge, 1 = right edge)
    y: 1,        // fraction of the screen height (0 = top, 1 = bottom)
    count: 130,  // how many pieces
    angle: -62,  // direction in degrees: -90 straight up, 0 right, 180 left, 90 down
    spread: 50,  // how wide the cone is, in degrees (360 = every direction)
    power: 34,   // launch speed. 12 is a small pop, 38 is a fountain that reaches the top of the screen
    gravity: .22 // how quickly pieces fall. Lower = floatier
    // optional:
    // shapes: ["rect", "circle", "star", "streamer"],
    // colors: ["#ff0000", "#00ff00"]
});
```

Speeds automatically scale with the screen height, so a `power` that looks right on a laptop looks the same on a big monitor.

#### `firework({ x, y, count, delay })`

Shoots a white dot from the bottom of the screen up to `(x, y)` and then bursts in every direction. `delay` is milliseconds before it launches.

#### `rain({ count, duration, shapes })`

Drops `count` pieces from random spots along the top edge, spread evenly over `duration` milliseconds. Slow and gentle. Used for the star shower in the unit celebration.

#### `confetti.after(ms, fn)`

Runs `fn` after `ms` milliseconds, and is automatically cancelled if the overlay is closed early. Use it instead of `setTimeout` for anything confetti-related.

#### Recipes

* **Change the colours everywhere:** edit the `COLORS` array at the top of `celebrations.js`.
* **A quick pop anywhere on the site, with no card:** `Celebrations.burst()` (optionally pass burst options, e.g. `Celebrations.burst({ count: 60, x: .2 })`).
* **Only stars:** add `shapes: ["star"]` to a burst.
* **Turn confetti off completely:** in `open()`, change `const confetti = reducedMotion ? null : new Confetti(…)` to `const confetti = null`. Everything else still plays.
* **Confetti is too heavy on an old machine:** halve the `count` values. Each burst is a few hundred pieces at most and the loop stops as soon as the last piece leaves the screen.

---

### 6. What triggers the celebrations: progress and the unit test

You do not call the celebrations yourself. They listen for events.

```
student clicks "Mark lesson complete"  (progress.js renders that bar at the end of every lesson)
        │
        ▼
Progress.completeLesson(unit, lesson)   saves to localStorage, fires the "progress:lesson" event
        │
        ▼
celebrations.js hears "progress:lesson" → Celebrations.lesson({ unit, lesson })


student finishes the unit test  (unit-test.js)
        │
        ▼
Progress.completeUnit(unit, score, total)   saves, fires "progress:unit"
        │
        ▼
celebrations.js hears "progress:unit" → Celebrations.unit({ unit, score, total })
```

So if one day the unit test is replaced by a real exam, the only thing the new code has to do is call `Progress.completeUnit(unit, score, total)` and the grand celebration still plays.

**Progress storage.** Everything is in the browser's localStorage under the key `starr.progress.v1` (Starr's own settings, such as "tour already seen", are under `starr.v1`). It is per browser, not per account. `Progress.reset()` wipes it.

**The "Mark lesson complete" bar** is built by `renderBar()` in `progress.js` and styled by `.lesson-complete-bar` in `progress.css`. The green check that pops in when a lesson is done is `@keyframes lcb-pop`.

**Sidebar marks** (the "3/15" pill, the thin progress bar under each unit, the check marks in the lesson flyout) are `refreshUnits()` and `refreshLessons()` in `progress.js`, styled at the top of `progress.css`. The bar grows with a transition (`.unit-bar::after { transition: width .6s }`).

**The unit test** (`unit-test.js`) builds up to 10 questions from every vocabulary box in the unit. To change the number, edit `Math.min(10, pairs.length)` in `start()`. Units with fewer than two vocabulary terms (currently Unit 0 and Unit 4) show "Coming soon" instead of a test. The green/red feedback bar and the shake on a wrong answer are in `unit-test.css` (`.ut-footer.good`, `.ut-footer.bad`, `@keyframes ut-shake`).

**Where the vocabulary comes from.** `vocab.js` looks for this pattern inside lesson content:

```html
<div class="vocab-box">
    <span class="vocab-label">Vocabulary</span>
    <p><span class="vocab-term">Algorithm:</span> a step-by-step process …</p>
</div>
```

Add boxes like that to a lesson and they automatically feed Starr's quiz and the unit test. The term is blanked out of its own definition (`____`) so the answer is not given away.

---

### 7. Cookbook: "I want to…"

| I want to… | Do this |
|---|---|
| …make Starr bob faster or slower | `mascot.css` → `.starr-anim { animation: starr-float 3.2s … }` → change `3.2s` |
| …make Starr jump higher | `mascot.css` → `@keyframes starr-jump` → the `45%` line, change `-26px` |
| …stop Starr from falling asleep | `mascot.js` → `armSleep()` → change `90000` to a bigger number, or delete the `armSleep();` calls |
| …change the tour wording or add a step | `mascot.js` → `tourSteps()` |
| …add a menu item | `mascot.js` → `buildMenu()` → add an `items.push({ … })` line |
| …change Starr's colours | `mascot.js` → `starSvg()` → the two `stop-color` values |
| …move Starr to the bottom-left | `mascot.css` → `.starr { right: 22px }` → `left: 22px`, and flip `transform-origin: bottom right` on `.starr-bubble` to `bottom left` |
| …turn Starr off on the dashboard | remove the `mascot.css` / `mascot.js` lines from `dashboard.html` |
| …make the lesson card appear faster | `celebrations.css` → reduce the delays on the `.cele.is-open .cele-*` lines |
| …change the "Lesson complete" wording | `celebrations.js` → `lesson()` → the HTML string |
| …change the unit messages or score thresholds | `celebrations.js` → `unit()` → `msg` and the `ratio >= …` numbers |
| …change confetti colours | `celebrations.js` → `COLORS` |
| …more or less confetti | `celebrations.js` → the `count` numbers in the `burst` / `firework` / `rain` calls |
| …no confetti at all | `celebrations.js` → `open()` → `const confetti = null` |
| …remove the rotating rays | `celebrations.css` → `.cele-rays { display: none }` |
| …make the crown a different colour | `celebrations.js` → `starMarkup()` → `#FBBF24` and `#D97706` |
| …show a celebration without completing anything | browser console → `Celebrations.lesson({ unit: "Unit 1", lesson: "1.2 Variables and Data Types" })` |
| …give the unit test 5 questions | `unit-test.js` → `Math.min(10, pairs.length)` → `5` |
| …lock the unit test until all lessons are done | `progress.js` → `refreshLessons()` → make the `open` arrow start with `if (!Progress.allLessonsDone(entry.dataset.unit)) return;` |
| …reset a student's progress | browser console → `Progress.reset()` |
| …replay the first-visit tour | browser console → `localStorage.removeItem("starr.v1")` then refresh |
| …change the chunky button colour | `celebrations.css` → `.cele-btn { background; box-shadow: 0 5px 0 <darker colour> }` (the shadow is the "3D" bottom edge) |

---

### 8. Testing animations from the browser console

Open the course page, press F12, go to Console, and paste any of these. This is the fastest way to see a change without clicking through lessons.

```js
// mascot
Starr.pose("happy")                 // any pose name from the table in 2.1
Starr.pose("sleep")
Starr.say("Hello!", { pose: "wave" })
Starr.tour()
Starr.celebrate()                   // small particle burst around Starr
Starr.quiz()

// celebrations
Celebrations.lesson({ unit: "Unit 1", lesson: "1.2 Variables and Data Types" })
Celebrations.unit({ unit: "Unit 1", score: 10, total: 10 })   // 10/10 shows the "Perfect!" stamp
Celebrations.unit({ unit: "Unit 1", score: 6, total: 10 })
Celebrations.burst()

// progress + unit test
Progress.completeLesson("Unit 1", "1.3 Expressions and Output")   // also plays the lesson celebration
UnitTest.start("Unit 1")
Progress.reset()
localStorage.removeItem("starr.v1")   // then refresh to replay the tour
```

Press **Escape** or click the dark backdrop to close any overlay.

To see an animation in slow motion, open DevTools → the three-dot menu → More tools → **Animations**. It records every CSS animation on the page and lets you scrub through it at 25% speed.

---

### 9. Accessibility and performance rules

These are already followed in the code; keep them when you add things.

* **Reduced motion.** Every file has a `@media (prefers-reduced-motion: reduce)` block that switches animations off, and `celebrations.js` skips confetti when that setting is on. If you add a new animation, add it to that block.
* **Animate `transform` and `opacity` only.** They are cheap for the browser. Do not animate `width`, `height`, `top` or `left`; use `translate` and `scale` instead.
* **Keep the page usable.** Overlays close on Escape and on a backdrop click, buttons are real `<button>`s, the bubble announces itself with `aria-live`, and focus is moved into dialogs.
* **Confetti stops itself.** The draw loop exits when no pieces are left, and closing an overlay cancels any scheduled bursts.
* **Time-based physics.** Confetti motion is scaled by real elapsed time, so it looks the same on a 60 Hz laptop and a 144 Hz monitor.

---

## Known gaps

* `dashboard.html` loads `script.js`, which does not exist. The real file is `dashboard.js`, so the dashboard progress percentages never fill in. Fix: change the script tag.
* Units 0 and 4 have no vocabulary boxes yet, so they have no unit test and Starr's quiz says so.
* Progress lives in the browser (localStorage), not on a server, so it does not follow a student between devices.
