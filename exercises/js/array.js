const people = ["Greg", "Mary", "Devon", "James"];

//remove Greg
people.shift();
console.log(people);

//remove
people.pop();
console.log(people);

//add "Matt" to the front of array
people.unshift("Matt");
console.log(people);

//add your own name at the end of array
people.push("Joe");
console.log(people);

//Make a copy using slice - should not include Mary or Matt
const copyPeople = people.slice(2);
console.log(copyPeople);

//find where is Mary is located
const indexOfMary = people.indexOf(`Mary`);
console.log(indexOfMary);

//find where is "Foo" is located
const foo = people.indexOf(`Foo`);
console.log(foo);

//Redefined people using splice, remove Devon, add Elizabeth and Artie
const splice = people.splice(2,1,"Elizabeth", "Artie");
console.log(people);


// create a new Variable withBob and concat Bob to the people of Array
const withBob = people.concat("Bob");
console.log(withBob);
