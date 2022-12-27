//Function Exercise

//difference
const difference = (a,b) => a-b;
console.log(`the difference between 2 and 2:`, difference(2,2)); // 0
console.log(`the difference between 0 and 2:`, difference(0,2)); //-2

//product
const product = (a,b) => a*b;
console.log(product(2,2)); //4
console.log(product(0,2)); //0

//printDay
const day = ['','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const printDay = (x) => {
    return (x < 1) || (x > 7) ? undefined : day[x];
}

console.log(printDay(4)); //Wednesday
console.log(printDay(41)); //undefined

//lastElement
const lastElement = (arr) => {
    if (arr.length > 0)
    {
        return arr[arr.length -1];
    } else {
        return undefined
    }
};

console.log(lastElement([1,2,3,4])); //4
console.log(lastElement([])); //undefined

//numberCompare
function numberCompare(a,b){
    if(a > b){
        return `First is greater`;
    } else if ( b > a) {
        return `Second is greater`;
    } else {
        return `Numbers are equal`;
    }
}

console.log(numberCompare(1,1)); //Numbers are equal
console.log(numberCompare(2,1)); //First is greater
console.log(numberCompare(1,2)); //Second is greater

//singleLetterCount
// cool that null is taken as false
// const singleLetterCount = (word, letter) => {
//     if (!word.match(new RegExp(letter, "g"))) {
//       return 0;
//     } 
//    return word.match(new RegExp(letter, "g")).length;
//   };

const singleLetterCount = (string, char) => {
    let count=0;
    string = string.toLowerCase();
    char = char.toLowerCase();
    for (let i=0; i < string.length; i++){
        if(string[i] === char){
            count++;
        }
    }
    return count;
}

  console.log(singleLetterCount(`amazing`,`a`)); //2
  console.log(singleLetterCount(`Rithm School`, `o`)) //2

//multipleLetterCount
function multipleLetterCount(string){
    string = string.toLowerCase();
    let obj = {};
    for(let i = 0; i , i < string.length; i++){
        if(obj[string[i]] === undefined){
            obj[string[i]] = 1;
        } else {
            obj[string[i]]++;
        }
    }

    return obj;
}

console.log(multipleLetterCount(`hello`));
console.log(multipleLetterCount(`person`));
