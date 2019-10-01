console.log('Hello World');

const calculator = require('./Calculator');

console.log(calculator.add(5,3));
console.log(calculator.mul(5,3));
console.log(calculator.div(5,3));

const counter = require('./Counter');
console.log('Counter #1');
console.log(counter.val());
counter.inc();
counter.inc();
counter.inc();
console.log(counter.val());

const counter2 = require('./Counter');
console.log('Counter #2');
console.log(counter2.val());
counter2.inc();
counter2.inc();
counter2.inc();
console.log(counter2.val());