// Your Javascript Code Goes Here

// Javascript objects 
// creating objects
var person = {

firstname: 'AJ',
lastname: 'Jaswal',
greet: function() {
    
    console.log('hello,'+ this.firstname + ' ' + this.lastname);
  }

};   

person.greet();

// also use brackets to use propterties

console.log(person['lastname']);