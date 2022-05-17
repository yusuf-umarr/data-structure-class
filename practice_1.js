/*  (function)

JS practrice
================================================================
1. write a javascrption program to check two numbers  and return true id one of 
\the number is 100 or if the sum of the two number is 100

*/

const checkNumber=(a, b) => a===100 || b === 100 || (a + b) === 100;

console.log(checkNumber(100, 10))
console.log(checkNumber(20, 100))
console.log(checkNumber(20, 10))
console.log(checkNumber(20+ 10))
console.log(checkNumber(20+ 80))

/*
2. write a javascript program to get the extension of a filename
*/ 

const getExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getExtension('page.html'));
console.log(getExtension('my.page.js'));

/*
write a javascript program to replace every character in a given string
with the character following it in the alphabet
*/

const replaceChar=(str)=> str.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(replaceChar('adeg'));

/*
write a javascript program to get the current date.

*/ 
const getCurrentDate=(date = new Date()) =>  {
    const dates = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${dates}-${month}-${year}`
}

console.log(getCurrentDate())

