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

};