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

};