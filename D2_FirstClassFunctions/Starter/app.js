// Your Javascript Code Goes Here

// function statement

function greet() {

    console.log('hi!');
}
greet();

// functions are first class
function loggreeting(fn){
    fn();
}
loggreeting(greet);

// function expression

var greetMe= function() {
    console.log('Hi Tony');
}

greetMe();

// its first class

loggreeting(greetMe);

// use a function expression on the fly

loggreeting(function() {
    console.log('hello Tony!');
});