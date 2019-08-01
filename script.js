'use strict'

// Мето split - разделяет элементы масива
let names = 'Вася, Петр, Андрей, Роман';
console.log( names.split(', ', 3) );
let new_names = names.split(', ', 3); //{Вася, Петр, Андрей}
console.log( names.split('') );


// метод Join - Склеевает элементы масива
console.log( new_names.join('; ') ); // Вася; Петр; Андрей
console.log( new Array(4).join('ля') ); //ляляля


// Удаляет из масива
delete new_names[0];
console.log( new_names );

// для удаления элементов масива использовать pop, shift, splice

// Метод splice
let tex = ['Привет', 'как', 'дела?'];
tex.splice(1, 1); //'Привет', 'дела?' (первое число с какого элемента начинает удалять, второе число то сколько элементов нужно удалить)

let text = ['Привет', 'как', 'твои', 'дела?'];
let deleted = text.splice(0, 3, 'Все', 'хорошо'); //Все хорошо дела. (Удаляем из масива элемент и добавляет новые)
console.log( deleted );
text.splice(text.length, 0, 'Пока' ); //Все хорошо дела? Пока

text.splice(-1, 0, 3, 'да'); //Все хорошо дела? 3 да Пока
console.log( text );

// Метод slice -копирует текс и переносит куда нужно
let text2 = text.slice(0, 3); //Все хорошо дела?
console.log( text2 );



console.log( text.slice(3) ); // да Пока
console.log( text.slice(-3) ); // да Пока
console.log( text.slice() ); //Все хорошо дела? 3 да Пока

// сортировка или метод sort(fn)
let numbers = [1, 5, 15];
numbers.sort();
console.log( numbers ); // 1, 15, 5

        function compareNumbers(a, b){
            return(a > b) ? 1 : -1;// если а больше б возвращает 1 если меньше вернет -1 (можно бло записать return a - b;)
        }
        numbers.sort( compareNumbers );
        console.log( numbers ); // 1, 5, 15

// Метод reverse

numbers.reverse();
console.log( numbers ); // 15, 5, 1

//Метод concat 

let text3 = numbers.concat(3, 4);
console.log( text3 ); //15, 5, 1, 3, 4

text3 = text3.concat(numbers);// 15, 5, 1, 3, 4, 15, 5, 1
text3 = text3.concat([2, 3], 5 );// 15, 5, 1, 3, 4, 15, 5, 1, 2, 3, 5


//Метод indexOf \ lastIndexOf (indexOf -ищет с начало; lastIndexOf -ищет с конца) не работает с масивали в IE 8-
console.log( text3.indexOf(3) ); //3
console.log( text3.indexOf(false) );// -1 Будет искать 0


//Object.keys(obj) - не работает с масивали в IE 8-
let user = {
    'name' : 'Петр',
    'age' : 30
};

let keys = Object.keys(user);
console.log(keys); //[name, age]


// ///////Перебирающие методы масива

// Метод forEach

let array = ['Вася', 'Андрей', 'Петр'];

array.forEach(
function(item, i, arr){
 console.log( i + ': ' + item + ' (масив:' + arr + ')');
}
);

// Метод filter

let array2 = [1, -1, 2, -2, 3];

function aboveZero(number){
    return number > 0;// callback функция
}
let positiveArr = array2.filter(aboveZero);
console.log( positiveArr ); //1,2,3

// Метод map - используется для трансформации масива( преобразовывает данные и возвращает их)

let names2 = ['HTML', 'CSS', 'JS'];
let naameLength = names2.map(function(name){
    return name.length;
});
console.log(naameLength); //4, 3, 2

// Метод every \ some
let number3 = [1, 2, -1, 2, -2, 5];
function isPositive(number){
    return number > 0;
}
console.log( number3.every(isPositive) );// false (аналогично сравнению И) - every перебирает все елементы масива
console.log( number3.some(isPositive) );// true (Анологично сравнению ИЛИ) - some если хотябы один елемент будет тру значит все тру

// Метод reduce- начинает с начала \ reduceRight - с конца
/*reduce(
    function(prevValue, currentitem, index, arr),
    initialValue

*/
let arr3 = [1, 2, 3, 4, 5];
let result = arr3.reduce(function(sum, current){
    return sum + current; //15
}, 0);// - 0 Это значение которому равно sum

// Перегрузка функций
// Псевдомасив аргументов 'arguments'

function sayHi(text){
    // let argumetns = 'Винни', 'Пятачок'; (argumetns - не масив)
    for(let i = 0; i < arguments.length; i++){
        console.log( 'привет ' + arguments[i] );
    }
}
sayHi('Винни', 'Пятачок');




















