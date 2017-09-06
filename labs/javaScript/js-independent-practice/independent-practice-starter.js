//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

const lengths = (arr) =>{
    lengthArr = [];
    arr.forEach(function(element) {
        lengthArr.push(element.length);
    }, this);;
    return lengthArr;
}
var words = ["hello", "what", "is", "up", "dude"]
////console.log(lengths(words));

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

const transmogrifier = (a,b,c) =>{
    return (a * b) ** c;
}
////console.log(transmogrifier(5,3,2))

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

const wordReverse = (str) =>{
    return str.split(' ').reverse().join(' ');
}
let phrase = "Now I know what a TV dinner feels like";
//console.log(wordReverse(phrase));