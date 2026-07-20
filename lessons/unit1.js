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
    `

};