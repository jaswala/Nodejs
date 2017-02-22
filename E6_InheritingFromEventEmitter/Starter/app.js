var EventEmitter = require('events');
var util = require('util');

function Greetr() {

  this.greeting = 'hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet= function() {

    console.log(this.greeting);
    this.emit('greet');

}

var greetr1 = new Greetr();

 greetr1.on('greet', function() { 
    console.log('Someone greeted!')
});

greetr1.greet();