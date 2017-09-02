// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
  var sum = 0;
  if(numsArray.length === 0){
    return sum;
  }
  for(let i = 0; i < numsArray.length; i++){
    sum += numsArray[i];
  }
  return sum;
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  var grThanTen = [];
  for(let i = 0; i < numsArray.length; i++){
    if(numsArray[i] > 10){
      grThanTen.push(numsArray[i]);
    }
  }
  return grThanTen;
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  if(numsArray.length === 0)
    return true;
  for(let i = 0; i < numsArray.length; i++){
    if(numsArray[i] <= 10)
      return false;
  }
  return true;
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  var masThan5 = [];
  for(let i = 0; i < words.length; i++){
    if(words[i].length >= 5)
      masThan5.push(words[i]);
  }
  return masThan5;
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  if(words.length === 0)
    return true;
  for(let i = 0; i < words.length; i++){
    if('a' !== words[i][0].toLowerCase())
      return false;
  }
  return true;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  if(words.length === 0)
    return false;
  for(let i = 0; i < words.length; i++){
    if('b' === words[i][0].toLowerCase())
      return true;
  }
  return false;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  var vowels = 'aeiou';
  var vowelCount = 0;
  word = word.toLowerCase();
  if(n < 0)
    return null;
  for(let i = 0; i < word.length; i++){
    if(vowels.includes(word[i]))
      vowelCount++;
  }
  if(vowelCount >= n)
    return true;
  return false;
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  var atLeast = [];
  for(let i = 0; i < words.length; i++){
    if(hasAtLeastNVowels(words[i], 2)){
      atLeast.push(words[i]);
    }
  }
  return atLeast;
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  if(words.length === 0)
    return true;
  var test = wordsWithAtLeastTwoVowels(words);
  if(test.length === words.length)
    return true;
  return false;
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  var test = wordsWithAtLeastTwoVowels(words);
  if(test.length > 0)
    return true;
  return false;
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  if(words.length === 0)
    return true;
  return !anyHaveAtLeastTwoVowels(words);
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  var obj = {};
  for(let i = 0; i < words.length; i++){
    obj[words[i]] = words[i].length;
  }
  return obj;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
