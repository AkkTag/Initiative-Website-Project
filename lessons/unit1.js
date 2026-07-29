lessonContentData["Unit 1"] = {

    "1.1 Introduction to Algorithms, Programming, and Compilers": `

        <section id="content" class="lesson-section">

            <h2>Introduction to Algorithms, Programming, and Compilers</h2>

            <p>
                Before writing any Java code, it's important to understand what a program
                actually <em>is</em> — a step-by-step set of instructions for solving a
                problem — and how that set of instructions gets turned into something a
                computer can run.
            </p>

            <h3>Algorithms and Sequencing</h3>

            <p>
                Long before any code gets written, you're already designing an algorithm
                any time you plan out how to solve a problem. Two terms come up constantly
                when talking about that planning process:
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Algorithm:</span> a step-by-step process to follow when completing a task or solving a problem. Algorithms can be represented using written language or diagrams.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Sequencing:</span> defines the order in which the steps of a process are completed. Steps in a process are completed one at a time.</p>
            </div>

            <p>
                Sequencing matters because computers follow instructions exactly as
                written — if you switch the order of two steps, you may end up solving a
                completely different problem, or no problem at all.
            </p>

            <div class="tip-box">
                <h3>📘 Everyday Algorithms</h3>
                <p>
                    A recipe is a great example of an algorithm: it lists ingredients (the
                    inputs), and a specific sequence of steps (mix, bake, cool) that must
                    happen in order to reliably produce the same result every time.
                </p>
            </div>

            <h3>From Code to a Running Program</h3>

            <p>
                Code can be written in any text editor, but an <strong>Integrated
                Development Environment (IDE)</strong> is often used instead, since it
                bundles together the tools a programmer needs to write, compile, and run
                code in one place — a code editor, a compiler, and a debugger. Refer back
                to <strong>0.3 Java Development Environments</strong> for a full list of
                cloud and desktop IDEs you can use for this course.
            </p>

            <p>
                Once code is written, a <strong>compiler</strong> checks it for errors.
                Any errors detectable by the compiler must be fixed before the program can
                run at all — the compiler won't let broken code slip through.
            </p>

            <h3>Types of Programming Errors</h3>

            <p>
                Not all errors are caught at the same stage, and not all errors look the
                same. AP CSA groups programming errors into three categories: syntax
                errors, run-time errors, and logic errors.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Error Type</th>
                        <th>When It's Caught</th>
                        <th>What It Means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Syntax Error</td>
                        <td>Compile time (before the program runs)</td>
                        <td>
                            A mistake in the program where the rules of the programming
                            language aren't followed — like a missing semicolon or
                            mismatched brackets. The compiler catches these and won't let
                            the program run until they're fixed.
                        </td>
                    </tr>
                    <tr>
                        <td>Run-Time Error</td>
                        <td>While the program is executing</td>
                        <td>
                            A mistake that occurs during execution of a program, such as
                            dividing by zero or accessing an array index that doesn't exist.
                            Run-time errors typically cause the program to terminate
                            abnormally. A run-time error caused by an unexpected condition
                            not detected by the compiler is called an
                            <strong>exception</strong>, and it interrupts the normal flow of
                            the program's execution.
                        </td>
                    </tr>
                    <tr>
                        <td>Logic Error</td>
                        <td>After the program runs, when checking output</td>
                        <td>
                            A mistake in the algorithm or program that causes it to behave
                            incorrectly or unexpectedly. The program compiles and runs
                            without crashing, but produces the wrong result. These are found
                            by testing the program with specific data to see if it produces
                            the expected outcome.
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A quick way to remember the difference: a <strong>syntax error</strong>
                    means your code won't compile, a <strong>run-time error</strong> means
                    your code compiles but crashes while running, and a
                    <strong>logic error</strong> means your code runs fine but gives you the
                    wrong answer.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about algorithms,
                compilers, and programming errors.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Is an algorithm the same thing as code?</summary>
                    <p>
                        Not quite. An algorithm is the step-by-step plan for solving a
                        problem, which can be written in plain language or diagrams. Code
                        is one way of expressing that algorithm so a computer can carry it
                        out.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does the order of steps matter so much?</summary>
                    <p>
                        Because computers follow instructions exactly as written, with no
                        room for assumptions. Changing the sequence of steps can produce a
                        completely different — or invalid — result, even if every individual
                        step is correct.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>If my code compiles, does that mean it's correct?</summary>
                    <p>
                        No. Compiling only means your code follows the rules of the Java
                        language — it doesn't check whether the code actually does what you
                        intended. That's why run-time and logic errors can still exist in
                        code that compiles successfully.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What's the difference between a run-time error and an exception?</summary>
                    <p>
                        A run-time error is any mistake that happens while the program is
                        executing. An exception is a specific type of run-time error caused
                        by an unexpected condition that the compiler couldn't catch ahead of
                        time, and it interrupts the normal flow of the program.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>How do I find a logic error if my program doesn't crash?</summary>
                    <p>
                        Since the compiler and the program itself won't flag a logic error,
                        you have to test your program with specific input values and compare
                        the actual output to what you expected. Tracing through your code by
                        hand is one of the most reliable ways to catch these.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <p>
                A few misunderstandings tend to show up early in the course — catching them
                now will save you debugging headaches later.
            </p>

            <h3>"If my program runs without crashing, it must be correct"</h3>

            <p>
                A program can run from start to finish without a single error message and
                still produce the wrong answer. Running successfully only rules out syntax
                and run-time errors — it says nothing about logic errors.
            </p>

            <h3>"The compiler will catch all my mistakes"</h3>

            <p>
                The compiler only checks that your code follows Java's rules. It has no way
                of knowing what you were <em>trying</em> to do, so it can't catch run-time
                or logic errors — those are on you to test for.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Don't assume your algorithm is correct just because it "makes sense" in
                    your head. Trace through it step by step with real values before you
                    start coding, especially for anything involving a specific sequence of
                    steps.
                </p>
            </div>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Not sure whether an error in your code is a syntax, run-time, or logic
                error? Starr AI is trained on the AP CSA curriculum and can help you trace
                through your code line by line to figure out exactly where it's going
                wrong.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr to walk through the difference between the three error
                    types with an example, or to help you trace through your own algorithm
                    step by step.
                </p>
            </div>

        </section>
    `

    ,

    "1.2 Variables and Data Types": `

        <section id="content" class="lesson-section">

            <h2>Variables and Data Types</h2>

            <p>
                Every value a Java program works with — a score, a name, a true/false
                flag — has to live somewhere in memory, and Java needs to know what
                <em>kind</em> of value it's dealing with before it can work with it
                correctly. That's where data types and variables come in.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Data Type:</span> a set of values and a corresponding set of operations on those values. Data types can be categorized as either primitive or reference.</p>
            </div>

            <h3>Primitive vs. Reference Types</h3>

            <p>
                Java splits every data type into one of two categories, and the difference
                between them shapes almost everything you'll do with variables in this
                course.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>What It Stores</th>
                        <th>Examples in This Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Primitive Type</td>
                        <td>
                            The actual value itself, stored directly in memory. Primitive
                            data types define the set of values and corresponding set of
                            operations on those values.
                        </td>
                        <td><code>int</code>, <code>double</code>, <code>boolean</code></td>
                    </tr>
                    <tr>
                        <td>Reference Type</td>
                        <td>
                            Not the value itself, but a reference — essentially an address
                            pointing to where an object's data actually lives in memory.
                            Reference types are used to define objects that are not
                            primitive types.
                        </td>
                        <td><code>String</code>, <code>ArrayList</code>, any class</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Think of a primitive variable as a box that holds the value directly —
                    like a box with a number inside it. A reference variable is more like a
                    sticky note with an address on it, pointing you to where the actual
                    object lives elsewhere in memory.
                </p>
            </div>

            <h3>The Three Primitive Types in This Course</h3>

            <p>
                While Java technically has more primitive types, only three are in scope
                for this course:
            </p>

            <ul>
                <li><strong>int</strong> — stores an integer value (a whole number, positive or negative)</li>
                <li><strong>double</strong> — stores a real number value, including decimals</li>
                <li><strong>boolean</strong> — stores either <code>true</code> or <code>false</code></li>
            </ul>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    The other four primitive data types in Java —
                    <code>long</code>, <code>short</code>, <code>byte</code>, and
                    <code>char</code> — are outside the scope of the AP Computer Science A
                    course and exam. You won't be tested on them, so this course focuses
                    only on <code>int</code>, <code>double</code>, and <code>boolean</code>.
                </p>
            </div>

            <h3>Declaring Variables</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Variable:</span> a storage location that holds a value, which can change while the program is running. Every variable has a name and an associated data type. A variable of a primitive type holds a primitive value from that type.</p>
            </div>

            <p>
                To create a variable, you declare its data type followed by a name of your
                choosing:
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Declaration</th>
                        <th>What It Means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>int score = 95;</code></td>
                        <td>Declares an <code>int</code> variable named <code>score</code> and stores the value <code>95</code> in it</td>
                    </tr>
                    <tr>
                        <td><code>double average = 88.5;</code></td>
                        <td>Declares a <code>double</code> variable named <code>average</code> and stores the value <code>88.5</code> in it</td>
                    </tr>
                    <tr>
                        <td><code>boolean isPassing = true;</code></td>
                        <td>Declares a <code>boolean</code> variable named <code>isPassing</code> and stores the value <code>true</code> in it</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Because a variable's value can change while the program runs, the same
                variable can be reassigned a new value of the same type later in the
                program — the data type itself, however, never changes once declared.
            </p>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Why does Java care so much about data types?</summary>
                    <p>
                        Data types tell Java exactly how much memory to set aside for a
                        value and which operations are valid on it — you can add two
                        <code>int</code> values, but adding two <code>boolean</code> values
                        doesn't make sense, and Java uses the data type to catch that kind
                        of mistake before it happens.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Is a String a primitive type?</summary>
                    <p>
                        No. Even though it holds simple-looking text, <code>String</code> is
                        a reference type — it's actually an object, with its own methods,
                        rather than a raw value stored directly like an <code>int</code> or
                        <code>double</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can I change a variable's data type after declaring it?</summary>
                    <p>
                        No. Once a variable is declared with a data type, that type is fixed
                        for the life of the variable. You can change the <em>value</em>
                        stored in the variable, but not the type itself.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why can't I use char or long in this course?</summary>
                    <p>
                        The AP CSA course and exam only cover <code>int</code>,
                        <code>double</code>, and <code>boolean</code> among the primitive
                        types. <code>long</code>, <code>short</code>, <code>byte</code>, and
                        <code>char</code> exist in Java but are explicitly outside the scope
                        of this course.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"A reference variable stores the object itself"</h3>

            <p>
                A reference variable doesn't hold the object's data directly — it holds a
                reference (an address) pointing to where that object actually lives in
                memory. This distinction matters later on when you start passing objects
                into methods.
            </p>

            <h3>"double and int are basically interchangeable"</h3>

            <p>
                While both store numbers, an <code>int</code> can only hold whole numbers,
                while a <code>double</code> can hold decimal values. Assigning a decimal
                value to an <code>int</code> variable will cause data — everything after the
                decimal point — to be lost.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Mixing up primitive and reference types is one of the most common early
                stumbling blocks in Java. Ask Starr to walk through a memory diagram of
                how each type is stored, or to quiz you on which data type fits a given
                scenario.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "What's the difference between how a primitive and a
                    reference variable are stored in memory?"
                </p>
            </div>

        </section>
    `

    ,

    "1.3 Expressions and Output": `

        <section id="content" class="lesson-section">

            <h2>Expressions and Output</h2>

            <p>
                Once a program has values stored in variables, it needs a way to actually
                show something to the person running it. In Java, that's the job of
                <strong>print statements</strong> — and once output is on the table, it's
                also worth learning how to build up more complex values using
                <strong>arithmetic expressions</strong>.
            </p>

            <h3>Why We Use Print Statements</h3>

            <p>
                A print statement's purpose is simple: it takes whatever you give it and
                displays that information on the screen. Without some way to produce
                output, a program could run perfectly and calculate a correct answer, but
                the person using it would never actually see the result. Print statements
                are how a program communicates back to the user — showing results,
                confirming actions, or displaying messages while the program runs.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Literal:</span> the code representation of a fixed value. A <span class="vocab-term">string literal</span> is a sequence of characters enclosed in double quotes.</p>
            </div>

            <h3>System.out.print() vs. System.out.println()</h3>

            <p>
                Java gives you two closely related ways to print output, and the choice
                between them comes down to a single detail: what happens to the cursor
                afterward.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Behavior</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>System.out.print()</code></td>
                        <td>
                            Displays the given information on the screen, but leaves the
                            cursor right where the output ended. The next thing printed —
                            even from a separate statement — will appear on the same line.
                        </td>
                    </tr>
                    <tr>
                        <td><code>System.out.println()</code></td>
                        <td>
                            Displays the given information, then moves the cursor to a new
                            line afterward. Whatever gets printed next will start fresh on
                            the following line.
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                For example, two back-to-back <code>System.out.print()</code> statements
                will print their output side by side on the same line, while swapping
                either one for <code>System.out.println()</code> will push everything
                after it down to a new line.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Think of <code>println</code> as <code>print</code> plus an invisible
                    "press Enter" at the end. If your output looks like it's all been
                    mashed onto one line when you expected separate lines, check whether
                    you meant to use <code>println</code> instead of <code>print</code>.
                </p>
            </div>

            <h3>Escape Sequences</h3>

            <p>
                Sometimes you need to include a character in a string that would
                otherwise be confusing for Java to interpret — like a quotation mark
                inside a string that's already surrounded by quotation marks. An
                <strong>escape sequence</strong> is a special sequence of characters that
                can be included in a string to represent those cases. Escape sequences
                start with a backslash <code>\\</code> and have a special meaning in Java.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Escape Sequence</th>
                        <th>What It Represents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>\\"</code></td>
                        <td>A double quote character printed inside a string</td>
                    </tr>
                    <tr>
                        <td><code>\\\\</code></td>
                        <td>A single backslash character</td>
                    </tr>
                    <tr>
                        <td><code>\\n</code></td>
                        <td>A newline, moving anything printed after it to the next line</td>
                    </tr>
                    <tr>
                        <td><code>\\t</code></td>
                        <td>A tab, adding a block of white space before whatever comes next</td>
                    </tr>
                </tbody>
            </table>

            <p>
                This course requires the double quote, backslash, newline, and tab escape
                sequences — these are the ones you'll see and need to use on the exam.
            </p>

            <h3>Arithmetic Expressions</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Arithmetic expression:</span> an expression that consists of numeric values, variables, and operators, and includes expressions of type <code>int</code> and <code>double</code>.</p>
            </div>

            <p>
                Java's arithmetic operators consist of addition <code>+</code>,
                subtraction <code>-</code>, multiplication <code>*</code>, division
                <code>/</code>, and remainder <code>%</code>. An arithmetic operation that
                uses two <code>int</code> values will evaluate to an <code>int</code>
                value. An arithmetic operation that uses at least one <code>double</code>
                value will evaluate to a <code>double</code> value.
            </p>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    Expressions that result in special <code>double</code> values (e.g.,
                    infinities and <code>NaN</code>) are outside the scope of the AP
                    Computer Science A course and exam.
                </p>
            </div>

            <p>
                When dividing numeric values that are both <code>int</code> values, the
                result is only the integer portion of the quotient — any decimal part is
                discarded, not rounded. When dividing numeric values that use at least one
                <code>double</code> value, the result is the full decimal quotient.
            </p>

            <p>
                The remainder operator <code>%</code> is used to compute the remainder
                when a number <code>a</code> is divided by another number <code>b</code>.
            </p>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    The use of values less than <code>0</code> for <code>a</code> and the
                    use of values less than or equal to <code>0</code> for <code>b</code>
                    is outside the scope of the AP Computer Science A course and exam.
                </p>
            </div>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Expression</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>7 / 2</code></td>
                        <td><code>3</code> — integer division discards the decimal portion</td>
                    </tr>
                    <tr>
                        <td><code>7.0 / 2</code></td>
                        <td><code>3.5</code> — at least one <code>double</code> gives a <code>double</code> result</td>
                    </tr>
                    <tr>
                        <td><code>7 % 2</code></td>
                        <td><code>1</code> — the remainder left over after dividing 7 by 2</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Operators can be used to construct compound expressions. At compile time,
                numeric values are associated with operators according to operator
                precedence to determine how they're grouped. Parentheses can be used to
                modify operator precedence. Multiplication, division, and remainder have
                precedence over addition and subtraction, and operators with the same
                precedence are evaluated from left to right.
            </p>

            <p>
                An attempt to divide an integer by the integer zero will result in an
                <code>ArithmeticException</code>.
            </p>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    The use of dividing by zero when at least one numeric value is a
                    <code>double</code> is outside the scope of the AP Computer Science A
                    course and exam.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about print
                statements and arithmetic expressions.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>When should I use print() instead of println()?</summary>
                    <p>
                        Use <code>System.out.print()</code> when you want the next output —
                        whether from the same statement or a different one — to continue on
                        the same line, such as building up a single line of output piece by
                        piece.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does 7 / 2 give me 3 instead of 3.5?</summary>
                    <p>
                        Because both <code>7</code> and <code>2</code> are <code>int</code>
                        values, Java performs integer division and keeps only the whole
                        number portion of the quotient, discarding the decimal part
                        entirely rather than rounding it.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What does the % operator actually do?</summary>
                    <p>
                        It returns the remainder left over after dividing one number by
                        another, rather than the quotient itself — for example,
                        <code>10 % 3</code> evaluates to <code>1</code>, since 3 goes into
                        10 three times with 1 left over.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why do I need a backslash before a quotation mark?</summary>
                    <p>
                        Because Java uses double quotes to mark the start and end of a
                        string, a plain quotation mark inside that string would be read as
                        the end of the string. The escape sequence <code>\\"</code> tells
                        Java to treat it as a literal character instead.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does order matter in arithmetic expressions?</summary>
                    <p>
                        Yes. Multiplication, division, and remainder are evaluated before
                        addition and subtraction, and operators of equal precedence are
                        evaluated left to right, so rearranging an expression without
                        parentheses can change its result.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"print() and println() are basically the same"</h3>

            <p>
                The only difference is a newline, but that difference matters a lot in
                practice — mixing them up is one of the most common causes of output that
                unexpectedly runs together on one line or breaks apart when it shouldn't.
            </p>

            <h3>"Integer division rounds to the nearest whole number"</h3>

            <p>
                It doesn't round — it truncates. <code>7 / 2</code> evaluates to
                <code>3</code>, not <code>4</code>, because the decimal portion is
                discarded entirely rather than rounded up.
            </p>

            <h3>"The remainder operator only works with even division"</h3>

            <p>
                The <code>%</code> operator works with any combination of values within
                scope for this course — it simply returns whatever is left over after
                dividing as many whole times as possible, which is <code>0</code> only
                when the division is exact.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Print statements and arithmetic operators show up constantly for the rest
                of the course, so it's worth getting comfortable with them now. Ask Starr
                to trace through a few expressions with you, or to explain why a specific
                line of output looks the way it does.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Walk me through what gets printed if I use print() three
                    times in a row, then println() once."
                </p>
            </div>

        </section>
    `

    ,

    "1.4 Assignment Statements and Input": `

        <section id="content" class="lesson-section">

            <h2>Assignment Statements and Input</h2>

            <p>
                Declaring a variable only sets aside a labeled space in memory — it doesn't
                give that variable a value on its own. To actually put a value into a
                variable, whether that value comes from your code or from something the
                user types, you need an assignment statement.
            </p>

            <h3>The Assignment Operator</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Assignment Operator ( = ):</span> allows a program to initialize or change the value stored in a variable. The value of the expression on the right is stored in the variable on the left.</p>
            </div>

            <p>
                Every variable must be assigned a value before it can be used in an
                expression, and that value must come from a compatible data type. A
                variable is <strong>initialized</strong> the first time it's assigned a
                value.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Statement</th>
                        <th>What Happens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>int age = 17;</code></td>
                        <td><code>age</code> is declared and initialized to <code>17</code> in a single statement</td>
                    </tr>
                    <tr>
                        <td><code>age = 18;</code></td>
                        <td>The value already stored in <code>age</code> is changed to <code>18</code></td>
                    </tr>
                    <tr>
                        <td><code>double gpa;<br>gpa = 3.9;</code></td>
                        <td><code>gpa</code> is declared first with no value, then initialized separately on the next line</td>
                    </tr>
                </tbody>
            </table>

            <p>
                During execution, an expression on the right side of <code>=</code> is
                evaluated down to a single value first — <em>then</em> that value is
                stored in the variable on the left. The <code>=</code> symbol in Java
                doesn't mean "equals" the way it does in math; it means "assign the value
                on the right to the variable on the left."
            </p>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    The use of assignment operators inside expressions — like
                    <code>a = b = 4;</code> or <code>a[i] += 5</code> — is outside the
                    scope of the AP Computer Science A course and exam.
                </p>
            </div>

            <h3>The Special Value: null</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">null:</span> a special literal value used to indicate that a reference is not associated with any object.</p>
            </div>

            <p>
                Reference type variables work a little differently from primitives when it
                comes to assignment. A reference variable can be assigned a new object, or
                it can be assigned <code>null</code> to explicitly say "this variable isn't
                pointing to anything right now."
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Statement</th>
                        <th>What It Means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>String name = "Akshaj";</code></td>
                        <td><code>name</code> references a new <code>String</code> object containing the text <code>"Akshaj"</code></td>
                    </tr>
                    <tr>
                        <td><code>String name = null;</code></td>
                        <td><code>name</code> is explicitly set to reference no object at all</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    <code>null</code> only applies to <strong>reference types</strong>, like
                    <code>String</code> or <code>ArrayList</code> — a primitive variable
                    such as an <code>int</code> or <code>boolean</code> can never be
                    <code>null</code>, since it always holds an actual value, not a
                    reference.
                </p>
            </div>

            <h3>Reading Input with the Scanner Class</h3>

            <p>
                Input can come in a variety of forms — tactile, audio, visual, or text. In
                this course, the <code>Scanner</code> class is the tool used to read text
                input typed in from the keyboard. Refer back to
                <strong>0.4 Java Quick Reference (JQR)</strong> for the full list of
                <code>Scanner</code> methods available to you on the exam.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>What It Does</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>Scanner input = new Scanner(System.in);</code></td>
                        <td>Creates a <code>Scanner</code> object connected to keyboard input</td>
                    </tr>
                    <tr>
                        <td><code>int age = input.nextInt();</code></td>
                        <td>Reads the next whole number typed by the user and assigns it to <code>age</code></td>
                    </tr>
                    <tr>
                        <td><code>String name = input.nextLine();</code></td>
                        <td>Reads an entire line of text typed by the user and assigns it to <code>name</code></td>
                    </tr>
                </tbody>
            </table>

            <p>
                Notice that reading input is really just another form of assignment — the
                value returned by a <code>Scanner</code> method is evaluated first, then
                stored in a variable on the left, exactly like any other assignment
                statement.
            </p>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    Any specific form of input from the user — beyond reading it with
                    <code>Scanner</code> — is outside the scope of the AP Computer Science A
                    course and exam.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What's the difference between = in Java and = in math?</summary>
                    <p>
                        In math, <code>=</code> states that two things are equal. In Java,
                        <code>=</code> is an action — it evaluates the expression on the
                        right and stores that resulting value into the variable on the
                        left. They read the same but mean very different things.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can I assign null to an int variable?</summary>
                    <p>
                        No. <code>null</code> only works with reference types. Primitive
                        types like <code>int</code>, <code>double</code>, and
                        <code>boolean</code> must always hold an actual value and can never
                        be <code>null</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What happens if I use a variable before assigning it a value?</summary>
                    <p>
                        Every variable must be assigned a value before it can be used in an
                        expression. Trying to use an uninitialized variable will cause a
                        compiler error, since Java has no value to work with yet.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why do I need a new Scanner object to read input?</summary>
                    <p>
                        The <code>Scanner</code> constructor connects your program to a
                        specific input source — in this case, <code>System.in</code>, which
                        represents the keyboard. Without creating that object first, there's
                        no connection for the program to read input through.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"null means zero, or an empty value"</h3>

            <p>
                <code>null</code> doesn't mean zero, an empty string, or "nothing" in a
                numeric sense — it specifically means a reference variable isn't pointing
                to any object at all. An empty <code>String</code> (<code>""</code>) is
                still a real object; <code>null</code> is the complete absence of one.
            </p>

            <h3>"nextInt() and nextLine() work the same way"</h3>

            <p>
                <code>nextInt()</code> reads only the next number, leaving the rest of the
                line (including the leftover newline character) unread. Calling
                <code>nextLine()</code> immediately afterward can return an empty string
                instead of the text you expected, since it picks up right where
                <code>nextInt()</code> left off.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Assignment statements and <code>Scanner</code> input are two places where
                small mistakes cause confusing bugs. Ask Starr to trace through your
                assignment statements step by step, or to explain why your
                <code>Scanner</code> input isn't behaving the way you expect.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Why did my nextLine() return an empty string right after
                    nextInt()?"
                </p>
            </div>

        </section>
    `

    ,

    "1.5 Casting and Range of Variables": `

        <section id="content" class="lesson-section">

            <h2>Casting and Range of Variables</h2>

            <p>
                Not every value fits neatly into the data type you want it in — sometimes
                you need to explicitly convert between <code>int</code> and
                <code>double</code>, and sometimes Java's own limits on how numbers are
                stored in memory will affect the result you get, whether you intend it to
                or not.
            </p>

            <h3>Casting Between Types</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Casting:</span> using the casting operators <code>(int)</code> and <code>(double)</code> to convert a value from one primitive numeric type to another.</p>
            </div>

            <p>
                The casting operators <code>(int)</code> and <code>(double)</code> can be
                used to convert a <code>double</code> value to an <code>int</code> value,
                or vice versa. Casting a <code>double</code> value to an <code>int</code>
                value causes the digits to the right of the decimal point to be
                <strong>truncated</strong> — cut off, not rounded.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Expression</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>(int) 9.7</code></td>
                        <td><code>9</code> — everything after the decimal point is simply cut off</td>
                    </tr>
                    <tr>
                        <td><code>(int) -9.7</code></td>
                        <td><code>-9</code> — truncation moves toward zero, not down</td>
                    </tr>
                    <tr>
                        <td><code>(double) 9</code></td>
                        <td><code>9.0</code> — an <code>int</code> converted to a <code>double</code> keeps its full value</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Casting isn't always something you have to write out yourself. Some code
                causes <code>int</code> values to be automatically cast — or
                <strong>widened</strong> — to <code>double</code> values, such as when an
                <code>int</code> and a <code>double</code> appear together in the same
                arithmetic expression.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Since casting a <code>double</code> to an <code>int</code> truncates
                    rather than rounds, values of type <code>double</code> can be rounded
                    to the nearest integer using <code>(int)(x + 0.5)</code> for
                    non-negative numbers, or <code>(int)(x - 0.5)</code> for negative
                    numbers.
                </p>
            </div>

            <h3>The Integer Class and Range</h3>

            <p>
                Integer values in Java are represented by values of type <code>int</code>,
                which are stored using a finite amount of memory — specifically, 4 bytes.
                Because that amount of memory is fixed, an <code>int</code> value must fall
                somewhere within a specific range.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Constant</th>
                        <th>What It Represents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>Integer.MAX_VALUE</code></td>
                        <td>The value of the largest possible <code>int</code> value</td>
                    </tr>
                    <tr>
                        <td><code>Integer.MIN_VALUE</code></td>
                        <td>The value of the smallest possible <code>int</code> value</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Therefore, an <code>int</code> value must be in the range
                <code>Integer.MIN_VALUE</code> to <code>Integer.MAX_VALUE</code>,
                inclusive. These constants both live in Java's built-in
                <code>Integer</code> class — refer back to
                <strong>0.4 Java Quick Reference (JQR)</strong> for the full list of
                <code>Integer</code> class members available on the exam.
            </p>

            <h3>Integer Overflow</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Integer Overflow:</span> what occurs when an expression evaluates to an int value outside the allowed range. The result is an int value in the allowed range, but not necessarily the value that was expected.</p>
            </div>

            <p>
                For example, adding <code>1</code> to <code>Integer.MAX_VALUE</code>
                doesn't cause an error — it silently wraps around to
                <code>Integer.MIN_VALUE</code>, since the true mathematical result can't
                fit inside 4 bytes of memory. This is one of the more dangerous kinds of
                logic errors, since Java gives no warning that it happened.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Expression</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>Integer.MAX_VALUE + 1</code></td>
                        <td><code>Integer.MIN_VALUE</code> — the value silently wraps around to the smallest possible <code>int</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Integer overflow won't crash your program or throw an exception — it
                    just quietly produces the wrong number. Always be suspicious of
                    unexpectedly negative results when working with very large
                    <code>int</code> calculations.
                </p>
            </div>

            <h3>Round-Off Error</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Round-Off Error:</span> what occurs when a double expression is more precise than can be stored in the allotted amount of memory, causing the result to be rounded to the nearest representable value.</p>
            </div>

            <p>
                Computers allot a specified amount of memory to store data based on the
                data type. If an expression would evaluate to a <code>double</code> that's
                more precise than can be stored in that allotted amount of memory, a
                round-off error occurs. The result is rounded to the nearest value that
                <em>can</em> actually be represented — this happens naturally with
                <code>double</code> values and can't be fully avoided by switching to
                <code>int</code> values, since <code>int</code> can't store decimals at
                all.
            </p>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    Other special decimal data types that can be used to avoid rounding
                    errors are outside the scope of the AP Computer Science A course and
                    exam.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Does casting a double to an int round the value?</summary>
                    <p>
                        No — casting truncates, meaning everything after the decimal point
                        is simply cut off rather than rounded. <code>(int) 9.9</code>
                        evaluates to <code>9</code>, not <code>10</code>. To round instead,
                        add or subtract <code>0.5</code> before casting.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What happens if a calculation goes above Integer.MAX_VALUE?</summary>
                    <p>
                        The result overflows and wraps around to a value near
                        <code>Integer.MIN_VALUE</code> instead of the mathematically
                        correct answer. Java doesn't throw an error when this happens, so
                        it can be easy to miss.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why do doubles sometimes show tiny rounding errors?</summary>
                    <p>
                        A <code>double</code> only has a fixed, finite amount of memory to
                        represent a decimal value. When the true value needs more precision
                        than that memory allows, Java rounds to the closest value it can
                        actually store, which can introduce very small errors.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>When does an int get automatically widened to a double?</summary>
                    <p>
                        Java automatically widens an <code>int</code> to a
                        <code>double</code> when the two types are mixed together in the
                        same expression, since no information is lost going from a whole
                        number to a decimal representation of that same number.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"Casting a double to an int rounds it"</h3>

            <p>
                Casting always truncates — it never rounds. <code>(int) 4.99</code>
                evaluates to <code>4</code>, which surprises many students expecting
                <code>5</code>. If you need rounding behavior, you have to add that logic
                yourself.
            </p>

            <h3>"Integer overflow will cause my program to crash"</h3>

            <p>
                It won't. Integer overflow is a silent logic error — the program keeps
                running and produces a value, just not the one you expected. This makes it
                more dangerous than a run-time error, since nothing alerts you that
                anything went wrong.
            </p>

            <h3>"Using double instead of int avoids all precision issues"</h3>

            <p>
                Switching to <code>double</code> avoids integer overflow, but introduces
                its own limitation: round-off error. A <code>double</code> still has a
                finite amount of memory, so extremely precise decimal values can still be
                rounded to the nearest representable value.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Casting, overflow, and round-off error are subtle enough that they trip up
                even experienced programmers. Ask Starr to trace through a casting
                expression step by step, or to explain why a specific calculation produced
                an unexpected result.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Walk me through what happens when Integer.MAX_VALUE has 1
                    added to it."
                </p>
            </div>

        </section>
    `,

    "1.6 Compound Assignment Operators": `

        <section id="content" class="lesson-section">

            <h2>Compound Assignment Operators</h2>

            <p>
                Updating a variable based on its own current value — like adding to a
                running total, or counting up by one — is one of the most common things a
                program does. Java gives you a shorthand for this called
                <strong>compound assignment operators</strong>, which combine an
                arithmetic operation and an assignment into a single step.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Compound assignment operator:</span> an operator that can be used in place of the assignment operator in numeric expressions. A compound assignment operator performs the indicated arithmetic operation between the value on the left and the value on the right, then assigns the result to the variable on the left.</p>
            </div>

            <h3>The Five Compound Assignment Operators</h3>

            <p>
                There are five compound assignment operators in this course, one for each
                arithmetic operator: <code>+=</code>, <code>-=</code>, <code>*=</code>,
                <code>/=</code>, and <code>%=</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Compound Form</th>
                        <th>Equivalent Long Form</th>
                        <th>What It Does</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>x += 5;</code></td>
                        <td><code>x = x + 5;</code></td>
                        <td>Adds 5 to <code>x</code> and stores the result back in <code>x</code></td>
                    </tr>
                    <tr>
                        <td><code>x -= 5;</code></td>
                        <td><code>x = x - 5;</code></td>
                        <td>Subtracts 5 from <code>x</code> and stores the result back in <code>x</code></td>
                    </tr>
                    <tr>
                        <td><code>x *= 5;</code></td>
                        <td><code>x = x * 5;</code></td>
                        <td>Multiplies <code>x</code> by 5 and stores the result back in <code>x</code></td>
                    </tr>
                    <tr>
                        <td><code>x /= 5;</code></td>
                        <td><code>x = x / 5;</code></td>
                        <td>Divides <code>x</code> by 5 and stores the result back in <code>x</code></td>
                    </tr>
                    <tr>
                        <td><code>x %= 5;</code></td>
                        <td><code>x = x % 5;</code></td>
                        <td>Stores the remainder of <code>x</code> divided by 5 back in <code>x</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Whenever you see a compound assignment operator, mentally expand it
                    back into its long form — <code>x *= 2</code> becomes
                    <code>x = x * 2</code> — to double-check exactly what value is being
                    assigned back to the variable.
                </p>
            </div>

            <h3>Post-Increment and Post-Decrement</h3>

            <p>
                Adding or subtracting exactly <code>1</code> from a numeric variable
                happens so often — especially when counting or stepping through a loop —
                that Java gives it its own dedicated shorthand, even shorter than a
                compound assignment operator.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Post-increment / post-decrement operator:</span> the post-increment operator <code>++</code> and post-decrement operator <code>--</code> are used to add or subtract 1 from the stored value of a numeric variable. The new value is assigned to the variable.</p>
            </div>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>Equivalent Long Form</th>
                        <th>What It Does</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>count++;</code></td>
                        <td><code>count = count + 1;</code></td>
                        <td>Adds 1 to <code>count</code> and stores the result back in <code>count</code></td>
                    </tr>
                    <tr>
                        <td><code>count--;</code></td>
                        <td><code>count = count - 1;</code></td>
                        <td>Subtracts 1 from <code>count</code> and stores the result back in <code>count</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    The use of increment and decrement operators in prefix form (e.g.,
                    <code>++x</code>) is outside the scope of the AP Computer Science A
                    course and exam. The use of increment and decrement operators inside
                    other expressions (e.g., <code>arr[x++]</code>) is also outside the
                    scope of the course and exam.
                </p>
            </div>

            <p>
                Because prefix form and use inside other expressions are excluded, you'll
                only ever see <code>++</code> and <code>--</code> used on their own,
                immediately after a variable name, as a standalone statement — such as
                <code>count++;</code> on its own line.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A compound assignment operator can update a variable by <em>any</em>
                    amount, while <code>++</code> and <code>--</code> can only ever change
                    a variable by exactly 1. If you need to step by 2 or more, you'll need
                    <code>+=</code> or <code>-=</code> instead.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about compound
                assignment and increment/decrement operators.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Is x += 5 exactly the same as x = x + 5?</summary>
                    <p>
                        Within the scope of this course, yes — <code>x += 5</code> performs
                        the addition and reassigns the result to <code>x</code>, just like
                        writing it out in long form. The compound version is simply a
                        shorter way to write the same operation.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can I use ++ to add a number other than 1?</summary>
                    <p>
                        No. The <code>++</code> and <code>--</code> operators only ever
                        add or subtract exactly <code>1</code>. To change a variable by any
                        other amount, use a compound assignment operator like
                        <code>+=</code> instead.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What's the difference between count++ and ++count?</summary>
                    <p>
                        Both forms exist in Java, but this course and exam only cover
                        postfix form (<code>count++</code>). Prefix form
                        (<code>++count</code>) is explicitly outside the scope of the AP
                        CSA course and exam, so you won't be tested on any difference
                        between them.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can I write arr[x++] to increment while accessing an array?</summary>
                    <p>
                        Not for this course — using increment or decrement operators
                        inside another expression, like an array index, is explicitly
                        outside the scope of the AP CSA course and exam. Keep
                        <code>x++</code> as its own standalone statement.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does %= work the same way as the other compound operators?</summary>
                    <p>
                        Yes — <code>x %= 5</code> is equivalent to <code>x = x % 5</code>,
                        computing the remainder of <code>x</code> divided by 5 and storing
                        that remainder back into <code>x</code>.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"count++ and count += 1 behave differently"</h3>

            <p>
                Within the scope of this course, they produce the same result — both add
                exactly 1 to <code>count</code> and store the new value back in
                <code>count</code>. The only difference is which shorthand you choose to
                write.
            </p>

            <h3>"I can write ++count to increment before using the value"</h3>

            <p>
                Prefix form (<code>++count</code>) exists in the Java language, but it's
                explicitly excluded from the AP CSA course and exam. Stick to postfix form
                (<code>count++</code>) as its own standalone statement.
            </p>

            <h3>"Compound assignment operators only work with whole numbers"</h3>

            <p>
                Compound assignment operators work with both <code>int</code> and
                <code>double</code> values — the same rules that apply to regular
                arithmetic expressions (like integer division truncating) still apply when
                that same operation is written in compound form.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Compound assignment and increment/decrement operators show up constantly
                once loops enter the picture in Unit 2. Ask Starr to trace through a
                variable's value step by step as a series of these operators run.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "If x starts at 10, what is x after x -= 3; then x++; then
                    x *= 2;?"
                </p>
            </div>

        </section>
    `,

    "1.7 Application Program Interface (API) and Libraries": `

        <section id="content" class="lesson-section">

            <h2>Application Program Interface (API) and Libraries</h2>

            <p>
                You've already used built-in tools like <code>System.out.println()</code>
                and the arithmetic operators, but Java also comes with a huge collection
                of pre-written, reusable code that you can call on without writing it
                yourself. Knowing how to find and read documentation for that code is just
                as important as knowing how to write your own.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Library:</span> a collection of classes. Libraries group related classes together so they can be reused across many different programs.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Application Programming Interface (API):</span> a specification that informs the programmer how to use the classes found in a library, without needing to see or understand how those classes are implemented internally.</p>
            </div>

            <p>
                Documentation found in API specifications and libraries is essential to
                understanding the attributes and behaviors of a class defined by the API.
                Classes in the APIs and libraries you'll use in this course are grouped
                into <strong>packages</strong>, and existing classes and class libraries
                can be used to create objects rather than building everything from
                scratch.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Think of an API like an appliance's control panel: you don't need to
                    know how the internal wiring works to use the buttons correctly. The
                    API tells you what each "button" (method) does and how to use it — the
                    library is the appliance itself.
                </p>
            </div>

            <h3>Classes, Objects, and Methods</h3>

            <p>
                A <strong>class</strong> defines a specific reference type, acting as a
                blueprint for a category of objects. It's important to understand the
                relationship between a class and the objects created from it, along with
                the methods that let those objects do things.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Term</th>
                        <th>What It Means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Class</td>
                        <td>A blueprint that defines a specific reference type — what attributes and behaviors any object created from it will have</td>
                    </tr>
                    <tr>
                        <td>Object</td>
                        <td>A specific instance created from a class, built using that class's blueprint</td>
                    </tr>
                    <tr>
                        <td>Method</td>
                        <td>A piece of code, defined inside a class, that can be called to make an object perform a behavior</td>
                    </tr>
                </tbody>
            </table>

            <h3>Attributes and Behaviors</h3>

            <p>
                Every class you use from a library — and every class you eventually write
                yourself — is described in terms of two things: what it stores, and what
                it can do.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Attribute:</span> data related to a class, stored in variables. Attributes describe the state of an object.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Behavior:</span> what instances of a class can do, or what can be done with them. Behaviors are defined by methods.</p>
            </div>

            <p>
                For example, a <code>String</code> object's attribute is the sequence of
                characters it stores, while behaviors like <code>length()</code> or
                <code>substring()</code> are methods that let you interact with or ask
                questions about that stored data.
            </p>

            <div class="tip-box">
                <h3>📘 Reading an API Entry</h3>
                <p>
                    When you look up a class in an API like the Java Quick Reference,
                    identify its attributes (what data it holds) separately from its
                    behaviors (what methods it offers) — this split is exactly how the AP
                    CSA exam expects you to describe a class found in a library.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about APIs,
                libraries, and the relationship between classes and objects.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What's the difference between a library and an API?</summary>
                    <p>
                        A library is the actual collection of classes — the code itself.
                        An API is the specification that tells you how to use those
                        classes, without requiring you to understand how they're
                        implemented internally.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Is a class the same thing as an object?</summary>
                    <p>
                        No. A class is the blueprint that defines a reference type, while
                        an object is a specific instance created from that blueprint. You
                        can create many different objects from the same class.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>How do I tell an attribute apart from a behavior?</summary>
                    <p>
                        Attributes are data, stored in variables, that describe an object's
                        state. Behaviors are actions, defined by methods, that describe
                        what an object can do or what can be done with it.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Do I need to know how a library class is implemented internally?</summary>
                    <p>
                        No — that's the whole point of an API. It lets you use a class's
                        attributes and behaviors correctly just by reading its
                        documentation, without needing to see or understand the code
                        behind it.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What does it mean that classes are grouped into packages?</summary>
                    <p>
                        Related classes in Java's libraries are organized into packages so
                        they're easier to find and manage — classes that work with text
                        might be grouped separately from classes that work with
                        collections, for example.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"A class and an object are interchangeable terms"</h3>

            <p>
                A class is the blueprint; an object is a specific thing built from that
                blueprint. Saying "create a class" when you mean "create an object" is a
                common mix-up — you create <em>objects</em> from a class, not more
                classes.
            </p>

            <h3>"I need to read a library's source code to use it"</h3>

            <p>
                The entire purpose of an API is to let you use a class correctly without
                reading its internal implementation. Documentation describing the class's
                attributes and behaviors is all you need.
            </p>

            <h3>"Attributes and behaviors are the same thing"</h3>

            <p>
                Attributes are stored data describing an object's state, while behaviors
                are actions defined by methods. A <code>String</code>'s characters are an
                attribute; calling <code>length()</code> to check how many characters it
                has is a behavior.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                APIs and libraries become second nature once you start reading real
                documentation. Ask Starr to walk through a class from the Java Quick
                Reference and identify its attributes versus its behaviors.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Looking at the ArrayList class, what are its attributes
                    and what are its behaviors?"
                </p>
            </div>

        </section>
    `,

    "1.8 Documentation with Comments": `

        <section id="content" class="lesson-section">

            <h2>Documentation with Comments</h2>

            <p>
                Code that works isn't always code that's easy to understand — not just
                for someone else reading it, but even for you, months later. Java lets
                you document your code directly alongside it using
                <strong>comments</strong>, and lets you describe exactly what a method
                expects and guarantees using <strong>preconditions</strong> and
                <strong>postconditions</strong>.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Comment:</span> text written for both the original programmer and other programmers to understand the code and its functionality, but which is ignored by the compiler and not executed when the program runs.</p>
            </div>

            <h3>Three Types of Comments</h3>

            <p>
                Java supports three types of comments, and each one is suited to a
                different purpose in your code.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Syntax</th>
                        <th>Type</th>
                        <th>What It's Used For</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>// comment</code></td>
                        <td>Single-line comment</td>
                        <td>Generates a comment on one line — everything after the <code>//</code> on that line is ignored by the compiler</td>
                    </tr>
                    <tr>
                        <td><code>/* comment */</code></td>
                        <td>Block comment</td>
                        <td>Generates a block of comments, potentially spanning multiple lines — everything between <code>/*</code> and <code>*/</code> is ignored by the compiler</td>
                    </tr>
                    <tr>
                        <td><code>/** comment */</code></td>
                        <td>Javadoc comment</td>
                        <td>A special block comment used to generate official API documentation — typically placed directly above a class or method to describe it</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A simple way to remember the difference: one slash-slash (<code>//</code>)
                    for a quick, one-line note; slash-star (<code>/* */</code>) for a
                    longer explanation spanning several lines; and slash-star-star
                    (<code>/** */</code>) specifically when you're documenting a class or
                    method for an API.
                </p>
            </div>

            <p>
                Regardless of which type is used, comments are written for people, not
                the computer — they're always ignored by the compiler and never affect
                how the program runs.
            </p>

            <h3>Preconditions and Postconditions</h3>

            <p>
                Comments aren't just for describing <em>what</em> code does in general —
                Javadoc-style documentation often describes a method's requirements and
                guarantees using two specific terms: preconditions and postconditions.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Precondition:</span> a condition that must be true just prior to the execution of a method in order for it to behave as expected. There is no expectation that the method will check to ensure preconditions are satisfied.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Postcondition:</span> a condition that must always be true after the execution of a method. Postconditions describe the outcome of the execution in terms of what is being returned or the current value of the attributes of an object.</p>
            </div>

            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Precondition</th>
                        <th>Postcondition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>When it applies</td>
                        <td>Before the method runs</td>
                        <td>After the method finishes running</td>
                    </tr>
                    <tr>
                        <td>What it describes</td>
                        <td>What must already be true for the method to behave as expected</td>
                        <td>What is guaranteed to be true once the method completes — its return value or an object's resulting attributes</td>
                    </tr>
                    <tr>
                        <td>Who enforces it</td>
                        <td>Not the method itself — there's no expectation the method checks that its preconditions are satisfied</td>
                        <td>The method's own logic, by correctly implementing its intended behavior</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    A precondition is a promise the <em>caller</em> makes to the method —
                    the method assumes it's true and isn't required to verify it. If a
                    precondition is violated, the method may not behave as expected, and
                    that's the responsibility of whoever called it incorrectly.
                </p>
            </div>

            <div class="tip-box">
                <h3>📘 Example</h3>
                <p>
                    For a method that returns the square root of a number, a precondition
                    might be that the input is non-negative. A postcondition might be that
                    the returned value, when squared, equals the original input.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about comments,
                preconditions, and postconditions.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Do comments affect how my program runs?</summary>
                    <p>
                        No. Comments are ignored entirely by the compiler and are never
                        executed — they exist purely to help programmers understand the
                        code, not to change its behavior.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>When should I use a Javadoc comment instead of a regular block comment?</summary>
                    <p>
                        Use a Javadoc comment (<code>/** */</code>) when documenting a
                        class or method for official API-style documentation. Use a
                        regular block comment (<code>/* */</code>) for general
                        multi-line notes that aren't meant to generate documentation.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does a method check whether its preconditions are met?</summary>
                    <p>
                        No — there's no expectation that a method verifies its own
                        preconditions are satisfied. It simply assumes they're true and
                        may not behave as expected if they aren't.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What exactly does a postcondition describe?</summary>
                    <p>
                        A postcondition describes what's guaranteed to be true once a
                        method finishes executing — typically in terms of the value it
                        returns or the resulting state of an object's attributes.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can a method have more than one precondition or postcondition?</summary>
                    <p>
                        Yes. A method can require multiple conditions to be true before it
                        runs, and can guarantee multiple outcomes once it finishes — both
                        are typically listed together in the method's documentation.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"A method will check its preconditions for me"</h3>

            <p>
                There's no expectation that a method verifies its preconditions are
                satisfied — it's the caller's responsibility to ensure they're true
                beforehand. If a precondition isn't met, the method may behave
                unexpectedly.
            </p>

            <h3>"Preconditions and postconditions are just comments — they don't matter"</h3>

            <p>
                While they're often written as comments, preconditions and postconditions
                describe real requirements and guarantees about a method's behavior.
                Ignoring them can lead to a method being used incorrectly or its result
                being misunderstood.
            </p>

            <h3>"// and /* */ comments are basically interchangeable"</h3>

            <p>
                They differ in scope: <code>//</code> only comments out the rest of a
                single line, while <code>/* */</code> can span multiple lines. Using
                <code>//</code> when you meant to comment out several lines will leave
                most of that code active.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Writing clear preconditions and postconditions is a skill that pays off on
                FRQs, where you're often asked to describe a method's expected behavior.
                Ask Starr to help you write documentation for a method you're working on.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Help me write a precondition and postcondition for a
                    method that removes the first element of an ArrayList."
                </p>
            </div>

        </section>
    `,

    "1.9 Method Signatures": `

        <section id="content" class="lesson-section">

            <h2>Method Signatures</h2>

            <p>
                Every method you've called so far — <code>Math.sqrt()</code>,
                <code>println()</code>, and others — has a very specific structure behind
                it. This lesson takes that structure apart piece by piece, so that reading
                or writing a method definition becomes a matter of recognizing each part
                rather than guessing at syntax.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Method:</span> a named block of code that only runs when it is called. A <span class="vocab-term">block of code</span> is any section of code that is enclosed in braces <code>{ }</code>.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Procedural abstraction:</span> the ability to use a method by knowing what the method does, even if you don't know how the method was written.</p>
            </div>

            <p>
                That last idea is worth sitting with. Every time you've called
                <code>Math.sqrt()</code>, you've relied on procedural abstraction — you
                know it returns a square root without ever having seen how it's
                implemented internally. Writing your own methods gives other programmers
                — and future you — that same convenience.
            </p>

            <h3>Anatomy of a Method</h3>

            <p>
                Here's a complete method definition, with each part color-coded so you can
                see exactly how the pieces fit together:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:28px 32px; margin:22px 0 14px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2.1; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">int</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">calculateArea</span><span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">int width</span><span style="color:#9CA3AF;">, </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">int height</span><span style="color:#9CA3AF;">) </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">{</span>
    int area = width * height;
    return area;
<span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">}</span></pre>
            </div>

            <div style="display:flex; flex-direction:column; gap:12px; max-width:900px; margin-bottom:22px;">

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#556EE6; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Return type — <code>int</code>:</strong> the data type of the value this method sends back to whatever called it. This method promises to return an <code>int</code> value.</p>
                </div>

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#8FBF2E; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Method name — <code>calculateArea</code>:</strong> the identifier used to call this method elsewhere in the program.</p>
                </div>

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#0CC267; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Parameter list — <code>(int width, int height)</code>:</strong> the variables declared in the method header that can be used inside the body of the method. Each parameter needs both a type and a name; multiple parameters are separated by commas.</p>
                </div>

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#D6A400; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Block of code — <code>{ }</code>:</strong> the braces mark where the method's body begins and ends. Everything the method actually does lives between them.</p>
                </div>

            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Parameter:</span> a variable declared in the header of a method or constructor that can be used inside the body of the method. This allows values or arguments to be passed to and used by a method or constructor.</p>
            </div>

            <h3>The Method Signature Itself</h3>

            <p>
                It's easy to assume "method signature" refers to the entire header shown
                above, but the term is more specific than that.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Method signature:</span> for a method with parameters, consists of the method name and the ordered list of parameter types. For a method without parameters, consists of the method name and an empty parameter list.</p>
            </div>

            <p>
                Notice what's deliberately left out — the return type and the parameter
                names are <em>not</em> part of the signature. Only the method name and the
                types of the parameters, in order, are used to identify it.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Method Header</th>
                        <th>Method Signature</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>int calculateArea(int width, int height)</code></td>
                        <td><code>calculateArea(int, int)</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>double calculateArea(double width, double height)</code></td>
                        <td><code>calculateArea(double, double)</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>void printWelcomeMessage()</code></td>
                        <td><code>printWelcomeMessage()</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Notice the first two rows share a method name but take different
                    parameter types — that's exactly what makes them two distinct
                    signatures rather than a conflict. You'll see why that distinction
                    matters later, when it comes to overloading.
                </p>
            </div>

            <h3>void vs. Non-void Methods</h3>

            <p>
                The return type in a method's header tells you what kind of value, if
                any, the method sends back once it finishes running.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">void method:</span> a method that does not have a return value, and is therefore not called as part of an expression.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">non-void method:</span> a method that returns a value that is the same type as the return type in the header. To use the return value when calling a non-void method, it must be stored in a variable or used as part of an expression.</p>
            </div>

            <table class="content-table" style="table-layout:fixed; width:100%; max-width:900px;">
                <colgroup>
                    <col style="width:22%;">
                    <col style="width:39%;">
                    <col style="width:39%;">
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>void Method</th>
                        <th>Non-void Method</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;">Return type in header</td>
                        <td style="white-space:normal;"><code>void</code></td>
                        <td style="white-space:normal;">An actual type, e.g. <code>int</code>, <code>double</code>, <code>String</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;">Example header</td>
                        <td style="white-space:normal;"><code>void printWelcomeMessage()</code></td>
                        <td style="white-space:normal;"><code>int calculateArea(int width, int height)</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;">Called as part of an expression?</td>
                        <td style="white-space:normal;">No — it produces no value to use</td>
                        <td style="white-space:normal;">Yes — its return value can be stored or used directly</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Trying to store the result of a <code>void</code> method in a variable
                    — for example, <code>int x = printWelcomeMessage();</code> — is a
                    compile-time error, since a <code>void</code> method has no value to
                    give back.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about method
                signatures and method structure.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Is the method signature the same as the method header?</summary>
                    <p>
                        No. The header includes the return type, method name, and full
                        parameter list with names. The signature only includes the method
                        name and the ordered list of parameter <em>types</em> — the return
                        type and parameter names are left out entirely.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Do parameter names matter for the signature?</summary>
                    <p>
                        No — only the types matter, and only in the order they appear.
                        <code>calculateArea(int width, int height)</code> and
                        <code>calculateArea(int a, int b)</code> both have the exact same
                        signature: <code>calculateArea(int, int)</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can a method have zero parameters?</summary>
                    <p>
                        Yes. A method without parameters still has a signature — it's just
                        the method name followed by an empty parameter list, like
                        <code>printWelcomeMessage()</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why can't I print the result of a void method?</summary>
                    <p>
                        A <code>void</code> method doesn't produce a value at all, so
                        there's nothing to print, store, or use in an expression. Only
                        non-void methods return something you can work with afterward.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"The method signature includes the return type"</h3>

            <p>
                It doesn't. Two methods can share a name and parameter types but differ in
                return type, and Java still considers that a conflict rather than a valid
                distinction — the signature is built only from the name and parameter
                types.
            </p>

            <h3>"A block of code and a method are the same thing"</h3>

            <p>
                A block of code is simply any section wrapped in braces — a method's body
                is one example, but if statements and loops also use blocks of code. A
                method is specifically a <em>named</em> block that only runs when called.
            </p>

            <h3>"void methods are broken or incomplete"</h3>

            <p>
                A <code>void</code> method isn't missing anything — it's intentionally
                designed to perform an action, like printing a message, rather than
                produce a value to be used elsewhere.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Method signatures come up constantly once overloading and method calls are
                introduced, so it's worth being able to identify one on sight. Ask Starr
                to quiz you on a few method headers and their matching signatures.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Give me three method headers and have me identify each
                    one's signature."
                </p>
            </div>

        </section>
    `,

    "1.10 Calling Class Methods": `

        <section id="content" class="lesson-section">

            <h2>Calling Class Methods</h2>

            <p>
                Not every method belongs to an individual object. Some methods belong to
                the class itself, and can be used without ever creating an object at all
                — these are called <strong>class methods</strong>, and the keyword
                <code>static</code> is what marks a method as one.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Class method:</span> a method associated with the class itself, not with instances of the class. Class methods include the keyword <code>static</code> in the header before the method name.</p>
            </div>

            <h3 style="color:#B45309;">🟠 The <code>static</code> Keyword</h3>

            <p>
                Adding <code>static</code> to a method's header is what makes it a class
                method rather than an instance method. Its position matters — it's
                written after the access modifier and before the return type.
            </p>

            <pre style="background:#1F2937; color:#E5E7EB; padding:22px 26px; border-radius:12px; font-family:'Courier New', monospace; font-size:1.05rem; line-height:2; overflow-x:auto; max-width:900px; margin-bottom:22px;"><code><span style="color:#F59E0B; font-weight:700;">public</span> <span style="color:#FF7AB6; font-weight:700;">static</span> <span style="color:#BEFF62; font-weight:700;">double</span> <span style="color:#61AFEF; font-weight:700;">sqrt</span><span style="color:#E5E7EB;">(</span><span style="color:#61AFEF;">double x</span><span style="color:#E5E7EB;">) { ... }</span></code></pre>

            <p>
                You've actually already been calling class methods throughout this
                course — <code>Math.sqrt()</code>, <code>Math.pow()</code>, and
                <code>Integer.parseInt()</code> are all <code>static</code> methods
                defined in their respective classes.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Whenever you see the class name used directly to call a method — like
                    <code>Math.random()</code> — that's your signal the method is
                    <code>static</code>. You'll learn about the other kind of method,
                    instance methods, later in this unit, which instead require an object
                    to be created first.
                </p>
            </div>

            <h3>Calling a Class Method</h3>

            <p>
                Class methods are typically called using the class name along with the
                dot operator. When the method call occurs in the defining class, the use
                of the class name is optional in the call.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Context</th>
                        <th>How to Call It</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>From outside the defining class</td>
                        <td>Class name, dot operator, method name</td>
                        <td><code>Math.sqrt(25)</code></td>
                    </tr>
                    <tr>
                        <td>From inside the defining class</td>
                        <td>Method name alone — the class name is optional</td>
                        <td><code>sqrt(25)</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>Scope and Class Methods</h3>

            <p>
                Because a class method belongs to the class itself rather than to any one
                object, it exists — and can be called — for the entire time the program
                runs, without ever needing an object to be instantiated first. This is
                part of why methods like <code>Math.sqrt()</code> can be called
                immediately, using only the class name, with no setup required beforehand.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    A class method cannot directly access data that belongs to a specific
                    object, since it isn't tied to any individual instance. This
                    distinction becomes especially important once you begin writing your
                    own classes with a mix of <code>static</code> and non-<code>static</code>
                    members in Unit 3.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about class methods
                and the <code>static</code> keyword.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Do I need to create an object to call a class method?</summary>
                    <p>
                        No. Class methods are associated with the class itself, not
                        instances of the class, so they can be called directly using the
                        class name without ever creating an object.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>How can I tell a method is static just by looking at how it's called?</summary>
                    <p>
                        If a method is called using the class name directly, like
                        <code>Integer.parseInt("42")</code>, that's a strong sign it's a
                        <code>static</code> class method rather than an instance method.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why is the class name optional sometimes?</summary>
                    <p>
                        When a method call occurs inside the same class that defines the
                        method, Java already knows which class the method belongs to, so
                        the class name can be left off and the method name alone is
                        enough.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Where exactly does static go in a method header?</summary>
                    <p>
                        It's placed after the access modifier and before the return type
                        — for example, <code>public static double sqrt(double x)</code>.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"I always have to write the class name to call a class method"</h3>

            <p>
                The class name is only required when calling the method from outside its
                defining class. From inside the class that defines it, the method name
                alone is enough — the class name is optional in that context.
            </p>

            <h3>"static just means the method runs faster"</h3>

            <p>
                <code>static</code> has nothing to do with performance — it means the
                method belongs to the class itself rather than to any individual object,
                which is why it can be called without creating an instance first.
            </p>

            <h3>"Every method in a class is automatically static"</h3>

            <p>
                Only methods explicitly marked with the <code>static</code> keyword in
                their header are class methods. Without <code>static</code>, a method is
                an instance method, which requires an object to be created before it can
                be called — covered later in this unit.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Spotting the difference between class methods and instance methods gets
                much easier with practice. Ask Starr to quiz you on whether a given method
                call requires <code>static</code> or an object to already exist.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Is Math.pow(2, 3) a call to a static method? How can you
                    tell?"
                </p>
            </div>

        </section>
    `
    ,

"1.11 Math Class": `

        <section id="content" class="lesson-section">

            <h2>Math Class</h2>

            <p>
                The <code>Math</code> class is part of the <code>java.lang</code> package.
                Classes in the <code>java.lang</code> package are available by default,
                which is why you've been able to use <code>Math</code> methods this whole
                time without ever importing anything.
            </p>

            <h3>Why Every Math Method Is static</h3>

            <p>
                Every method in the <code>Math</code> class is a <strong>class method</strong>
                — meaning every single one includes the keyword <code>static</code> in its
                header. That's not a coincidence. It doesn't make sense to build an
                individual <code>Math</code> object just to compute a square root — a
                square root isn't a property that belongs to one particular object, it's
                a general operation that belongs to the class itself. That's exactly what
                <code>static</code> signals, and it's why every call takes the form
                <code>Math.methodName()</code> rather than requiring <code>new Math()</code>
                anywhere in your code.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 32px; margin:22px 0; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2.1; color:#E5E7EB; white-space:pre;"><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">static</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">double</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">sqrt</span><span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">double a</span><span style="color:#9CA3AF;">)</span></pre>
            </div>

            <p style="max-width:900px;">
                The highlighted <code>static</code> keyword is what makes this a class
                method belonging to <code>Math</code> itself, exactly as covered in
                the previous lesson on calling class methods.
            </p>

            <h3>The Java Quick Reference Math Methods</h3>

            <p>
                The following <code>Math</code> class methods — including what they do and
                when they're used — are part of the Java Quick Reference (JQR), meaning
                they're provided to you on the exam rather than something you need to
                memorize cold.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>What It Does</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>static int abs(int x)</code></td>
                        <td style="white-space:normal;">Returns the absolute value of an <code>int</code> value</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>static double abs(double x)</code></td>
                        <td style="white-space:normal;">Returns the absolute value of a <code>double</code> value</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>static double pow(double base, double exponent)</code></td>
                        <td style="white-space:normal;">Returns the value of the first parameter raised to the power of the second parameter</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>static double sqrt(double x)</code></td>
                        <td style="white-space:normal;">Returns the nonnegative square root of a <code>double</code> value</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>static double random()</code></td>
                        <td style="white-space:normal;">Returns a <code>double</code> value greater than or equal to <code>0.0</code> and less than <code>1.0</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Notice there are two overloaded versions of <code>abs()</code> — one
                    for <code>int</code>, one for <code>double</code>. This is exactly the
                    kind of overloading covered in the method signatures lesson: same
                    method name, different parameter types, different signatures.
                </p>
            </div>

            <h3>Manipulating Math.random()</h3>

            <p>
                On its own, <code>Math.random()</code> only ever returns a value in one
                fixed range: greater than or equal to <code>0.0</code>, and strictly less
                than <code>1.0</code>. That's rarely the range a program actually needs, so
                the returned value has to be manipulated using arithmetic and casting to
                produce an <code>int</code> or <code>double</code> within a different
                specified range.
            </p>

            <p>
                Each range below is inclusive at the minimum value, meaning the minimum
                value can be produced, and either inclusive or exclusive at the maximum
                value, meaning the maximum value either can or cannot be produced.
            </p>

            <h4 style="margin-bottom:14px; color:#1F2937; font-weight:700;">Exclusive of the Maximum</h4>

            <div style="background:#0F172A; border-radius:14px; padding:22px 28px; margin:0 0 14px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; color:#E5E7EB; white-space:pre-wrap;">(int) (Math.random() * (max - min)) + min</pre>
            </div>

            <p style="max-width:900px;">
                This formula produces a random <code>int</code> that can equal
                <code>min</code>, but will never reach <code>max</code> — the range runs
                from <code>min</code> up to, but not including, <code>max</code>.
            </p>

            <h4 style="margin-bottom:14px; color:#1F2937; font-weight:700;">Inclusive of the Maximum</h4>

            <div style="background:#0F172A; border-radius:14px; padding:22px 28px; margin:0 0 14px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; color:#E5E7EB; white-space:pre-wrap;">(int) (Math.random() * ((max - min) + 1)) + min</pre>
            </div>

            <p style="max-width:900px;">
                Adding <code>1</code> before multiplying widens the range just enough that
                <code>max</code> itself becomes a possible result, alongside every value
                from <code>min</code> up to <code>max</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Formula</th>
                        <th>Possible Results</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;">Random int, 0 up to (not including) 10</td>
                        <td style="white-space:normal;"><code>(int) (Math.random() * (10 - 0)) + 0</code></td>
                        <td style="white-space:normal;"><code>0</code> through <code>9</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;">Random int, 1 through 6 (a die roll)</td>
                        <td style="white-space:normal;"><code>(int) (Math.random() * ((6 - 1) + 1)) + 1</code></td>
                        <td style="white-space:normal;"><code>1</code> through <code>6</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    The <code>(int)</code> cast at the front is what actually truncates
                    the decimal result of the multiplication down to a whole number.
                    Forgetting the cast leaves you with a <code>double</code> instead of
                    the <code>int</code> the formula is meant to produce.
                </p>
            </div>

            <h3>Producing a Random double Instead</h3>

            <p>
                Everything above uses <code>(int)</code> to force the result into a whole
                number, but that cast is only there because the goal was an <code>int</code>.
                If a random <code>double</code> is what's actually needed, the cast can be
                dropped entirely — <code>Math.random()</code> already returns a
                <code>double</code>, so no truncation is required at all.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:22px 28px; margin:0 0 14px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; color:#E5E7EB; white-space:pre-wrap;">min + (Math.random() * (max - min))</pre>
            </div>

            <p style="max-width:900px;">
                This produces a <code>double</code> value that can equal <code>min</code>,
                but will always stay strictly less than <code>max</code> — the same
                inclusive-minimum, exclusive-maximum behavior <code>Math.random()</code>
                has on its own, just stretched across a different range.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Formula</th>
                        <th>Possible Results</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;">Random double, 0.0 up to (not including) 1.0</td>
                        <td style="white-space:normal;"><code>Math.random()</code></td>
                        <td style="white-space:normal;">Any <code>double</code> in <code>[0.0, 1.0)</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;">Random double, 5.0 up to (not including) 10.0</td>
                        <td style="white-space:normal;"><code>5.0 + (Math.random() * (10.0 - 5.0))</code></td>
                        <td style="white-space:normal;">Any <code>double</code> in <code>[5.0, 10.0)</code></td>
                    </tr>
                </tbody>
            </table>

            <h4 style="margin-bottom:14px; color:#1F2937; font-weight:700;">What About Inclusive of the Maximum?</h4>

            <p style="max-width:900px;">
                With <code>int</code> values, adding <code>1</code> before multiplying was
                enough to make the maximum reachable, because an <code>int</code> range is
                a finite list of whole numbers. A <code>double</code> range doesn't work
                that way — <code>Math.random()</code> is defined to return a value
                strictly less than <code>1.0</code>, so no amount of rearranging the
                formula <code>min + (Math.random() * (max - min))</code> can make
                <code>max</code> itself reachable. There is no way to make the maximum
                inclusive using that version of the formula at all.
            </p>

            <p style="max-width:900px;">
                What can be done instead is flipping which end of the range gets excluded.
                Subtracting from <code>max</code> rather than adding to <code>min</code>
                makes <code>max</code> the starting point of the range instead of its
                upper limit:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:22px 28px; margin:0 0 14px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; color:#E5E7EB; white-space:pre-wrap;">double randomNum = max - Math.random() * (max - min);</pre>
            </div>

            <p style="max-width:900px;">
                Since <code>Math.random()</code> can return <code>0.0</code>, subtracting
                <code>0.0</code> from <code>max</code> leaves <code>max</code> itself as a
                possible result — making the maximum inclusive. But because
                <code>Math.random()</code> can never actually reach <code>1.0</code>, the
                subtraction can never grow large enough to bring the result all the way
                down to <code>min</code>, which makes the minimum excluded instead. The
                trade-off flips: this version includes <code>max</code> but excludes
                <code>min</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Formula</th>
                        <th>Possible Results</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;">Random double, 5.0 (excluded) up to and including 10.0</td>
                        <td style="white-space:normal;"><code>10.0 - Math.random() * (10.0 - 5.0)</code></td>
                        <td style="white-space:normal;">Any <code>double</code> in <code>(5.0, 10.0]</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    This inverted formula doesn't give you an inclusive minimum
                    <em>and</em> maximum at the same time — it only moves which single end
                    of the range is inclusive. If both ends genuinely need to be reachable,
                    that isn't something <code>Math.random()</code> can produce on its own.
                </p>
            </div>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Casting to <code>(int)</code> and truncating is exactly what makes the
                    <code>int</code> formulas behave differently from this one — it's the
                    cast, not <code>Math.random()</code> itself, that turns a smooth range
                    of decimal values into a fixed set of whole numbers. No cast, no
                    truncation, and the result stays a <code>double</code>.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Why is every Math method static?</summary>
                    <p>
                        Because operations like square roots and absolute values don't
                        belong to any individual object — they're general calculations
                        that belong to the <code>Math</code> class as a whole, which is
                        exactly what the <code>static</code> keyword represents.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What range does Math.random() return by itself?</summary>
                    <p>
                        A <code>double</code> greater than or equal to <code>0.0</code>
                        and strictly less than <code>1.0</code> — it never actually
                        reaches <code>1.0</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>When do I add 1 in the random number formula?</summary>
                    <p>
                        Add <code>1</code> when you want the maximum value itself to be a
                        possible result. Leaving it out produces a range that stops just
                        short of the maximum instead.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does the formula need a cast to int?</summary>
                    <p>
                        <code>Math.random()</code> and the arithmetic built on top of it
                        always produce a <code>double</code>. The <code>(int)</code> cast
                        truncates that decimal value down to a whole number, matching an
                        <code>int</code> range.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Do I still need to cast if I want a random double?</summary>
                    <p>
                        No. <code>Math.random()</code> already returns a <code>double</code>,
                        so casting isn't needed at all when the goal is a decimal value —
                        the cast is only necessary when converting that decimal result into
                        an <code>int</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why doesn't the double formula change for an inclusive maximum?</summary>
                    <p>
                        Because <code>Math.random()</code> never actually reaches
                        <code>1.0</code>, there's no way to rearrange
                        <code>min + (Math.random() * (max - min))</code> to make
                        <code>max</code> reachable. Getting an inclusive maximum requires a
                        different, inverted formula instead — one that flips which end of
                        the range ends up excluded.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"Math.random() can return exactly 1.0"</h3>

            <p>
                It can't. The method is defined to return a value strictly less than
                <code>1.0</code> — the closest it can get is very near <code>1.0</code>,
                but never equal to it.
            </p>

            <h3>"Adding 1 to the formula is optional stylistic choice"</h3>

            <p>
                It changes the actual range of possible results. Without the <code>+ 1</code>,
                the maximum value is never produced; with it, the maximum value becomes a
                reachable result.
            </p>

            <h3>"static methods need an object to be called"</h3>

            <p>
                The opposite is true — <code>static</code> class methods are called
                directly through the class name, which is exactly why
                <code>Math.sqrt()</code> works without ever creating a <code>Math</code>
                object.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                The random number formulas here come up constantly in later units,
                especially once arrays and loops are involved. Ask Starr to walk through
                building a formula for a custom range.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Write me a Math.random() formula for a random int from
                    5 to 15, inclusive on both ends."
                </p>
            </div>

        </section>
    `
    ,

    "1.12 Objects: Instances of Classes": `

        <section id="content" class="lesson-section">

            <h2>Objects: Instances of Classes</h2>

            <p>
                Up to this point, you've seen classes as blueprints and methods as the
                actions those blueprints can define. Lesson 1.12 connects those ideas to
                something concrete: an <strong>object</strong>, which is a specific
                instance of a class with its own stored data and behaviors.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Object:</span> a specific instance of a class that contains data and can have behaviors.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Instance:</span> another word for an object created from a class.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Class:</span> the formal implementation, or blueprint, of a type of object. A class describes what objects made from it can store and do.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Superclass:</span> a class that another class extends. A superclass provides shared attributes and behaviors to its subclasses.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Subclass:</span> a class that extends another class and inherits its attributes and behaviors, while also being able to define its own additional features.</p>
            </div>

            <h3>Classes and Objects</h3>

            <p>
                A class is like the plan for a house, while an object is one actual
                house built from that plan. Every house made from the same blueprint
                shares the same basic structure, but each one can still be a separate,
                individual house. In the same way, objects created from the same class
                share the same kind of data and behaviors, but each object is its own
                distinct instance.
            </p>

            <h3>Inheritance Relationships</h3>

            <p>
                Some classes are built from other classes through <strong>inheritance</strong>.
                Inheritance lets a new class reuse the attributes and behaviors of an
                existing class instead of starting from scratch.
            </p>

            <p>
                The easiest way to remember the relationship is with <strong>"is a"</strong>
                language: a <strong>subclass is a superclass</strong>. That means the
                subclass is a more specific kind of the superclass. For example, a
                <code>Dog</code> class is a <code>Animal</code> class, and a
                <code>Car</code> class might be a <code>Vehicle</code> class.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    If you can say the relationship out loud as "<code>Dog</code> is a
                    <code>Animal</code>" or "<code>Rectangle</code> is a
                    <code>Shape</code>," you're probably looking at a subclass-superclass
                    relationship.
                </p>
            </div>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Object</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;">A blueprint or model</td>
                        <td style="white-space:normal;">A specific thing created from that blueprint</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;">Defines what data and behaviors are possible</td>
                        <td style="white-space:normal;">Holds actual data values and can use those behaviors</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;">Exists in the code as the definition</td>
                        <td style="white-space:normal;">Exists at runtime as a created instance</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A class is the idea. An object is the thing itself. If you can keep
                    that one distinction clear, a lot of later topics like constructors,
                    instance methods, and references become much easier to understand.
                </p>
            </div>

            <h3>Attributes and Behaviors</h3>

            <p>
                An object is a specific
                instance of a class with <strong>defined attributes</strong>. That means
                an object stores data that belongs to it, and those stored values help
                determine its current state.
            </p>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    Designing and implementing relationships involving the
                    <code>Object</code> class are outside the scope of the AP Computer
                    Science A course and exam. You're expected to understand that Java
                    classes ultimately relate back to <code>Object</code>, but you are
                    not expected to design inheritance relationships that specifically
                    rely on detailed behavior from <code>Object</code> itself.
                </p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Attribute:</span> a characteristic or piece of data that belongs to an object.</p>
            </div>

            <p>
                Objects also have <strong>behaviors</strong>, which are the actions they
                can perform through methods. In Java, those behaviors are often instance
                methods, meaning they are called on a particular object rather than on
                the class itself.
            </p>

            <h3>The Object Class</h3>

            <p>
                In Java, every class is ultimately connected to the <code>Object</code>
                class, which is the root of the class hierarchy. That means even when a
                class doesn't explicitly extend another class in your code, it still
                inherits from <code>Object</code> somewhere in the background.
            </p>

            <p>
                The <code>Object</code> class provides a common starting point for all
                objects in Java. It helps make objects work together consistently, and
                it is part of why every object can be treated as an object first, even
                before you consider any more specific superclass it may have.
            </p>

            <h3>How Object References Are Stored</h3>

            <p>
                When you create an object, the variable does not store the full object
                itself. Instead, it stores a <strong>reference</strong>, which is like
                an address pointing to where the object lives in memory. The actual data
                for the object is stored elsewhere, while the variable holds the
                location needed to reach it.
            </p>

            <p>
                This is why reference variables matter so much: if two variables refer to
                the same object, they both point to the same memory location. Changing
                the object through one variable changes the same object seen through the
                other variable because both references lead to the same place.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    A reference is not the object itself. It is the address-like value
                    that lets Java find the object in memory. The object data lives
                    separately from the variable that refers to it.
                </p>
            </div>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">Car</span> {
    String color;
    int speed;
    void accelerate() { ... }
    void brake() { ... }
}</pre>
            </div>

            <p>
                In the example above, <code>color</code> and <code>speed</code> are
                attributes, while <code>accelerate()</code> and <code>brake()</code> are
                behaviors the object can perform.
            </p>

            <h3>Object State</h3>

            <p>
                The values stored inside an object at a given moment are often called its
                <strong>state</strong>. Two objects made from the same class can still
                have different states because their attribute values may be different.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Object</th>
                        <th>Possible State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>car1</code></td>
                        <td style="white-space:normal;"><code>color = "red"</code>, <code>speed = 35</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>car2</code></td>
                        <td style="white-space:normal;"><code>color = "blue"</code>, <code>speed = 0</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Different objects can come from the same class without being the same
                    object. If two variables refer to two separate instances, changing
                    one object's state does not automatically change the other's state.
                </p>
            </div>

            <h3>Why This Matters</h3>

            <p>
                Understanding objects as instances of classes is the foundation for the
                next lessons in this unit. Once you know that a class defines the model
                and an object is a real example of that model, it becomes much easier to
                understand object creation, instance methods, and how Java stores and
                uses references.
            </p>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What is the difference between a class and an object?</summary>
                    <p>
                        A class is the blueprint or definition, while an object is a
                        specific instance created from that class. The class describes
                        what the object can store and do.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Is "instance" just another word for object?</summary>
                    <p>
                        Yes. In this context, an instance is a particular object made from
                        a class.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can two objects from the same class have different values?</summary>
                    <p>
                        Yes. They can share the same class while still storing different
                        attribute values, which means their states can be different.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Do object behaviors come from methods?</summary>
                    <p>
                        Yes. Methods define the actions an object can perform, which is
                        why behaviors are usually described in terms of methods.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"A class and an object are the same thing"</h3>

            <p>
                They are related, but not the same. A class is the blueprint, while an
                object is a concrete instance built from that blueprint.
            </p>

            <h3>"All objects made from the same class are identical"</h3>

            <p>
                Objects can share the same class and still have different attribute
                values. The class is the same, but the state of each object can differ.
            </p>

            <h3>"Only methods matter, not stored data"</h3>

            <p>
                Objects are defined by both their data and their behaviors. The
                attributes describe what the object knows, and the methods describe
                what it can do.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                This lesson is all about getting comfortable with the class-object
                relationship, because that idea shows up everywhere else in Java. Ask
                Starr to help you tell the difference between a class, an object, and an
                instance in examples you already know.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Explain the difference between a class and an object
                    using a real-world example."
                </p>
            </div>

        </section>
    `,

    "1.13 Object Creation and Storage (Instantiation)": `

        <section id="content" class="lesson-section">

            <h2>Object Creation and Storage (Instantiation)</h2>

            <p>
                The previous lesson introduced objects as instances of classes, but
                stopped short of explaining exactly how an object comes into existence in
                the first place. That's the job of a <strong>constructor</strong> — a
                special block of code that runs whenever a new object is created, and
                whose entire purpose is to set up that object's initial state.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Constructor:</span> a special method that is called to create objects. Constructors are called using the keyword <code>new</code>, and they have the same name as the class.</p>
            </div>

            <h3>The Constructor Signature</h3>

            <p>
                Just like the methods covered in Lesson 1.9, a constructor has a
                signature — but a constructor signature works a little differently from a
                method signature, since a constructor has no return type and must share
                its name with the class.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Constructor signature:</span> consists of the constructor's name, which is the same as the class name, and the ordered list of parameter types. The parameter list, in the header of a constructor, lists the types of the values that are passed and their variable names.</p>
            </div>

            <p>
                Here's the general template every constructor follows, with each piece
                labeled the same way method headers were broken down earlier in this
                unit:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:28px 32px; margin:22px 0 14px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2.1; color:#E5E7EB; white-space:pre;"><span style="color:#F59E0B; font-weight:700;">public</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">ClassName</span><span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">type1 name1</span><span style="color:#9CA3AF;">, </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">type2 name2</span><span style="color:#9CA3AF;">) </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">{</span>
    this.name1 = name1;
    this.name2 = name2;
<span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">}</span></pre>
            </div>

            <div style="display:flex; flex-direction:column; gap:12px; max-width:900px; margin-bottom:22px;">

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#8FBF2E; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Constructor name — <code>ClassName</code>:</strong> must be spelled exactly the same as the class it belongs to. Unlike a method, a constructor never has a return type — not even <code>void</code>.</p>
                </div>

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#0CC267; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Parameter list — <code>(type1 name1, type2 name2)</code>:</strong> the values passed in when the object is created, used to set up that object's initial attributes.</p>
                </div>

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#D6A400; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Block of code — <code>{ }</code>:</strong> typically assigns each parameter's value to the matching attribute, often using the <code>this</code> keyword to distinguish the attribute from the parameter that shares its name.</p>
                </div>

            </div>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Because a constructor's signature works exactly like a method
                    signature — name plus ordered parameter types, no return type or
                    parameter names included — the same rules from Lesson 1.9 apply
                    directly here. The only real difference is that a constructor's name
                    is locked to the class name instead of being chosen freely.
                </p>
            </div>

            <h3>The new Keyword</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Instantiation:</span> the process of creating an object, typically by calling a constructor with the keyword <code>new</code>.</p>
            </div>

            <p>
                An object is typically created using the keyword <code>new</code>,
                followed by a call to one of the class's constructors. This is the moment
                memory is actually set aside for the new object, and the constructor runs
                to fill that memory with the object's starting values.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>What It Does</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>Car myCar = new Car("red", 0);</code></td>
                        <td style="white-space:normal;"><code>new Car("red", 0)</code> instantiates a <code>Car</code> object, and the resulting reference is stored in <code>myCar</code></td>
                    </tr>
                </tbody>
            </table>

            <p>
                Reading that line piece by piece: <code>new</code> triggers the creation
                of a brand-new <code>Car</code> object, <code>Car("red", 0)</code> is the
                constructor call that runs to set up that object, and
                <code>Car myCar =</code> declares a reference variable and stores the
                resulting object reference in it — exactly the same assignment process
                covered back in Lesson 1.4.
            </p>

            <h3>Declaring Reference Variables and null</h3>

            <p>
                A variable of a reference type holds an object reference — or, if there is
                no object yet, <code>null</code>. This should feel familiar from Lesson
                1.4: a reference variable can be declared before it's ever assigned an
                actual object, and until it is, <code>null</code> is used to explicitly
                say the variable isn't pointing to anything.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Statement</th>
                        <th>What It Means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>Car myCar;</code></td>
                        <td>Declares a reference variable with no object assigned yet — its value is undefined until it's assigned something</td>
                    </tr>
                    <tr>
                        <td><code>Car myCar = null;</code></td>
                        <td>Declares <code>myCar</code> and explicitly assigns it <code>null</code>, meaning it references no object at all</td>
                    </tr>
                    <tr>
                        <td><code>myCar = new Car("red", 0);</code></td>
                        <td>Assigns <code>myCar</code> a reference to a newly instantiated <code>Car</code> object</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Declaring a reference variable does not create an object. Only a call
                    to <code>new</code> followed by a constructor actually instantiates
                    one — until then, the variable either holds no usable value or
                    explicitly holds <code>null</code>.
                </p>
            </div>

            <h3>Parameters vs. Arguments</h3>

            <p>
                These two terms get mixed up constantly, but they describe two different
                sides of the same constructor call.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Constructor argument:</span> a value that is passed into a constructor when the constructor is called. The arguments passed to a constructor must be compatible in order and number with the types identified in the parameter list in the constructor signature.</p>
            </div>

            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Parameter</th>
                        <th>Argument</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Where it appears</td>
                        <td>In the constructor's own header, as part of its definition</td>
                        <td>In the call to the constructor, wherever <code>new</code> is used</td>
                    </tr>
                    <tr>
                        <td>Example</td>
                        <td><code>public Car(String color, int speed)</code></td>
                        <td><code>new Car("red", 0)</code></td>
                    </tr>
                    <tr>
                        <td>What it is</td>
                        <td>A placeholder name and type, waiting to receive a value</td>
                        <td>The actual value being passed in for that placeholder</td>
                    </tr>
                </tbody>
            </table>

            <p>
                When calling a constructor, arguments are passed using <strong>call by
                value</strong> — call by value initializes the parameters with copies of
                the arguments. This means changes made to a parameter inside the
                constructor don't affect the original value that was passed in from
                outside.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Arguments must be compatible in order and number with the parameter
                    list in the constructor signature. Passing the wrong number of
                    arguments, or arguments of the wrong type in the wrong order, is a
                    compile-time error — Java won't guess which constructor you meant.
                </p>
            </div>

            <h3>Constructor Overloading</h3>

            <p>
                Constructors are said to be overloaded when there are multiple
                constructors with different signatures. Just like the overloaded
                <code>Math.abs()</code> methods from Lesson 1.11, overloaded constructors
                share the same name — since every constructor must be named after its
                class — but differ in their parameter lists, giving each one a distinct
                signature.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">class</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">Car</span> {
    String color;
    int speed;

    public Car() {
        color = "white";
        speed = 0;
    }

    public Car(String color) {
        this.color = color;
        speed = 0;
    }

    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
    }
}</pre>
            </div>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Call</th>
                        <th>Constructor Used</th>
                        <th>Resulting State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>new Car()</code></td>
                        <td><code>Car()</code></td>
                        <td><code>color = "white"</code>, <code>speed = 0</code></td>
                    </tr>
                    <tr>
                        <td><code>new Car("blue")</code></td>
                        <td><code>Car(String)</code></td>
                        <td><code>color = "blue"</code>, <code>speed = 0</code></td>
                    </tr>
                    <tr>
                        <td><code>new Car("red", 35)</code></td>
                        <td><code>Car(String, int)</code></td>
                        <td><code>color = "red"</code>, <code>speed = 35</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Java decides which overloaded constructor to call based entirely on
                    the number and types of the arguments in the call — this is exactly
                    why the parameter list, not the constructor name, is what
                    distinguishes one signature from another.
                </p>
            </div>

            <p>
                Notice the first constructor, <code>Car()</code>, has an empty parameter
                list. A constructor with no parameters like this is often called a
                <strong>no-argument constructor</strong>, and it's typically used to assign
                default values to every attribute.
            </p>

            <h3>Execution Flow of a Constructor Call</h3>

            <p>
                A constructor call interrupts the sequential execution of statements,
                causing the program to first execute the statements in the constructor
                before continuing. Once the last statement in the constructor has
                executed, the flow of control is returned to the point immediately
                following where the constructor was called.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Step</th>
                        <th>What Happens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>The statement containing <code>new</code> begins executing, and program flow jumps into the matching constructor</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Every statement inside the constructor's body runs in sequence, typically assigning values to the new object's attributes</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Once the last statement in the constructor finishes, control returns to the point immediately after the original <code>new</code> call</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>The reference to the fully constructed object is assigned to the variable on the left, if there is one</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Think of a constructor call as a brief detour, not a separate path:
                    execution always comes right back to where it left off once the
                    constructor is done, just like calling any other method.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about constructors,
                instantiation, and object creation.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Why doesn't a constructor have a return type, not even void?</summary>
                    <p>
                        A constructor isn't building a value to hand back the way a method
                        does — it's setting up a brand-new object that <code>new</code>
                        already handles returning a reference to. Because of that, not even
                        <code>void</code> belongs in a constructor's header.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>How is a constructor signature different from a method signature?</summary>
                    <p>
                        The idea is identical — name plus ordered parameter types, no
                        return type or parameter names included. The only real difference
                        is that a constructor's name is always locked to match its class
                        name, while a method name can be chosen freely.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What decides which overloaded constructor gets called?</summary>
                    <p>
                        Java matches the number and types of the arguments in the
                        <code>new</code> call against each constructor's signature. Whichever
                        signature the arguments are compatible with is the constructor that
                        runs.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does declaring a reference variable create an object?</summary>
                    <p>
                        No. Declaring a variable like <code>Car myCar;</code> only sets
                        aside a labeled space for a future reference — an object is only
                        actually created once <code>new</code> is used to call a
                        constructor.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What happens to the rest of my program while a constructor runs?</summary>
                    <p>
                        Execution pauses at the point where <code>new</code> was called,
                        runs every statement inside the constructor in order, and then
                        returns to exactly where it left off once the constructor's last
                        statement finishes.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"A constructor is just a method with the same name as the class"</h3>

            <p>
                Constructors and methods look similar, but a constructor has no return
                type at all — not even <code>void</code> — and can only ever be called
                using <code>new</code>. A method with the same name as its class but with
                an actual return type is not a constructor.
            </p>

            <h3>"Overloaded constructors need different names to be valid"</h3>

            <p>
                Every constructor for a class must share the exact same name — the class
                name itself. What makes overloaded constructors distinct is a different
                parameter list, which gives each one a different signature even though the
                name never changes.
            </p>

            <h3>"null and a default value like 0 mean the same thing"</h3>

            <p>
                <code>null</code> only applies to reference types and means "no object at
                all," not a numeric default. A newly declared <code>int</code> can't be
                <code>null</code>, and a reference variable set to <code>null</code> isn't
                pointing to an object with empty or zeroed-out attributes — it isn't
                pointing to any object.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Constructors and overloading trip up a lot of students right as classes
                start getting more complex. Ask Starr to trace through which overloaded
                constructor a specific <code>new</code> call would trigger, or to help you
                write a set of overloaded constructors for a class you're building.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Write three overloaded constructors for a Student class
                    with name, grade, and GPA."
                </p>
            </div>

        </section>
    `
    ,

    "1.14 Calling Instance Methods": `

        <section id="content" class="lesson-section">

            <h2>Calling Instance Methods</h2>

            <p>
                Every method you've called so far in this unit — <code>Math.sqrt()</code>,
                <code>Math.random()</code>, and the rest — has been a class method, called
                through the class name itself. Instance methods work differently, and
                knowing the difference is what makes calling them feel natural rather than
                confusing.
            </p>

            <h3>What an Instance Method Is</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Instance method:</span> a method called on objects of the class, using the dot operator along with the object name to call instance methods.</p>
            </div>

            <p>
                The key difference from a class method comes down to what sits on the left
                side of the dot. A class method is called through the <em>class name</em>,
                like <code>Math.sqrt()</code>. An instance method is called through an
                <em>object</em> — a specific instance of a class — instead.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 32px; margin:22px 0; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2.1; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">String</span> greeting = <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">new</span> String(<span style="color:#9CA3AF;">"hello"</span>);

    <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">greeting</span><span style="color:#9CA3AF;">.</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">length</span><span style="color:#9CA3AF;">()</span></pre>
            </div>

            <div style="display:flex; flex-direction:column; gap:12px; max-width:900px; margin-bottom:22px;">

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#8FBF2E; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Object name — <code>greeting</code>:</strong> the specific object the method is being called on, sitting to the left of the dot.</p>
                </div>

                <div style="display:flex; align-items:flex-start; gap:14px;">
                    <span style="flex-shrink:0; width:16px; height:16px; border-radius:5px; background:#0CC267; margin-top:4px;"></span>
                    <p style="margin:0; color:#4B5563;"><strong style="color:#1F2937;">Method name — <code>length</code>:</strong> the instance method being called, sitting to the right of the dot.</p>
                </div>

            </div>

            <h3>Where and How the Dot Operator Is Used</h3>

            <p>
                The dot operator is what physically connects an object to the method being
                called on it. It always sits directly between the object name and the
                method name, in the form <code>objectName.methodName()</code> — the same
                position it holds when calling a class method through a class name, just
                with an object reference standing in place of the class name.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Call</th>
                        <th>What It Means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>greeting.length()</code></td>
                        <td style="white-space:normal;">Calls the <code>length</code> instance method on the object referenced by <code>greeting</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>greeting.toUpperCase()</code></td>
                        <td style="white-space:normal;">Calls the <code>toUpperCase</code> instance method on that same object</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A quick way to tell class methods and instance methods apart: if what's
                    to the left of the dot is a class name written in code exactly as the
                    class itself, like <code>Math</code>, it's a class method. If it's a
                    variable name referring to an actual object, like <code>greeting</code>,
                    it's an instance method.
                </p>
            </div>

            <h3>Calling a Method on null</h3>

            <p>
                Because an instance method is called on an object, that object actually has
                to exist for the call to work. A reference variable that currently holds
                <code>null</code> isn't pointing to any object at all — so calling an
                instance method on it leaves nothing for that call to run on.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    A method call on a <code>null</code> reference will result in a
                    <code>NullPointerException</code>. The program will compile without any
                    issue, since Java has no way of knowing at compile time whether a
                    reference will still be <code>null</code> once that line actually runs —
                    the error only shows up at run time.
                </p>
            </div>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>What Happens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>String name = null;<br>name.length();</code></td>
                        <td style="white-space:normal;">Compiles successfully, but throws a <code>NullPointerException</code> at run time, since <code>name</code> isn't referencing any actual <code>String</code> object</td>
                    </tr>
                </tbody>
            </table>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What's the actual difference between a class method call and an instance method call?</summary>
                    <p>
                        It comes down to what's on the left of the dot. A class method is
                        called through the class name itself, like <code>Math.sqrt()</code>.
                        An instance method is called through an object reference instead,
                        like <code>greeting.length()</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why doesn't calling a method on a null reference get caught at compile time?</summary>
                    <p>
                        The compiler only checks that the reference's declared type has that
                        method available — it can't predict what the reference will actually
                        point to once the program runs. Whether it's <code>null</code> at
                        that moment is a run-time condition, not a compile-time one.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does the dot operator work differently for class methods vs. instance methods?</summary>
                    <p>
                        No — its job is identical in both cases. It connects whatever is on
                        its left, whether that's a class name or an object name, to the
                        method being called on its right.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"A NullPointerException means my code has a syntax error"</h3>

            <p>
                It doesn't — the code compiles just fine. A <code>NullPointerException</code>
                is a run-time error, meaning it only shows up when the program actually
                tries to call a method on a reference that turned out to be <code>null</code>.
            </p>

            <h3>"The dot operator behaves differently for objects than for classes"</h3>

            <p>
                The dot operator always does the same job — connecting something on its
                left to a method or member on its right. What changes is only what sits on
                the left: a class name for a class method, an object reference for an
                instance method.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Spotting the difference between a class method call and an instance method
                call — and predicting when a <code>NullPointerException</code> might happen
                — are both skills worth practicing now. Ask Starr to trace through a short
                snippet involving object references.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Walk me through why this line throws a
                    NullPointerException."
                </p>
            </div>

        </section>
    `
    ,

    "1.15 String Manipulation": `

        <section id="content" class="lesson-section">

            <h2>String Manipulation</h2>

            <p>
                Strings are one of the most important reference types in Java because they
                let programs work with text. Whether you're reading input, building output,
                comparing names, or extracting part of a word, the <code>String</code> class
                is doing a lot of the heavy lifting in the background.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">String:</span> a String object represents a sequence of characters and can be created by using a string literal or by calling the String class constructor.</p>
            </div>

            <h3>The String Class</h3>

            <p>
                The <code>String</code> class is part of the <code>java.lang</code> package,
                which means it is available by default. You do not need to import it before
                using it in your program.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">java.lang package:</span> the package in Java that is available automatically and contains core classes such as <code>String</code>.</p>
            </div>

            <p>
                A <code>String</code> object is immutable, meaning that once it is created,
                its contents cannot be changed. Methods called on a <code>String</code> do
                not alter the original object. Instead, if a new value is needed, Java makes
                a new String object.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Immutable:</span> unable to be changed after it is created.</p>
            </div>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    If you call a String method and the text seems to "change," that is
                    because Java created a new String behind the scenes. The original String
                    stays exactly the same.
                </p>
            </div>

            <h3>Creating Strings</h3>

            <p>
                Strings can be created using a string literal, or by calling the
                <code>String</code> constructor. Both produce <code>String</code> objects.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Way to Create a String</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;">String literal</td>
                        <td style="white-space:normal;"><code>String name = "Maya";</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;">Constructor call</td>
                        <td style="white-space:normal;"><code>String name = new String("Maya");</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>String Concatenation</h3>

            <p>
                String concatenation means joining Strings together. The <code>+</code>
                operator is used to combine text, and if one side is a String, Java will
                convert the other side into text as needed.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 32px; margin:22px 0; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2.1; color:#E5E7EB; white-space:pre;"><span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">String</span> first = <span style="color:#9CA3AF;">"Ada"</span>;
<span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">String</span> last = <span style="color:#9CA3AF;">"Lovelace"</span>;
<span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">String</span> fullName = first + <span style="color:#9CA3AF;">" "</span> + last;</pre>
            </div>

            <p>
                Concatenation happens from left to right. That means
                <code>"5" + 3 + 2</code> becomes <code>"532"</code>, because once Java sees
                a String, the rest of the expression is treated as text.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Expression</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>"Hello" + " World"</code></td>
                        <td style="white-space:normal;"><code>"Hello World"</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>"Score: " + 95</code></td>
                        <td style="white-space:normal;"><code>"Score: 95"</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>2 + 3 + " points"</code></td>
                        <td style="white-space:normal;"><code>"5 points"</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    The order matters. If the first part of the expression is a String, the
                    rest will be joined as text too. If the String comes later, Java may do
                    arithmetic first.
                </p>
            </div>

            <h3>Method Overriding and toString()</h3>

            <p>
                Strings are objects, and many object-related methods depend on inheritance
                and method overriding. A subclass can provide its own version of a method it
                inherits from a superclass. A common example is overriding
                <code>toString()</code> so an object can be described in a more useful way.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Method overriding:</span> when a subclass provides its own implementation of a method that is already defined in its superclass. The method name and parameter list stay the same, but the behavior changes.</p>
            </div>

            <p>
                A typical <code>toString()</code> override might look like this:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 32px; margin:22px 0; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2.1; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">public</span> <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">String</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">toString</span><span style="color:#9CA3AF;">() {</span>
    <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">return</span> <span style="color:#9CA3AF;">"Student{name='"</span> + name + <span style="color:#9CA3AF;">"', grade="</span> + grade + <span style="color:#9CA3AF;">"}"</span>;
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                If a <code>Student</code> object is printed, Java uses <code>toString()</code>
                to get a String description. Overriding it gives the class control over how
                its objects are shown as text.
            </p>

            <p>
                The method name and parameter list stay the same when a method is overridden.
                What changes is the behavior in the subclass.
            </p>

            <h3>Inheritance and the String Class</h3>

            <p>
                The <code>String</code> class belongs to Java's class hierarchy and ultimately
                connects back to the <code>Object</code> class. That is one reason Strings
                behave like objects even though they are used so often that they may feel
                almost like a special built-in type.
            </p>

            <p>
                The AP Computer Science A guide includes an <strong>Exclusion Statement</strong> here:
                designing and implementing relationships involving the <code>String</code> class is outside
                the scope of the AP Computer Science A course and exam description.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    For AP CSA, focus on how to use String methods and interpret String
                    behavior. You are expected to understand Strings as objects, but not to
                    build custom inheritance relationships around the String class itself.
                </p>
            </div>

            <h3>Common String Methods from the Java Quick Reference</h3>

            <p>
                The following String methods are part of the Java Quick Reference and are
                especially important for AP CSA. They help you inspect, compare, and extract
                pieces of text.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>What It Does</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="white-space:normal;"><code>int length()</code></td>
                        <td style="white-space:normal;">returns the number of characters in a String object</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>String substring(int from, int to)</code></td>
                        <td style="white-space:normal;">returns the substring starting at <code>from</code> and ending at <code>to - 1</code></td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>String substring(int from)</code></td>
                        <td style="white-space:normal;">returns the substring starting at <code>from</code> and ending at the last character</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>int indexOf(String str)</code></td>
                        <td style="white-space:normal;">returns the index of the first occurrence of <code>str</code>, or <code>-1</code> if it is not found</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>boolean equals(Object other)</code></td>
                        <td style="white-space:normal;">returns <code>true</code> if this object has the same sequence of characters as <code>other</code>, and <code>false</code> otherwise</td>
                    </tr>
                    <tr>
                        <td style="white-space:normal;"><code>int compareTo(String other)</code></td>
                        <td style="white-space:normal;">returns a value less than, equal to, or greater than zero depending on alphabetical order</td>
                    </tr>
                </tbody>
            </table>

            <p>
                A useful pattern is extracting one character at a time with
                <code>substring(index, index + 1)</code>.
            </p>

            <h3>StringIndexOutOfBoundsException</h3>

            <p>
                Strings use zero-based indexing. That means the first character is at index
                <code>0</code> and the last character is at index <code>length() - 1</code>.
                If code tries to access a position outside that range, Java throws a
                <code>StringIndexOutOfBoundsException</code>.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">StringIndexOutOfBoundsException:</span> a run-time error that happens when code tries to access a character position outside the valid range of a String.</p>
            </div>

            <p>
                This can happen if an index is negative, if an index is larger than the last
                valid character position, or if <code>substring</code> is called with invalid
                start and end values.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    For a String with length <code>n</code>, the largest valid index is
                    <code>n - 1</code>. In <code>substring(from, to)</code>, the
                    <code>to</code> value is not included in the result, but the index values
                    still have to stay within valid bounds.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Why are Strings considered objects?</summary>
                    <p>
                        Because Java stores Strings as objects with behavior, not as primitive
                        values. Strings belong to the <code>java.lang</code> package and have
                        methods you can call on them.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why doesn't a String method change the original String?</summary>
                    <p>
                        Strings are immutable. Once a String is created, its contents cannot be
                        changed, so methods that seem to modify it actually return new Strings.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What does concatenation do?</summary>
                    <p>
                        Concatenation joins text together. If one side of the <code>+</code>
                        operator is a String, Java converts the other value to text and combines
                        them.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>How is overriding toString() useful?</summary>
                    <p>
                        It lets a class control how its objects are represented as text. That is
                        especially helpful for printing objects and debugging.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does StringIndexOutOfBoundsException happen?</summary>
                    <p>
                        It happens when code tries to use a character index that does not exist.
                        Since Strings are indexed from <code>0</code> to <code>length() - 1</code>,
                        going outside that range causes the exception.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"Strings are primitive types"</h3>

            <p>
                They are not. Strings are objects, which is why they belong to the
                <code>java.lang</code> package and have methods available to call on them.
            </p>

            <h3>"String methods change the original String"</h3>

            <p>
                They do not. Strings are immutable, so methods that seem to modify a String
                actually return a new one instead.
            </p>

            <h3>"Concatenation only works on Strings"</h3>

            <p>
                Java can concatenate Strings with other values too. If one side of the
                <code>+</code> operator is a String, the other side will be converted as needed.
            </p>

            <h3>"toString() is only for printing"</h3>

            <p>
                It is often used when printing, but its broader purpose is to provide a
                String representation of an object.
            </p>

            <h3>"StringIndexOutOfBoundsException means the String is broken"</h3>

            <p>
                The String itself is fine. The problem is that the code tried to access an
                invalid index or invalid substring boundaries.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                String manipulation shows up constantly in AP CSA, especially when working
                with input, output, and object descriptions. Ask Starr to quiz you on
                String methods, concatenation, or valid substring boundaries.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking: "Show me how to determine whether a substring call will
                    cause a StringIndexOutOfBoundsException."
                </p>
            </div>

        </section>
    `


};