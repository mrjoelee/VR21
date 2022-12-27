const arrNums = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < arrNums.length; i++){
    console.log(arrNums[i]);
}

//2d array
const twoDArrNum = [[1,2,3],[4,5,6],[7,8,9]];
for(let i = 0; i< twoDArrNum.length; i++){
    console.log(twoDArrNum[i]);
}

// for(arr of twoDArrNum){
//     console.log(arr);
// }

// function that added the 2d to one array 
console.log(twoDArrNum.flat());

//loops the new array that has been cancatted. 
for( num of twoDArrNum.flat()){
    console.log(num);
}