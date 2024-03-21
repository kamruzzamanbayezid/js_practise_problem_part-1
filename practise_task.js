// You are given an array of numbers.Count how many times the a number is repeated in the array.
// sample - input: numbers = [5, 6, 11, 12, 98, 5]
// find: 5

function repeatedCount(numbers, findNumber) {
      let repeatedCount = 0;
      // console.log(numbers);

      for (let number of numbers) {
            if (number === findNumber) {
                  repeatedCount++;
            }
      }
      return repeatedCount;
}

const findNumber = 5;
const numbers = repeatedCount([5, 6, 11, 12, 98, 5], findNumber);

// console.log(`In this array ${findNumber} has ${numbers} times`);



// Write a function to count the number of vowels in a string.
function countVowels(string) {
      let countVowel = 0;

      const vowels = 'aeiouAEIOU';

      for (let element of string) {
            if (vowels.includes(element)) {
                  countVowel++;
            }
      }
      return countVowel;
}

const string = '444';
const result = countVowels(string);
// console.log(`${string} has ${result} vowels`);


// Write a function to count the number of consonant in a string.

function countConsonant(string) {
      let consonantCount = 0;
      const vowels = 'aeiouAEIOU';

      for (let i = 0; i < string.length; i++) {
            const element = string[i];
            if (!vowels.includes(element)) {
                  consonantCount++;
            }
      }
      return consonantCount;
}

const stringCons = 'bayezid';
const countCons = countConsonant(stringCons);
// console.log(`${stringCons} has ${countCons} consonants`);



// Write a function to find the longest word in a given string.
// sample - input: I am learning Programming to become a programmer
// sample - output: Programming

function findLongestWord(string) {
      const splitString = string.split(' ');

      let maxLength = 0;
      let longWord = '';

      for (let element of splitString) {

            if (element.length > maxLength) {
                  maxLength = element.length;
                  longWord = element;
            }
      }
      return longWord;
}

const longestString = 'I am learning Programming to become a programmer';
const longestWord = findLongestWord(longestString);

// console.log(`The longest word of the string is ${longestWord}`);


// Write a function to find the smallest word in a given string.
// sample - input: I am learning Programming to become a programmer
// sample - output: Programming

function findSmallestWord(string) {
      const splitString = string.split(' ');

      let minHeight = 10;
      let smallestWord = '';

      for (let element of splitString) {

            if (element.length < minHeight) {
                  minHeight = element.length;
                  smallestWord = element;
            }
      }

      return (smallestWord);
}

const smallestWord = findSmallestWord('I am learning Programming to become a programmer');

console.log(`The smallest word of the string is ${smallestWord}`);
