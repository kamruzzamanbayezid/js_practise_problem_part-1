// function takes an array as parameters
// give me the average of odd numbers in the array

function odd_average(arr) {
      let sumOfOdd = 0;
      let oddElements = [];

      for (let element of arr) {

            if (element % 2 !== 0) {

                  sumOfOdd += element;
                  oddElements.push(element);
            }
      }

      const averageOfOdd = sumOfOdd / oddElements.length;
      return averageOfOdd;
};

const result = odd_average([42, 13, 58, 65, 81, 96, 7, 105]);
// console.log('Average of the odd number is: ', result);