// Your Javascript Code Goes Here

// immediate invoke the function on the fly

( function(){

    var firstname ='John';
    console.log(firstname);


} () );

var firstname='Jane';
console.log(firstname);

// checking the scope, its within the function

var firstname ='Jane';
( function(){

    var firstname ='John';
    console.log(firstname);


} () );

console.log(firstname);


