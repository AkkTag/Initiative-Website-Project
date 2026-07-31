lessonContentData["Unit 2"] = {

    "2.1 Algorithms with Selection and Repetition": `

        <section id="content" class="lesson-section">

            <h2>Algorithms with Selection and Repetition</h2>

            <p>
                Unit 1 introduced the idea of an algorithm as a step-by-step process for
                solving a problem, and touched on <strong>sequencing</strong> as the order
                those steps run in. This lesson builds on that foundation by introducing
                the other two building blocks every algorithm is made of:
                <strong>selection</strong> and <strong>repetition</strong>. Together,
                sequencing, selection, and repetition are the three ingredients that make
                up every algorithm you'll write for the rest of this course.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Sequencing:</span> defines the order in which the steps of a process are completed. Steps in a process are completed one at a time.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Selection:</span> occurs when a choice of how the execution of an algorithm will proceed is based on a true or false decision.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Repetition:</span> when a process repeats itself until a desired outcome is reached.</p>
            </div>

            <h3>Why These Three Building Blocks?</h3>

            <p>
                Every algorithm, no matter how complex, is really just some combination of
                these three ideas. Sequencing tells the computer what order to do things
                in. Selection lets the computer make a decision and branch down a
                different path depending on whether something is true or false. Repetition
                lets the computer repeat a set of steps instead of writing them out over
                and over. Once you can recognize all three, you can start to read — and
                design — much more sophisticated algorithms than a simple top-to-bottom
                list of steps.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Building Block</th>
                        <th>What It Controls</th>
                        <th>Everyday Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sequencing</td>
                        <td>The order steps happen in</td>
                        <td>Brushing your teeth before rinsing, not after</td>
                    </tr>
                    <tr>
                        <td>Selection</td>
                        <td>Which path is taken, based on a condition</td>
                        <td>"If it's raining, bring an umbrella"</td>
                    </tr>
                    <tr>
                        <td>Repetition</td>
                        <td>How many times a set of steps runs</td>
                        <td>"Keep stirring until the sauce thickens"</td>
                    </tr>
                </tbody>
            </table>

            <h3>Selection: Making a Decision</h3>

            <p>
                Selection happens whenever an algorithm has to choose between two or more
                paths, and that choice depends on whether some condition is
                <strong>true</strong> or <strong>false</strong>. Rather than a single fixed
                sequence of steps, a selection statement gives an algorithm a fork in the
                road — one direction if the condition holds, and a different direction (or
                no action at all) if it doesn't.
            </p>

            <p>
                Think about deciding whether to bring an umbrella before leaving the
                house. The decision itself is simple — is it raining or not? — but the
                outcome of the algorithm changes entirely depending on the answer. That's
                selection: the same starting point can lead to two different results,
                depending on a true/false decision made along the way.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Selection isn't about picking randomly — it's about following a
                    specific rule based on a condition. The same input to a condition will
                    always lead to the same choice being made, every time the algorithm
                    runs.
                </p>
            </div>

            <h3>Repetition: Repeating Until Done</h3>

            <p>
                Repetition happens whenever an algorithm repeats a process until some
                desired outcome is reached. Instead of writing the same set of
                instructions many times in a row, repetition lets an algorithm loop back
                and repeat those instructions as many times as needed.
            </p>

            <p>
                Stirring a pot of sauce "until it thickens" is a natural example of
                repetition — you don't stir a fixed number of times, you keep repeating
                the same action, checking each time whether the desired outcome (a
                thickened sauce) has been reached yet. The stopping point is defined by
                the outcome, not by a specific step count.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A helpful way to separate the three building blocks: sequencing asks
                    "what's next?", selection asks "which way?", and repetition asks "how
                    many times?"
                </p>
            </div>

            <h3>Order Matters</h3>

            <p>
                The order in which sequencing, selection, and repetition are used
                contributes to the outcome of the algorithm. Rearranging the same building
                blocks — even using the exact same steps and conditions — can produce a
                completely different result, since each block depends on the state the
                algorithm is in by the time it's reached.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Two algorithms can use identical individual steps and still behave
                    differently if those steps are sequenced, selected, or repeated in a
                    different order. Always trace through an algorithm in the exact order
                    it's written, rather than assuming order doesn't matter.
                </p>
            </div>

            <h3>Representing Algorithms</h3>

            <p>
                Algorithms that involve selection and repetition can be represented using
                written language or diagrams, without needing to write actual code at
                this stage. Describing an algorithm in plain steps, or sketching it out as
                a flowchart, is a useful way to plan an algorithm's logic before ever
                translating it into Java — a skill this course will keep coming back to as
                algorithms grow more complex.
            </p>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about sequencing,
                selection, and repetition.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Is selection the same as repetition?</summary>
                    <p>
                        No. Selection is about choosing a path based on a true/false
                        condition, while repetition is about repeating a process until a
                        desired outcome is reached. An algorithm can use one, the other, or
                        both together.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does repetition always run a fixed number of times?</summary>
                    <p>
                        Not necessarily. Repetition continues until a desired outcome is
                        reached, which might mean a fixed number of repetitions, or it
                        might mean repeating an unknown number of times until a specific
                        condition becomes true.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can an algorithm use sequencing, selection, and repetition all at once?</summary>
                    <p>
                        Yes, and most useful algorithms do. Sequencing establishes the
                        overall order of steps, while selection and repetition can appear
                        at any point within that sequence to add decision-making or
                        looping behavior.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does the order of these building blocks matter?</summary>
                    <p>
                        Because each step in an algorithm often depends on the outcome of
                        the steps before it. Changing the order can change what condition
                        is being checked, or what value is being repeated on, which changes
                        the final result even if the same building blocks are used.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Do I need to write code to represent an algorithm at this stage?</summary>
                    <p>
                        No. Algorithms involving selection and repetition can be
                        represented using written language or diagrams. Writing the actual
                        Java code comes later, once the underlying logic is planned out.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <p>
                A few misunderstandings about these building blocks tend to show up early
                — catching them now will make the next few lessons much easier to follow.
            </p>

            <h3>"Selection means picking randomly between options"</h3>

            <p>
                Selection is based on a specific true/false condition, not a random
                choice. Given the same condition, an algorithm using selection will always
                make the same decision every time it runs.
            </p>

            <h3>"Repetition always means a set number of repeats"</h3>

            <p>
                Repetition continues until a desired outcome is reached — sometimes that
                does mean a known, fixed number of repeats, but other times the number of
                repeats depends entirely on when a condition becomes true, which can vary
                each time the algorithm runs.
            </p>

            <h3>"The order of steps doesn't really matter as long as they're all there"</h3>

            <p>
                It matters a great deal. The order in which sequencing, selection, and
                repetition are used directly contributes to the outcome of the algorithm
                — rearranging the same steps can produce a very different result.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Don't assume two algorithms are equivalent just because they use the
                    same individual steps. Always check the order those steps are
                    sequenced, selected, and repeated in before comparing outcomes.
                </p>
            </div>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Sequencing, selection, and repetition are the foundation for everything
                else in this unit, from boolean expressions to if statements to loops.
                Ask Starr to walk through an everyday example and help you identify which
                building block is being used at each step.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Break down the algorithm for making a peanut butter
                    sandwich into sequencing, selection, and repetition."
                </p>
            </div>

        </section>

    `

    ,

    "2.2 Boolean Expressions": `

        <section id="content" class="lesson-section">

            <h2>Boolean Expressions</h2>

            <p>
                In 2.1, selection was described as a choice based on a true or false
                decision — but so far, that decision has only been discussed in plain
                language, like "if it's raining." This lesson makes that idea concrete in
                Java by introducing <strong>relational operators</strong>, which are the
                tools used to compare values and produce an actual true or false result
                that Java can act on.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Relational operator:</span> an operator that compares two values and evaluates to a Boolean value describing the relationship between them. Java's relational operators are <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, and <code>&gt;=</code>.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Boolean expression:</span> an expression that evaluates to a Boolean value — either <code>true</code> or <code>false</code>. An expression involving relational operators always evaluates to a Boolean value.</p>
            </div>

            <p>
                This is the core idea to hold onto for the rest of the unit: any time you
                write a comparison using a relational operator, that entire expression
                collapses down into a single value — either <code>true</code> or
                <code>false</code> — never anything in between, and never the original
                values themselves.
            </p>

            <h3>Comparing Numeric Values</h3>

            <p>
                Numeric values — <code>int</code> and <code>double</code> — can be
                compared using six relational operators to determine the relationship
                between them.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>Meaning</th>
                        <th>Example</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>==</code></td>
                        <td>Equal to</td>
                        <td><code>5 == 5</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>!=</code></td>
                        <td>Not equal to</td>
                        <td><code>5 != 8</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;</code></td>
                        <td>Less than</td>
                        <td><code>3 &lt; 7</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>&gt;</code></td>
                        <td>Greater than</td>
                        <td><code>3 &gt; 7</code></td>
                        <td><code>false</code></td>
                    </tr>
                    <tr>
                        <td><code>&lt;=</code></td>
                        <td>Less than or equal to</td>
                        <td><code>7 &lt;= 7</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>&gt;=</code></td>
                        <td>Greater than or equal to</td>
                        <td><code>4 &gt;= 9</code></td>
                        <td><code>false</code></td>
                    </tr>
                </tbody>
            </table>

            <p>
                Notice that <code>&lt;</code> and <code>&gt;</code> are strict comparisons
                — they exclude the case where the two values are equal — while
                <code>&lt;=</code> and <code>&gt;=</code> include equality as a possible
                match. Mixing these up is one of the easiest ways to introduce a logic
                error into an otherwise correct-looking piece of code.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Read <code>&lt;=</code> out loud as "less than <em>or</em> equal to" —
                    that "or" is exactly what makes it different from a plain
                    <code>&lt;</code>, which only allows one of the two outcomes.
                </p>
            </div>

            <h3>== and != with Primitive Types vs. Reference Types</h3>

            <p>
                Values can be compared using the relational operators <code>==</code> and
                <code>!=</code> to determine whether the values are the same — but what
                "the same" actually means depends on whether you're comparing primitive
                types or reference types.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Type Category</th>
                        <th>What <code>==</code> Compares</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Primitive type</td>
                        <td>The actual values stored in each variable</td>
                        <td><code>int a = 5; int b = 5; a == b</code> is <code>true</code>, since both store the value <code>5</code></td>
                    </tr>
                    <tr>
                        <td>Reference type</td>
                        <td>The object references themselves — whether both variables point to the exact same object in memory</td>
                        <td><code>String s1 = new String("hi"); String s2 = new String("hi"); s1 == s2</code> is <code>false</code>, since <code>s1</code> and <code>s2</code> reference two separate objects, even though their contents look identical</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    With reference types, <code>==</code> checks whether two variables
                    point to the exact same object — not whether the objects "look" the
                    same or hold equal data. Two separately created <code>String</code>
                    objects with identical text are still two different objects as far as
                    <code>==</code> is concerned.
                </p>
            </div>

            <h3>Every Comparison Produces a Boolean Value</h3>

            <p>
                No matter which relational operator is used, or which two values are being
                compared, the result of the comparison is always a single Boolean value —
                <code>true</code> or <code>false</code>. That value can be stored in a
                <code>boolean</code> variable, printed directly, or used later on to
                control selection, exactly as covered in 2.1.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Expression</th>
                        <th>Evaluates To</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>10 &gt; 3</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>10 == 3</code></td>
                        <td><code>false</code></td>
                    </tr>
                    <tr>
                        <td><code>boolean isPassing = 72 &gt;= 70;</code></td>
                        <td><code>isPassing</code> is assigned the value <code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>boolean isFull = 3 == 4;</code></td>
                        <td><code>isFull</code> is assigned the value <code>false</code></td>
                    </tr>
                </tbody>
            </table>

            <p>
                That last row is worth pausing on: <code>3 == 4</code> is fully evaluated
                first, collapsing down to <code>false</code>, and only then is that
                Boolean value assigned to <code>isFull</code> — the same left-to-right,
                evaluate-then-assign process covered back in 1.4 for assignment
                statements in general.
            </p>

            <div class="tip-box">
                <h3>📘 More Examples</h3>
                <p>
                    <code>double temp = 98.6; temp != 100.0</code> evaluates to
                    <code>true</code>, since <code>98.6</code> and <code>100.0</code> are
                    not equal. <code>int age = 16; age &lt;= 16</code> evaluates to
                    <code>true</code>, since <code>16</code> is equal to — and therefore
                    also less than or equal to — <code>16</code>.
                </p>
            </div>

            <h3>A Common Mistake: = vs. ==</h3>

            <p>
                A single <code>=</code> is the assignment operator from 1.4 — it stores a
                value into a variable. A double <code>==</code> is a relational operator —
                it compares two values and produces a Boolean result. These look similar
                but do completely different jobs, and mixing them up is one of the most
                common syntax mistakes new Java programmers make.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>Purpose</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>=</code></td>
                        <td>Assigns a value to a variable</td>
                        <td><code>int score = 90;</code></td>
                    </tr>
                    <tr>
                        <td><code>==</code></td>
                        <td>Compares two values, produces a Boolean</td>
                        <td><code>score == 90</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Writing <code>score = 90</code> when you meant to check whether
                    <code>score</code> equals <code>90</code> is a very easy mistake to
                    make. Always use <code>==</code> when comparing, and save <code>=</code>
                    for assigning.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about relational
                operators and Boolean expressions.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What's the difference between &lt; and &lt;=?</summary>
                    <p>
                        <code>&lt;</code> only evaluates to <code>true</code> when the left
                        value is strictly smaller than the right value, while
                        <code>&lt;=</code> also evaluates to <code>true</code> when the two
                        values are equal.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does == behave differently for Strings than for ints?</summary>
                    <p>
                        <code>int</code> is a primitive type, so <code>==</code> compares
                        the actual values directly. <code>String</code> is a reference
                        type, so <code>==</code> instead compares whether both variables
                        point to the same object in memory — not whether their text looks
                        the same.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can a relational operator ever evaluate to something other than true or false?</summary>
                    <p>
                        No. An expression involving relational operators always evaluates
                        to a Boolean value — there's no third option and no partial result.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Is = the same thing as ==?</summary>
                    <p>
                        No, and mixing them up is a common source of bugs. A single
                        <code>=</code> assigns a value to a variable, while a double
                        <code>==</code> compares two values and produces a Boolean result.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can I compare a double and an int directly?</summary>
                    <p>
                        Yes. Just like with arithmetic expressions, Java automatically
                        widens the <code>int</code> to a <code>double</code> before making
                        the comparison, so an expression like <code>7 &gt; 6.5</code> is
                        perfectly valid and evaluates to <code>true</code>.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"== always checks if two things are truly the same"</h3>

            <p>
                For primitive types, <code>==</code> compares the actual stored values.
                For reference types, it compares whether two variables point to the exact
                same object — two objects with identical-looking data can still be
                considered unequal by <code>==</code> if they're separate objects in
                memory.
            </p>

            <h3>"= and == can be used interchangeably"</h3>

            <p>
                They perform entirely different operations. <code>=</code> assigns a value
                to a variable, while <code>==</code> compares two values and produces a
                Boolean result. Using one where the other is needed will either cause a
                compiler error or silently change what your code does.
            </p>

            <h3>"&lt; and &lt;= will always give the same result"</h3>

            <p>
                They only give the same result when the two values being compared aren't
                equal. The moment the two values <em>are</em> equal, <code>&lt;</code>
                evaluates to <code>false</code> while <code>&lt;=</code> evaluates to
                <code>true</code> — a difference that matters a lot at boundary values.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Relational operators are the foundation for the if statements and loops
                coming up later in this unit, so it's worth getting comfortable evaluating
                them by hand. Ask Starr to walk through a few Boolean expressions with you,
                or to explain why a specific comparison evaluated the way it did.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Walk me through why new String("cat") ==
                    new String("cat") evaluates to false."
                </p>
            </div>

        </section>

    `

    ,

    "2.3 if Statements": `

        <section id="content" class="lesson-section">

            <h2>if Statements</h2>

            <p>
                Every program you've written so far has executed its statements
                sequentially — one after another, top to bottom, in the exact order they
                were written. Selection statements are what break that pattern. A
                selection statement changes the sequential execution of statements,
                allowing a program to skip over certain code entirely, or choose between
                two different segments of code, depending on whether a condition is
                <code>true</code> or <code>false</code>.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Selection statement:</span> a statement that changes the sequential execution of statements. An <code>if</code> statement is a type of selection statement that affects the flow of control by executing different segments of code based on the value of a Boolean expression.</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Flow of control:</span> the order in which statements in a program are executed. Sequential execution follows a single fixed path; a selection statement can redirect that path based on a condition.</p>
            </div>

            <h3>From Sequential Execution to Flow of Control</h3>

            <p>
                Without selection, a program's flow of control is entirely predictable —
                statement one runs, then statement two, then statement three, with no
                branching whatsoever. An <code>if</code> statement introduces a fork in
                that path: depending on whether a Boolean expression evaluates to
                <code>true</code> or <code>false</code>, the program's flow of control
                will either enter a segment of code or skip right past it.
            </p>

            <p>
                This connects directly back to 2.2 — the Boolean expression that an
                <code>if</code> statement evaluates is built using exactly the same
                relational operators covered there. An <code>if</code> statement is really
                just a way of telling Java, "evaluate this Boolean expression, and let the
                result decide what happens next."
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Think of flow of control as a single ball rolling through your code. In
                    a purely sequential program, that ball rolls in a straight line. An
                    <code>if</code> statement adds a fork in the track — the ball still
                    only goes one way, but which way depends on a Boolean expression
                    evaluated the instant the ball reaches the fork.
                </p>
            </div>

            <h3>One-Way Selection: the if Statement</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">if statement (one-way selection):</span> used when there is a segment of code to execute under a certain condition. The body is executed only when the Boolean expression is <code>true</code>.</p>
            </div>

            <p>
                A <strong>one-way selection</strong> is used when there's a single segment
                of code that should only execute under a certain condition. In this case,
                the body of the <code>if</code> is executed only when the Boolean
                expression is <code>true</code> — if it's <code>false</code>, the body is
                skipped entirely, and flow of control simply continues on to whatever
                comes after the <code>if</code> statement.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">temperature &lt; 32</span><span style="color:#9CA3AF;">) {</span>
    System.out.println("Freezing warning!");
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Here, <code>temperature &lt; 32</code> is the Boolean expression being
                evaluated. If it's <code>true</code>, the message prints. If it's
                <code>false</code>, the entire body between the braces is skipped, and the
                program moves on as if that code weren't there at all this time through.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Value of <code>temperature</code></th>
                        <th>Boolean Expression Result</th>
                        <th>What Happens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>20</code></td>
                        <td><code>true</code></td>
                        <td>Body executes — "Freezing warning!" prints</td>
                    </tr>
                    <tr>
                        <td><code>45</code></td>
                        <td><code>false</code></td>
                        <td>Body is skipped — nothing prints</td>
                    </tr>
                    <tr>
                        <td><code>32</code></td>
                        <td><code>false</code></td>
                        <td>Body is skipped — <code>32 &lt; 32</code> is not true</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>📘 Another Example</h3>
                <p>
                    <code>if (score &gt;= 90) { System.out.println("Great job!"); }</code>
                    — this body only runs when <code>score</code> is <code>90</code> or
                    higher. For any <code>score</code> below <code>90</code>, the program
                    skips straight past the message with no output from this statement at
                    all.
                </p>
            </div>

            <h3>Two-Way Selection: the if-else Statement</h3>

            <p>
                A one-way selection is only useful when there's nothing that needs to
                happen in the <code>false</code> case. Often, though, there are two
                segments of code — one to be executed when the Boolean expression is
                <code>true</code> and another segment for when the Boolean expression is
                <code>false</code>. That's exactly what a <strong>two-way selection</strong>,
                or <code>if-else</code> statement, provides.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">if-else statement:</span> a two-way selection statement used when there are two segments of code — one to be executed when the Boolean expression is <code>true</code> and another segment for when the Boolean expression is <code>false</code>. The body of the <code>if</code> is executed when the Boolean expression is <code>true</code>, and the body of the <code>else</code> is executed when the Boolean expression is <code>false</code>.</p>
            </div>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">age &gt;= 18</span><span style="color:#9CA3AF;">) {</span>
    System.out.println("You can vote.");
<span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else</span><span style="color:#9CA3AF;"> {</span>
    System.out.println("Not old enough yet.");
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Unlike a one-way selection, one of these two bodies is <em>guaranteed</em>
                to run every single time this statement is reached — there's no case where
                both bodies execute, and no case where neither body executes. The Boolean
                expression decides which single path is taken.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Value of <code>age</code></th>
                        <th>Boolean Expression Result</th>
                        <th>What Happens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>20</code></td>
                        <td><code>true</code></td>
                        <td>if body executes — "You can vote." prints</td>
                    </tr>
                    <tr>
                        <td><code>15</code></td>
                        <td><code>false</code></td>
                        <td>else body executes — "Not old enough yet." prints</td>
                    </tr>
                    <tr>
                        <td><code>18</code></td>
                        <td><code>true</code></td>
                        <td>if body executes — "You can vote." prints</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>📘 Another Example</h3>
                <p>
                    <code>if (num % 2 == 0) { System.out.println("Even"); } else {
                    System.out.println("Odd"); }</code> — every integer is either even or
                    odd, so exactly one of these two messages will always print, no matter
                    what value <code>num</code> holds.
                </p>
            </div>

            <h3>Comparing One-Way and Two-Way Selection</h3>

            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>One-Way Selection (if)</th>
                        <th>Two-Way Selection (if-else)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>When Boolean expression is <code>true</code></td>
                        <td>The <code>if</code> body executes</td>
                        <td>The <code>if</code> body executes</td>
                    </tr>
                    <tr>
                        <td>When Boolean expression is <code>false</code></td>
                        <td>Nothing happens — flow of control skips ahead</td>
                        <td>The <code>else</code> body executes instead</td>
                    </tr>
                    <tr>
                        <td>Guaranteed to run something?</td>
                        <td>No — the body might be skipped entirely</td>
                        <td>Yes — exactly one of the two bodies always runs</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Ask yourself: "If the condition is false, does anything still need to
                    happen?" If the answer is no, a one-way <code>if</code> is enough. If
                    the answer is yes, you need the <code>else</code> to handle that case.
                </p>
            </div>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    The body of the <code>else</code> only ever runs when the
                    <code>if</code>'s Boolean expression was <code>false</code> — the
                    <code>else</code> itself never gets its own separate condition to
                    check. It simply catches whatever case the <code>if</code> didn't
                    handle.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about <code>if</code>
                and <code>if-else</code> statements.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What exactly does "flow of control" mean?</summary>
                    <p>
                        Flow of control refers to the order in which a program's statements
                        actually execute. Without selection, that order is entirely
                        sequential; an <code>if</code> statement lets that order branch
                        based on a Boolean expression.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What happens to a one-way if statement's body when the condition is false?</summary>
                    <p>
                        It's simply skipped. Flow of control jumps past the entire body and
                        continues with whatever statement comes next in the program — the
                        skipped code doesn't run at all during that pass through the
                        program.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can both the if body and the else body run in the same if-else statement?</summary>
                    <p>
                        No. Exactly one of the two bodies runs each time an
                        <code>if-else</code> statement is reached — never both, and never
                        neither.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>When should I use if instead of if-else?</summary>
                    <p>
                        Use a plain <code>if</code> when there's nothing that needs to
                        happen in the false case. Use <code>if-else</code> when there are
                        genuinely two different segments of code — one for each possible
                        outcome of the Boolean expression.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does the else statement need its own condition?</summary>
                    <p>
                        No. The <code>else</code> has no condition of its own — it
                        automatically runs whenever the paired <code>if</code>'s Boolean
                        expression evaluates to <code>false</code>.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"An if statement without an else just does nothing when false"</h3>

            <p>
                It doesn't do nothing in a broken sense — skipping the body entirely
                <em>is</em> the intended behavior of one-way selection. Flow of control
                simply continues on with the rest of the program, exactly as designed.
            </p>

            <h3>"if and if-else are basically interchangeable"</h3>

            <p>
                They differ in exactly what happens on the <code>false</code> branch. A
                plain <code>if</code> does nothing when the condition is <code>false</code>;
                an <code>if-else</code> executes a separate, specific body instead.
                Choosing the wrong one can leave a needed case completely unhandled.
            </p>

            <h3>"The else body might not run even if the if's condition is false"</h3>

            <p>
                If an <code>if-else</code> statement is reached and its Boolean expression
                is <code>false</code>, the <code>else</code> body is guaranteed to run —
                there's no additional condition attached to the <code>else</code> that
                could cause it to be skipped too.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Tracing through flow of control is one of the most useful skills for FRQs
                involving <code>if</code> and <code>if-else</code> statements. Ask Starr to
                walk through a specific example line by line, or to help you decide
                whether a problem calls for one-way or two-way selection.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Trace through this if-else statement for me and
                    tell me exactly what prints for age = 17."
                </p>
            </div>

        </section>

    `

    ,

    "2.4 Nested if Statements": `

        <section id="content" class="lesson-section">

            <h2>Nested if Statements</h2>

            <p>
                So far, every <code>if</code> and <code>if-else</code> statement has
                evaluated a single Boolean expression and decided between one or two
                paths. Real problems are often more layered than that — sometimes a
                decision only makes sense to ask <em>after</em> another decision has
                already been made. This lesson covers how <code>if</code> statements can
                be placed inside one another, and how that nesting can be extended into a
                third form of selection: the <code>if-else-if</code> statement.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Nested if statement:</span> an <code>if</code>, <code>if-else</code>, or <code>if-else-if</code> statement placed within the body of another <code>if</code>, <code>if-else</code>, or <code>if-else-if</code> statement.</p>
            </div>

            <h3>Nesting: Nothing New, Just Placement</h3>

            <p>
                Nesting isn't a new kind of selection statement — it's simply what happens
                when a selection statement you already know is placed inside the body of
                another one. The inner statement behaves exactly the way it always has;
                what changes is that it's now surrounded by an outer condition that
                controls whether it even gets the chance to run.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">hasTicket</span><span style="color:#9CA3AF;">) {</span>  <span style="color:#6B7280;">// outer if</span>
    <span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span><span style="color:#9CA3AF;"> (</span><span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">age &gt;= 12</span><span style="color:#9CA3AF;">) {</span>  <span style="color:#6B7280;">// nested if — only reached when hasTicket is true</span>
        System.out.println("Enjoy the full ride!");
    <span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else</span><span style="color:#9CA3AF;"> {</span>  <span style="color:#6B7280;">// nested else</span>
        System.out.println("Height/age restriction applies.");
    <span style="color:#9CA3AF;">}</span>
<span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else</span><span style="color:#9CA3AF;"> {</span>  <span style="color:#6B7280;">// outer else</span>
    System.out.println("You need a ticket first.");
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Notice the structure carefully: the entire inner <code>if-else</code>
                (checking <code>age</code>) is nested inside the body of the outer
                <code>if</code> (checking <code>hasTicket</code>). This is the key rule
                behind nesting, stated explicitly in the AP CSA framework: the Boolean
                expression of the inner nested <code>if</code> statement is evaluated only
                if the Boolean expression of the outer <code>if</code> statement evaluates
                to <code>true</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>hasTicket</code></th>
                        <th><code>age</code></th>
                        <th>Is the inner condition even checked?</th>
                        <th>What Prints</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>15</code></td>
                        <td>No — the outer condition is <code>false</code>, so the inner <code>if-else</code> never runs</td>
                        <td>"You need a ticket first."</td>
                    </tr>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>15</code></td>
                        <td>Yes — the outer condition is <code>true</code>, so the inner condition is evaluated</td>
                        <td>"Enjoy the full ride!"</td>
                    </tr>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>8</code></td>
                        <td>Yes — the outer condition is <code>true</code>, so the inner condition is evaluated</td>
                        <td>"Height/age restriction applies."</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Whenever you see a nested <code>if</code>, ask yourself: "Is this inner
                    condition even reachable?" If the outer Boolean expression is
                    <code>false</code>, the inner statement — and every Boolean expression
                    inside it — is skipped completely, never evaluated at all.
                </p>
            </div>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Nesting can happen with any combination of <code>if</code>,
                    <code>if-else</code>, or <code>if-else-if</code> statements, at any
                    level — an inner statement can itself contain another nested statement,
                    and so on. Keep braces lined up carefully, since a misplaced
                    <code>else</code> can accidentally attach itself to the wrong
                    <code>if</code>.
                </p>
            </div>

            <h3>The if-else-if Statement</h3>

            <p>
                One extremely common pattern is nesting an <code>if</code> statement
                directly inside the <code>else</code> of another <code>if</code>
                statement, over and over, to check a whole series of conditions one after
                another. Java gives this pattern its own name and its own compact syntax:
                the <code>if-else-if</code> statement.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">if-else-if statement:</span> a series of nested <code>if</code> statements used to test more than two possible outcomes, formed by nesting an <code>if</code> statement inside the <code>else</code> of the previous one. Each Boolean expression is only evaluated if every Boolean expression before it evaluated to <code>false</code>.</p>
            </div>

            <p>
                Written the "fully nested" way, a chain of these conditions looks like a
                staircase of indentation. Written as <code>if-else-if</code>, that same
                logic is expressed far more cleanly:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">grade &gt;= 90</span><span style="color:#9CA3AF;">) {</span>  <span style="color:#6B7280;">// checked first</span>
    System.out.println("A");
<span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else if</span><span style="color:#9CA3AF;"> (</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">grade &gt;= 80</span><span style="color:#9CA3AF;">) {</span>  <span style="color:#6B7280;">// only checked if grade &gt;= 90 was false</span>
    System.out.println("B");
<span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else if</span><span style="color:#9CA3AF;"> (</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">grade &gt;= 70</span><span style="color:#9CA3AF;">) {</span>  <span style="color:#6B7280;">// only checked if the two above were false</span>
    System.out.println("C");
<span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else</span><span style="color:#9CA3AF;"> {</span>  <span style="color:#6B7280;">// trailing else — catches everything left over</span>
    System.out.println("Needs improvement");
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Under the hood, this is exactly the nested version from the vocabulary
                definition above — each <code>else if</code> is really an <code>if</code>
                nested one level deeper inside the previous <code>else</code>. Java just
                lets you write it without the extra indentation and extra closing braces
                that true nesting would require.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>grade</code></th>
                        <th>What Prints</th>
                        <th>Why</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>95</code></td>
                        <td>"A"</td>
                        <td>The first condition, <code>grade &gt;= 90</code>, is already <code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>82</code></td>
                        <td>"B"</td>
                        <td><code>grade &gt;= 90</code> is <code>false</code>, so Java checks the next condition, <code>grade &gt;= 80</code>, which is <code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>60</code></td>
                        <td>"Needs improvement"</td>
                        <td>All three conditions are <code>false</code>, so the final trailing <code>else</code> runs</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Once one condition in an <code>if-else-if</code> chain evaluates to
                    <code>true</code>, its body executes and every remaining condition in
                    the chain is skipped entirely — even if a later condition would also
                    have been <code>true</code>. A grade of <code>95</code> matches
                    <code>grade &gt;= 90</code> first and never gets the chance to also
                    check <code>grade &gt;= 80</code>.
                </p>
            </div>

            <h3>Multiway Selection</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Multiway selection:</span> implemented using an <code>if-else-if</code> statement, and used when there are a series of expressions with different segments of code for each condition. Multiway selection is performed such that no more than one segment of code is executed, based on the first expression that evaluates to <code>true</code>. If no expression evaluates to <code>true</code> and there is a trailing <code>else</code> statement, then the body of the <code>else</code> is executed.</p>
            </div>

            <p>
                The grading example above <em>is</em> multiway selection: rather than
                choosing between just two outcomes, the program is choosing between four
                — A, B, C, or "Needs improvement" — using a single connected chain of
                conditions. The defining feature of multiway selection is that it's
                <strong>mutually exclusive</strong>: no matter how many conditions in the
                chain would technically evaluate to <code>true</code>, only the segment of
                code belonging to the <em>first</em> one that matches actually runs.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">windSpeed &gt; 74</span><span style="color:#9CA3AF;">) {</span>
    System.out.println("Hurricane");
<span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else if</span><span style="color:#9CA3AF;"> (</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">windSpeed &gt; 38</span><span style="color:#9CA3AF;">) {</span>
    System.out.println("Tropical Storm");
<span style="color:#9CA3AF;">} </span><span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">else if</span><span style="color:#9CA3AF;"> (</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">windSpeed &gt; 0</span><span style="color:#9CA3AF;">) {</span>
    System.out.println("Breezy");
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Notice this version has no trailing <code>else</code>. If
                <code>windSpeed</code> is <code>0</code> or less, none of the three
                conditions are <code>true</code>, and — exactly as the definition states —
                since there's no trailing <code>else</code> here, nothing prints at all.
                Adding a final <code>else</code> would guarantee that some message always
                prints, no matter what value <code>windSpeed</code> holds.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>windSpeed</code></th>
                        <th>What Prints</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>90</code></td>
                        <td>"Hurricane"</td>
                    </tr>
                    <tr>
                        <td><code>50</code></td>
                        <td>"Tropical Storm"</td>
                    </tr>
                    <tr>
                        <td><code>10</code></td>
                        <td>"Breezy"</td>
                    </tr>
                    <tr>
                        <td><code>0</code></td>
                        <td>Nothing prints — no condition is <code>true</code>, and there's no trailing <code>else</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Order matters in multiway selection. The <code>windSpeed &gt; 74</code>
                    condition has to come first — if <code>windSpeed &gt; 0</code> were
                    checked first instead, a hurricane-force wind speed would incorrectly
                    match "Breezy" and stop right there, since it's also greater than
                    <code>0</code>.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about nested
                <code>if</code> statements and multiway selection.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Is a nested if statement a different kind of statement from a regular if?</summary>
                    <p>
                        No. Nesting just describes where a statement is placed — inside the
                        body of another <code>if</code>, <code>if-else</code>, or
                        <code>if-else-if</code>. The nested statement itself still behaves
                        exactly like any other selection statement.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does Java check the inner condition even if the outer condition is false?</summary>
                    <p>
                        No. The Boolean expression of the inner nested <code>if</code>
                        statement is evaluated only if the Boolean expression of the outer
                        <code>if</code> statement evaluates to <code>true</code>. If the
                        outer condition is <code>false</code>, the inner condition is never
                        checked at all.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Is if-else-if just a shortcut for nested if statements?</summary>
                    <p>
                        Essentially, yes — an <code>if-else-if</code> chain is equivalent to
                        nesting an <code>if</code> statement inside each <code>else</code>,
                        just written in a flatter, more readable form without the extra
                        indentation.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can more than one branch of an if-else-if chain run?</summary>
                    <p>
                        No. Multiway selection guarantees that no more than one segment of
                        code executes — as soon as the first <code>true</code> condition is
                        found, its body runs and the rest of the chain is skipped entirely.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What happens if none of the conditions in an if-else-if chain are true and there's no else?</summary>
                    <p>
                        Nothing happens — none of the bodies execute, and the program
                        simply continues on with whatever comes after the chain. Adding a
                        trailing <code>else</code> is the only way to guarantee some code
                        always runs.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"Nesting creates a brand-new type of selection statement"</h3>

            <p>
                Nesting is purely about placement — an <code>if</code>,
                <code>if-else</code>, or <code>if-else-if</code> statement inside another
                one is still built from the exact same statements covered in 2.3. Nothing
                about how each individual statement evaluates changes because it's nested.
            </p>

            <h3>"In an if-else-if chain, every condition gets checked"</h3>

            <p>
                Only conditions up through the first one that evaluates to <code>true</code>
                are checked — each Boolean expression is only evaluated if every Boolean
                expression before it evaluated to <code>false</code>. Once a match is
                found, the rest of the chain is skipped.
            </p>

            <h3>"Multiway selection can execute more than one segment if multiple conditions are true"</h3>

            <p>
                Multiway selection is specifically designed so that no more than one
                segment of code is executed — based only on the first expression that
                evaluates to <code>true</code>. Even if a later condition in the same chain
                would also be <code>true</code>, it never gets evaluated once an earlier
                match has already been found.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Nested <code>if</code> statements and multiway selection show up constantly
                on FRQs that involve categorizing values into several possible outcomes.
                Ask Starr to trace through a nested example step by step, or to help you
                decide whether a problem calls for full nesting or a cleaner
                <code>if-else-if</code> chain.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Trace through my if-else-if chain and tell me
                    exactly which branch runs for windSpeed = 40."
                </p>
            </div>

        </section>

    `

    ,

    "2.5 Compound Boolean Expressions": `

        <section id="content" class="lesson-section">

            <h2>Compound Boolean Expressions</h2>

            <p>
                Relational operators from 2.2 can only ask one question at a time —
                is this value greater than that one, are these two values equal, and so
                on. Many real conditions need to combine several of these questions
                together: "it's raining <em>and</em> I don't have an umbrella," or "the
                light is red <em>or</em> a pedestrian is crossing." <strong>Logical
                operators</strong> are what let Boolean expressions be combined this way
                into a single, larger Boolean expression.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Logical operator:</span> an operator used with Boolean expressions to form a compound Boolean expression. Java's logical operators are <code>!</code> (not), <code>&amp;&amp;</code> (and), and <code>||</code> (or).</p>
            </div>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Compound Boolean expression:</span> an expression formed by combining one or more Boolean expressions using logical operators. Like any Boolean expression, a compound Boolean expression involving logical operators always evaluates to a Boolean value.</p>
            </div>

            <h3>The ! (not) Operator</h3>

            <p>
                The <code>!</code> operator is the simplest of the three — it takes a
                single Boolean expression and flips it. The expression <code>!a</code>
                evaluates to <code>true</code> if <code>a</code> is <code>false</code>,
                and evaluates to <code>false</code> otherwise.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>a</code></th>
                        <th><code>!a</code></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>📘 Example</h3>
                <p>
                    <code>boolean isRaining = false; !isRaining</code> evaluates to
                    <code>true</code>. If <code>hasTicket</code> is <code>true</code>, then
                    <code>!hasTicket</code> evaluates to <code>false</code> — the exact
                    opposite of whatever <code>hasTicket</code> itself holds.
                </p>
            </div>

            <h3>The &amp;&amp; (and) Operator</h3>

            <p>
                The <code>&amp;&amp;</code> operator combines two Boolean expressions and
                only evaluates to <code>true</code> when <em>both</em> are <code>true</code>.
                The expression <code>a &amp;&amp; b</code> evaluates to <code>true</code>
                if both <code>a</code> and <code>b</code> are <code>true</code>, and
                evaluates to <code>false</code> otherwise.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>a</code></th>
                        <th><code>b</code></th>
                        <th><code>a &amp;&amp; b</code></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>📘 Example</h3>
                <p>
                    <code>age &gt;= 16 &amp;&amp; hasLicense</code> only evaluates to
                    <code>true</code> when the person is at least <code>16</code>
                    <em>and</em> <code>hasLicense</code> is <code>true</code> — falling
                    short on either requirement makes the whole expression
                    <code>false</code>.
                </p>
            </div>

            <h3>The || (or) Operator</h3>

            <p>
                The <code>||</code> operator also combines two Boolean expressions, but
                it only requires <em>one</em> of them to be <code>true</code>. The
                expression <code>a || b</code> evaluates to <code>true</code> if
                <code>a</code> is <code>true</code>, <code>b</code> is <code>true</code>,
                or both, and evaluates to <code>false</code> otherwise.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>a</code></th>
                        <th><code>b</code></th>
                        <th><code>a || b</code></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>📘 Example</h3>
                <p>
                    <code>isWeekend || isHoliday</code> evaluates to <code>true</code> if
                    it's a weekend, a holiday, or somehow both — the only way this
                    expression is <code>false</code> is if neither condition holds.
                </p>
            </div>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Java's <code>||</code> is an <strong>inclusive or</strong> — it's still
                    <code>true</code> even when both sides are <code>true</code>. Don't
                    confuse it with the everyday "either/or" sense of the word, where
                    picking both isn't allowed.
                </p>
            </div>

            <h3>Order of Precedence</h3>

            <p>
                When a compound Boolean expression uses more than one logical operator,
                Java needs a consistent rule for which operator gets applied first. The
                order of precedence for evaluating logical operators is <code>!</code>
                (not) first, then <code>&amp;&amp;</code> (and), then <code>||</code> (or)
                — the exact same idea as precedence among arithmetic operators back in 1.3,
                just with a different set of operators.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Precedence</th>
                        <th>Operator</th>
                        <th>Evaluated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1st (highest)</td>
                        <td><code>!</code></td>
                        <td>First</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td><code>&amp;&amp;</code></td>
                        <td>Second</td>
                    </tr>
                    <tr>
                        <td>3rd (lowest)</td>
                        <td><code>||</code></td>
                        <td>Last</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Consider the expression <code>a || b &amp;&amp; !c</code>. Following
                precedence, <code>!c</code> is evaluated first, then
                <code>b &amp;&amp; !c</code> is evaluated, and only then is the result
                combined with <code>a</code> using <code>||</code> — effectively, Java
                reads it as <code>a || (b &amp;&amp; (!c))</code>, even though no
                parentheses were written.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>a</code></th>
                        <th><code>b</code></th>
                        <th><code>c</code></th>
                        <th>Step 1: <code>!c</code></th>
                        <th>Step 2: <code>b &amp;&amp; !c</code></th>
                        <th>Step 3: <code>a || (b &amp;&amp; !c)</code></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Just like with arithmetic, parentheses can always be added to a
                    compound Boolean expression to make the intended order explicit — and
                    doing so is often good practice, since relying purely on precedence
                    can make an expression harder to read at a glance.
                </p>
            </div>

            <h3>Short-Circuit Evaluation</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Short-circuit evaluation:</span> occurs when the result of a logical operation using <code>&amp;&amp;</code> or <code>||</code> can be determined by evaluating only the first Boolean expression. In this case, the second Boolean expression is not evaluated.</p>
            </div>

            <p>
                Java doesn't always bother evaluating both sides of <code>&amp;&amp;</code>
                or <code>||</code> — sometimes the first expression alone is enough to
                already know the final answer, and Java skips evaluating the second
                expression entirely.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Operator</th>
                        <th>When Short-Circuiting Happens</th>
                        <th>Why</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>&amp;&amp;</code></td>
                        <td>The first expression is <code>false</code></td>
                        <td>Both sides must be <code>true</code> for the result to be <code>true</code> — if the first is already <code>false</code>, the whole expression is guaranteed to be <code>false</code> no matter what the second side evaluates to</td>
                    </tr>
                    <tr>
                        <td><code>||</code></td>
                        <td>The first expression is <code>true</code></td>
                        <td>Only one side needs to be <code>true</code> for the result to be <code>true</code> — if the first is already <code>true</code>, the whole expression is guaranteed to be <code>true</code> no matter what the second side evaluates to</td>
                    </tr>
                </tbody>
            </table>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">int x = 0;
<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">x != 0</span> <span style="background:rgba(255,224,122,.22); color:#FFE7A0; padding:3px 7px; border-radius:5px; font-weight:700;">&amp;&amp;</span> <span style="background:rgba(190,255,98,.22); color:#D4FF9E; padding:3px 7px; border-radius:5px; font-weight:700;">10 / x &gt; 1</span><span style="color:#9CA3AF;">) {</span>  <span style="color:#6B7280;">// x != 0 is false, so 10 / x is never evaluated</span>
    System.out.println("Big ratio");
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                This example shows exactly why short-circuit evaluation matters beyond
                just efficiency. If Java evaluated both sides of <code>&amp;&amp;</code>
                every time, <code>10 / x</code> would throw an
                <code>ArithmeticException</code> when <code>x</code> is <code>0</code>,
                since dividing by zero isn't allowed. Because <code>x != 0</code> is
                <code>false</code>, short-circuit evaluation guarantees
                <code>10 / x</code> is never reached at all, and the program safely moves
                on without crashing.
            </p>

            <div class="tip-box">
                <h3>📘 Another Example</h3>
                <p>
                    <code>String name = null; if (name != null &amp;&amp;
                    name.length() &gt; 0) { ... }</code> — if <code>name</code> is
                    <code>null</code>, <code>name != null</code> is <code>false</code>,
                    and short-circuit evaluation prevents <code>name.length()</code> from
                    ever running. Without short-circuiting, calling
                    <code>.length()</code> on a <code>null</code> reference would cause a
                    run-time error.
                </p>
            </div>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A useful pattern to recognize: placing a "safety check" first in an
                    <code>&amp;&amp;</code> expression — like checking a reference isn't
                    <code>null</code>, or a divisor isn't <code>0</code> — relies entirely
                    on short-circuit evaluation to protect the second expression from
                    ever running under unsafe conditions.
                </p>
            </div>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Short-circuit evaluation only applies to <code>&amp;&amp;</code> and
                    <code>||</code> — the order the two expressions are written in
                    matters. Swapping <code>x != 0 &amp;&amp; 10 / x &gt; 1</code> to
                    <code>10 / x &gt; 1 &amp;&amp; x != 0</code> would evaluate
                    <code>10 / x</code> first, defeating the entire purpose of the safety
                    check.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about logical
                operators, precedence, and short-circuit evaluation.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>What's the difference between && and ||?</summary>
                    <p>
                        <code>&amp;&amp;</code> requires both Boolean expressions to be
                        <code>true</code> for the compound expression to be
                        <code>true</code>. <code>||</code> only requires at least one of
                        them to be <code>true</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does || require exactly one side to be true?</summary>
                    <p>
                        No — it requires <em>at least</em> one side to be <code>true</code>.
                        If both sides happen to be <code>true</code>, <code>a || b</code>
                        still evaluates to <code>true</code>, since Java's <code>||</code>
                        is an inclusive or.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Which logical operator is evaluated first if I use more than one?</summary>
                    <p>
                        <code>!</code> is evaluated first, then <code>&amp;&amp;</code>,
                        then <code>||</code>. Parentheses can always be added to override
                        this default order and make the intended grouping explicit.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does short-circuit evaluation matter beyond saving time?</summary>
                    <p>
                        It can prevent a run-time error. Placing a safety check — like
                        <code>x != 0</code> — before a risky operation in an
                        <code>&amp;&amp;</code> expression guarantees that risky operation
                        never runs if the safety check already failed.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does short-circuit evaluation apply to !?</summary>
                    <p>
                        No — <code>!</code> only ever works on a single Boolean expression,
                        so there's no second expression to potentially skip. Short-circuit
                        evaluation specifically applies to <code>&amp;&amp;</code> and
                        <code>||</code>, which each combine two expressions.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"|| means exactly one side has to be true, not both"</h3>

            <p>
                Java's <code>||</code> is an inclusive or — it's <code>true</code> whenever
                at least one side is <code>true</code>, including the case where both
                sides are <code>true</code>. It never requires exactly one side and no
                more.
            </p>

            <h3>"Both sides of && and || always get evaluated"</h3>
            
            <p>
                Not necessarily. Short-circuit evaluation occurs when the result can
                already be determined from the first Boolean expression alone — in that
                case, the second Boolean expression is never evaluated at all.
            </p>

            <h3>"The order of expressions in && or || doesn't matter"</h3>

            <p>
                It can matter a great deal, especially when the second expression depends
                on the first one being true — like checking a reference isn't
                <code>null</code> before calling a method on it. Writing the safety check
                second instead of first defeats the protection short-circuit evaluation
                would otherwise provide.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Compound Boolean expressions and short-circuit evaluation are common
                sources of tricky FRQ tracing questions. Ask Starr to evaluate a compound
                expression with you step by step, respecting precedence, or to explain why
                a specific short-circuit pattern prevents a run-time error.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Walk me through why list != null &amp;&amp;
                    list.size() &gt; 0 is written in that order and not the reverse."
                </p>
            </div>

        </section>

    `

    ,

    "2.6 Comparing Boolean Expressions": `

        <section id="content" class="lesson-section">

            <h2>Comparing Boolean Expressions</h2>

            <p>
                With <code>!</code>, <code>&amp;&amp;</code>, and <code>||</code> from
                2.5 in hand, Boolean expressions can start to get genuinely complex —
                complex enough that two expressions which look completely different on
                the page might actually behave identically every time they're evaluated.
                This lesson covers how to prove that formally using truth tables, a
                specific shortcut for rewriting certain expressions called De Morgan's
                law, and a separate but related topic: how object references are compared
                using <code>==</code> and <code>!=</code>.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Equivalent Boolean expressions:</span> two Boolean expressions are equivalent if they evaluate to the same value in all cases. Truth tables can be used to prove Boolean expressions are equivalent.</p>
            </div>

            <h3>Truth Tables</h3>

            <p>
                A <strong>truth table</strong> lists every possible combination of
                <code>true</code>/<code>false</code> values for the variables involved in
                an expression, alongside what that expression evaluates to for each
                combination. Since a Boolean variable only ever has two possible values,
                a truth table for an expression with <code>n</code> variables needs
                exactly <code>2<sup>n</sup></code> rows to cover every case.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Number of Variables</th>
                        <th>Rows Needed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 (e.g. just <code>a</code>)</td>
                        <td><code>2</code> rows</td>
                    </tr>
                    <tr>
                        <td>2 (e.g. <code>a</code> and <code>b</code>)</td>
                        <td><code>4</code> rows</td>
                    </tr>
                    <tr>
                        <td>3 (e.g. <code>a</code>, <code>b</code>, and <code>c</code>)</td>
                        <td><code>8</code> rows</td>
                    </tr>
                </tbody>
            </table>

            <p>
                To prove two Boolean expressions are equivalent, build a truth table that
                includes both expressions as columns, fill in every row, and check whether
                the two columns match on every single row. If even one row differs, the
                two expressions are <em>not</em> equivalent — they only happen to agree
                some of the time, which isn't enough.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    "Equivalent" is a strong word here — it doesn't mean two expressions
                    <em>usually</em> agree, or agree for the values you happened to test.
                    It means they agree for <em>every</em> possible combination of values,
                    with no exceptions. That's exactly why a full truth table, not just a
                    few spot checks, is required to prove it.
                </p>
            </div>

            <h3>De Morgan's Law</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">De Morgan's law:</span> can be applied to Boolean expressions to create equivalent Boolean expressions. Under De Morgan's law, the Boolean expression <code>!(a &amp;&amp; b)</code> is equivalent to <code>!a || !b</code>, and the Boolean expression <code>!(a || b)</code> is equivalent to <code>!a &amp;&amp; !b</code>.</p>
            </div>

            <p>
                De Morgan's law gives a reliable way to rewrite a negated compound
                expression by "distributing" the <code>!</code> across each side, while
                flipping <code>&amp;&amp;</code> to <code>||</code> (or <code>||</code> to
                <code>&amp;&amp;</code>) in the process.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Original Expression</th>
                        <th>Equivalent Expression (De Morgan's Law)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>!(a &amp;&amp; b)</code></td>
                        <td><code>!a || !b</code></td>
                    </tr>
                    <tr>
                        <td><code>!(a || b)</code></td>
                        <td><code>!a &amp;&amp; !b</code></td>
                    </tr>
                </tbody>
            </table>

            <p>
                Here's a full truth table proving the first version of De Morgan's law —
                notice the two rightmost columns, <code>!(a &amp;&amp; b)</code> and
                <code>!a || !b</code>, match on every single row:
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th><code>a</code></th>
                        <th><code>b</code></th>
                        <th><code>a &amp;&amp; b</code></th>
                        <th><code>!(a &amp;&amp; b)</code></th>
                        <th><code>!a</code></th>
                        <th><code>!b</code></th>
                        <th><code>!a || !b</code></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                    </tr>
                    <tr>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                    </tr>
                    <tr>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>false</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                        <td><code>true</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>📘 Example</h3>
                <p>
                    Given <code>!(isRaining &amp;&amp; isWindy)</code>, De Morgan's law
                    rewrites this as <code>!isRaining || !isWindy</code> — "not raining and
                    windy" becomes "not raining, or not windy," and both expressions are
                    guaranteed to evaluate identically for any combination of
                    <code>isRaining</code> and <code>isWindy</code>.
                </p>
            </div>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A quick way to remember De Morgan's law: negating a compound
                    expression always flips the operator in the middle — <code>&amp;&amp;</code>
                    becomes <code>||</code>, and <code>||</code> becomes <code>&amp;&amp;</code>
                    — while distributing the <code>!</code> onto each individual piece.
                </p>
            </div>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    A very common mistake is negating a compound expression by only
                    negating the pieces, without flipping the operator —
                    <code>!(a &amp;&amp; b)</code> is <strong>not</strong> equivalent to
                    <code>!a &amp;&amp; !b</code>. Build a truth table if you're ever
                    unsure, since it will immediately reveal a row where the two
                    expressions disagree.
                </p>
            </div>

            <h3>Comparing Object References with == and !=</h3>

            <p>
                2.2 introduced the idea that <code>==</code> behaves differently for
                reference types than for primitive types, and this lesson goes a level
                deeper. Two different variables can hold references to the same object.
                Object references can be compared using <code>==</code> and <code>!=</code>
                — and doing so checks whether both variables are pointing at that exact
                same object in memory, not whether the objects they point to happen to
                look alike.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">String s1 = new String("cat");
String s2 = new String("cat");
String s3 = s1;

System.out.println(s1 == s2);  <span style="color:#6B7280;">// false — two separate objects</span>
System.out.println(s1 == s3);  <span style="color:#6B7280;">// true — s3 references the same object as s1</span></pre>
            </div>

            <p>
                <code>s1</code> and <code>s2</code> are built using two separate calls to
                <code>new String(...)</code>, so even though both objects store the
                identical text <code>"cat"</code>, they live at two different locations in
                memory — <code>s1 == s2</code> is <code>false</code>. <code>s3</code>,
                however, is assigned directly from <code>s1</code>, meaning
                <code>s3</code> doesn't get its own new object at all — it simply points
                to the exact same object <code>s1</code> already references, so
                <code>s1 == s3</code> is <code>true</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Comparison</th>
                        <th>Result</th>
                        <th>Why</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>s1 == s2</code></td>
                        <td><code>false</code></td>
                        <td>Two distinct objects, even with identical content</td>
                    </tr>
                    <tr>
                        <td><code>s1 == s3</code></td>
                        <td><code>true</code></td>
                        <td>Both variables reference the exact same object</td>
                    </tr>
                    <tr>
                        <td><code>s1 != s2</code></td>
                        <td><code>true</code></td>
                        <td>The objects are not the same, so <code>!=</code> is <code>true</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>Comparing a Reference to null</h3>

            <p>
                An object reference can also be compared with <code>null</code>, using
                <code>==</code> or <code>!=</code>, to determine if the reference actually
                references an object. This is exactly the kind of safety check introduced
                back in 2.5 as a common short-circuit evaluation pattern.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Expression</th>
                        <th>What It Checks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>name == null</code></td>
                        <td><code>true</code> if <code>name</code> isn't pointing to any object at all</td>
                    </tr>
                    <tr>
                        <td><code>name != null</code></td>
                        <td><code>true</code> if <code>name</code> is currently pointing to an actual object</td>
                    </tr>
                </tbody>
            </table>

            <h3>The equals() Method: Comparing Content, Not References</h3>

            <p>
                <code>==</code> and <code>!=</code> only ever answer one question for
                reference types: are these two variables pointing at the exact same
                object? Often, that's not actually the question a program needs answered
                — usually what matters is whether two objects represent the same
                <em>value</em>, even if they're stored as two separate objects in memory.
                That's what the <code>equals()</code> method is for.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">equals() method:</span> classes often define their own <code>equals</code> method, which can be used to specify the criteria for equivalency for two objects of the class. The equivalency of two objects is most often determined using attributes from the two objects.</p>
            </div>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">String s1 = new String("cat");
String s2 = new String("cat");

System.out.println(s1 == s2);       <span style="color:#6B7280;">// false — different objects in memory</span>
System.out.println(s1.equals(s2));  <span style="color:#6B7280;">// true — same content: "cat" and "cat"</span></pre>
            </div>

            <p>
                This is exactly the distinction the AP CSA framework draws: <code>==</code>
                asks "are these the same object?" while <code>equals()</code> asks "do
                these two objects count as equal, based on their content?" For
                <code>String</code>, that content is the sequence of characters being
                stored — two different <code>String</code> objects holding the same text
                will always return <code>true</code> from <code>equals()</code>, even
                though <code>==</code> returns <code>false</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th></th>
                        <th><code>==</code> / <code>!=</code></th>
                        <th><code>equals()</code></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>What it compares</td>
                        <td>Whether two references point to the exact same object</td>
                        <td>Whether two objects count as equivalent, based on their content</td>
                    </tr>
                    <tr>
                        <td>Who defines the comparison</td>
                        <td>Built into Java for all reference types</td>
                        <td>Defined individually by each class, based on its own attributes</td>
                    </tr>
                    <tr>
                        <td>Two objects with identical content, stored separately</td>
                        <td><code>false</code></td>
                        <td><code>true</code>, assuming the class defines <code>equals()</code> to compare content this way</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>🚫 Exclusion Statement</h3>
                <p>
                    Overriding the <code>equals</code> method — that is, writing your own
                    version of <code>equals()</code> inside a class you design yourself —
                    is outside the scope of the AP Computer Science A course and exam. You
                    are expected to understand what <code>equals()</code> does and how to
                    call it correctly on existing classes like <code>String</code>, but
                    you won't be asked to implement it yourself.
                </p>
            </div>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Using <code>==</code> when you meant to check content equality is a
                    very common source of bugs, especially with <code>String</code>
                    objects. When comparing whether two objects represent the same value,
                    <code>equals()</code> is almost always the correct choice —
                    <code>==</code> should be reserved for cases where you specifically
                    need to know whether two references point to the exact same object.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about truth tables,
                De Morgan's law, and comparing objects.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>How many rows does a truth table need?</summary>
                    <p>
                        A truth table needs <code>2<sup>n</sup></code> rows, where
                        <code>n</code> is the number of Boolean variables involved — every
                        possible combination of <code>true</code>/<code>false</code> values
                        for those variables has to be represented.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What exactly does De Morgan's law let me do?</summary>
                    <p>
                        It lets you rewrite a negated compound expression into an
                        equivalent form by distributing the <code>!</code> and flipping
                        <code>&amp;&amp;</code> to <code>||</code> (or vice versa) —
                        <code>!(a &amp;&amp; b)</code> becomes <code>!a || !b</code>, and
                        <code>!(a || b)</code> becomes <code>!a &amp;&amp; !b</code>.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why does s1 == s2 return false even when both Strings hold "cat"?</summary>
                    <p>
                        Because <code>new String("cat")</code> creates a brand-new object
                        each time it's called. <code>==</code> checks whether two
                        references point to the exact same object, not whether their
                        content matches — two separately created objects are never the
                        same object, no matter what they contain.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>When should I use equals() instead of ==?</summary>
                    <p>
                        Use <code>equals()</code> whenever you want to know if two objects
                        represent the same value or content. Reserve <code>==</code> for
                        situations where you specifically need to check whether two
                        variables reference the exact same object in memory.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Do I need to know how to write my own equals() method?</summary>
                    <p>
                        No. Overriding the <code>equals</code> method is explicitly outside
                        the scope of the AP CSA course and exam. You just need to
                        understand what it does and be able to call it correctly.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"!(a && b) is the same as !a && !b"</h3>

            <p>
                It isn't — this is one of the most common De Morgan's law mistakes.
                Negating a compound expression flips the operator in the middle, so
                <code>!(a &amp;&amp; b)</code> is actually equivalent to
                <code>!a || !b</code>, not <code>!a &amp;&amp; !b</code>.
            </p>

            <h3>"== always tells you if two objects are equal"</h3>

            <p>
                For reference types, <code>==</code> only tells you whether two variables
                point to the exact same object — not whether the objects contain equal or
                equivalent data. Two separately created objects with identical content
                will still return <code>false</code> from <code>==</code>.
            </p>

            <h3>"Checking a few example values is enough to prove two expressions are equivalent"</h3>

            <p>
                Equivalence requires matching results in <em>every</em> case, not just the
                ones you happened to check. A full truth table, covering every possible
                combination of values, is the only reliable way to prove two Boolean
                expressions are truly equivalent.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Truth tables, De Morgan's law, and the difference between <code>==</code>
                and <code>equals()</code> are all common sources of tricky FRQ and MCQ
                questions. Ask Starr to build out a truth table with you, or to trace
                through a reference comparison step by step.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Build a truth table proving that !(a || b) is
                    equivalent to !a && !b."
                </p>
            </div>

        </section>

    `,

    "2.7 while Loops": `

        <section id="content" class="lesson-section">

            <h2>while Loops</h2>

            <p>
                So far, every algorithm in this course has run through its steps once,
                possibly branching with selection along the way. This lesson introduces
                <strong>iteration</strong> — the third building block from Lesson 2.1 — and
                the first Java statement that actually implements it: the
                <strong>while loop</strong>.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Iteration:</span> a form of repetition. Iteration statements change the flow of control by repeating a segment of code zero or more times as long as the Boolean expression controlling the loop evaluates to <code>true</code>.</p>
            </div>

            <p>
                Notice the phrase "zero or more times." Iteration doesn't guarantee a loop
                body runs at all — it only guarantees that the loop body keeps running
                <em>as long as</em> its controlling Boolean expression is <code>true</code>.
                If that expression is <code>false</code> the very first time it's checked,
                the loop body never executes.
            </p>

            <h3>Infinite Loops</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Infinite loop:</span> occurs when the Boolean expression in an iterative statement always evaluates to <code>true</code>.</p>
            </div>

            <p>
                An infinite loop happens when nothing inside the loop body ever causes the
                controlling Boolean expression to become <code>false</code>. Since the loop
                only stops when its condition evaluates to <code>false</code>, a condition
                that can never change — or a loop body that never updates the variables the
                condition depends on — will keep repeating forever, at least until the
                program is forcibly stopped.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Every loop needs some piece of code, usually inside the loop body, that
                    moves the controlling condition closer to becoming <code>false</code>.
                    Forgetting to update a counter or a controlling variable is the most
                    common way an infinite loop gets created by accident.
                </p>
            </div>

            <h3>Off-by-One Errors</h3>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">Off-by-one error:</span> occurs when the iteration statement loops one time too many or one time too few.</p>
            </div>

            <p>
                Off-by-one errors happen at the boundary of a loop's condition — usually
                because a comparison operator is slightly wrong, or because a starting or
                ending value is set incorrectly. A loop that should run 10 times but
                actually runs 9 or 11 is still a working loop; it's just counting to the
                wrong place, which makes these errors easy to write and surprisingly easy
                to miss.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    When a loop's iteration count seems suspicious, trace through the exact
                    values of the controlling variable on the first and last few passes.
                    Off-by-one errors almost always reveal themselves at the very start or
                    the very end of a loop, not in the middle.
                </p>
            </div>

            <h3>The while Loop</h3>

            <p>
                A <strong>while loop</strong> is a type of iterative statement. In
                <code>while</code> loops, the Boolean expression is evaluated
                <em>before</em> each iteration of the loop body, including the first. When
                the expression evaluates to <code>true</code>, the loop body is executed.
                This continues until the Boolean expression evaluates to
                <code>false</code>, whereupon the iteration terminates.
            </p>

            <p>
                Because the condition is checked before the body ever runs, a
                <code>while</code> loop is sometimes called a <strong>pre-test loop</strong>.
                If the condition is <code>false</code> on that very first check, the loop
                body is skipped entirely — this is exactly what "zero or more times" means
                in practice.
            </p>

            <h3>Constructing a while Loop</h3>

            <p>
                The general form of a <code>while</code> loop is:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">while</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">booleanExpression</span><span style="color:#9CA3AF;">) {</span>
    <span style="color:#6B7280;">// loop body</span>
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                The keyword <code>while</code> is followed by a Boolean expression in
                parentheses, and then a block of statements enclosed in curly braces. Each
                time control reaches the top of the loop, Java evaluates the Boolean
                expression. If it's <code>true</code>, every statement inside the braces
                runs once, and control returns to the top to check the expression again. If
                it's <code>false</code>, control skips past the closing brace entirely and
                the program continues with whatever comes after the loop.
            </p>

            <p>
                A typical <code>while</code> loop that counts from 1 to 5 looks like this:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">int count = 1;

<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">while</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">count &lt;= 5</span><span style="color:#9CA3AF;">) {</span>
    System.out.println(count);
    count++;
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Three pieces work together to make this loop behave correctly:
                <strong>initialization</strong> (<code>count</code> is set to 1 before the
                loop begins), the <strong>condition</strong> (<code>count &lt;= 5</code>,
                checked before every iteration), and the <strong>update</strong>
                (<code>count++</code>, which moves the condition closer to becoming
                <code>false</code>). Removing any one of these three pieces is a common way
                to accidentally create an infinite loop or an off-by-one error.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Piece</th>
                        <th>Role</th>
                        <th>In the example above</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Initialization</td>
                        <td>Sets up the variable the condition depends on</td>
                        <td><code>int count = 1;</code></td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>Checked before every iteration, including the first</td>
                        <td><code>count &lt;= 5</code></td>
                    </tr>
                    <tr>
                        <td>Update</td>
                        <td>Moves the condition toward becoming false</td>
                        <td><code>count++;</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Trace a <code>while</code> loop the same way every time: check the
                    condition, run the body if it's <code>true</code>, then check the
                    condition again. Writing out the value of the controlling variable at
                    each pass is the most reliable way to predict a loop's output on paper.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about iteration and
                <code>while</code> loops.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Can a while loop run zero times?</summary>
                    <p>
                        Yes. Since the condition is checked before the loop body ever runs,
                        a <code>while</code> loop whose condition is <code>false</code> on
                        the very first check will skip its body entirely.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>What's the difference between an infinite loop and a loop that just runs a lot of times?</summary>
                    <p>
                        A loop that runs many times still eventually makes its condition
                        <code>false</code>. An infinite loop's condition never becomes
                        <code>false</code> at all, usually because the loop body never
                        updates whatever variable the condition depends on.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>How do I know if I have an off-by-one error?</summary>
                    <p>
                        Trace through the controlling variable's value on the first and
                        last iterations by hand. If the loop executes one more or one fewer
                        time than intended, the issue is almost always in the starting
                        value, the ending value, or the comparison operator used in the
                        condition.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Does the update always have to be inside the loop body?</summary>
                    <p>
                        The update doesn't have to be a single simple statement like
                        <code>count++</code>, but something inside the loop body has to
                        change a value the condition depends on, or the condition will
                        never become <code>false</code>.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"The condition of a while loop is only checked once, at the start"</h3>

            <p>
                The condition is actually rechecked before <em>every</em> iteration, not
                just the first. A <code>while</code> loop keeps evaluating its Boolean
                expression at the top of each pass, and only stops once that check comes
                back <code>false</code>.
            </p>

            <h3>"A while loop always runs at least once"</h3>

            <p>
                Because the condition is checked before the body runs, a
                <code>while</code> loop can execute zero times if its condition is already
                <code>false</code> the first time it's evaluated.
            </p>

            <h3>"Forgetting the update statement just makes the loop run longer"</h3>

            <p>
                Forgetting to update the variable a condition depends on doesn't make a
                loop run longer — it can make it run forever. Without something inside the
                loop body moving the condition toward <code>false</code>, the loop has no
                way to ever stop on its own.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Tracing <code>while</code> loops by hand is one of the best ways to catch
                infinite loops and off-by-one errors before they happen. Ask Starr to trace
                through a loop step by step, or to explain why a specific loop runs the
                number of times it does.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Trace this while loop line by line and tell me
                    exactly what it prints."
                </p>
            </div>

        </section>

    `,

    "2.8 for Loops": `

        <section id="content" class="lesson-section">

            <h2>for Loops</h2>

            <p>
                The <code>while</code> loop from Lesson 2.7 is one type of iterative
                statement. This lesson introduces the second: the <strong>for
                loop</strong>. A <code>for</code> loop packages the same three ideas every
                loop needs — initialization, condition, and update — directly into its
                header, which makes counting loops especially compact to read and write.
            </p>

            <div class="vocab-box">
                <span class="vocab-label">Vocabulary</span>
                <p><span class="vocab-term">for loop:</span> a type of iterative statement. There are three parts in a <code>for</code> loop header: the initialization, the Boolean expression, and the update.</p>
            </div>

            <h3>The Three Parts of a for Loop Header</h3>

            <p>
                In a <code>for</code> loop, the initialization statement is executed only
                once, before the first Boolean expression evaluation. The variable being
                initialized is referred to as a <strong>loop control variable</strong>. The
                Boolean expression is evaluated immediately after the loop control variable
                is initialized, and then following each execution of the increment
                statement, until it is <code>false</code>. In each iteration, the update is
                executed after the entire loop body is executed and before the Boolean
                expression is evaluated again.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">for</span> <span style="color:#9CA3AF;">(</span><span style="color:#FBBF77;">initialization</span><span style="color:#9CA3AF;">; </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">booleanExpression</span><span style="color:#9CA3AF;">; </span><span style="color:#FBBF77;">update</span><span style="color:#9CA3AF;">) {</span>
    <span style="color:#6B7280;">// loop body</span>
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Each of the three parts is separated by a semicolon inside the parentheses.
                Together, they control exactly how the loop control variable starts,
                when the loop stops, and how that variable changes on every pass.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Part</th>
                        <th>When it runs</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Initialization</td>
                        <td>Once, before the first condition check</td>
                        <td>Declares and sets the starting value of the loop control variable</td>
                    </tr>
                    <tr>
                        <td>Boolean expression</td>
                        <td>Before every iteration, including the first</td>
                        <td>Decides whether the loop body runs again</td>
                    </tr>
                    <tr>
                        <td>Update</td>
                        <td>After the loop body, before the next condition check</td>
                        <td>Changes the loop control variable, moving the condition toward false</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Here is a <code>for</code> loop that counts from 1 to 5, printing each
                value:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">for</span> <span style="color:#9CA3AF;">(</span><span style="color:#FBBF77;">int count = 1</span><span style="color:#9CA3AF;">; </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">count &lt;= 5</span><span style="color:#9CA3AF;">; </span><span style="color:#FBBF77;">count++</span><span style="color:#9CA3AF;">) {</span>
    System.out.println(count);
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                This behaves exactly like the <code>while</code> loop version from Lesson
                2.7 — but instead of scattering the initialization, condition, and update
                across three separate lines, all three live together in the loop header,
                right where the loop begins.
            </p>

            <p>
                A <code>for</code> loop doesn't have to count upward by one each time.
                Skipping values or counting downward just changes the update, while the
                initialization and condition adjust to match:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">for</span> <span style="color:#9CA3AF;">(</span><span style="color:#FBBF77;">int i = 10</span><span style="color:#9CA3AF;">; </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">i &gt; 0</span><span style="color:#9CA3AF;">; </span><span style="color:#FBBF77;">i -= 2</span><span style="color:#9CA3AF;">) {</span>
    System.out.println(i);
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                This loop starts its control variable <code>i</code> at 10, keeps going as
                long as <code>i</code> is greater than 0, and subtracts 2 from
                <code>i</code> after every pass — printing 10, 8, 6, 4, then 2 before the
                condition finally evaluates to <code>false</code>.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A <code>for</code> loop's condition is checked before every iteration,
                    just like a <code>while</code> loop's — so a <code>for</code> loop can
                    also run zero times if its condition is already <code>false</code> on
                    the first check.
                </p>
            </div>

            <h3>Rewriting Between for and while Loops</h3>

            <p>
                A <code>for</code> loop can be rewritten into an equivalent
                <code>while</code> loop (and vice versa). Since both loop types are built
                from the same three pieces — initialization, condition, and update — the
                only real difference is where those pieces are written. A
                <code>for</code> loop groups all three together in its header; a
                <code>while</code> loop spreads them out, with the initialization placed
                before the loop and the update placed inside the loop body.
            </p>

            <p>
                The counting loop from earlier in this lesson, rewritten as a
                <code>while</code> loop, looks like this:
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="color:#FBBF77;">int count = 1;</span>

<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">while</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">count &lt;= 5</span><span style="color:#9CA3AF;">) {</span>
    System.out.println(count);
    <span style="color:#FBBF77;">count++;</span>
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Both versions initialize <code>count</code> to 1 exactly once, check
                <code>count &lt;= 5</code> before every iteration, and increment
                <code>count</code> after the loop body runs — they're two different ways of
                writing the exact same iteration.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Piece</th>
                        <th>Location in a for loop</th>
                        <th>Location in an equivalent while loop</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Initialization</td>
                        <td>First segment of the loop header</td>
                        <td>A separate statement, immediately before the loop</td>
                    </tr>
                    <tr>
                        <td>Boolean expression</td>
                        <td>Second segment of the loop header</td>
                        <td>The condition inside the while loop's parentheses</td>
                    </tr>
                    <tr>
                        <td>Update</td>
                        <td>Third segment of the loop header</td>
                        <td>The last statement inside the loop body</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    When rewriting a <code>for</code> loop as a <code>while</code> loop, the
                    update statement has to move inside the loop body — and specifically to
                    the very end of it. Placing it anywhere else, or forgetting it
                    entirely, changes how many times the loop runs or turns it into an
                    infinite loop.
                </p>
            </div>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about
                <code>for</code> loops and rewriting between loop types.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Is a for loop faster than a while loop?</summary>
                    <p>
                        No. A <code>for</code> loop and its equivalent <code>while</code>
                        loop perform exactly the same steps in exactly the same order —
                        <code>for</code> just groups those steps together in the header
                        instead of spreading them across separate lines.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can a for loop count downward or skip values?</summary>
                    <p>
                        Yes. The initialization, condition, and update in a
                        <code>for</code> loop header can be written however the loop
                        control variable needs to change — decreasing it, changing it by
                        more than one, or updating it in any consistent way.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>When I rewrite a for loop as a while loop, where does the update go?</summary>
                    <p>
                        The update statement moves to the very end of the
                        <code>while</code> loop's body, so it still runs after the rest of
                        the loop body but before the condition is checked again — matching
                        exactly when the update happens in the original <code>for</code>
                        loop.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can a for loop run zero times, just like a while loop?</summary>
                    <p>
                        Yes. Since the Boolean expression is checked before the first
                        iteration, a <code>for</code> loop whose condition starts out
                        <code>false</code> will skip its body entirely, just like a
                        <code>while</code> loop would.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"The initialization in a for loop runs before every iteration"</h3>

            <p>
                The initialization only runs <em>once</em>, before the very first Boolean
                expression check. After that, only the condition and the update run on
                each pass — the initialization statement is never repeated.
            </p>

            <h3>"The update in a for loop happens before the loop body"</h3>

            <p>
                The update actually happens <em>after</em> the loop body finishes
                executing, and before the Boolean expression is checked again. The order on
                every iteration after the first is: run the loop body, then run the update,
                then check the condition.
            </p>

            <h3>"for loops and while loops can do different things"</h3>

            <p>
                Any <code>for</code> loop can be rewritten as an equivalent
                <code>while</code> loop, and vice versa. The two are different ways of
                writing the same iteration — the choice between them is about readability,
                not capability.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                Rewriting a loop from one form to the other is a great way to check that
                you really understand what each part of it is doing. Ask Starr to convert a
                <code>for</code> loop into a <code>while</code> loop, or to trace through a
                loop with an unusual update statement.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Rewrite this for loop as an equivalent while loop,
                    step by step."
                </p>
            </div>

        </section>

    `,

    "2.9 Implementing Selection and Iteration Algorithms": `

        <section id="content" class="lesson-section">

            <h2>Implementing Selection and Iteration Algorithms</h2>

            <p>
                Lessons 2.1 through 2.8 built up the individual tools of selection and
                iteration — <code>if</code> statements, compound Boolean expressions,
                <code>while</code> loops, and <code>for</code> loops. This lesson combines
                those tools into five <strong>standard algorithms</strong> that show up
                constantly throughout the rest of this course, and on the AP Exam itself.
                Rather than introducing new syntax, this lesson is about recognizing these
                patterns and understanding exactly why each one works.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    These five patterns aren't just exam content — they're building blocks
                    you'll reuse, combine, and adapt for the rest of your programming life.
                    Focus less on memorizing the exact code and more on understanding the
                    <em>role</em> each variable plays.
                </p>
            </div>

            <h3 id="algo-divisible">Algorithm 1 — Checking Divisibility</h3>

            <p>
                Determining whether one integer is evenly divisible by another comes down
                to a single relational check on the remainder produced by the
                <strong>modulus operator</strong>, <code>%</code>. If dividing
                <code>a</code> by <code>b</code> leaves no remainder, <code>a</code> is
                evenly divisible by <code>b</code>.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;"><span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">if</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">num % divisor == 0</span><span style="color:#9CA3AF;">) {</span>
    System.out.println(num + " is divisible by " + divisor);
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                This single line is the foundation for a whole family of related checks.
                Testing whether a number is <strong>even</strong> is just this pattern with
                <code>divisor</code> fixed at 2; testing whether it's <strong>odd</strong>
                flips the comparison to <code>!= 0</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Condition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>num is divisible by 3</td>
                        <td><code>num % 3 == 0</code></td>
                    </tr>
                    <tr>
                        <td>num is even</td>
                        <td><code>num % 2 == 0</code></td>
                    </tr>
                    <tr>
                        <td>num is odd</td>
                        <td><code>num % 2 != 0</code></td>
                    </tr>
                </tbody>
            </table>

            <h3 id="algo-digits">Algorithm 2 — Identifying the Individual Digits in an Integer</h3>

            <p>
                Pulling the digits out of an integer relies on the same two operators
                working as a pair: <code>%&nbsp;10</code> isolates the rightmost digit,
                and integer division by <code>10</code> (<code>/&nbsp;10</code>) removes
                that digit from the number. Repeating both steps inside a
                <code>while</code> loop peels off one digit per iteration, from right to
                left, until nothing is left.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">int num = 4restore;

<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">while</span> <span style="color:#9CA3AF;">(</span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">num &gt; 0</span><span style="color:#9CA3AF;">) {</span>
    int digit = num % 10;
    System.out.println(digit);
    num = num / 10;
<span style="color:#9CA3AF;">}</span></pre>
            </div>

            <p>
                Tracing this loop with <code>num</code> starting at <code>473</code> makes
                the pattern concrete:
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Iteration</th>
                        <th>num before</th>
                        <th>digit (num % 10)</th>
                        <th>num after (num / 10)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>473</td>
                        <td>3</td>
                        <td>47</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>47</td>
                        <td>7</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Once <code>num</code> reaches <code>0</code>, the loop's condition becomes
                <code>false</code> and iteration stops — the digits were printed in
                reverse order, <code>3</code>, then <code>7</code>, then <code>4</code>,
                which is a direct consequence of always peeling off the rightmost digit
                first.
            </p>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Integer division truncates any decimal portion, which is exactly what
                    makes <code>num / 10</code> "remove" a digit. If <code>num</code> were
                    a <code>double</code> instead of an <code>int</code>, this pattern
                    would produce very different results.
                </p>
            </div>

            <h3 id="algo-frequency">Algorithm 3 — Determining a Frequency</h3>

            <p>
                Determining how often a specific criterion is met across a repeated
                process combines a <strong>counter variable</strong> with selection inside
                a loop. The counter starts at <code>0</code> before the loop begins, and is
                incremented only when the criterion inside the loop body evaluates to
                <code>true</code>.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">int count = 0;

<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">for</span> <span style="color:#9CA3AF;">(</span><span style="color:#FBBF77;">int i = 1</span><span style="color:#9CA3AF;">; </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">i &lt;= 50</span><span style="color:#9CA3AF;">; </span><span style="color:#FBBF77;">i++</span><span style="color:#9CA3AF;">) {</span>
    if (i % 7 == 0) {
        count++;
    }
<span style="color:#9CA3AF;">}</span>

System.out.println(count);  <span style="color:#6B7280;">// 7</span></pre>
            </div>

            <p>
                This loop checks every integer from 1 to 50 and increments
                <code>count</code> only for the multiples of 7 — 7, 14, 21, 28, 35, 42, and
                49 — leaving <code>count</code> at <code>7</code> once the loop finishes.
                The counter variable never resets mid-loop; it simply accumulates every
                time the condition is met.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    Any frequency algorithm follows the same shape: initialize a counter to
                    <code>0</code> before the loop, test a condition inside the loop, and
                    increment the counter only when that condition is <code>true</code>.
                </p>
            </div>

            <h3 id="algo-minmax">Algorithm 4 — Determining a Minimum or Maximum Value</h3>

            <p>
                Finding the largest or smallest value produced by a repeated process uses
                a <strong>tracking variable</strong> that gets compared against — and
                potentially replaced by — each new value the loop produces. The tracking
                variable is typically initialized to the first value in the process, and
                then updated inside the loop whenever a "better" value is found.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">int[] scores = {68, 91, 77, 84, 59, 96, 73};

int max = scores[0];

<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">for</span> <span style="color:#9CA3AF;">(</span><span style="color:#FBBF77;">int i = 1</span><span style="color:#9CA3AF;">; </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">i &lt; scores.length</span><span style="color:#9CA3AF;">; </span><span style="color:#FBBF77;">i++</span><span style="color:#9CA3AF;">) {</span>
    if (scores[i] &gt; max) {
        max = scores[i];
    }
<span style="color:#9CA3AF;">}</span>

System.out.println(max);  <span style="color:#6B7280;">// 96</span></pre>
            </div>

            <p>
                Every value after the first is compared against the current
                <code>max</code>; only when a value is strictly greater does
                <code>max</code> get replaced. Finding a <strong>minimum</strong> uses the
                exact same shape, just with the comparison flipped to <code>&lt;</code>.
            </p>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Initial value</th>
                        <th>Comparison inside the loop</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maximum</td>
                        <td>The first value in the process</td>
                        <td><code>if (current &gt; max) max = current;</code></td>
                    </tr>
                    <tr>
                        <td>Minimum</td>
                        <td>The first value in the process</td>
                        <td><code>if (current &lt; min) min = current;</code></td>
                    </tr>
                </tbody>
            </table>

            <div class="tip-box">
                <h3>⚠️ Watch Out</h3>
                <p>
                    Initializing <code>max</code> to <code>0</code> instead of the first
                    actual value is a common bug — it silently breaks whenever every value
                    in the data happens to be negative, since none of them would ever be
                    greater than <code>0</code>.
                </p>
            </div>

            <h3 id="algo-sum">Algorithm 5 — Computing a Sum or Average</h3>

            <p>
                Computing a running total uses an <strong>accumulator variable</strong>,
                initialized to <code>0</code> before the loop and increased by each new
                value as the loop runs. An average is simply that same sum, divided by the
                number of values added to it.
            </p>

            <div style="background:#0F172A; border-radius:14px; padding:24px 30px; margin:22px 0 16px; max-width:900px; overflow-x:auto; box-shadow:0 8px 20px rgba(0,0,0,.18);">
                <pre style="margin:0; font-family:'Courier New', monospace; font-size:16px; line-height:2; color:#E5E7EB; white-space:pre;">int[] scores = {68, 91, 77, 84, 59, 96, 73};

int sum = 0;

<span style="background:rgba(85,110,230,.25); color:#93A9FF; padding:3px 7px; border-radius:5px; font-weight:700;">for</span> <span style="color:#9CA3AF;">(</span><span style="color:#FBBF77;">int i = 0</span><span style="color:#9CA3AF;">; </span><span style="background:rgba(12,194,103,.22); color:#6EE7A8; padding:3px 7px; border-radius:5px; font-weight:700;">i &lt; scores.length</span><span style="color:#9CA3AF;">; </span><span style="color:#FBBF77;">i++</span><span style="color:#9CA3AF;">) {</span>
    sum = sum + scores[i];
<span style="color:#9CA3AF;">}</span>

double average = sum / (double) scores.length;

System.out.println(sum);      <span style="color:#6B7280;">// 548</span>
System.out.println(average);  <span style="color:#6B7280;">// 78.28571428571429</span></pre>
            </div>

            <p>
                The accumulator, <code>sum</code>, starts at <code>0</code> and grows by
                exactly one array element per iteration — never skipping a value and never
                double-counting one. Casting to <code>(double)</code> before dividing
                matters here too: without it, <code>sum / scores.length</code> would
                perform integer division and truncate the result.
            </p>

            <div class="tip-box">
                <h3>⭐ Starr Tip</h3>
                <p>
                    A sum starts at <code>0</code>; a product (if you ever need a running
                    multiplication instead) starts at <code>1</code>. Starting an
                    accumulator at the wrong "do-nothing" value is a quiet but common
                    source of bugs.
                </p>
            </div>

            <h3>Putting the Patterns Side by Side</h3>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>Algorithm</th>
                        <th>Key variable</th>
                        <th>Starting value</th>
                        <th>What changes it</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Divisibility</td>
                        <td>—</td>
                        <td>—</td>
                        <td><code>% == 0</code> check, no loop needed</td>
                    </tr>
                    <tr>
                        <td>Digit extraction</td>
                        <td>num</td>
                        <td>the original integer</td>
                        <td><code>num % 10</code> then <code>num / 10</code>, each pass</td>
                    </tr>
                    <tr>
                        <td>Frequency</td>
                        <td>count</td>
                        <td><code>0</code></td>
                        <td>incremented when a condition is true</td>
                    </tr>
                    <tr>
                        <td>Min / Max</td>
                        <td>min / max</td>
                        <td>the first value</td>
                        <td>replaced when a "better" value is found</td>
                    </tr>
                    <tr>
                        <td>Sum / Average</td>
                        <td>sum</td>
                        <td><code>0</code></td>
                        <td>increased by every value in the process</td>
                    </tr>
                </tbody>
            </table>

        </section>

        <section id="questions" class="lesson-section">

            <h2>Frequently Starred Questions</h2>

            <p>
                Here are some of the questions Starr hears most often about these five
                standard algorithms.
            </p>

            <div class="faq-list">

                <details class="faq-item">
                    <summary>Why does digit extraction print digits in reverse order?</summary>
                    <p>
                        Because <code>num % 10</code> always isolates the rightmost digit
                        first. Without storing the digits somewhere and reversing them
                        afterward, they naturally come out from right to left instead of
                        left to right.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Do I always have to initialize max to the first element?</summary>
                    <p>
                        It's the safest choice, since it guarantees the tracking variable
                        starts as a real value that actually appeared in the data —
                        avoiding bugs when every value happens to be unusually small or
                        negative.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Why cast to (double) when computing an average?</summary>
                    <p>
                        Dividing two <code>int</code> values in Java performs integer
                        division and truncates any decimal portion. Casting one operand to
                        <code>(double)</code> forces the division to produce a decimal
                        result instead.
                    </p>
                </details>

                <details class="faq-item">
                    <summary>Can the frequency algorithm count something other than divisibility?</summary>
                    <p>
                        Yes — the counter pattern works with any Boolean condition. Only
                        the condition inside the <code>if</code> statement needs to change;
                        the surrounding counter and loop structure stay exactly the same.
                    </p>
                </details>

            </div>

        </section>

        <section id="misconceptions" class="lesson-section">

            <h2>Common Starrfalls</h2>

            <h3>"Initializing max or min to 0 always works"</h3>

            <p>
                It only works when <code>0</code> is guaranteed to be a valid starting
                bound for the data. If every value being compared is negative, a
                <code>max</code> initialized to <code>0</code> will incorrectly stay at
                <code>0</code> forever, since nothing in the data ever exceeds it.
            </p>

            <h3>"A counter and an accumulator are the same thing"</h3>

            <p>
                A counter increases by a fixed amount — usually 1 — only when a condition
                is met. An accumulator increases by a variable amount, adding in an actual
                value on every single iteration, regardless of any condition.
            </p>

            <h3>"num / 10 and num % 10 do the same thing"</h3>

            <p>
                They're complementary, not identical. <code>num % 10</code> keeps only the
                rightmost digit and discards the rest of the number; <code>num / 10</code>
                does the opposite — it discards the rightmost digit and keeps everything
                else.
            </p>

        </section>

        <section id="ask-online" class="lesson-section">

            <h2>Starr Online</h2>

            <p>
                These five standard algorithms are some of the most heavily tested
                patterns on the AP CSA Exam. Ask Starr to trace through one of them with a
                different data set, or to combine two of these patterns into a single
                loop.
            </p>

            <div class="tip-box">
                <h3>🤖 Ask Starr</h3>
                <p>
                    Try asking Starr: "Combine the sum and maximum algorithms into a
                    single loop over the same array."
                </p>
            </div>

        </section>

    `

};