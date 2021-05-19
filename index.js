// Requiring the Module
var readlineSync = require("readline-sync");
const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));

// Hard coded data
var questions = [
    {
        ques: "Inside which HTML element do we put the JavaScript?\n\na. <js>\nb. <javascript>\nc. <script>\nd. <src>\n",
        ans: 'c'
    },
    {
        ques: "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id='demo'>This is a demonstration.</p>\n\na. document.getElementById('demo').innerHTML = 'Hello World!';  \nb. document.getElement('p').innerHTML = 'Hello World!';\nc. document.getElementByName('p').innerHTML = 'Hello World!';\nd. #demo.innerHTML = 'Hello World!';\n",
        ans: 'a'
    },
    {
        ques: "Where is the correct place to insert a JavaScript?\n\na. Both the <head> section and the <body> section are correct  \nb. The <head> section\nc. The <body> section\n",
        ans: 'a'
    },

    {
        ques: "How do you create a function in JavaScript?\n\na. function myFunction() \nb. function = myFunction() \nc. function:myFunction()\n",
        ans: 'a'
    },

    {
        ques: "How to write an IF statement in JavaScript?\n\na. if (i == 5)    \nb. if i == 5 then \nc. if i = 5 then\n",
        ans: 'a'
    }
];


var l1Questions = [
    {
        ques: "Which of the following type of variable is visible everywhere in your JavaScript code?\n\na. global variable\nb.local variable\nc. Both of the above.\nd. None of the above.\n",
        ans: 'a'
    },
    {
        ques: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?\n\na. last()  \nb. put()\nc. push()\nd. None of the above.\n",
        ans: 'c'
    },
    {
        ques: " How can you get the type of arguments passed to a function?\n\na. using typeof operator  \nb. using getType function\nc. Both of the above.\nd. None of the above.\n",
        ans: 'a'
    },

    {
        ques: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?\n\na. toExponential() \nb. toFixed() \nc. toPrecision()\nd.toLocaleString()",
        ans: 'b'
    },

    {
        ques: "Which of the following function of Array object joins all elements of an array into a string?\n\na. concat()    \nb. join() \nc. push()\nd. pop()",
        ans: 'b'
    }
];



// Global Variables

var instruction = " Hello! Glad to see you here\n\n Welcome to the Javascript Quiz \n\n Here are the rules:\n\n 1. Every correct answer adds one point to the score \n 2. Every wrong answer deducts 0.2 point from the score \n 3. You have to simple respond with the correct option to answer a question or click q to exit the quiz\n\n-----------------------------\n\n";
var score = 0;
var highscores = [
    {
        name: "codersaty",
        score: 10
    },
    {
        name: "shubham",
        score: 8.8
    },
    {
        name: "nikhil",
        score: 7.6
    }
]

// Logic funtion 
function checkAns(para1, para2) {
    if (para1.ans.toLowerCase() === para2.toLowerCase()) {
        console.log(chalk.bold.cyanBright("correct answer\n"));
        score += 1;
    }
    else {
        console.log(chalk.bold.redBright("wrong answer\n The correct answer is " + para1.ans));
        score -= 0.2;
    }
}
function playQuiz(para1, para2) {
    var i = 0;
    while (para1.toLowerCase() != 'q' && i < 5) {
        if (i === 0)
            console.log(chalk.bold.cyanBright("Starting the quiz:\n--------------\n"));
        var ans = readlineSync.question(chalk.bold.italic.green("Ques:" + para2[i].ques + "\n"));
        if (ans.toLowerCase() === 'q')
            break;
        checkAns(para2[i], ans);
        i += 1
    }
}

// Programm
console.log(chalk.bold.italic.green(instruction));
var ch = readlineSync.question(chalk.bold.cyanBright("press any key to start the quiz(q to exit)\n"));
if (ch.toLowerCase() != 'q') {
    playQuiz(ch, questions);
    if (score > 4) {
        console.log(chalk.bold.cyanBright("Congratulation!!! You have qualified for Advance quiz\n\n"));
        var say = readlineSync.question(chalk.bold.cyanBright("press any key to start the Level 2(q to exit)"));
        if (say.toLowerCase() != 'q')
            playQuiz(say, l1Questions);
    }
    else {
        console.log(chalk.bold.cyanBright("Opps!!! You have not qualified for Advance quiz\n\n"));
    }
}
console.log(chalk.bold.cyanBright("Thankyou for playing the quiz"));

for (var i = 0; i < highscores.length; i += 1) {
    if (highscores[i].score <= score) {
        var r = i + 1;
        console.log(chalk.bold.cyanBright("Your Rank " + r));
        break;
    }
}
console.log(chalk.bold.cyanBright("Your final score is " + score));