'use strict'
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// ----------------------------------------------------
 
// const findLongestWord = function(string) {
//     const newStr = string.split(' ');
//     let longestWord = newStr[0];

//     for(const i of newStr) {
//         if(longestWord.length < i.length) {
//             longestWord = i;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));