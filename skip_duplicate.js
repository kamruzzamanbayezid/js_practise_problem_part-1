// skip the duplicate element

function skip_duplicate(arr) {
      const newArray = [];

      for (i = 0; i < arr.length; i++) {
            const element = arr[i];

            // option 1
            // if (newArray.includes(element)) {
            //       continue;
            // }

            // option 2
            if (!newArray.includes(element)) {
                  newArray.push(element);
            }

      }
      return newArray;
};

const result = skip_duplicate(['abul', 'kabul', 'babul', 'abul', 'tabul', 'babul']);
// const result = skip_duplicate([2, 5, 6, 5, 2, 7, 9]);
// console.log(result);

