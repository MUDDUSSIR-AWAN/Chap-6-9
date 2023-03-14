var a = 2, b = 1;
var reult;

console.log("STAGE 1");
console.log("The value of --a is: " + (--a));
console.log(".............................");

console.log("STAGE 2");
console.log("The value of --a - --b is: " + (a - --b));
console.log(".............................");

console.log("STAGE 3");
console.log("The value of --a - --b + ++b is: " + (a - b + ++b));
console.log(".............................");

var a = 2, b = 1;
console.log("STAGE 4");
console.log("The value of --a - --b + ++b + b-- is: " + (result =--a - --b + ++b + b--));
console.log(".............................");

// var result = --a - --b + ++b + b--;
console.log("FINAL RESULT");
console.log("a is: " + a);

console.log("b is: " + b);

console.log("RESULT is: " + result);



