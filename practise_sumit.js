// লুডুর ১-৬ পর্যন্ত কিভাবে রেনডম নাম্ভার আনবো

function random_number(start, end) {
      return Math.floor(Math.random() * (end - start + 1) + start)
};

// console.log(random_number(1, 6));

const arr = [5, 6, 9, 7, 4];
// console.log(arr.sort(function (a, b) { return b-a }));

// is leap year
function is_leap_year(year) {
      if (year % 4 === 0) {
            if (year % 100 === 0) {
                  if (year % 400 === 0) {
                        return "leap year"
                  }
                  else {
                        return "Not leap year"
                  }
            }
            else {
                  return "leap year!"
            }
      }
      else {
            return 'Not Leap year!'
      }
}

// console.log(is_leap_year(1600));

// count vowels in a sentence
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function count_vowel(sentence) {
      let totalVowels = 0;
      const letters = Array.from(sentence);

      for (let letter of letters) {
            if (vowels.includes(letter)) {
                  totalVowels++;
            }
      }
      return totalVowels;
};

// console.log(count_vowel('baaayezid'));

// কোনো array থেকে duplicate number গুলো কিভাবে বের করে আনা যায়

// function find_duplicate(numbers) {
//       let new_numbers = [];
//       let duplicate_number = [];

//       for (let number of numbers) {
//             if (!new_numbers.includes(number)) {
//                   new_numbers.push(number);
//             }
//             else {
//                   duplicate_number.push(number)
//             }
//       }
//       return duplicate_number;
// }



// const numbers = [1, 2, 6, 5, 2, 5, 4, 9, 2, 5, 7, 6, 3];
// console.log('Duplicate array:', find_duplicate(numbers));

function find_Duplicates(arr) {
      let duplicates = [];

      for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                  if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                        duplicates.push(arr[i]);
                  }
            }
      }
      return duplicates;
}

function findDuplicates(arr) {
      let new_array = [];

      for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                  if (arr[i] === arr[j] && !new_array.includes(arr[i])) {
                        new_array.push(arr[i])
                  }
            }
      }
      return new_array
};

const array = [1, 2, 2];
// console.log("Duplicate numbers:", findDuplicates(array));

// sentence e bayezid kotobar ache??
//prothom bar bayezid koto number position e ache 

const sentence = 'My name is bayezid i am bayezid bayezid is a very good boy BAyezid reads book rsqularly';

function count_word(sentence) {
      const bayezid = sentence.match(/bayezid/gi);
      const length = bayezid ? bayezid.length : 0;

      return length;
}

// function count_word(sentence) {
//       const first_bayezid_position = sentence.indexOf('bayezid');
//       const bayezid = sentence.slice(11, 18);
//       const split_sentence = sentence.split(' ');

//       let count = 0;

//       for (let element of split_sentence) {
//             if (element.toLowerCase() === bayezid.toLowerCase()) {
//                   count++;
//             }
//       }

//       return count;
// }

// console.log(`In sentence bayezid has: ${count_word(sentence)} time`);


//case-1: ['a', 'b', 'c', 'd'], 'c' => c ta koybar ache
function linear_search(arr, string) {
      let count = 0;

      for (let letter of arr) {

            if (letter === string) {
                  count++;
            }
      }
      // return count <= 0 ? 'Not found' : count;
      if (count) {
            return count;
      }
      return 'Not Found'
};

// console.log('Is found:', linear_search(['a', 'b', 'c', 'd'], 'c'));

//case-2: ['a', 'b', 'c', 'd'], 'c' => c ta koto number index e ache
function find_index(arr, string) {

      const length = arr.length;

      for (let i = 0; i < length; i++) {
            if (arr[i] === string) {
                  return i;
            }
      }
      return 'Not Found'
}
// console.log('The index is:', find_index(['a', 'b', 'c', 'd'], '4'));

// find largest element from an array and its index number

const arr2 = ['mahir', 'sahed', 'nihad', 'bayezid'];
function largest_element(arr) {

      let largestElement = arr[0];

      for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > largestElement.length) {
                  largestElement = arr[i];
            }
      }

      return [largestElement, arr.indexOf(largestElement)]
}

const result = largest_element(arr2);
// console.log(`Largest element is: ${result[0]} & Index of ${result[0]} is ${result[1]}`);

// 1-100 porjonto kon songkha gulo 3 o 5 ebong kon songkha gulo 3 o 5 ubay dhara vivajjo


function vivajjo(from, to) {
      let numbers = [];

      for (let number = from; number <= to; number++) {
            // if ((number % 3 === 0 || number % 5 === 0) || (number % 3 === 0 && number % 5 === 0)) {
            //       numbers.push(number);
            // }
            if (number % 3 === 0 && number % 5 === 0) {
                  console.log('fizzbuzz');
            }
            else if (number % 3 === 0) {
                  console.log('fizz');
            }
            else if (number % 5 === 0 ) {
                  console.log('buzz');
            }
            else{ 
                  console.log(number);
            }
      }
      // return number;
}
console.log(vivajjo(1, 100));

