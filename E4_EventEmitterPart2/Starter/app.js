
var Emitter = require('events');
var eventsConfig= require('./config').events;

var emtr = new Emitter();

emtr.on(eventsConfig.GREET, function () {
      console.log('somewhere, someone said hello');
} );

emtr.on(eventsConfig.GREET, function () {
      console.log('A greeting occured');
} );

console.log('Hello!');
emtr.emit('greet');