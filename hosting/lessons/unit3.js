lessonContentData["Unit 3"] = {

    "3.1 Abstraction and Program Design": `

        <section id="content" class="lesson-section">

            <h2>Abstraction and Program Design</h2>

            <p>
                Unit 1 introduced classes, objects, attributes, and behaviors at a
                surface level — enough to start using them. Unit 3 goes much deeper:
                you'll learn to design and write classes yourself from scratch. Before
                any Java gets written, though, this lesson steps back and builds the
                vocabulary and mindset behind how classes are designed in the first
                place, centered on a single organizing concept: <strong>abstraction</strong>.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Abstraction:</span> the process of reducing complexity by focusing on the main idea. By hiding details irrelevant to the question at hand and bringing together related and useful details, abstraction reduces complexity and allows one to focus on the idea.</p>
            </div>

            <p>
                Abstraction shows up everywhere in everyday life, not just programming.
                When you use a microwave, you press a few buttons — you don't need to
                understand the magnetron frequency, the power converter circuitry, or
                the door interlock mechanism. The manufacturer hid those details behind
                a simple interface, and that's abstraction in action: the irrelevant
                complexity is managed so you can focus on the thing that actually matters
                to you, which is heating food.
            </p>

            <p>
                In Java, abstraction is what makes it possible to use a class — like
                <code>String</code> or <code>Math</code> — without knowing how any of
                its code is written internally. You call <code>Math.sqrt(25)</code>
                knowing it returns <code>5.0</code>, without needing to understand the
                algorithm that computes it. That's the same principle, applied to code.
            </p>

            <h3>Data Abstraction</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Data abstraction:</span> provides a separation between the abstract properties of a data type and the concrete details of its representation. Data abstraction manages complexity by giving data a name without referencing the specific details of the representation. Data can take the form of a single variable or a collection of data, such as in a class or a set of data.</p>
            </div>

            <p>
                Data abstraction is what happens when you give a piece of data a name
                and work with that name, rather than directly referencing how that data
                is stored or structured underneath. The simplest case is a variable —
                writing <code>int age = 17</code> lets you use the name
                <code>age</code> throughout your program without ever caring that it's
                stored as a 32-bit binary integer somewhere in memory. The name is the
                abstraction; the storage detail is hidden.
            </p>

            <p>
                At a larger scale, a class is a form of data abstraction too. A
                <code>Student</code> class might bundle together a name, a grade, and
                a GPA — three separate pieces of data — behind the single label
                <code>Student</code>. Code that uses a <code>Student</code> object
                works with that object by name, without needing to know which variables
                are stored inside it or how they're laid out in memory.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Any time you name something to avoid dealing with its underlying
                    details, you're using data abstraction — a single variable, a class
                    object, an array. The name is the abstraction. The details are what's
                    being hidden.
                </p>
            </div>

            <h3>Attributes: Instance Variables and Class Variables</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Attribute:</span> a type of data abstraction that is defined in a class outside any method or constructor. Attributes store the data that belongs to a class or its objects.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Instance variable:</span> an attribute whose value is unique to each instance of the class. Each object created from the class gets its own separate copy of the variable.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Class variable:</span> an attribute shared by all instances of the class. There is only one copy of a class variable, no matter how many objects have been created from the class.</p>
            </div>

            <p>
                The distinction between instance variables and class variables is about
                ownership. An instance variable belongs to one specific object — if you
                have two <code>Student</code> objects, each one has its own
                <code>name</code> and its own <code>gpa</code>, completely independent
                of the other. A class variable, on the other hand, belongs to the
                class itself and is shared across every object — like a
                <code>studentCount</code> that tracks how many <code>Student</code>
                objects have been created total.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Instance Variable</th>
                        <th>Class Variable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Who owns it</td>
                        <td>Each individual object has its own copy</td>
                        <td>Shared by all objects — only one copy exists</td>
                    </tr>
                    <tr>
                        <td>Keyword</td>
                        <td>No special keyword</td>
                        <td>Declared with <code>static</code></td>
                    </tr>
                    <tr>
                        <td>Example in a <code>Student</code> class</td>
                        <td><code>String name</code>, <code>double gpa</code></td>
                        <td><code>static int studentCount</code></td>
                    </tr>
                    <tr>
                        <td>Changing the value for one object</td>
                        <td>Only affects that one object</td>
                        <td>Affects every object, since they all share the same variable</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A good rule of thumb: if the attribute describes something that
                    varies from object to object (like a student's name or grade),
                    it should be an instance variable. If it tracks something about
                    the whole class as a group (like how many objects exist), it should
                    be a class variable.
                </p>
            </div>

            <h3>Procedural Abstraction</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Procedural abstraction:</span> provides a name for a process and allows a method to be used only knowing what the method does, not how it does it. A procedural abstraction may extract shared features to generalize functionality instead of duplicating code, which allows for code reuse and helps manage complexity.</p>
            </div>

            <p>
                Every time you call a method — even one you wrote yourself — you're using
                procedural abstraction. The method has a name, a signature, and a
                documented behavior; the code that calls it only needs to know those
                things. The implementation inside the method body is hidden from the
                caller, and that's what procedural abstraction provides: the ability to
                use a process by name, without ever having to look at or understand its
                internal code.
            </p>

            <p>
                Procedural abstraction also enables <strong>code reuse</strong>. Instead
                of writing the same sequence of steps in ten different places, you write
                it once inside a method and call that method ten times. If the logic ever
                needs to change, you change it in one place — the method body — and every
                call to that method automatically reflects the update.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Method decomposition:</span> a programmer breaks down larger behaviors of a class into smaller behaviors by creating methods to represent each individual smaller behavior. Each method handles one clear responsibility, and the larger behavior is achieved by calling those methods together.</p>
            </div>

            <p>
                Method decomposition is how abstraction scales to complex programs.
                Rather than writing one enormous block of code that does everything at
                once, you break the problem into smaller, named pieces — each one its
                own method. The result is code where each method is small enough to
                read and understand on its own, and the overall program is readable
                because you can see what each method is called without needing to look
                inside it.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="color:#6B7280;">// Without method decomposition — one long block</span>
System.out.print("Enter name: ");
String name = input.nextLine();
System.out.print("Enter grade: ");
int grade = input.nextInt();
System.out.println(name + ": " + grade);
System.out.println("Pass: " + (grade &gt;= 50));

<span style="color:#6B7280;">// With method decomposition — named, reusable steps</span>
<span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">String name</span> = <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">promptName</span>();
<span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">int grade</span> = <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">promptGrade</span>();
<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">displayResult</span>(name, grade);</pre>
            </div>

            <p>
                The decomposed version is easier to read — each line tells you
                <em>what</em> is happening without burying you in <em>how</em>. If
                <code>displayResult</code> ever needs to format output differently, only
                that one method changes, and every place that calls it immediately gets
                the updated behavior.
            </p>

            <h3>Parameters: Generalizing with Input Values</h3>

            <p>
                A method that always does the exact same thing with the exact same values
                is limited in how many times it can usefully be reused. Parameters
                are what make a method truly general — they let the caller pass in
                different input values each time, so the same method body can produce
                different results depending on what it receives.
            </p>

            <p>
                Using parameters allows procedures to be generalized, enabling them to
                be reused with a range of input values or arguments. The method body
                is written once, but the values it works with can change on every call.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="color:#6B7280;">// Without parameters — only works for one specific student</span>
void printStudent() {
    System.out.println("Alice: 92");
}

<span style="color:#6B7280;">// With parameters — works for any name and grade passed in</span>
void printStudent(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">String name</span>, <span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">int grade</span>) {
    System.out.println(name + ": " + grade);
}

<span style="color:#6B7280;">// The same method handles every student — called with different arguments</span>
printStudent(<span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">"Alice", 92</span>);
printStudent(<span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">"Ben", 78</span>);
printStudent(<span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">"Clara", 85</span>);</pre>
            </div>

            <p>
                The parameters <code>name</code> and <code>grade</code> are highlighted
                in the method header — they're the variables the method works with
                internally. The arguments <code>"Alice", 92</code> and
                <code>"Ben", 78</code> are highlighted at the call sites — they're the
                actual values passed in for those parameters on each call. Same method
                body, three different outputs.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A method without parameters is like a vending machine that only ever
                    dispenses one item. Parameters are what give the machine buttons —
                    the same machine, but now it can produce different results depending
                    on the input it receives.
                </p>
            </div>

            <h3>Changing Internals Without Affecting Users</h3>

            <p>
                One of the most powerful benefits of procedural abstraction is that the
                internals of a method can be changed without affecting any code that
                calls it — as long as the method signature and what the method does
                remain the same. Code that calls <code>printStudent(name, grade)</code>
                doesn't need to change whether the method uses <code>println</code> or
                some other output mechanism internally, because from the caller's
                perspective, the method still takes the same inputs and produces the
                same observable result.
            </p>

            <div class="tip-box">
                <h3>📘 Why This Matters</h3>
                <p>
                    In a large program with many methods, this property is what makes
                    improvement and maintenance manageable. You can rewrite a method to
                    run faster, use less memory, or handle edge cases better — without
                    touching any of the code that uses it, as long as its signature and
                    its documented behavior stay the same.
                </p>
            </div>

            <h3>Designing a Class Before Writing It</h3>

            <p>
                Prior to implementing a class, it is helpful to take time to design each
                class including its attributes and behaviors. This design can be
                represented using natural language or diagrams — a bullet list of
                attributes and methods, a written description of what the class
                represents, or a class diagram that boxes everything together.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th colspan="2" style="text-align:center; background:#1E3A8A; color:white;">Student</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:700; color:#1F2937; width:40%;">Attributes</td>
                        <td>
                            <code>String name</code> — the student's name (instance variable)<br>
                            <code>int grade</code> — the student's current grade (instance variable)<br>
                            <code>static int studentCount</code> — total students created (class variable)
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight:700; color:#1F2937;">Behaviors</td>
                        <td>
                            <code>getName()</code> — returns the student's name<br>
                            <code>getGrade()</code> — returns the student's grade<br>
                            <code>isPassing()</code> — returns whether the grade is at or above 50<br>
                            <code>printReport()</code> — prints the student's name and grade
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                Laying out a class this way — before writing any code — forces you to
                think about what the class needs to store and what it needs to be able
                to do, separately and clearly. In later lessons, this design is what
                gets translated directly into Java instance variables, class variables,
                and methods.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    It's tempting to start writing code immediately, but classes designed
                    without a plan often end up with attributes that don't belong, missing
                    behaviors, or duplicate logic scattered across multiple methods.
                    Taking a few minutes to sketch the design in plain language first
                    saves time in the long run.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about abstraction
                and program design.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What's the difference between abstraction and procedural abstraction?</summary>
                    <p>
                        Abstraction is the general concept of reducing complexity by
                        hiding irrelevant details. Procedural abstraction is one specific
                        application of that idea to methods — giving a process a name so
                        it can be used without knowing how it works internally. Data
                        abstraction is the equivalent idea applied to data.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What's the difference between an instance variable and a class variable?</summary>
                    <p>
                        An instance variable gives each object its own independent copy
                        of a value. A class variable has only one shared copy across all
                        objects of that class. Changing a class variable through one
                        object changes what every other object sees too, since they all
                        reference the same one.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What's the difference between a parameter and an argument?</summary>
                    <p>
                        A parameter is the variable declared in the method header —
                        it's the placeholder the method works with internally. An argument
                        is the actual value passed in at the call site, which gets
                        assigned to that parameter for the duration of the method call.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can I change the code inside a method without breaking any code that calls it?</summary>
                    <p>
                        Yes, as long as the method's signature and observable behavior
                        stay the same. Code that calls the method only knows the
                        signature and what the method does — it has no visibility into
                        the implementation, which is exactly what procedural abstraction
                        provides.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does designing a class on paper actually matter before coding?</summary>
                    <p>
                        Yes — planning attributes and behaviors before writing code
                        leads to cleaner, better-organized classes. It's much easier to
                        add or remove an attribute on a design diagram than to track down
                        every place in working code that references a variable you
                        realized you didn't need.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"Abstraction means oversimplifying or leaving things out"</h3>

            <p>
                Abstraction doesn't remove detail — it hides detail that's irrelevant
                to the level you're working at, while keeping the useful parts visible.
                Everything hidden by an abstraction still exists underneath; it's just
                not something you need to think about at this level.
            </p>

            <h3>"Instance variables and class variables work the same way"</h3>

            <p>
                They don't — changing an instance variable on one object has no effect
                on any other object. Changing a class variable through any object
                changes the single shared copy, which every object sees immediately.
                Treating a class variable like an instance variable can produce
                subtle, hard-to-trace bugs.
            </p>

            <h3>"Parameters and arguments are the same word for the same thing"</h3>

            <p>
                They're related but distinct. The parameter is the variable in the
                method's header — it's a placeholder. The argument is the specific
                value supplied at a particular call site, which fills in that
                placeholder for that one call.
            </p>

            <h3>"I don't need to design a class if I understand the problem"</h3>

            <p>
                Even with a clear understanding of the problem, skipping the design step
                tends to produce classes that mix responsibilities, duplicate logic, or
                store more attributes than necessary. The design doesn't have to be
                elaborate — even a short written list of attributes and behaviors is
                enough to catch those issues before they become code.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                The concepts in this lesson — abstraction, attributes, behaviors,
                parameters — are the foundation for every class you'll write in Unit 3.
                Ask Starr to walk through designing a class for a real-world object with
                you, or to explain the difference between instance and class variables
                using a concrete example.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Help me design a BankAccount class — list out
                    the attributes and behaviors it would need before we write any Java."
                </p>
            </div>

        </section>

    `
    ,

    "3.2 Impact of Program Design": `

    <section id="content" class="lesson-section">

        <h2>Impact of Program Design</h2>

        <p>
            Writing a program is never just a technical exercise — every design decision
            a programmer makes ripples outward into how reliably the program runs, who it
            affects, and whose work it depends on. This lesson looks at three of those
            ripples: <strong>system reliability</strong>, the broader
            <strong>social, economic, and cultural impact</strong> of a program, and the
            <strong>legal and intellectual property issues</strong> that come with reusing
            other people's code.
        </p>

        <h3>System Reliability</h3>

        <div class="vocab-box">
            <span class="vocab-label">Vocabulary</span>
            <p><span class="vocab-term">System reliability:</span> the program being able to perform its tasks as expected under stated conditions without failure.</p>
        </div>

        <p>
            A reliable program doesn't just work once, under ideal circumstances — it
            keeps working correctly across the full range of conditions it's actually
            likely to encounter. Programmers should make an effort to maximize system
            reliability by testing the program with a variety of conditions, rather than
            only the handful of cases that happened to come to mind first.
        </p>

        <p>
            In practice, this means deliberately testing beyond the "happy path": typical
            expected inputs, unusual or extreme inputs, empty or missing data, and edge
            cases at the very boundaries of what the program is designed to handle. A
            program that only ever gets tested with clean, well-behaved input can seem
            perfectly reliable right up until it meets real-world data.
        </p>

        <div class="tip-box">
            <h3>⭐ Starr Tip</h3>
            <p>
                When testing your own code, deliberately try to break it. Feed it the
                largest and smallest values you can think of, empty input, and anything
                else a real user might type that you didn't originally plan for.
            </p>
        </div>

        <h3>Social, Economic, and Cultural Impact</h3>

        <p>
            The creation of programs has impacts on society, the economy, and culture.
            These impacts can be both <strong>beneficial and harmful</strong>, often at
            the same time, depending on who is using the program and how. A program that
            makes one group of people's lives easier can simultaneously create new
            problems for another group — sometimes problems the original programmers
            never anticipated.
        </p>

        <p>
            Programs meant to fill a need or solve a problem can have unintended harmful
            effects beyond their intended use. A scheduling tool built to save time, for
            example, might unintentionally make it harder for people without reliable
            internet access to participate at all. Considering these downstream effects
            during design — not just after a program is released — is part of
            responsible programming.
        </p>

        <div class="tip-box">
            <h3>⚠️ Watch Out</h3>
            <p>
                "The program works as intended" and "the program has no harmful effects"
                are not the same claim. A program can function exactly as designed and
                still create real, unintended harm for some group of people.
            </p>
        </div>

        <h3>Legal Issues and Intellectual Property</h3>

        <p>
            Legal issues and intellectual property concerns arise when creating programs.
            Programmers often reuse code written by others, and a huge amount of that
            code is published as <strong>open source</strong> and free to use — but not
            all of it is, and treating every piece of code found online as free to reuse
            is a legal risk, not just a technical shortcut.
        </p>

        <p>
            Incorporation of code that is <em>not</em> published as open source requires
            the programmer to obtain permission and often purchase the code before
            integrating it into their program. Skipping that step doesn't just risk legal
            consequences for the programmer — it can also expose an entire project or
            company to liability.
        </p>

        <table class="content-table">
            <thead>
                <tr>
                    <th>Code source</th>
                    <th>What's required before reuse</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Published as open source</td>
                    <td>Generally free to use, though often still subject to a license's specific terms</td>
                </tr>
                <tr>
                    <td>Not published as open source</td>
                    <td>Obtaining permission from the owner, and often purchasing a license, before integrating it</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box">
            <h3>📘 Starr Idea</h3>
            <p>
                "Publicly visible" and "free to reuse" are not the same thing. Code that
                anyone can see — on a website, in an app, or in a public repository — is
                not automatically open source or free to copy into another program.
            </p>
        </div>

    </section>

    <section id="questions" class="lesson-section">

        <h2>Frequently Starred Questions</h2>

        <p>
            Here are some of the questions Starr hears most often about program design's
            wider impact.
        </p>

        <div class="faq-list">

            <details class="faq-item">
                <summary>Does more testing automatically make a program reliable?</summary>
                <p>
                    Not by itself — reliability comes from testing a genuinely varied
                    range of conditions, including edge cases and unexpected input, not
                    just from running a large number of tests that all resemble each
                    other.
                </p>
            </details>

            <details class="faq-item">
                <summary>Can a program be harmful even if it works perfectly?</summary>
                <p>
                    Yes. A program can perform exactly as designed and still have
                    unintended harmful effects on some group of people, especially if
                    those effects weren't considered during the design process.
                </p>
            </details>

            <details class="faq-item">
                <summary>Is all code found online safe to reuse?</summary>
                <p>
                    No. Only code that's actually published as open source is generally
                    free to use. Code that isn't published as open source requires
                    obtaining permission from its owner, and often purchasing it, before
                    it can be legally incorporated into another program.
                </p>
            </details>

        </div>

    </section>

    <section id="misconceptions" class="lesson-section">

        <h2>Common Starrfalls</h2>

        <h3>"If code is publicly visible online, it's free to use"</h3>

        <p>
            Being able to see or copy code doesn't make it legal to reuse. Only code that
            is actually published as open source is generally free to use — everything
            else still belongs to whoever wrote it.
        </p>

        <h3>"Testing normal, expected input is enough to prove reliability"</h3>

        <p>
            Real reliability comes from testing a program under a variety of conditions,
            including unusual and extreme input — not just the cases a programmer expects
            a user to try.
        </p>

        <h3>"A program's impact is either entirely good or entirely bad"</h3>

        <p>
            The impact of a program on society, the economy, and culture is often mixed —
            the same feature that benefits one group of people can create unintended
            harm for another.
        </p>

    </section>

    <section id="ask-online" class="lesson-section">

        <h2>Starr Online</h2>

        <p>
            Thinking through reliability, unintended impact, and licensing takes practice.
            Ask Starr to help brainstorm edge cases for a program you're designing, or to
            explain the difference between common open-source license types.
        </p>

        <div class="tip-box">
            <h3>🤖 Ask Starr</h3>
            <p>
                Try asking Starr: "What edge cases should I test for a program that takes
                a user's age as input?"
            </p>
        </div>

    </section>
    `
    ,

    "3.3 Anatomy of a Class": `

    <section id="content" class="lesson-section">

        <h2>Anatomy of a Class</h2>

        <p>
            Every object used so far in this course — <code>String</code>,
            <code>Scanner</code>, <code>ArrayList</code> — was built from a
            <strong>class</strong>, a blueprint that defines what data an object holds and
            what it can do. This lesson looks inside that blueprint: how a class is
            declared, what its pieces are called, and how the keywords <code>public</code>
            and <code>private</code> control who is allowed to reach in and use them.
        </p>

        <h3>Data Encapsulation</h3>

        <div class="vocab-box">
            <span class="vocab-label">Vocabulary</span>
            <p><span class="vocab-term">Data encapsulation:</span> a technique in which the implementation details of a class are kept hidden from external classes.</p>
        </div>

        <p>
            Encapsulation is the idea that a class should protect its own data, exposing
            only what other classes actually need and hiding the rest. A well-encapsulated
            class can change how it stores or calculates something internally without
            breaking any other code that uses it — as long as the public-facing parts stay
            the same.
        </p>

        <p>
            The keywords <code>public</code> and <code>private</code> affect the access of
            classes, data, constructors, and methods. The keyword <code>private</code>
            restricts access to the declaring class, while the keyword <code>public</code>
            allows access from classes outside the declaring class.
        </p>

        <table class="content-table">
            <thead>
                <tr>
                    <th>Keyword</th>
                    <th>Who can access it</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>public</code></td>
                    <td>The declaring class, and any other class outside of it</td>
                </tr>
                <tr>
                    <td><code>private</code></td>
                    <td>Only the declaring class itself</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box">
            <h3>⭐ Starr Tip</h3>
            <p>
                Think of <code>private</code> as a locked door with the key kept inside
                the class, and <code>public</code> as an open doorway anyone can walk
                through. Encapsulation is largely a matter of deciding which doors in a
                class should be locked.
            </p>
        </div>

        <h3>The Class Declaration</h3>

        <p>
            In this course, classes are always designated <code>public</code> and are
            declared with the keyword <code>class</code>. Similarly, in this course,
            constructors are always designated <code>public</code>, since a class that
            can't be instantiated from outside itself would be of little use to anything
            beyond its own file.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> Student {

    <span style="color:#6B7280;">// instance variables</span>
    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> String name;
    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> int grade;

    <span style="color:#6B7280;">// constructor</span>
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }

    <span style="color:#6B7280;">// methods</span>
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> String getName() {
        <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> name;
    }

    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> boolean isPassing() {
        <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> grade &gt;= 60;
    }
}</pre>
        </div>

        <p>
            This one class declaration already contains every piece this lesson covers:
            a <code>public class</code> header, <code>private</code> instance variables,
            a <code>public</code> constructor, and a mix of <code>public</code> and
            <code>private</code> methods.
        </p>

        <h3>Instance Variables</h3>

        <div class="vocab-box">
            <span class="vocab-label">Vocabulary</span>
            <p><span class="vocab-term">Instance variable:</span> a variable that belongs to the object, where each object has its own copy of the variable.</p>
        </div>

        <p>
            Every <code>Student</code> object created from the class above gets its own
            independent <code>name</code> and <code>grade</code> — changing one
            <code>Student</code>'s <code>grade</code> has no effect whatsoever on any
            other <code>Student</code> object, because each object stores its own separate
            copy of every instance variable.
        </p>

        <p>
            Access to attributes should be kept internal to the class in order to
            accomplish encapsulation. Therefore, it is good programming practice to
            designate the instance variables for these attributes as <code>private</code>
            unless the class specification states otherwise. This is exactly why
            <code>name</code> and <code>grade</code> above are marked
            <code>private</code> — nothing outside the <code>Student</code> class should
            be able to reach in and change them directly.
        </p>

        <div class="tip-box">
            <h3>⚠️ Watch Out</h3>
            <p>
                Marking every instance variable <code>public</code> defeats the purpose of
                encapsulation entirely, since any external class could then change an
                object's data directly, without going through any of the class's own
                methods.
            </p>
        </div>

        <h3>Access to Behaviors</h3>

        <p>
            Access to behaviors can be internal or external to the class. Methods
            designated as <code>public</code> can be accessed internally or externally to
            a class, whereas methods designated as <code>private</code> can only be
            accessed internally to the class.
        </p>

        <p>
            In the <code>Student</code> example, <code>getName</code> is
            <code>public</code> because other classes need a safe way to read a student's
            name. <code>isPassing</code>, on the other hand, is marked
            <code>private</code> — it's a helper method that only the
            <code>Student</code> class itself needs to use internally, so there's no
            reason to expose it beyond the class.
        </p>

        <table class="content-table">
            <thead>
                <tr>
                    <th>Class member</th>
                    <th>Typical access</th>
                    <th>Why</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The class itself</td>
                    <td><code>public</code></td>
                    <td>So other classes can create and use objects of this type</td>
                </tr>
                <tr>
                    <td>Constructors</td>
                    <td><code>public</code></td>
                    <td>So other classes can instantiate the class</td>
                </tr>
                <tr>
                    <td>Instance variables</td>
                    <td><code>private</code> (unless stated otherwise)</td>
                    <td>To keep data protected and accomplish encapsulation</td>
                </tr>
                <tr>
                    <td>Methods</td>
                    <td><code>public</code> or <code>private</code></td>
                    <td>Depends on whether outside classes need to call the method directly</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box">
            <h3>📘 Starr Idea</h3>
            <p>
                A well-designed class exposes a small, deliberate set of
                <code>public</code> methods as its interface to the outside world, while
                keeping its instance variables — and any internal helper methods —
                <code>private</code>.
            </p>
        </div>

    </section>

    <section id="questions" class="lesson-section">

        <h2>Frequently Starred Questions</h2>

        <p>
            Here are some of the questions Starr hears most often about class anatomy and
            access control.
        </p>

        <div class="faq-list">

            <details class="faq-item">
                <summary>Why are constructors always public in this course?</summary>
                <p>
                    A constructor's entire purpose is to let other classes create new
                    objects of this type. Making it <code>private</code> would prevent any
                    outside class from ever instantiating the class at all.
                </p>
            </details>

            <details class="faq-item">
                <summary>Can two objects of the same class share an instance variable?</summary>
                <p>
                    No. Instance variables belong to the object, and every object has its
                    own separate copy — changing one object's instance variable never
                    affects any other object's copy of that same variable.
                </p>
            </details>

            <details class="faq-item">
                <summary>Is it ever okay to make an instance variable public?</summary>
                <p>
                    It's discouraged. Good practice is to designate instance variables as
                    <code>private</code> unless a class specification explicitly states
                    otherwise, since exposing them directly breaks encapsulation.
                </p>
            </details>

            <details class="faq-item">
                <summary>How do I decide if a method should be public or private?</summary>
                <p>
                    Ask whether classes outside this one genuinely need to call the method
                    directly. If it's an internal helper that only supports the class's own
                    other methods, it should be <code>private</code>; if it's part of what
                    the class offers to the outside world, it should be <code>public</code>.
                </p>
            </details>

        </div>

    </section>

    <section id="misconceptions" class="lesson-section">

        <h2>Common Starrfalls</h2>

        <h3>"private means no one can ever access that data"</h3>

        <p>
            <code>private</code> only restricts access to <em>outside</em> the declaring
            class — the class itself can always access its own <code>private</code>
            members freely. Encapsulation is about controlling access from other classes,
            not preventing access entirely.
        </p>

        <h3>"All methods in a class should be public"</h3>

        <p>
            Methods designated as <code>private</code> can only be accessed internally to
            the class, which is exactly what's wanted for internal helper methods that
            outside classes have no legitimate reason to call directly.
        </p>

        <h3>"Instance variables are shared across every object of a class"</h3>

        <p>
            The opposite is true — each object has its own copy of every instance
            variable. Changing an instance variable on one object never changes that same
            variable on any other object of the class.
        </p>

    </section>

    <section id="ask-online" class="lesson-section">

        <h2>Starr Online</h2>

        <p>
            Deciding what should be <code>public</code> versus <code>private</code> gets
            easier with practice. Ask Starr to review a class you've written and suggest
            which members should be marked <code>private</code> to better encapsulate its
            data.
        </p>

        <div class="tip-box">
            <h3>🤖 Ask Starr</h3>
            <p>
                Try asking Starr: "Look at this class and tell me which instance
                variables or methods should probably be private."
            </p>
        </div>

    </section>
    `
    ,

    "3.4 Constructors": `

    <section id="content" class="lesson-section">

        <h2>Constructors</h2>

        <p>
            Lesson 3.3 established that a class's instance variables should be kept
            <code>private</code>, and that a class needs a <code>public</code> constructor
            so other classes can actually create objects from it. This lesson looks at
            constructors in much more depth — what a constructor is really responsible
            for, how it relates to an object's <em>state</em>, and what Java does
            automatically when a class doesn't define one at all.
        </p>

        <h3>Object State and the Has-A Relationship</h3>

        <div class="vocab-box">
            <span class="vocab-label">Vocabulary</span>
            <p><span class="vocab-term">State:</span> an object's attributes and their values at a given time, defined by the instance variables belonging to the object.</p>
        </div>

        <p>
            Every object has a state — a snapshot of exactly what its instance variables
            hold at a particular moment. A <code>Student</code> object's state might be
            its <code>name</code> currently set to <code>"Amara"</code> and its
            <code>grade</code> currently set to <code>92</code>. As a program runs and
            methods are called, an object's state can change, but its identity as that
            same object doesn't.
        </p>

        <p>
            The relationship between an object and its instance variables is called a
            <strong>has-a relationship</strong>. A <code>Car</code> object <em>has a</em>
            <code>Engine</code> object; a <code>Student</code> object <em>has a</em>
            <code>name</code>. This is a different kind of relationship than the
            <strong>is-a relationship</strong> you may have encountered when comparing
            general and more specific classes — a has-a relationship describes
            <em>composition</em>, while an is-a relationship describes
            <em>classification</em>.
        </p>

        <table class="content-table">
            <thead>
                <tr>
                    <th>Relationship</th>
                    <th>Describes</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Has-a</td>
                    <td>An object contains another object as one of its instance variables</td>
                    <td>A <code>Car</code> has a <code>Engine</code>; a <code>Student</code> has a <code>name</code></td>
                </tr>
                <tr>
                    <td>Is-a</td>
                    <td>An object is a more specific kind of another type</td>
                    <td>A <code>Car</code> is a <code>Vehicle</code>; a <code>Student</code> is a <code>Person</code></td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box">
            <h3>⭐ Starr Tip</h3>
            <p>
                A quick way to tell the two apart: if the relationship reads naturally as
                "X has a Y," it's composition. If it reads naturally as "X is a Y," it's
                classification. A <code>Car</code> has an <code>Engine</code>, but a
                <code>Car</code> is not an <code>Engine</code>.
            </p>
        </div>

        <h3>What a Constructor Actually Does</h3>

        <p>
            A constructor is used to set the initial state of an object, which should
            include initial values for all instance variables. When a constructor is
            called, memory is allocated for the object and the associated object
            reference is returned. Constructor parameters, if specified, provide data to
            initialize instance variables.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> Student {

    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> String name;
    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> int grade;

    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
}</pre>
        </div>

        <p>
            When code elsewhere calls <code>new Student("Amara", 92)</code>, three things
            happen in order: Java allocates memory for a brand-new <code>Student</code>
            object, the constructor body runs using the arguments
            <code>"Amara"</code> and <code>92</code> to set <code>name</code> and
            <code>grade</code>, and finally a reference to that newly created object is
            returned — which is what gets stored in whatever variable receives the result
            of <code>new</code>.
        </p>

        <div class="tip-box">
            <h3>📘 Starr Idea</h3>
            <p>
                A constructor never explicitly uses the <code>return</code> keyword, yet
                it still "returns" something — a reference to the object it just built.
                This happens automatically as part of what <code>new</code> does.
            </p>
        </div>

        <h3>Constructors and Mutable Parameters</h3>

        <p>
            When a mutable object is a constructor parameter, the instance variable
            should be initialized with a <strong>copy</strong> of the referenced object.
            In this way, the instance variable does not hold a reference to the original
            object, and methods are prevented from modifying the state of the original
            object.
        </p>

        <p>
            This matters because object variables in Java store references, not the
            objects themselves. If a constructor simply assigned a mutable parameter
            directly to an instance variable, both the original object outside the class
            and the new object's instance variable would point to the exact same
            underlying object — meaning a method that changes the instance variable's
            data would also silently change the original object that was passed in.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> Roster(ArrayList&lt;String&gt; names) {
    <span style="color:#6B7280;">// copy the list, rather than storing the same reference</span>
    this.names = <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">new</span> ArrayList&lt;String&gt;(names);
}</pre>
        </div>

        <p>
            With this defensive copy in place, changes made later to the original
            <code>names</code> list outside the class have no effect on the
            <code>Roster</code> object's own copy, and vice versa — each object's state
            stays fully independent, exactly as encapsulation intends.
        </p>

        <div class="tip-box">
            <h3>⚠️ Watch Out</h3>
            <p>
                This copying rule only applies to <strong>mutable</strong> objects, like
                <code>ArrayList</code>. Immutable types, such as <code>String</code> and
                the wrapper classes, don't need this treatment — their values can never be
                changed after creation, so there's no risk of an outside change leaking
                into the object's state.
            </p>
        </div>

        <h3>The Default Constructor</h3>

        <p>
            When no constructor is written, Java provides a no-parameter constructor, and
            the instance variables are set to default values according to the data type
            of the attribute. This constructor is called the <strong>default
            constructor</strong>.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> Score {

    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> int points;
    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> boolean passed;

    <span style="color:#6B7280;">// no constructor written here at all</span>
}</pre>
        </div>

        <p>
            Because <code>Score</code> declares no constructor of its own, calling
            <code>new Score()</code> is still perfectly valid — Java supplies the
            no-parameter default constructor automatically, and <code>points</code> ends
            up at <code>0</code> while <code>passed</code> ends up at <code>false</code>,
            following the default values for their respective types.
        </p>

        <div class="tip-box">
            <h3>⚠️ Watch Out</h3>
            <p>
                The moment a class defines <em>any</em> constructor of its own, Java stops
                providing the automatic default constructor. If a no-parameter constructor
                is still needed alongside a parameterized one, it has to be written
                explicitly.
            </p>
        </div>

        <h3>Default Values by Data Type</h3>

        <p>
            The specific default value an instance variable receives from the default
            constructor depends entirely on its declared type.
        </p>

        <table class="content-table">
            <thead>
                <tr>
                    <th>Data type</th>
                    <th>Default value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>int</code></td>
                    <td><code>0</code></td>
                </tr>
                <tr>
                    <td><code>double</code></td>
                    <td><code>0.0</code></td>
                </tr>
                <tr>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                </tr>
                <tr>
                    <td>Any reference type (e.g. <code>String</code>, <code>ArrayList</code>)</td>
                    <td><code>null</code></td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box">
            <h3>⭐ Starr Tip</h3>
            <p>
                Every primitive type defaults to its own "zero-like" value — <code>0</code>
                for numbers, <code>false</code> for booleans — while every reference type
                defaults to <code>null</code>, meaning it doesn't point to any object at
                all yet.
            </p>
        </div>

    </section>

    <section id="questions" class="lesson-section">

        <h2>Frequently Starred Questions</h2>

        <p>
            Here are some of the questions Starr hears most often about constructors and
            object state.
        </p>

        <div class="faq-list">

            <details class="faq-item">
                <summary>Does a constructor need a return type?</summary>
                <p>
                    No. Constructors never declare a return type, not even
                    <code>void</code> — Java automatically handles returning the reference
                    to the newly created object once the constructor body finishes.
                </p>
            </details>

            <details class="faq-item">
                <summary>What happens if I write a parameterized constructor but still call new ClassName()?</summary>
                <p>
                    It won't compile. Once a class defines its own constructor, Java no
                    longer supplies the automatic no-parameter default constructor, so a
                    matching no-parameter constructor must be written explicitly if one is
                    still needed.
                </p>
            </details>

            <details class="faq-item">
                <summary>Why copy a mutable parameter instead of just storing it directly?</summary>
                <p>
                    Storing the reference directly means the object's instance variable
                    and the original object outside the class point to the exact same
                    data — changing one would silently change the other. Copying the
                    object keeps the two independent.
                </p>
            </details>

            <details class="faq-item">
                <summary>Is has-a the same thing as is-a?</summary>
                <p>
                    No. Has-a describes composition — an object containing another object
                    as one of its instance variables. Is-a describes classification — one
                    type being a more specific version of another type.
                </p>
            </details>

        </div>

    </section>

    <section id="misconceptions" class="lesson-section">

        <h2>Common Starrfalls</h2>

        <h3>"Every class automatically gets a default constructor, no matter what"</h3>

        <p>
            A default constructor is only supplied when a class writes <em>no</em>
            constructor at all. As soon as any constructor is written, Java stops
            generating that automatic no-parameter version.
        </p>

        <h3>"Assigning a mutable parameter to an instance variable is always fine"</h3>

        <p>
            For mutable objects, this creates two variables pointing to the same
            underlying data, which breaks encapsulation. The instance variable should be
            initialized with a copy of the referenced object instead, so the two stay
            independent.
        </p>

        <h3>"Uninitialized reference-type variables default to 0"</h3>

        <p>
            Only primitive numeric types default to <code>0</code>. Reference types like
            <code>String</code> or <code>ArrayList</code> default to <code>null</code>,
            representing the absence of any object at all rather than a numeric value.
        </p>

    </section>

    <section id="ask-online" class="lesson-section">

        <h2>Starr Online</h2>

        <p>
            Constructors have a lot of small, easy-to-miss rules. Ask Starr to check
            whether a constructor you've written correctly initializes every instance
            variable, or to explain what a class's default constructor would set each
            field to.
        </p>

        <div class="tip-box">
            <h3>🤖 Ask Starr</h3>
            <p>
                Try asking Starr: "What would the default values be for this class's
                instance variables if I removed its constructor?"
            </p>
        </div>

    </section>
    `
    ,

    "3.5 Methods: How to Write Them": `
 
        <section id="content" class="lesson-section">
 
            <h2>Methods: How to Write Them</h2>
 
            <p>
                Lesson 1.9 introduced the anatomy of a method header — return type,
                method name, parameter list — and lessons 1.10 through 1.14 focused
                on calling methods that already existed. This lesson goes further:
                it covers how to actually write a method from scratch inside a class,
                what it means to return a value, how the <code>return</code> keyword
                changes flow of control, and how two specific kinds of methods —
                accessors and mutators — each serve a distinct role in class design.
            </p>
 
            <h3>void Methods</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">void method:</span> a method that does not return a value. Its header contains the keyword <code>void</code> before the method name in place of a return type.</p>
            </div>
 
            <p>
                A void method performs an action — printing output, updating a variable,
                triggering some behavior — but doesn't hand anything back to the code
                that called it. When the method finishes, control returns to the caller,
                but no value comes with it. That's why void methods are never called
                as part of an expression: there's no value to use in one.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">void</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">printWelcome</span>() {
    System.out.println("Welcome to the course!");
}
 
<span style="color:#6B7280;">// Called on its own — no value is produced</span>
printWelcome();</pre>
            </div>
 
            <h3>Non-void Methods</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Non-void method:</span> a method that returns a single value. Its header includes the return type in place of the keyword <code>void</code>. In non-void methods, a return expression compatible with the return type is evaluated, and the value is returned. This is referred to as <em>return by value</em>.</p>
            </div>
 
            <p>
                A non-void method promises to hand a value back to whatever called it —
                and that promise is encoded directly in the header. The return type
                written before the method name tells both the compiler and the reader
                exactly what type of value will come back. The method body must always
                produce and return a value of that type.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">double</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">calculateTax</span>(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">double price</span>) {
    return price * 0.13;  <span style="color:#6B7280;">// evaluates to a double — compatible with return type</span>
}
 
<span style="color:#6B7280;">// Called as part of an expression — the returned value is used directly</span>
double total = <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">calculateTax</span>(49.99) + 49.99;</pre>
            </div>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>void Method</th>
                        <th>Non-void Method</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Return type in header</td>
                        <td><code>void</code></td>
                        <td>An actual type: <code>int</code>, <code>double</code>, <code>boolean</code>, <code>String</code>, etc.</td>
                    </tr>
                    <tr>
                        <td>Produces a value?</td>
                        <td>No</td>
                        <td>Yes — exactly one value of the declared return type</td>
                    </tr>
                    <tr>
                        <td>Can be used in an expression?</td>
                        <td>No</td>
                        <td>Yes — the returned value can be stored, printed, or used directly</td>
                    </tr>
                </tbody>
            </table>
 
            <h3>The return Keyword and Flow of Control</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">return keyword:</span> used to return the flow of control to the point where the method or constructor was called. Any code that is sequentially after a <code>return</code> statement will never be executed. Executing a <code>return</code> statement inside a selection or iteration statement will halt that statement and exit the method or constructor immediately.</p>
            </div>
 
            <p>
                The <code>return</code> keyword does two things at once: it sends a value
                back to the caller (in a non-void method), and it immediately ends the
                method's execution. Flow of control jumps back to wherever the method
                was called from, and no further code in the method body runs — not even
                code on the very next line.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">int max(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">int a</span>, <span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">int b</span>) {
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> (a &gt; b) {
        <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> a;  <span style="color:#6B7280;">// exits immediately if a > b — the line below never runs</span>
    }
    <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> b;  <span style="color:#6B7280;">// only reached when a > b is false</span>
}</pre>
            </div>
 
            <p>
                When <code>a > b</code> is <code>true</code>, the first
                <code>return a</code> executes — the method exits immediately, and the
                second <code>return b</code> is never reached. When
                <code>a > b</code> is <code>false</code>, the
                <code>if</code> body is skipped and <code>return b</code> is what runs.
                Either way, exactly one <code>return</code> executes, and the method
                ends at that point.
            </p>
 
            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Any statement written after a <code>return</code> in the same block
                    is <strong>unreachable code</strong> — the compiler will flag it as
                    an error. And a <code>return</code> inside a loop or
                    <code>if</code> statement halts the entire method immediately, not
                    just the current iteration or branch.
                </p>
            </div>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="color:#6B7280;">// return inside a loop exits the entire method, not just the loop</span>
boolean containsNegative(int[] nums) {
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">for</span> (int n : nums) {
        <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-px:700;">if</span> (n &lt; 0) {
            <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> true;  <span style="color:#6B7280;">// exits the method the instant a negative is found</span>
        }
    }
    <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> false;  <span style="color:#6B7280;">// only reached if no negative was found</span>
}</pre>
            </div>
 
            <h3>Accessor Methods</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Accessor method:</span> allows objects of other classes to obtain a copy of the value of instance variables or class variables. An accessor method is a non-void method — it returns the value being accessed. Accessor methods are also commonly called <em>getters</em>.</p>
            </div>
 
            <p>
                Instance variables in a well-designed class are usually kept private —
                other classes can't read them directly. An accessor method is the
                controlled way to let outside code read that value: the method returns
                a copy of the variable, while the original stays protected inside the
                class. Because it returns a value, an accessor is always a non-void
                method.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">public class Student {
    private String name;  <span style="color:#6B7280;">// private — not directly accessible outside the class</span>
    private int grade;
 
    <span style="color:#6B7280;">// Accessor for name</span>
    public <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">String</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">getName</span>() {
        return name;
    }
 
    <span style="color:#6B7280;">// Accessor for grade</span>
    public <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">int</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">getGrade</span>() {
        return grade;
    }
}</pre>
            </div>
 
            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Accessor methods almost always follow the naming convention
                    <code>get</code> + the variable name in title case:
                    <code>getName()</code>, <code>getGrade()</code>,
                    <code>getBalance()</code>. The return type should always match the
                    type of the variable being accessed.
                </p>
            </div>
 
            <h3>Mutator Methods</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Mutator method:</span> a method that changes the values of instance variables or class variables. A mutator method is often a void method, since its purpose is to update state rather than compute and return a value. Mutator methods are also commonly called <em>setters</em>.</p>
            </div>
 
            <p>
                If an accessor reads a private variable, a mutator is what updates it.
                Rather than allowing outside code to set a variable directly — which
                would bypass any validation logic the class needs to enforce — a mutator
                method takes the new value as a parameter and applies it in a controlled
                way. Because the goal is to update state, not produce a value for the
                caller, mutators are typically void.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">public class Student {
    private String name;
    private int grade;
 
    <span style="color:#6B7280;">// Mutator for grade — validates before updating</span>
    public <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">void</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">setGrade</span>(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">int newGrade</span>) {
        if (newGrade &gt;= 0 &amp;&amp; newGrade &lt;= 100) {
            grade = newGrade;  <span style="color:#6B7280;">// only updates if the value is valid</span>
        }
    }
 
    <span style="color:#6B7280;">// Mutator for name</span>
    public <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">void</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">setName</span>(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">String newName</span>) {
        name = newName;
    }
}</pre>
            </div>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Accessor (Getter)</th>
                        <th>Mutator (Setter)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Purpose</td>
                        <td>Reads and returns a copy of a variable's value</td>
                        <td>Updates the value of a variable</td>
                    </tr>
                    <tr>
                        <td>Void or non-void?</td>
                        <td>Always non-void — it must return the value</td>
                        <td>Usually void — updating state, not producing a value</td>
                    </tr>
                    <tr>
                        <td>Naming convention</td>
                        <td><code>get</code> + variable name: <code>getName()</code></td>
                        <td><code>set</code> + variable name: <code>setName()</code></td>
                    </tr>
                    <tr>
                        <td>Takes a parameter?</td>
                        <td>Typically no — nothing needed to read a value</td>
                        <td>Yes — the new value to assign</td>
                    </tr>
                </tbody>
            </table>
 
            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Accessors and mutators together form a class's public interface for
                    its private data. Keeping the variables private while exposing
                    controlled access through these methods is one of the core
                    principles of encapsulation — the idea that a class manages its own
                    data, rather than letting outside code manipulate it directly.
                </p>
            </div>
 
            <h3>Parameters: Receiving and Using Values</h3>
 
            <p>
                Methods with parameters receive values through those parameters and use
                those values in accomplishing the method's task. The parameter is
                declared in the method header, and it behaves as a local variable
                inside the method body — it exists only for the duration of that method
                call and holds whatever value was passed in as the argument.
            </p>
 
            <h3>Primitive Parameters and Pass-by-Value</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Pass-by-value:</span> when an argument is a primitive value, the parameter is initialized with a copy of that value. Changes to the parameter inside the method have no effect on the corresponding argument — the original variable in the calling code is unchanged.</p>
            </div>
 
            <p>
                This is one of the most important things to understand about how
                primitive arguments work. When you pass a primitive value into a method,
                Java copies that value into the parameter variable. The method then
                works with that copy — the original variable in the calling code is
                completely separate and can never be modified by the method.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">void doubleIt(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">int num</span>) {
    num = num * 2;  <span style="color:#6B7280;">// modifies the copy — has no effect on the original</span>
    System.out.println("Inside method: " + num);
}
 
int score = 50;
doubleIt(score);
System.out.println("After method: " + score);  <span style="color:#6B7280;">// still 50</span></pre>
            </div>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Step</th>
                        <th><code>score</code> (caller)</th>
                        <th><code>num</code> (parameter — a separate copy)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Before <code>doubleIt(score)</code> is called</td>
                        <td><code>50</code></td>
                        <td>Does not yet exist</td>
                    </tr>
                    <tr>
                        <td>Method starts — <code>num</code> is initialized</td>
                        <td><code>50</code></td>
                        <td><code>50</code> (a copy of <code>score</code>)</td>
                    </tr>
                    <tr>
                        <td>Inside method: <code>num = num * 2</code></td>
                        <td><code>50</code> — unchanged</td>
                        <td><code>100</code></td>
                    </tr>
                    <tr>
                        <td>Method ends — <code>num</code> goes out of scope</td>
                        <td><code>50</code> — unchanged</td>
                        <td>No longer exists</td>
                    </tr>
                </tbody>
            </table>
 
            <p>
                The output is <code>"Inside method: 100"</code> then
                <code>"After method: 50"</code> — <code>score</code> was never
                touched. The copy given to the parameter changed, but the original
                variable in the calling code didn't.
            </p>
 
            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Pass-by-value means a method can never change the value of a
                    primitive variable in the calling code, no matter what it does to
                    the parameter. If the goal is to produce an updated value, the
                    method needs to <code>return</code> it, and the caller needs to
                    store that returned value.
                </p>
            </div>
 
            <div class="tip-box">
                <h3>📘 Example</h3>
                <p>
                    To actually double <code>score</code>, write a non-void method
                    instead: <code>int doubleIt(int num) { return num * 2; }</code>,
                    and store the result back: <code>score = doubleIt(score);</code>.
                    Now <code>score</code> is <code>100</code>, because the caller used
                    the returned value to overwrite the original.
                </p>
            </div>
 
        </section>
 
        <section id="questions" class="lesson-section">
 
            <h2>Frequently Starred Questions</h2>
 
            <div class="faq-list">
 
                <details class="faq-item">
                    <summary>Can a void method use the return keyword?</summary>
                    <p>
                        Yes, but only a bare <code>return;</code> with no value — it
                        exits the method early without returning anything, the same way a
                        return with a value exits a non-void method. It's optional in a
                        void method if you just want to let the method run to its natural
                        end.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Can a non-void method have more than one return statement?</summary>
                    <p>
                        Yes — the <code>max</code> example above has two. Only one of
                        them will ever execute per call, since the first <code>return</code>
                        reached immediately exits the method.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Does an accessor have to return the exact variable, or can it compute something first?</summary>
                    <p>
                        Accessors most commonly just return the stored value directly, but
                        they're non-void methods like any other — they can apply
                        formatting, compute a derived value, or add a defensive copy as
                        long as what they return is compatible with the declared return
                        type.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Why can't a method change a primitive argument in the calling code?</summary>
                    <p>
                        Because primitive arguments are passed by value — Java copies the
                        value into a new parameter variable, and the method works with that
                        copy. The original variable in the calling code and the parameter
                        are entirely separate; modifying one has no effect on the other.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Is a mutator always void?</summary>
                    <p>
                        Usually, but not required to be. The framework says "often a void
                        method" — a mutator could return a value (like a success flag or
                        the old value before the update), but the most common design is
                        void since the purpose is to update state, not produce a result.
                    </p>
                </details>
 
            </div>
 
        </section>
 
        <section id="misconceptions" class="lesson-section">
 
            <h2>Common Starrfalls</h2>
 
            <h3>"Code after a return statement still runs"</h3>
 
            <p>
                It doesn't — a <code>return</code> immediately exits the method, and
                any statements sequentially after it in the same block will never
                execute. The compiler flags this as unreachable code.
            </p>
 
            <h3>"Changing a parameter changes the original argument"</h3>
 
            <p>
                For primitive types, changes to a parameter have no effect whatsoever
                on the original argument in the calling code. The parameter is a copy —
                an entirely separate variable that only lives for the duration of the
                method call.
            </p>
 
            <h3>"Accessor and mutator are just fancy names for any method"</h3>
 
            <p>
                They refer to specific roles. An accessor specifically reads and returns
                a copy of an instance or class variable. A mutator specifically updates
                one. A method that does something else entirely — like printing a report
                or computing a result from multiple inputs — is neither.
            </p>
 
            <h3>"A return inside a loop just exits the loop"</h3>
 
            <p>
                It exits the entire method — not just the loop. Flow of control jumps
                immediately back to wherever the method was called from, and nothing
                else in the method body runs, regardless of how many loop iterations
                were still remaining.
            </p>
 
        </section>
 
        <section id="ask-online" class="lesson-section">
 
            <h2>Starr Online</h2>
 
            <p>
                Writing correct method headers, understanding return flow, and tracing
                pass-by-value are all skills tested heavily on AP CSA FRQs. Ask Starr
                to walk through a method call with you and trace what each variable
                holds at every step, or to explain why a parameter change didn't affect
                the original.
            </p>
 
            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Trace through this method call step by step and
                    tell me why the original variable is still 50 after the method ends."
                </p>
            </div>
 
        </section>
    `
    ,

    "3.6 Methods: Passing and Returning References of an Object": `
 
        <section id="content" class="lesson-section">
 
            <h2>Methods: Passing and Returning References of an Object</h2>
 
            <p>
                Lesson 3.5 established that when a primitive value is passed to a method,
                Java copies the value into the parameter — so the method can never change
                the original variable in the calling code. This lesson introduces what
                happens when the argument is an object reference instead of a primitive,
                and the rules are meaningfully different.
            </p>
 
            <h3>Revisiting the Difference: Primitive vs. Reference</h3>
 
            <p>
                A primitive variable stores its value directly. A reference variable
                stores an <em>address</em> — the location in memory where an object
                actually lives. This distinction was introduced in 1.12, and it becomes
                critical here: what gets copied when you pass an argument depends on
                which kind of variable it is.
            </p>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Primitive argument (3.5)</th>
                        <th>Object reference argument (3.6)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>What gets copied into the parameter</td>
                        <td>A copy of the actual value</td>
                        <td>A copy of the reference — pointing to the same object</td>
                    </tr>
                    <tr>
                        <td>Is a new independent object created?</td>
                        <td>N/A — primitives aren't objects</td>
                        <td>No — both the original variable and the parameter point to the exact same object in memory</td>
                    </tr>
                    <tr>
                        <td>Can the method affect the original?</td>
                        <td>No — the original value is unchanged</td>
                        <td>Yes — the method can mutate the object both variables are pointing to</td>
                    </tr>
                </tbody>
            </table>
 
            <h3>Passing an Object Reference: The Parameter Shares the Object</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Passing an object reference:</span> when an argument is an object reference, the parameter is initialized with a copy of that reference — it does not create a new independent copy of the object. If the parameter refers to a mutable object, the method or constructor can use this reference to alter the state of the object.</p>
            </div>
 
            <p>
                The key phrase here is "a copy of that reference." The parameter doesn't
                get its own private object — it gets another reference to the exact same
                object. Both the original variable in the calling code and the parameter
                inside the method are now pointing at the same location in memory.
                Any change made to the object through the parameter is a change to
                the one shared object, and the caller will see it immediately after the
                method returns.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">void applyBonus(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">Student s</span>, int bonus) {
    s.setGrade(s.getGrade() + bonus);  <span style="color:#6B7280;">// mutates the object s points to</span>
}
 
Student alice = new Student("Alice", 80);
applyBonus(<span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">alice</span>, 5);
System.out.println(alice.getGrade());  <span style="color:#6B7280;">// prints 85 — alice's object was changed</span></pre>
            </div>
 
            <p>
                When <code>applyBonus(alice, 5)</code> is called, Java copies
                <code>alice</code>'s reference into the parameter <code>s</code>.
                Now <code>alice</code> and <code>s</code> both point to the same
                <code>Student</code> object in memory. When the method calls
                <code>s.setGrade(...)</code>, it mutates that shared object — so
                when the method ends and <code>s</code> disappears, the object
                <code>alice</code> still points to has already been updated.
            </p>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Step</th>
                        <th><code>alice</code> (caller)</th>
                        <th><code>s</code> (parameter)</th>
                        <th>Object in memory</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Before method call</td>
                        <td>→ Student object</td>
                        <td>Does not exist</td>
                        <td>grade = 80</td>
                    </tr>
                    <tr>
                        <td>Method starts — <code>s</code> initialized</td>
                        <td>→ Student object</td>
                        <td>→ same Student object</td>
                        <td>grade = 80</td>
                    </tr>
                    <tr>
                        <td>Inside method: <code>s.setGrade(85)</code></td>
                        <td>→ Student object</td>
                        <td>→ same Student object</td>
                        <td>grade = 85 ← mutated</td>
                    </tr>
                    <tr>
                        <td>Method ends — <code>s</code> goes out of scope</td>
                        <td>→ Student object</td>
                        <td>No longer exists</td>
                        <td>grade = 85 — change persists</td>
                    </tr>
                </tbody>
            </table>
 
            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    The contrast with primitives is worth locking in clearly: passing a
                    primitive copies the value, so the original is safe. Passing an
                    object reference copies the address, so the original <em>object</em>
                    is reachable — and mutable — through the parameter.
                </p>
            </div>
 
            <h3>Good Practice: Don't Mutate Unless Required</h3>
 
            <p>
                Just because a method <em>can</em> mutate an object passed to it doesn't
                mean it <em>should</em>. It is good programming practice to not modify
                mutable objects that are passed as parameters unless it is required in
                the specification. Mutating an argument unexpectedly can introduce hard-
                to-find bugs, because the caller may not realize the object's state was
                changed inside a method it passed the object into.
            </p>
 
            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    If a method mutates a parameter object without it being clear or
                    documented, the caller's object silently changes — and the bug may
                    not surface until much later in the program. Unless the method is
                    explicitly supposed to update the object (like a mutator method), it
                    should read from it, not write to it.
                </p>
            </div>
 
            <h3>Returning an Object Reference</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Returning an object reference:</span> when the return expression evaluates to an object reference, the reference is returned — not a reference to a new copy of the object. The caller receives a reference pointing to the same object the method was working with.</p>
            </div>
 
            <p>
                Returning a reference works the same way as passing one: the caller
                receives the reference itself, not a freshly made copy of the object.
                This means the variable on the caller's side that stores the return
                value ends up pointing to the exact same object the method returned.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">Student</span> getTopStudent(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">Student a</span>, <span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">Student b</span>) {
    if (a.getGrade() &gt;= b.getGrade()) {
        return a;  <span style="color:#6B7280;">// returns the reference to a's object — not a copy</span>
    }
    return b;
}
 
Student alice = new Student("Alice", 91);
Student ben   = new Student("Ben", 87);
Student top   = getTopStudent(alice, ben);
 
System.out.println(top.getName());  <span style="color:#6B7280;">// "Alice"</span>
System.out.println(top == alice);   <span style="color:#6B7280;">// true — top and alice point to the same object</span></pre>
            </div>
 
            <p>
                After the call, <code>top</code> and <code>alice</code> are two different
                variable names, but they're both pointing at the same
                <code>Student</code> object in memory — which means
                <code>top == alice</code> is <code>true</code>. No copy of the object
                was made during the return. Mutating the object through <code>top</code>
                would change what <code>alice</code> sees too.
            </p>
 
            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    If you receive an object reference back from a method and then mutate
                    it, you're mutating the original object — not a safe private copy.
                    This can be surprising if you expected the method to hand you
                    something independent.
                </p>
            </div>
 
            <h3>Private Data Access and Type Restrictions</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Private data access restriction:</span> methods cannot access the private data and methods of a parameter that holds a reference to an object, unless the parameter is the same type as the method's enclosing class.</p>
            </div>
 
            <p>
                Even though a parameter holds a reference to an object, that doesn't
                grant the method access to the object's private fields. Private access
                is controlled by the class, not the method — a method inside a
                <code>BankAccount</code> class cannot reach directly into a
                <code>Student</code> parameter's private variables, even with a
                reference to it in hand.
            </p>
 
            <p>
                The one exception is when the parameter is the <em>same type</em> as
                the class the method belongs to. In that case, the method is "inside"
                the class that owns those private fields, so it can access them directly —
                even on a different instance of the same class passed in as a parameter.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">public class Student {
    private int grade;
 
    <span style="color:#6B7280;">// Works — this method is inside Student, so it can read</span>
    <span style="color:#6B7280;">// the private grade of another Student passed in</span>
    public boolean hasSameGrade(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">Student other</span>) {
        return this.grade == <span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">other.grade</span>;  <span style="color:#6B7280;">// ✓ same class — direct access is allowed</span>
    }
}
 
public class Gradebook {
    public void compare(<span style="background:rgba(255,86,86,.22); color:#FCA5A5; padding:3px 7px; border-radius:5px; font-weight:700;">Student s</span>) {
        System.out.println(<span style="background:rgba(255,86,86,.22); color:#FCA5A5; padding:3px 7px; border-radius:5px; font-weight:700;">s.grade</span>);  <span style="color:#6B7280;">// ✗ compile error — different class, can't access private field</span>
    }
}</pre>
            </div>
 
            <p>
                In the first example, <code>hasSameGrade</code> lives inside the
                <code>Student</code> class, so <code>other.grade</code> is perfectly
                accessible — <code>other</code> is just another <code>Student</code>
                object, and the class owns the privacy of that field, not the instance.
                In the second example, <code>Gradebook</code> is a different class
                entirely, so <code>s.grade</code> is off-limits and causes a compiler
                error. The correct route is through an accessor: <code>s.getGrade()</code>.
            </p>
 
            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    When you need to read data from an object of a different class, always
                    go through that class's public accessor methods — that's exactly what
                    they're designed for. Direct field access is only available to code
                    inside the same class that declared the field private.
                </p>
            </div>
 
        </section>
 
        <section id="questions" class="lesson-section">
 
            <h2>Frequently Starred Questions</h2>
 
            <p>
                Here are some of the questions Starr hears most often about passing and
                returning object references.
            </p>
 
            <div class="faq-list">
 
                <details class="faq-item">
                    <summary>What's the key difference between passing a primitive and passing an object?</summary>
                    <p>
                        Passing a primitive copies the value — the method gets its own
                        independent copy, and the original is untouched. Passing an object
                        copies the reference — both the caller and the parameter point to
                        the same object, so the method can mutate the original object's
                        state.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>If I return an object from a method, does the caller get a copy?</summary>
                    <p>
                        No. The reference itself is returned — the caller's variable ends
                        up pointing to the same object the method was working with, not a
                        newly created copy of it.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Can a method always access the private fields of any object passed to it?</summary>
                    <p>
                        No. A method can only access the private fields of a parameter
                        object if the parameter is the same type as the method's enclosing
                        class. For objects of any other class, private fields are
                        inaccessible and must be reached through public accessors.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Is it always bad to mutate an object that was passed in as a parameter?</summary>
                    <p>
                        Not always — sometimes that's explicitly the method's job. But
                        it should be intentional, documented, and required by the
                        specification. Mutating a parameter object as a side effect when
                        the caller doesn't expect it is a design problem.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Can a method inside Student access private fields of a different Student object?</summary>
                    <p>
                        Yes — because the method is inside the <code>Student</code> class,
                        it can access the private fields of any <code>Student</code>
                        object, including ones passed in as parameters. The privacy
                        restriction is class-level, not instance-level.
                    </p>
                </details>
 
            </div>
 
        </section>
 
        <section id="misconceptions" class="lesson-section">
 
            <h2>Common Starrfalls</h2>
 
            <h3>"Passing an object to a method gives the method its own copy to work with"</h3>
 
            <p>
                It doesn't — the method receives a reference to the same object. There
                is only one object, and changes made to it through the parameter are
                visible to everyone who holds a reference to it, including the original
                caller.
            </p>
 
            <h3>"A method that doesn't reassign the parameter can't affect the caller's object"</h3>
 
            <p>
                Reassigning the parameter (making it point at a different object) has no
                effect on the caller — that part is true. But calling a mutator method
                <em>on</em> the parameter, or changing any of its fields, still affects
                the shared object the caller is holding a reference to.
            </p>
 
            <h3>"Private means no outside code can ever access the data"</h3>
 
            <p>
                Private means no code <em>outside the class</em> can access the field
                directly — but a method inside the same class can access private fields
                on any instance of that class, including instances passed in as
                parameters. Access is controlled at the class level, not the instance
                level.
            </p>
 
            <h3>"Returning an object makes a copy for the caller"</h3>
 
            <p>
                Returning an object reference hands back the reference itself, pointing
                at the original object — not a fresh copy. If the caller modifies the
                returned object, it is modifying the same object the method was
                working with.
            </p>
 
        </section>
 
        <section id="ask-online" class="lesson-section">
 
            <h2>Starr Online</h2>
 
            <p>
                Passing references and shared mutation are the source of some of the
                trickiest AP CSA FRQ tracing questions — the kind where the caller's
                object changes unexpectedly, or where a returned reference is silently
                shared. Ask Starr to trace through a method call that mutates a parameter
                object, and see where the state ends up.
            </p>
 
            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Trace through this method that takes a Student
                    as a parameter and updates its grade — and tell me what alice.getGrade()
                    returns after the call."
                </p>
            </div>
 
        </section>
    `
    ,

    "3.7 Class Variables and Methods": `
 
        <section id="content" class="lesson-section">
 
            <h2>Class Variables and Methods</h2>
 
            <p>
                Every variable and method seen so far in Unit 3 has belonged to a
                specific instance — each <code>Student</code> object has its own
                <code>name</code>, its own <code>grade</code>, and calls to methods
                like <code>getName()</code> operate on one particular object at a time.
                But some data and behavior genuinely belongs to the class as a whole,
                not to any individual instance. That's the role of
                <strong>class variables</strong> and <strong>class methods</strong>,
                both of which are marked with the <code>static</code> keyword.
            </p>
 
            <h3>Class Variables</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Class variable:</span> belongs to the class, with all objects of the class sharing a single copy of the variable. Class variables are designated with the <code>static</code> keyword before the variable type.</p>
            </div>
 
            <p>
                While an instance variable gives each object its own independent copy
                of a value, a class variable has exactly one copy shared across every
                object ever created from the class. Changing it through one object
                changes what every other object sees — because there is no "other copy"
                to change separately. That single shared copy lives at the class level,
                not inside any individual object.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">public class Student {
    <span style="color:#6B7280;">// Instance variables — each object gets its own copy</span>
    private String name;
    private int grade;
 
    <span style="color:#6B7280;">// Class variable — one shared copy across all Student objects</span>
    private <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">static</span> int studentCount = 0;
 
    public Student(String name, int grade) {
        this.name  = name;
        this.grade = grade;
        studentCount++;  <span style="color:#6B7280;">// increments the shared counter every time a new Student is made</span>
    }
}</pre>
            </div>
 
            <p>
                Every time a new <code>Student</code> object is constructed,
                <code>studentCount</code> increases by one. Because it's
                <code>static</code>, there is only one <code>studentCount</code> for
                the entire class — not a separate counter inside each object. After
                creating three students, every object in the program would see
                <code>studentCount</code> as <code>3</code>.
            </p>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Instance Variable</th>
                        <th>Class Variable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Keyword</td>
                        <td>None</td>
                        <td><code>static</code></td>
                    </tr>
                    <tr>
                        <td>How many copies exist</td>
                        <td>One per object</td>
                        <td>One for the entire class, regardless of how many objects exist</td>
                    </tr>
                    <tr>
                        <td>Changing the value</td>
                        <td>Only affects the one object it belongs to</td>
                        <td>Affects every object, since they all share the same copy</td>
                    </tr>
                    <tr>
                        <td>Good for</td>
                        <td>Data that varies per object: name, grade, balance</td>
                        <td>Data that belongs to the class as a whole: count of instances, shared constants</td>
                    </tr>
                </tbody>
            </table>
 
            <h3>Accessing Class Variables with the Dot Operator</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Accessing a class variable:</span> class variables that are designated <code>public</code> are accessed outside of the class by using the class name and the dot operator, since they are associated with a class, not objects of a class.</p>
            </div>
 
            <p>
                Instance variables are accessed through a specific object reference:
                <code>alice.grade</code>. But a class variable doesn't belong to any
                one object — it belongs to the class itself. This means the correct way
                to access a public class variable from outside the class is through the
                class name, not through an instance.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="color:#6B7280;">// Accessing a public class variable from outside the class</span>
System.out.println(<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">Student</span>.<span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">studentCount</span>);  <span style="color:#6B7280;">// correct — via class name</span>
 
<span style="color:#6B7280;">// Accessing through an instance also works technically,</span>
<span style="color:#6B7280;">// but is misleading — it looks like it belongs to that object</span>
Student alice = new Student("Alice", 91);
System.out.println(<span style="background:rgba(255,86,86,.22); color:#FCA5A5; padding:3px 7px; border-radius:5px; font-weight:700;">alice</span>.<span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">studentCount</span>);  <span style="color:#6B7280;">// works, but poor practice</span></pre>
            </div>
 
            <p>
                The class name makes it immediately clear that the variable is shared
                across the entire class. Accessing a class variable through an instance
                reference is technically allowed by Java but considered poor practice —
                it creates the false impression that the value is local to that object,
                which can confuse anyone reading the code.
            </p>
 
            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    You've already been using this pattern: <code>Math.random()</code>,
                    <code>Integer.MAX_VALUE</code>, <code>Integer.parseInt()</code> —
                    all accessed through the class name, not through an object. They're
                    all class-level members, which is exactly why the class name is the
                    correct way to reach them.
                </p>
            </div>
 
            <h3>Class Methods</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Class method:</span> a method associated with the class itself, marked with the <code>static</code> keyword. Class methods can access or change the values of class variables and can call other class methods. However, class methods cannot access or change the values of instance variables, or call instance methods, without being passed an instance of the class via a parameter.</p>
            </div>
 
            <p>
                The reason a class method can't access instance variables is
                architectural: when a class method is called, there may be no instance
                at all — no individual object the method belongs to. An instance variable
                only exists as part of a specific object, so a method that isn't
                connected to any object has no way to know <em>which</em> object's
                instance variable to look at.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">public class Student {
    private String name;           <span style="color:#6B7280;">// instance variable</span>
    private static int studentCount = 0;  <span style="color:#6B7280;">// class variable</span>
 
    <span style="color:#6B7280;">// Class method — can access class variables</span>
    public <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">static</span> int getStudentCount() {
        return studentCount;  <span style="color:#6B7280;">// ✓ class variable — accessible</span>
    }
 
    <span style="color:#6B7280;">// Class method — cannot access instance variables</span>
    public <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">static</span> void printName() {
        System.out.println(name);  <span style="color:#6B7280;">// ✗ compile error — which object's name?</span>
    }
 
    <span style="color:#6B7280;">// Class method CAN access instance data if an instance is passed in</span>
    public <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">static</span> void printName(<span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">Student s</span>) {
        System.out.println(s.name);  <span style="color:#6B7280;">// ✓ instance is provided — access is valid</span>
    }
}</pre>
            </div>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Instance Method</th>
                        <th>Class Method (<code>static</code>)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Called via</td>
                        <td>An object: <code>alice.getName()</code></td>
                        <td>The class name: <code>Student.getStudentCount()</code></td>
                    </tr>
                    <tr>
                        <td>Can access instance variables?</td>
                        <td>Yes — it knows which object it belongs to</td>
                        <td>Only if an instance is passed in as a parameter</td>
                    </tr>
                    <tr>
                        <td>Can access class variables?</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Can call instance methods?</td>
                        <td>Yes</td>
                        <td>Only if an instance is passed in as a parameter</td>
                    </tr>
                </tbody>
            </table>
 
            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A useful mental check: if a method only needs class-level data and
                    doesn't care about any particular object's state, it's a good
                    candidate for <code>static</code>. If it needs to know something
                    specific to one object — like a student's name or grade — it should
                    be an instance method.
                </p>
            </div>
 
            <h3>The final Keyword</h3>
 
            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">final keyword:</span> when a variable is declared <code>final</code>, its value cannot be modified after it is initialized. A <code>final</code> variable is a constant.</p>
            </div>
 
            <p>
                The <code>final</code> keyword is what turns a variable into a true
                constant — a value that is set once and cannot be changed afterward.
                Any attempt to reassign a <code>final</code> variable after initialization
                causes a compiler error. This is a deliberate protection: constants
                represent values that should never change, and the compiler enforces
                that guarantee.
            </p>
 
            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">public class MathConstants {
    public static <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">final</span> double PI    = 3.14159;
    public static <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">final</span> int    MAX_SCORE = 100;
}
 
System.out.println(MathConstants.PI);        <span style="color:#6B7280;">// ✓ reading is fine</span>
MathConstants.PI = 3.0;                      <span style="color:#6B7280;">// ✗ compile error — cannot reassign a final variable</span></pre>
            </div>
 
            <p>
                In practice, constants are almost always declared both <code>static</code>
                and <code>final</code> together — <code>static</code> because the value
                belongs to the class and shouldn't be duplicated inside every object,
                and <code>final</code> because it should never change. The naming
                convention for constants in Java is all uppercase with underscores:
                <code>MAX_SCORE</code>, <code>PI</code>, <code>SPEED_OF_LIGHT</code>.
            </p>
 
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Declaration</th>
                        <th>What it means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>static int count</code></td>
                        <td>One shared copy across all instances — can be changed</td>
                    </tr>
                    <tr>
                        <td><code>final int LIMIT</code></td>
                        <td>Value is set once and cannot be reassigned — instance-level constant</td>
                    </tr>
                    <tr>
                        <td><code>static final int MAX = 100</code></td>
                        <td>One shared copy that can never be changed — the classic class constant pattern</td>
                    </tr>
                </tbody>
            </table>
 
            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    <code>final</code> prevents reassignment of the variable — but for
                    reference type variables, it only prevents the reference from
                    pointing to a different object. The object itself can still be
                    mutated through its methods, unless the class is designed to be
                    immutable. For primitive types, <code>final</code> makes the value
                    truly unchangeable.
                </p>
            </div>
 
        </section>
 
        <section id="questions" class="lesson-section">
 
            <h2>Frequently Starred Questions</h2>
 
            <p>
                Here are some of the questions Starr hears most often about class
                variables, class methods, and the <code>final</code> keyword.
            </p>
 
            <div class="faq-list">
 
                <details class="faq-item">
                    <summary>Why can't a static method access instance variables?</summary>
                    <p>
                        A static method belongs to the class itself, not to any particular
                        object. Instance variables exist inside specific objects — and
                        without an object in context, the static method has no way to know
                        which object's instance variable it should be looking at. If an
                        instance is needed, it must be passed in as a parameter.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Should I access a class variable through an object or the class name?</summary>
                    <p>
                        Through the class name. Accessing it through an object reference
                        works technically, but it's poor practice — it creates the false
                        impression that the variable belongs to that one object, when in
                        reality it's shared by the whole class.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>What happens if I try to reassign a final variable?</summary>
                    <p>
                        The compiler will flag it as an error and refuse to compile the
                        program. <code>final</code> is a compile-time guarantee — the
                        protection is enforced before the program ever runs.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Why are constants usually declared both static and final?</summary>
                    <p>
                        <code>static</code> means there's one shared copy for the whole
                        class rather than a duplicate inside every object.
                        <code>final</code> means that copy can never be changed. Together,
                        they create the classic Java constant: a single, immutable,
                        class-level value.
                    </p>
                </details>
 
                <details class="faq-item">
                    <summary>Can a class method call an instance method?</summary>
                    <p>
                        Only if an instance of the class is provided — passed in as a
                        parameter, for example. Without an instance, the class method
                        has no object to call the instance method on.
                    </p>
                </details>
 
            </div>
 
        </section>
 
        <section id="misconceptions" class="lesson-section">
 
            <h2>Common Starrfalls</h2>
 
            <h3>"static and instance variables behave the same way"</h3>
 
            <p>
                They don't — the fundamental difference is ownership. An instance
                variable belongs to one object; a static class variable belongs to the
                class as a whole. Changing a static variable anywhere changes it for
                every object, which can produce unexpected results if the static/instance
                distinction isn't kept clear.
            </p>
 
            <h3>"A static method can use any variable in the class"</h3>
 
            <p>
                Static methods can only directly access other static members — class
                variables and other class methods. Instance variables and instance
                methods are off-limits unless an actual instance is passed in as a
                parameter, since there's no associated object to pull them from.
            </p>
 
            <h3>"final means the object can't be changed"</h3>
 
            <p>
                For primitive types, <code>final</code> does make the value
                unchangeable. For reference types, it only prevents the variable from
                being reassigned to point at a different object — the existing object
                can still have its state mutated through its own methods.
            </p>
 
            <h3>"Constants need the final keyword but not static"</h3>
 
            <p>
                A <code>final</code>-only variable without <code>static</code> would
                create a separate constant inside every object — wasting memory and
                defeating the purpose of a shared constant. Class constants should
                almost always be both <code>static</code> and <code>final</code>.
            </p>
 
        </section>
 
        <section id="ask-online" class="lesson-section">
 
            <h2>Starr Online</h2>
 
            <p>
                Class variables, static methods, and final constants show up frequently
                in FRQ class-writing questions. Ask Starr to explain why a specific
                static method can't access an instance variable, or to help you decide
                whether a new field in a class should be static, final, both, or neither.
            </p>
 
            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "In my Student class, should studentCount be static,
                    final, both, or neither — and why?"
                </p>
            </div>
 
        </section>
    `
    ,

    "3.8 Scope and Access": `

    <section id="content" class="lesson-section">

        <h2>Scope and Access</h2>

        <p>
            Every variable used in a class lives somewhere — as an instance variable
            belonging to the object, or more narrowly, inside a single block of code.
            This lesson focuses on that second kind, and on a naming collision that comes
            up constantly once constructors and methods start taking parameters.
        </p>

        <h3>Local Variables</h3>

        <div class="vocab-box">
            <span class="vocab-label">Vocabulary</span>
            <p><span class="vocab-term">Local variable:</span> a variable declared in the header or body of a block of code. Local variables can only be accessed in the block in which they are declared.</p>
        </div>

        <p>
            A local variable's <strong>scope</strong> — the region of code where it can be
            referenced — is limited to the block it was declared in. Once execution
            leaves that block, the local variable no longer exists, and any attempt to
            reference it elsewhere simply won't compile.
        </p>

        <p>
            Since constructors and methods are blocks of code, parameters to constructors
            or methods are also considered local variables. This means a constructor's or
            method's parameters follow the exact same scope rule as a variable declared
            inside its body — they may only be used within the constructor or method and
            cannot be declared to be <code>public</code> or <code>private</code>.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">double</span> convertToGpa(int score) {
    <span style="color:#6B7280;">// "score" is a parameter -- a local variable</span>
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">double</span> gpa = score / 25.0;
    <span style="color:#6B7280;">// "gpa" is also a local variable, declared in the method body</span>
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> gpa;
}

<span style="color:#6B7280;">// score and gpa do not exist out here -- their scope ended</span>
<span style="color:#6B7280;">// with the closing brace of convertToGpa</span></pre>
            </div>

        <p>
            Neither <code>score</code> nor <code>gpa</code> can be referenced anywhere
            outside <code>convertToGpa</code> — not in another method of the same class,
            and not from any other class. Their scope begins where they're declared and
            ends at the closing brace of the block that contains them.
        </p>

        <div class="tip-box">
            <h3>⚠️ Watch Out</h3>
            <p>
                Because parameters and local variables can't be declared
                <code>public</code> or <code>private</code>, those keywords should never
                appear inside a method's parameter list or in front of a variable
                declared inside a method body — only instance variables, constructors,
                methods, and classes take those access modifiers.
            </p>
        </div>

        <h3>When a Local Variable Shares a Name with an Instance Variable</h3>

        <p>
            It's common — and often intentional, for readability — for a constructor's
            or method's parameter to share the exact same name as an instance variable it
            is meant to initialize. But this naming choice creates a scope conflict that
            has to be handled carefully.
        </p>

        <p>
            When there is a local variable or parameter with the same name as an instance
            variable, the variable name will refer to the local variable instead of the
            instance variable within the body of the constructor or method. The local
            variable is said to <strong>shadow</strong> the instance variable — inside
            that block, the name simply stops referring to the instance variable at all.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> Student {

    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> String name;

    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> Student(String name) {
        name = name;  <span style="color:#EF4444;">// does NOT work as intended</span>
    }
}</pre>
            </div>

        <p>
            Inside this constructor, the parameter <code>name</code> shadows the instance
            variable <code>name</code>. Since a bare reference to <code>name</code> always
            resolves to the local variable in this block, the line
            <code>name = name;</code> just assigns the parameter to itself — the
            instance variable is never touched, and it silently keeps whatever default
            value it started with (<code>null</code>, for a <code>String</code>).
        </p>

        <div class="tip-box">
            <h3>⚠️ Watch Out</h3>
            <p>
                This bug is especially dangerous because the code compiles without any
                error or warning. The program runs, but every <code>Student</code> object
                ends up with an instance variable that was never actually set from the
                constructor's argument.
            </p>
        </div>

        <h3>Resolving the Conflict with this</h3>

        <p>
            Java provides a way to explicitly refer to an object's own instance
            variable even when a local variable of the same name is shadowing it: the
            <code>this</code> keyword. Writing <code>this.name</code> unambiguously means
            "the instance variable belonging to this object," regardless of what local
            variables or parameters happen to share that name in the current block.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> Student {

    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> String name;

    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> Student(String name) {
        <span style="background:rgba(255,224,122,.25); color:#FFE07A; padding:3px 7px; border-radius:5px; font-weight:700;">this</span>.name = name;  <span style="color:#6EE7A8;">// works as intended</span>
    }
}</pre>
            </div>

        <p>
            On the right side of this assignment, the bare name <code>name</code> still
            refers to the parameter, exactly as scope rules require. But on the left
            side, <code>this.name</code> reaches past the local variable entirely and
            refers directly to the instance variable — so the object's state is
            correctly initialized from the constructor's argument.
        </p>

        <div class="tip-box">
            <h3>⭐ Starr Tip</h3>
            <p>
                A quick way to spot this bug when reading code: if a constructor
                parameter and an instance variable share a name, and an assignment inside
                the constructor doesn't use <code>this.</code> on the left-hand side,
                that instance variable probably isn't actually being set.
            </p>
        </div>

        <p>
            This lesson only introduces <code>this</code> as a solution to the shadowing
            problem. The next lesson explores the <code>this</code> keyword in much more
            depth, including other situations where it's useful beyond resolving naming
            conflicts.
        </p>

    </section>

    <section id="questions" class="lesson-section">

        <h2>Frequently Starred Questions</h2>

        <p>
            Here are some of the questions Starr hears most often about scope and local
            variables.
        </p>

        <div class="faq-list">

            <details class="faq-item">
                <summary>Are constructor and method parameters really local variables?</summary>
                <p>
                    Yes. Since constructors and methods are blocks of code, their
                    parameters are considered local variables, following the exact same
                    scope rule — they can only be used within the constructor or method
                    they belong to.
                </p>
            </details>

            <details class="faq-item">
                <summary>Why doesn't Java throw an error when a local variable shadows an instance variable?</summary>
                <p>
                    Shadowing is a deliberate feature of the language, not an error — Java
                    consistently resolves a name to the closest matching local variable
                    or parameter. The problem isn't that Java does something wrong; it's
                    that the resulting behavior is easy to mistake for something else.
                </p>
            </details>

            <details class="faq-item">
                <summary>Do I have to use this.name every single time I reference an instance variable?</summary>
                <p>
                    No — it's only strictly necessary when a local variable or parameter
                    in the current block shares the instance variable's name. Some
                    programmers use <code>this.</code> consistently anyway for clarity,
                    but it isn't required when there's no naming conflict.
                </p>
            </details>

            <details class="faq-item">
                <summary>Can a local variable be declared private?</summary>
                <p>
                    No. Local variables and parameters may only be used within the
                    constructor or method where they're declared, and cannot be declared
                    to be <code>public</code> or <code>private</code> — those modifiers
                    only apply to classes, instance variables, constructors, and methods.
                </p>
            </details>

        </div>

    </section>

    <section id="misconceptions" class="lesson-section">

        <h2>Common Starrfalls</h2>

        <h3>"name = name; inside a constructor sets the instance variable"</h3>

        <p>
            When a parameter shares a name with an instance variable, a bare reference to
            that name always refers to the local parameter, not the instance variable.
            <code>name = name;</code> just assigns the parameter to itself — it never
            reaches the instance variable at all.
        </p>

        <h3>"A method's parameters can be accessed from other methods in the class"</h3>

        <p>
            Local variables — including parameters — can only be accessed in the block in
            which they're declared. A parameter belonging to one method has no existence
            or visibility inside any other method, even within the same class.
        </p>

        <h3>"this is only needed when there's a naming conflict"</h3>

        <p>
            That's the specific problem this lesson focuses on, but it's worth previewing
            that <code>this</code> has other legitimate uses beyond resolving shadowed
            variable names — a topic the next lesson explores in more depth.
        </p>

    </section>

    <section id="ask-online" class="lesson-section">

        <h2>Starr Online</h2>

        <p>
            Shadowed variables are one of the sneakiest bugs to catch by eye, since the
            code always compiles. Ask Starr to check a constructor for shadowing issues,
            or to explain exactly which variable a specific line of code refers to.
        </p>

        <div class="tip-box">
            <h3>🤖 Ask Starr</h3>
            <p>
                Try asking Starr: "Does this constructor actually set all of its instance
                variables correctly, or is anything being shadowed?"
            </p>
        </div>

    </section>
    `
    ,

    "3.9 this Keyword": `

    <section id="content" class="lesson-section">

        <h2>this Keyword</h2>

        <p>
            Lesson 3.8 introduced <code>this</code> as a way to resolve naming conflicts
            between a local variable and an instance variable. That was only a first
            glimpse. This lesson looks at what <code>this</code> actually is, what else
            it's used for, and one important place it doesn't exist at all.
        </p>

        <h3>this as a Reference to the Current Object</h3>

        <div class="vocab-box">
            <span class="vocab-label">Vocabulary</span>
            <p><span class="vocab-term">this:</span> within an instance method or a constructor, the keyword <code>this</code> acts as a special variable that holds a reference to the current object — the object whose method or constructor is being called.</p>
        </div>

        <p>
            Every time an instance method or constructor runs, Java automatically makes
            <code>this</code> available inside its body, already pointing at the exact
            object the method or constructor was called on. No declaration is needed —
            <code>this</code> is simply there, ready to use, the moment execution enters
            an instance method or constructor.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> Student {

    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> String name;
    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> int grade;

    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> Student(String name, int grade) {
        <span style="background:rgba(255,224,122,.25); color:#FFE07A; padding:3px 7px; border-radius:5px; font-weight:700;">this</span>.name = name;
        <span style="background:rgba(255,224,122,.25); color:#FFE07A; padding:3px 7px; border-radius:5px; font-weight:700;">this</span>.grade = grade;
    }

    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">boolean</span> hasHigherGradeThan(Student other) {
        <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> <span style="background:rgba(255,224,122,.25); color:#FFE07A; padding:3px 7px; border-radius:5px; font-weight:700;">this</span>.grade &gt; other.grade;
    }
}</pre>
            </div>

        <p>
            If <code>amara</code> and <code>ben</code> are two different
            <code>Student</code> objects, then calling
            <code>amara.hasHigherGradeThan(ben)</code> runs the method with
            <code>this</code> bound to <code>amara</code> — meaning
            <code>this.grade</code> refers to Amara's grade, while <code>other.grade</code>
            refers to Ben's. Call the same method the other way,
            <code>ben.hasHigherGradeThan(amara)</code>, and <code>this</code> now refers
            to Ben instead. The keyword itself never changes meaning; it's always bound to
            whichever object the method is currently being called on.
        </p>

        <div class="tip-box">
            <h3>⭐ Starr Tip</h3>
            <p>
                A useful way to think about it: <code>this</code> answers the question
                "who am I?" from inside a method or constructor. It always refers back to
                the specific object whose code is currently executing.
            </p>
        </div>

        <h3>Passing this as an Argument</h3>

        <p>
            The keyword <code>this</code> can be used to pass the current object as an
            argument in a method call. This comes up whenever one object needs to hand a
            reference to <em>itself</em> over to another method — often so that method can
            store the reference, or call something back on the original object later.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> Student {

    <span style="background:rgba(190,255,98,.20); color:#BEFF62; padding:3px 7px; border-radius:5px; font-weight:700;">private</span> String name;

    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">void</span> enroll(Roster roster) {
        roster.add(<span style="background:rgba(255,224,122,.25); color:#FFE07A; padding:3px 7px; border-radius:5px; font-weight:700;">this</span>);  <span style="color:#6B7280;">// hands this exact Student object to the roster</span>
    }
}</pre>
            </div>

        <p>
            Here, calling <code>roster.add(this)</code> passes a reference to the exact
            <code>Student</code> object whose <code>enroll</code> method is running —
            not a copy, and not some other <code>Student</code> — into the
            <code>Roster</code> object's <code>add</code> method. Whatever
            <code>Roster</code> does with that reference afterward, it's operating on the
            very same object that called <code>enroll</code>.
        </p>

        <div class="tip-box">
            <h3>📘 Key Idea</h3>
            <p>
                Passing <code>this</code> as an argument is just passing an object
                reference, exactly like passing any other object — the only difference is
                that the reference being passed happens to be a reference to the object
                the code is currently running inside of.
            </p>
        </div>

        <h3>Where this Does Not Exist: Class Methods</h3>

        <p>
            Class methods do not have a <code>this</code> reference. This makes sense once
            you consider what <code>this</code> is actually built to represent: a
            reference to a specific object. A class method — one declared with the
            <code>static</code> keyword — belongs to the class as a whole rather than to
            any individual object, so there's no particular object for <code>this</code>
            to refer to when a class method runs.
        </p>

        <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
            <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">static</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">int</span> square(int n) {
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> <span style="background:rgba(255,224,122,.25); color:#FFE07A; padding:3px 7px; border-radius:5px; font-weight:700;">this</span>.compute(n);  <span style="color:#EF4444;">// does NOT compile -- no "this" in a static method</span>
}</pre>
            </div>

        <p>
            Since <code>square</code> is a class method, it can be called directly on the
            class itself — <code>MathHelper.square(5)</code> — without any object ever
            being instantiated. Because no specific <code>Student</code>, or any other
            object, is necessarily involved when the method runs, there's simply nothing
            for <code>this</code> to point to, and referencing it inside a
            <code>static</code> method won't compile.
        </p>

        <table class="content-table">
            <thead>
                <tr>
                    <th>Method type</th>
                    <th>Declared with</th>
                    <th>Has a this reference?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Instance method</td>
                    <td>No <code>static</code> keyword</td>
                    <td>Yes — refers to the object the method was called on</td>
                </tr>
                <tr>
                    <td>Constructor</td>
                    <td>Matches the class name, no return type</td>
                    <td>Yes — refers to the object currently being constructed</td>
                </tr>
                <tr>
                    <td>Class method</td>
                    <td><code>static</code></td>
                    <td>No — belongs to the class itself, not to any one object</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box">
            <h3>⚠️ Watch Out</h3>
            <p>
                If the compiler reports that <code>this</code> cannot be used in a static
                context, that's a strong signal the method was meant to be — or
                accidentally was declared as — a class method, when it actually needed to
                operate on a specific object's instance variables.
            </p>
        </div>

    </section>

    <section id="questions" class="lesson-section">

        <h2>Frequently Starred Questions</h2>

        <p>
            Here are some of the questions Starr hears most often about the
            <code>this</code> keyword.
        </p>

        <div class="faq-list">

            <details class="faq-item">
                <summary>Do I have to declare this before I can use it?</summary>
                <p>
                    No. Inside any instance method or constructor, <code>this</code> is
                    automatically available and already refers to the current object —
                    there's nothing to declare or initialize.
                </p>
            </details>

            <details class="faq-item">
                <summary>Does this ever refer to a different object partway through a method?</summary>
                <p>
                    No. For the entire duration of a single method or constructor call,
                    <code>this</code> stays bound to the one object that call is running
                    on. It only changes between separate calls, not within one.
                </p>
            </details>

            <details class="faq-item">
                <summary>Why would I ever pass this as an argument instead of just doing the work inside the class?</summary>
                <p>
                    Sometimes another object needs to keep a reference to this object for
                    later — like a <code>Roster</code> holding onto every enrolled
                    <code>Student</code> — which requires handing that reference over with
                    <code>this</code> rather than duplicating the object's data.
                </p>
            </details>

            <details class="faq-item">
                <summary>Can I add static to a method just to use this inside it?</summary>
                <p>
                    No — that would have the opposite effect. Adding <code>static</code>
                    removes any connection to a specific object, which is exactly what
                    makes <code>this</code> unavailable in the first place.
                </p>
            </details>

        </div>

    </section>

    <section id="misconceptions" class="lesson-section">

        <h2>Common Starrfalls</h2>

        <h3>"this only exists to fix naming conflicts with instance variables"</h3>

        <p>
            Resolving shadowed variable names is one use of <code>this</code>, but not
            its only purpose. <code>this</code> is fundamentally a reference to the
            current object, which is also what allows it to be passed as an argument to
            another method entirely.
        </p>

        <h3>"Every method in a class has access to this"</h3>

        <p>
            Class methods do not have a <code>this</code> reference. Only instance
            methods and constructors — code that runs in the context of a specific
            object — have <code>this</code> available.
        </p>

        <h3>"this is a copy of the object"</h3>

        <p>
            <code>this</code> is a reference to the actual current object, not a copy.
            Changing an instance variable through <code>this</code> changes the real
            object's state, and passing <code>this</code> to another method hands over a
            reference to that same real object.
        </p>

    </section>

    <section id="ask-online" class="lesson-section">

        <h2>Starr Online</h2>

        <p>
            <code>this</code> can feel abstract until you trace through exactly which
            object it refers to at each point in a program. Ask Starr to walk through a
            method call and identify what <code>this</code> refers to at every step, or
            to explain why a specific static method can't use <code>this</code>.
        </p>

        <div class="tip-box">
            <h3>🤖 Ask Starr</h3>
            <p>
                Try asking Starr: "Trace through this method call and tell me exactly
                what this refers to at each line."
            </p>
        </div>

    </section>

    `
    ,

};