// 6. Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//     If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// Example(Input1, Input2 --> Output):
//
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// --------------------------------------------solution--------------------------------------------------------------------------------------

// const areaOrPerimeter = (l, w) => l === w ? l*w : (l*2)+(w*2)
//

// 4.

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
//     If the function is passed a valid PIN string, return true, else return false.

// --------------------------------------------solution--------------------------------------------------------------------------------------

// const validatePIN = pin => /^(\d{4}|^\d{6})$/.test(pin)


// bubbleSort
// const bubbleSort = (arr, count) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//              if(arr[j+1] < arr[j]) {
//                  let tmp = arr[j]
//                  arr[j] = arr[j+1]
//                  arr[j+1] = tmp;
//              }
//
//         }
//         count++
//     }
//     return arr
// }
//
// console.log(bubbleSort([6,5,2,22,1,4,7,46]))
//

// Jaden Casing Strings
// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
// };