/*
  Given a roman numeral, convert it to an integer.
*/

// const romanToInt = (s) => {
//   const values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

//   let result = 0, i = 0;
//   while (i < s.length) {
//     const current = values[s[i]];
//     const next = values[s[i + 1]];

//     if (i < s.length - 1 && ['I', 'X', 'C'].includes(s[i]) && current < next) {
//       result += next - current;
//       i++;
//     } else {
//       result += current;
//     }

//     i++;
//   }

//   return result;
// };

// const romanToInt = (s) => {
//   const values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
//     'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900
//   };

//   let result = 0, i = 0;
//   while (i < s.length) {
//     if (i < s.length - 1 && values[`${s[i]}${s[i + 1]}`]) {
//       result += values[`${s[i]}${s[i + 1]}`];
//       i++;
//     } else {
//       result += values[s[i]];;
//     }

//     i++;
//   }

//   return result;
// };

// const romanToInt = (s) => {
//   const values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
//     'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900
//   };

//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     const value = values[`${s[i]}${s[i + 1]}`];

//     if (value) {
//       result += value;
//       i++;
//       continue;
//     }

//     result += values[s[i]];
//   }

//   return result;
// };

const romanToInt = (s) => {
  const values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (values[s[i]] < values[s[i + 1]]) {
      result += values[s[i + 1]] - values[s[i]];
      i++;
      continue;
    }

    result += values[s[i]];
  }

  return result;
};

module.exports = romanToInt;
