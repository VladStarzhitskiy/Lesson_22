'use strict'


// #1

let arr = [4, -5, 1, -2, 0, -3, 2, 9];
function aboveZero(number){
    return number > 0;
}
let positiveArr = arr.filter(aboveZero);
let roots = positiveArr.map(Math.sqrt);
console.log( roots );

//#2

let arr2 = [4, 3, 5, 0, 4, 8, 6];
let result = arr2.reduce(function(sum, current){
    
});

