let questions = [
    {
        numb: 1,
        question: "What does JS stand for?",
        answer: "JavaScript",
        options: [
            "JavaSource",
            "JoomlaScript",
            "JavaScript",
            "JumbleScript"
        ]
    },
    {
        numb: 2,
        question: "Which keyword is used to declare variables in JavaScript?",
        answer: "var",
        options: [
            "int",
            "variable",
            "var",
            "declare"
        ]
    },
    {
        numb: 3,
        question: "What is the correct way to include comments in JavaScript?",
        answer: "// This is a comment",
        options: [
            "/* This is a comment */",
            "// This is a comment",
            "# This is a comment",
            "<-- This is a comment -->"
        ]
    },
    {
        numb: 4,
        question: "How do you write 'Hello World' in an alert box?",
        answer: "alert('Hello World');",
        options: [
            "msgBox('Hello World');",
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');"
        ]
    },
    {
        numb: 5,
        question: "Which function is used to parse a string to an integer in JavaScript?",
        answer: "parseInt()",
        options: [
            "intParse()",
            "stringToInteger()",
            "parseInteger()",
            "parseInt()"
        ]
    },
    {
        numb: 6,
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        answer: "Determine the type of a variable",
        options: [
            "Create a new variable",
            "Determine the type of a variable",
            "Check if a variable is defined",
            "Change the type of a variable"
        ]
    },
    {
        numb: 7,
        question: "Which symbol is used for single-line comments in JavaScript?",
        answer: "//",
        options: [
            "#",
            "//",
            "/*",
            "--"
        ]
    },
    {
        numb: 8,
        question: "What is the 'DOM' in the context of JavaScript?",
        answer: "Document Object Model",
        options: [
            "Data Object Model",
            "Document Oriented Model",
            "Dynamic Object Model",
            "Document Object Model"
        ]
    },
    {
        numb: 9,
        question: "Which function is used to add a class to an HTML element in JavaScript?",
        answer: "classList.add()",
        options: [
            "addClass()",
            "appendClass()",
            "addToClass()",
            "classList.add()"
        ]
    },
    {
        numb: 10,
        question: "What does the 'this' keyword refer to in JavaScript?",
        answer: "Current object",
        options: [
            "Next object",
            "Previous object",
            "Current object",
            "Global object"
        ]
    },
    {
        numb: 11,
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        answer: "Declare block-scoped variables",
        options: [
            "Declare global variables",
            "Declare function-scoped variables",
            "Declare block-scoped variables",
            "Declare constant variables"
        ]
    },
    {
        numb: 12,
        question: "How do you declare a function in JavaScript?",
        answer: "function myFunction() {}",
        options: [
            "function = myFunction() {}",
            "func myFunction() = {}",
            "myFunction = function() {}",
            "function myFunction() {}"
        ]
    },
    {
        numb: 13,
        question: "What is the purpose of the 'NaN' in JavaScript?",
        answer: "Not a Number",
        options: [
            "Negative and Null",
            "Not a Number",
            "No Assignment",
            "Number and Null"
        ]
    },
    {
        numb: 14,
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answer: "pop()",
        options: [
            "delete()",
            "remove()",
            "pop()",
            "last()"
        ]
    },
    {
        numb: 15,
        question: "What is an immediately-invoked function expression (IIFE) in JavaScript?",
        answer: "A function that runs immediately after it's defined",
        options: [
            "A function that's only invoked by another function",
            "An interval-based function",
            "A function that runs immediately after it's defined",
            "An iterative function"
        ]
    },
    {
        numb: 16,
        question: "What is the purpose of the 'return' statement in a function?",
        answer: "Ends the function execution and specifies a value to be returned",
        options: [
            "Ends the function execution without returning a value",
            "Ends the function execution and specifies a value to be returned",
            "Specifies the beginning of a function",
            "Specifies the type of a variable"
        ]
    },
    {
        numb: 17,
        question: "How do you check if a variable is an array in JavaScript?",
        answer: "Array.isArray(variable)",
        options: [
            "variable.isArray()",
            "Array.isVariable()",
            "isArray(variable)",
            "Array.isArray(variable)"
        ]
    },
    {
        numb: 18,
        question: "What is the purpose of the 'map' function in JavaScript?",
        answer: "Creates a new array with the results of calling a provided function on every element in the array",
        options: [
            "Deletes elements from an array",
            "Creates a new array with the results of calling a provided function on every element in the array",
            "Maps elements to a different array",
            "Combines two arrays into one"
        ]
    },
    {
        numb: 19,
        question: "Which operator is used for strict equality comparison in JavaScript?",
        answer: "===",
        options: [
            "==",
            "===",
            "=!",
            "!="
        ]
    },
    {
        numb: 20,
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        answer: "Stores data with no expiration date",
        options: [
            "Stores data with an expiration date",
            "Stores data in session storage",
            "Stores data with no expiration date",
            "Stores data on the server"
        ]
    },
    {
        numb: 21,
        question: "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        answer: "Converts a JavaScript object to a JSON string",
        options: [
            "Converts a JSON string to a JavaScript object",
            "Converts a JavaScript object to a JSON string",
            "Compares two JSON objects",
            "Parses a JSON string"
        ]
    },
    {
        numb: 22,
        question: "How do you create a new object in JavaScript?",
        answer: "let obj = {}",
        options: [
            "let obj = new Object()",
            "let obj = {}",
            "newObject obj = {}",
            "createObject obj = {}"
        ]
    },
    {
        numb: 23,
        question: "What is the purpose of the 'forEach' method in JavaScript?",
        answer: "Executes a provided function once for each array element",
        options: [
            "Deletes array elements",
            "Executes a provided function once for each array element",
            "Maps array elements to a new array",
            "Combines two arrays"
        ]
    },
    {
        numb: 24,
        question: "What is the purpose of the 'bind' method in JavaScript?",
        answer: "Creates a new function that, when called, has its 'this' keyword set to a specific value",
        options: [
            "Binds two functions together",
            "Creates a new function that, when called, has its 'this' keyword set to a specific value",
            "Binds a function to an object",
            "Binds a variable to a function"
        ]
    },
    {
        numb: 25,
        question: "Which event is triggered when a user clicks on an HTML element?",
        answer: "click",
        options: [
            "mouseover",
            "click",
            "keydown",
            "change"
        ]
    },
    {
        numb: 26,
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        answer: "Specifies that a function returns a promise",
        options: [
            "Indicates that a function is asynchronous",
            "Specifies that a function returns a callback",
            "Specifies that a function returns a promise",
            "Marks a function as deprecated"
        ]
    },
    {
        numb: 27,
        question: "How do you prevent the default behavior of an event in JavaScript?",
        answer: "event.preventDefault()",
        options: [
            "event.stopPropagation()",
            "event.preventEvent()",
            "event.cancelEvent()",
            "event.preventDefault()"
        ]
    },
    {
        numb: 28,
        question: "What is the purpose of the 'try...catch' statement in JavaScript?",
        answer: "Handles errors in a controlled way",
        options: [
            "Tries a code block without catching errors",
            "Catches errors without trying a code block",
            "Handles errors in a controlled way",
            "Throws errors intentionally"
        ]
    },
    {
        numb: 29,
        question: "Which method is used to find the index of a specific element in an array in JavaScript?",
        answer: "indexOf()",
        options: [
            "find()",
            "search()",
            "locate()",
            "indexOf()"
        ]
    },
    {
        numb: 30,
        question: "What is the purpose of the 'spread' operator (...) in JavaScript?",
        answer: "Expands elements of an array or object",
        options: [
            "Combines elements of an array",
            "Expands elements of an array or object",
            "Multiplies elements of an array",
            "Deletes elements of an array"
        ]
    },
    {
        numb: 31,
        question: "How do you convert a string to lowercase in JavaScript?",
        answer: "toLowerCase()",
        options: [
            "stringToLower()",
            "toLower()",
            "lowerCase()",
            "toLowerCase()"
        ]
    },
    {
        numb: 32,
        question: "Which method is used to remove the first element from an array in JavaScript?",
        answer: "shift()",
        options: [
            "delete()",
            "remove()",
            "pop()",
            "shift()"
        ]
    },
    {
        numb: 33,
        question: "What is the purpose of the 'fetch' function in JavaScript?",
        answer: "Used to make asynchronous HTTP requests",
        options: [
            "Used to fetch elements from an array",
            "Used to make synchronous HTTP requests",
            "Used to fetch elements from the DOM",
            "Used to make asynchronous HTTP requests"
        ]
    },
    {
        numb: 34,
        question: "What is the purpose of the 'let' keyword in a 'for' loop declaration?",
        answer: "Declares a block-scoped variable",
        options: [
            "Declares a global variable",
            "Declares a function-scoped variable",
            "Declares a block-scoped variable",
            "Declares a constant variable"
        ]
    },
    {
        numb: 35,
        question: "How do you check if an object has a specific property in JavaScript?",
        answer: "hasOwnProperty()",
        options: [
            "checkProperty()",
            "hasProperty()",
            "isObjectProperty()",
            "hasOwnProperty()"
        ]
    },
    {
        numb: 36,
        question: "What is the purpose of the 'filter' method in JavaScript?",
        answer: "Creates a new array with elements that pass a test",
        options: [
            "Deletes elements from an array",
            "Creates a new array with elements that pass a test",
            "Filters elements based on their type",
            "Maps elements to a different array"
        ]
    },
    {
        numb: 37,
        question: "Which method is used to add elements to the end of an array in JavaScript?",
        answer: "push()",
        options: [
            "append()",
            "insert()",
            "addToEnd()",
            "push()"
        ]
    },
    {
        numb: 38,
        question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
        answer: "Returns an array of a given object's own enumerable property names",
        options: [
            "Returns an array of all object properties",
            "Returns an array of a given object's own enumerable property names",
            "Returns an array of object keys and values",
            "Returns an array of object methods"
        ]
    },
    {
        numb: 39,
        question: "How do you declare a constant variable in JavaScript?",
        answer: "const",
        options: [
            "let",
            "var",
            "const",
            "const var"
        ]
    },
    {
        numb: 40,
        question: "What is the purpose of the 'splice' method in JavaScript?",
        answer: "Changes the contents of an array by removing or replacing existing elements",
        options: [
            "Splits an array into two",
            "Joins two arrays",
            "Changes the contents of an array by removing or replacing existing elements",
            "Removes the last element from an array"
        ]
    },
    {
        numb: 41,
        question: "How do you round a number to the nearest integer in JavaScript?",
        answer: "Math.round()",
        options: [
            "round()",
            "Math.floor()",
            "Math.ceil()",
            "Math.round()"
        ]
    },
    {
        numb: 42,
        question: "What is the purpose of the 'Promise' object in JavaScript?",
        answer: "Represents the eventual completion or failure of an asynchronous operation and its resulting value",
        options: [
            "Represents a synchronous operation",
            "Represents the eventual completion or failure of an asynchronous operation and its resulting value",
            "Represents a one-time event",
            "Represents an array of values"
        ]
    },
    {
        numb: 43,
        question: "Which method is used to join elements of an array into a string in JavaScript?",
        answer: "join()",
        options: [
            "concat()",
            "merge()",
            "join()",
            "combine()"
        ]
    },
    {
        numb: 44,
        question: "What is the purpose of the 'Math.random()' function in JavaScript?",
        answer: "Generates a random floating-point number between 0 and 1",
        options: [
            "Generates a random integer",
            "Generates a random floating-point number between 0 and 1",
            "Returns a fixed number",
            "Rounds a number to the nearest integer"
        ]
    },
    {
        numb: 45,
        question: "How do you convert a number to a string in JavaScript?",
        answer: "String()",
        options: [
            "toString()",
            "convertToString()",
            "stringify()",
            "String()"
        ]
    },
    {
        numb: 46,
        question: "What is the purpose of the 'bind' method in JavaScript?",
        answer: "Binds a function to a specific object",
        options: [
            "Binds two functions together",
            "Binds a function to an event",
            "Binds a function to a specific object",
            "Binds a variable to a function"
        ]
    },
    {
        numb: 47,
        question: "How do you declare a global variable in JavaScript?",
        answer: "var",
        options: [
            "let",
            "const",
            "global",
            "var"
        ]
    },
    {
        numb: 48,
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        answer: "Attaches an event handler to an element",
        options: [
            "Adds a new event to the document",
            "Attaches an event handler to an element",
            "Listens for events on the window",
            "Registers an event for propagation"
        ]
    },
    {
        numb: 49,
        question: "How do you check if a variable is undefined in JavaScript?",
        answer: "typeof variable === 'undefined'",
        options: [
            "variable === undefined",
            "typeof variable === 'null'",
            "typeof variable === 'undefined'",
            "variable == null"
        ]
    },
    {
        numb: 50,
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        answer: "Stores data with no expiration date",
        options: [
            "Stores data with an expiration date",
            "Stores data in session storage",
            "Stores data with no expiration date",
            "Stores data on the server"
        ]
    },
];
