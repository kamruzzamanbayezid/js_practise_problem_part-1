// check is the year leap year

// formula 1
// year divisible by 4
// function is_leap_year(leapYear) {
//       if (leapYear % 4 === 0) {
//             return `${leapYear} is leap year`;
//       }
//       return `${leapYear} is not leap year`;
// }

// formula 2
// year that is not divisible by 100 && is divisible by 4 and 400 is leap year
function is_leap_year(leapYear) {
      if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)) {
            return `${leapYear} is leap year`;
      }
      return `${leapYear} is not leap year`;
}
// console.log(is_leap_year(2012));


// formula 3
// year that is not divisible by 100 && is divisible by 4 and 400 is leap year

// function isLeapYear(leapYear) {
//       if (leapYear % 4 === 0) {
//             // return `${leapYear} is leap year`;
//             if (leapYear % 100 === 0) {
//                   if (leapYear % 400 === 0) {
//                         return `${leapYear} is leap year`;
//                   }
//                   else {
//                         return `${leapYear} is not leap year`;
//                   }
//             }
//             else {
//                   return `${leapYear} is leap year`;
//             }
//       };
//       return `${leapYear} is not leap year`;
// }

function isLeapYear(year) {
      if (year % 4 === 0) {
            if (year % 100 === 0) {

                  if (year % 400 === 0) {
                        return `${year} is  leap year`;
                  }

                  else {
                        return `${year} is not leap year`;
                  }
            }

            else {
                  return `${year} is leap year`;
            }

      }

      else {
            return `${leapYear} is not leap year`;
      }
}

console.log(isLeapYear(2100));