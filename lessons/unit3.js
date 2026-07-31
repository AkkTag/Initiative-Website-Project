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

};