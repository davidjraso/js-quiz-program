// variables
var correct1 = 0;
var correct2 = 0;
var correct3 = 0;
var correct4 = 0;
var correct5 = 0;
var total = 0;

// prompt
var answer1 = prompt("Who was the second President of the United States?");
var answer2 = prompt("What is the square root of 64? (write out the answer, don't us numbers)");
var answer3 = prompt("What is the capital of Spain");
var answer4 = prompt("Where do the Super Bowl winning Cowboys come form?");
var answer5 = prompt("Magician David Kotkin managed to change his name to what?");

// if statement
if ( answer1.toUpperCase() === 'JOHN ADAMS' ) {
 correct1 += 1;
 total += 1;
}

if ( answer2.toUpperCase() === 'EIGHT' ) {
 correct2 += 1;
 total += 1;
}

if ( answer3.toUpperCase() === 'MADRID' ) {
 correct3 += 1;
 total += 1;
}

if ( answer4.toUpperCase() === 'DALLAS' ) {
 correct4 += 1;
 total += 1;
}

if ( answer5.toUpperCase() === 'DAVID COPPERFIELD' ) {
 correct5 += 1;
 total += 1;
}

// output results
document.write("<p>Question 1: The correct answer is John Adams and you said " + answer1 + "</p>");
if ( correct1 === 1 ) {
 document.write("<p>You got a point!</p>");
} else {
 document.write("<p>Sorry, you didn't get that right.</p>");
}

document.write("<p>Question 2: The correct answer is eight and you said " + answer2 + "</p>");
if ( correct2 === 1 ) {
 document.write("<p>You got a point!</p>");
} else {
 document.write("<p>Sorry, you didn't get that right.</p>");
}

document.write("<p>Question 3: The correct answer is Madrid and you said " + answer3 + "</p>");
if ( correct3 === 1 ) {
 document.write("<p>You got a point!</p>");
} else {
 document.write("<p>Sorry, you didn't get that right.</p>");
}

document.write("<p>Question 4: The correct answer is Dalas and you said " + answer4 + "</p>");
if ( correct4 === 1 ) {
 document.write("<p>You got a point!</p>");
} else {
 document.write("<p>Sorry, you didn't get that right.</p>");
}

document.write("<p>Question 5: The correct answer is David Copperfield and you said " + answer1 + "</p>");
if ( correct5 === 1 ) {
 document.write("<p>You got a point!</p>");
} else {
 document.write("<p>Sorry, you didn't get that right.</p>");
}

document.write("<p>Your final score is: " + total + "<p>");







