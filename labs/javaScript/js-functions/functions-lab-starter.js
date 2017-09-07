// Question 1
const maxOfTwoNumbers = (num1, num2) =>{
    if(num1 > num2)
        return num1;
    else
        return num2;
}
//console.log(maxOfTwoNumbers(4,10));
//console.log(maxOfTwoNumbers(20,10));

// Question 2
const maxOfThree = (num1,num2,num3) =>{
    return maxOfTwoNumbers(maxOfTwoNumbers(num1,num2),
    maxOfTwoNumbers(num2,num3));
}
//console.log(maxOfThree(11,2,3));
//console.log(maxOfThree(3,23,1));
//console.log(maxOfThree(14,3,21));

// Question 3
function isCharacterAVowel(ch) {
    const vowels = 'aeiou';
    if(vowels.includes(ch))
        return true;
    else
        return false;
}
//console.log(isCharacterAVowel('e'));
//console.log(isCharacterAVowel('a'));
//console.log(isCharacterAVowel('t'));

// Question 4
function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
    }, this);
    return sum;
}
// Question 4
function multiplyArray(arr) {
    let prod = 1;
    arr.forEach(function(num) {
        prod *= num;
    }, this);
    return prod;
}
let arr = [1,2,3,4];
//console.log(sumArray(arr));
//console.log(multiplyArray(arr));

// Question 5
var numberOfArguments = function(){
    return arguments.length;
}
//console.log(numberOfArguments());
//console.log(numberOfArguments(1,2,3));

// Question 6
var reverseString = function (str){
    return str.split('').reverse().join('');
};
let phrase = "Now I know what a TV dinner feels like";
//console.log(reverseString(phrase));

// Question 7
var findLongestWord = (arr) =>{
    let longest = 0;
    arr.forEach( function(word) {
        if(word.length > longest)
            longest = word.length;
    }, this);
    return longest;
}
//console.log(findLongestWord(phrase.split(' ')));

// Question 8
function filterLongWords (arr, l) {
    let longarr = [];
    arr.forEach(function(word) {
        if(word.length > l)
            longarr.push(word);
    }, this);
    return longarr;
}
//console.log(filterLongWords(phrase.split(' '), 3));

// Bonus 1
String.prototype.reverseString = function () {
    return this.split('').reverse().join('');
};
//console.log("Reverse this string".reverseString());


// Bonus 2
function charactersOccurencesCount(str) {
    let arr = str.toLowerCase().split('');
    let ob = {};
    arr.forEach(function(ch) {
        if(!ob.hasOwnProperty(ch))
            ob[ch] = 1;
        else
            ob[ch]++;
    }, this);
    return ob;
}
//console.log(charactersOccurencesCount('General Assembly'));