const courseData = {

    "Unit 0": {
        title: "Getting Started with AP CSA",
        lessons: [
            "0.1 About the Course",
            "0.2 About the Exam",
            "0.3 Java Development Environments",
            "0.4 Java Quick Reference (JQR)",
        ]
    },

    "Unit 1": {
        title: "Using Objects and Methods",
        lessons: [
            "1.1 Introduction to Algorithms, Programming, and Compilers",
            "1.2 Variables and Data Types",
            "1.3 Expressions and Output",
            "1.4 Assignment Statements and Input",
            "1.5 Casting and Range of Variables",
            "1.6 Compound Assignment Operators",
            "1.7 Application Program Interface (API) and Libraries",
            "1.8 Documentation with Comments",
            "1.9 Method Signatures",
            "1.10 Calling Class Methods",
            "1.11 Math Class",
            "1.12 Objects: Instances of Classes",
            "1.13 Object Creation and Storage (Instantiation)",
            "1.14 Calling Instance Methods",
            "1.15 String Manipulation"
        ]
    },

    "Unit 2": {
        title: "Selection and Iteration",
        lessons: [
            "2.1 Algorithms with Selection and Repetition",
            "2.2 Boolean Expressions",
            "2.3 if Statements",
            "2.4 Nested if Statements",
            "2.5 Compound Boolean Expressions",
            "2.6 Comparing Boolean Expressions",
            "2.7 while Loops",
            "2.8 for Loops",
            "2.9 Implementing Selection and Iteration Algorithms",
            "2.10 Implementing String Algorithms",
            "2.11 Nested Iteration",
            "2.12 Informal Run-Time Analysis"
        ]
    },

    "Unit 3": {
        title: "Class Creation",
        lessons: [
            "3.1 Abstraction and Program Design",
            "3.2 Impact of Program Design",
            "3.3 Anatomy of a Class",
            "3.4 Constructors",
            "3.5 Methods: How to Write Them",
            "3.6 Methods: Passing and Returning References of an Object",
            "3.7 Class Variables and Methods",
            "3.8 Scope and Access",
            "3.9 this Keyword"
        ]
    },

    "Unit 4": {
        title: "Data Collections",
        lessons: [
            "4.1 Ethical and Social Issues Around Data Collection",
            "4.2 Introduction to Using Data Sets",
            "4.3 Array Creation and Access",
            "4.4 Array Traversals",
            "4.5 Implementing Array Algorithms",
            "4.6 Using Text Files",
            "4.7 Wrapper Classes",
            "4.8 ArrayList Methods",
            "4.9 ArrayList Traversals",
            "4.10 Implementing ArrayList Algorithms",
            "4.11 2D Array Creation and Access",
            "4.12 2D Array Traversals",
            "4.13 Implementing 2D Array Algorithms",
            "4.14 Searching Algorithms",
            "4.15 Sorting Algorithms",
            "4.16 Recursion",
            "4.17 Recursive Searching and Sorting"
        ]
    },
};


// const courseData = {

//     "Unit 0": {
//         title: "Getting Started with AP CSA",
//         lessons: [
//             "0.1 About the Course",
//             "0.2 About the Exam",
//             "0.3 Java Development Environments",
//             "0.4 Java Quick Reference (JQR)",
//         ]
//     },

//     "Unit 1": {
//         title: "Using Objects and Methods",

//         lessons: [
//             {
//                 name: "1.1 Introduction to Algorithms, Programming, and Compilers",
//                 file: "lessons/unit1/lesson1.js"
//             },
//             {
//                 name: "1.2 Variables and Data Types",
//                 file: "lessons/unit1/lesson2.js"
//             },
//             {
//                 name: "1.3 Expressions and Output",
//                 file: "lessons/unit1/lesson3.js"
//             },
//             {
//                 name: "1.4 Assignment Statements and Input",
//                 file: "lessons/unit1/lesson4.js"
//             },
//             {
//                 name: "1.5 Casting and Range of Variables",
//                 file: "lessons/unit1/lesson5.js"
//             },
//             {
//                 name: "1.6 Compound Assignment Operators",
//                 file: "lessons/unit1/lesson6.js"
//             },
//             {
//                 name: "1.7 Application Program Interface (API) and Libraries",
//                 file: "lessons/unit1/lesson7.js"
//             },
//             {
//                 name: "1.8 Documentation with Comments",
//                 file: "lessons/unit1/lesson8.js"
//             },
//             {
//                 name: "1.9 Method Signatures",
//                 file: "lessons/unit1/lesson9.js"
//             },
//             {
//                 name: "1.10 Calling Class Methods",
//                 file: "lessons/unit1/lesson10.js"
//             },
//             {
//                 name: "1.11 Math Class",
//                 file: "lessons/unit1/lesson11.js"
//             },
//             {
//                 name: "1.12 Objects: Instances of Classes",
//                 file: "lessons/unit1/lesson12.js"
//             },
//             {
//                 name: "1.13 Object Creation and Storage (Instantiation)",
//                 file: "lessons/unit1/lesson13.js"
//             },
//             {
//                 name: "1.14 Calling Instance Methods",
//                 file: "lessons/unit1/lesson14.js"
//             },
//             {
//                 name: "1.15 String Manipulation",
//                 file: "lessons/unit1/lesson15.js"
//             }
//         ]
//     },

//     "Unit 2": {
//         title: "Selection and Iteration",
        
//         lessons: [
//             {
//                 name: "2.1 Algorithms with Selection and Repetition",
//                 file: "lessons/unit2/lesson1.js"
//             },
//             {
//                 name: "2.2 Boolean Expressions",
//                 file: "lessons/unit2/lesson2.js"
//             },
//             {
//                 name: "2.3 if Statements",
//                 file: "lessons/unit2/lesson3.js"
//             },
//             {
//                 name: "2.4 Nested if Statements",
//                 file: "lessons/unit2/lesson4.js"
//             },
//             {
//                 name: "2.5 Compound Boolean Expressions",
//                 file: "lessons/unit2/lesson5.js"
//             },
//             {
//                 name: "2.6 Comparing Boolean Expressions",
//                 file: "lessons/unit2/lesson6.js"
//             },
//             {
//                 name: "2.7 while Loops",
//                 file: "lessons/unit2/lesson7.js"
//             },
//             {
//                 name: "2.8 for Loops",
//                 file: "lessons/unit2/lesson8.js"
//             },
//             {
//                 name: "2.9 Implementing Selection and Iteration Algorithms",
//                 file: "lessons/unit2/lesson9.js"
//             },
//             {
//                 name: "2.10 Implementing String Algorithms",
//                 file: "lessons/unit2/lesson10.js"
//             },
//             {
//                 name: "2.11 Nested Iteration",
//                 file: "lessons/unit2/lesson11.js"
//             },
//             {
//                 name: "2.12 Informal Run-Time Analysis",
//                 file: "lessons/unit2/lesson12.js"
//             }
//         ]
//     },

//     "Unit 3": {
//         title: "Class Creation",

//         lessons: [
//             {
//                 name: "3.1 Abstraction and Program Design",
//                 file: "lessons/unit3/lesson1.js"
//             },
//             {
//                 name: "3.2 Impact of Program Design",
//                 file: "lessons/unit3/lesson2.js"
//             },
//             {
//                 name: "3.3 Anatomy of a Class",
//                 file: "lessons/unit3/lesson3.js"
//             },
//             {
//                 name: "3.4 Constructors",
//                 file: "lessons/unit3/lesson4.js"
//             },
//             {
//                 name: "3.5 Methods: How to Write Them",
//                 file: "lessons/unit3/lesson5.js"
//             },
//             {
//                 name: "3.6 Methods: Passing and Returning References of an Object",
//                 file: "lessons/unit3/lesson6.js"
//             },
//             {
//                 name: "3.7 Class Variables and Methods",
//                 file: "lessons/unit3/lesson7.js"
//             },
//             {
//                 name: "3.8 Scope and Access",
//                 file: "lessons/unit3/lesson8.js"
//             },
//             {
//                 name: "3.9 this Keyword",
//                 file: "lessons/unit3/lesson9.js"
//             }
//         ]
//     },

//     "Unit 4": {
//         title: "Data Collections",
//         lessons: [
//             {
//                 name: "4.1 Ethical and Social Issues Around Data Collection",
//                 file: "lessons/unit4/lesson1.js"
//             },
//             {
//                 name: "4.2 Introduction to Using Data Sets",
//                 file: "lessons/unit4/lesson2.js"
//             },
//             {
//                 name: "4.3 Array Creation and Access",
//                 file: "lessons/unit4/lesson3.js"
//             },
//             {
//                 name: "4.4 Array Traversals",
//                 file: "lessons/unit4/lesson4.js"
//             },
//             {
//                 name: "4.5 Implementing Array Algorithms",
//                 file: "lessons/unit4/lesson5.js"
//             },
//             {
//                 name: "4.6 Using Text Files",
//                 file: "lessons/unit4/lesson6.js"
//             },
//             {
//                 name: "4.7 Wrapper Classes",
//                 file: "lessons/unit4/lesson7.js"
//             },
//             {
//                 name: "4.8 ArrayList Methods",
//                 file: "lessons/unit4/lesson8.js"
//             },
//             {
//                 name: "4.9 ArrayList Traversals",
//                 file: "lessons/unit4/lesson9.js"
//             },
//             {
//                 name: "4.10 Implementing ArrayList Algorithms",
//                 file: "lessons/unit4/lesson10.js"
//             },
//             {
//                 name: "4.11 2D Array Creation and Access",
//                 file: "lessons/unit4/lesson11.js"
//             },
//             {
//                 name: "4.12 2D Array Traversals",
//                 file: "lessons/unit4/lesson12.js"
//             },
//             {
//                 name: "4.13 Implementing 2D Array Algorithms",
//                 file: "lessons/unit4/lesson13.js"
//             },
//             {
//                 name: "4.14 Searching Algorithms",
//                 file: "lessons/unit4/lesson14.js"
//             },
//             {
//                 name: "4.15 Sorting Algorithms",
//                 file: "lessons/unit4/lesson15.js"
//             },
//             {
//                 name: "4.16 Recursion",
//                 file: "lessons/unit4/lesson16.js"
//             },
//             {
//                 name: "4.17 Recursive Searching and Sorting",
//                 file: "lessons/unit4/lesson17.js"
//             }
//         ]
//     },
// };
