var util = require('util');
//grab util module from native node js

var name = 'Tony';
var greeting = util.format('Hello, %s', name);

util.log(greeting);
