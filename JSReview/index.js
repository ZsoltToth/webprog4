console.log('Hello World');

const calculator = require('./Calculator');

console.log(calculator.add(5,3));
console.log(calculator.mul(5,3));
console.log(calculator.div(5,3));

const Counter = require('./Counter');
var cnt0 = new Counter(0);

console.log(cnt0.value());
cnt0.increase();
cnt0.increase();
cnt0.increase();
console.log(cnt0.value());

var cnt1 = new Counter(0);

console.log(cnt1.value());
cnt1.increase();
cnt1.increase();
cnt1.increase();
console.log(cnt1.value());


