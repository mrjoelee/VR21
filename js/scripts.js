console.log("1. 30 console log statements");

let constant = "needs to have a value no matter what";
console.log(`2. const: ${constant}`);

var message = "will save the data inside the window property"; 
console.log(`3. var: ${window.message}`);

const location1 = "top of mount everest";
console.log(`4. location: ${location1}`);

console.log("5.", typeof location1);

let IsJavaScriptDynamic = true;
console.log(`6. Is JS a Dynamic Language: ${IsJavaScriptDynamic}`);

console.log('7.', 12 > 13);

let money = "time";
let time = "money";
console.log("8. is money equal to time:", money === time);

let a = 5;
console.log("9. a is equal to: %s", a); 
console.log("10. a datatype is:", typeof a);

let object;
console.log("11. a undeclared variable using let is:", object)

console.log(`12. the square root of negative number:`, Math.sqrt(-10));

console.log("13. what's the typeof Math in JS:", typeof Math);

let player = null;
console.log('14. the value of player:', player);
console.log(`15. typeof player:`, typeof player);

console.log('16. typeof "true or false":', typeof true);

const myName = "Joe";
console.log('17. myName:', myName);
console.log('18. the length of myName:', myName.length);
console.log('19. the 1st index of myName:', myName[0]);

for(var i = 0; i < 11; i ++){
    console.log(`increment by 1+: ` + (i + 20));
}

console.log("here are the 30 console logs");