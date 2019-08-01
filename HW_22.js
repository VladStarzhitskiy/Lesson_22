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
arr2.splice(4, 3);
let result = arr2.reduce(function(sum, current){
    return sum + current;
}, 0);
console.log(result);

// #3
function summArguments(){
    let numb = 0;
    for(let i = 0; i < arguments.length; i++){
        numb += arguments[i];
    }
    return numb;
}
console.log(summArguments(10, 4 , 100, -80));


