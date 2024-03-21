// inch to feet
// feet= inch/12 ​


function inchToFeet(inch) {
      const myFeet = parseInt(inch / 12);
      const myInch = inch % 12;
      const myHeight = `My height is: ${myFeet} feet ${myInch} inch`

      return myHeight;
}

const myFeet = inchToFeet(75);
// console.log(myFeet);

// Write a function to convert temperature from Celsius to Fahrenheit.
// °F = °C * 1.8 + 32

function celsiusToFahrenheit(celsius) {
      const fahrenheit = (celsius * 1.8) + 32;
      return fahrenheit
}

const celsius = 23;
const fahrenheit = celsiusToFahrenheit(celsius);

console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);
