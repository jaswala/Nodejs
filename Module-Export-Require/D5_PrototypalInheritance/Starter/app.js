// Your Javascript Code Goes Here

// function constructor - FUNCTION THAT CREATES OBJECTS

function Person(lastname,firstname) {

    this.lastname=lastname;
    this.firstname=firstname;

};

Person.prototype.greet= function(){
    console.log('Hello,' + this.firstname + ' ' + this.lastname);
};



var john = new Person('doe','john');
// console.log(john.firstname);

john.greet();

var jane = new Person('jen','den');
jane.greet();