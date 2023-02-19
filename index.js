// 1.

// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// i.e.
//
//     friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
//
// --------------------------------------------solution--------------------------------------------------------------------------------------

const friend = friends => friends.filter(friend => friend.length === 4);

// 2.

// Given an array of integers, return a new array with each value doubled.
//
//     For example:
//
//     [1, 2, 3] --> [2, 4, 6]
//

// --------------------------------------------solution--------------------------------------------------------------------------------------

const maps = x => x.map(e => e*2);

// 3.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// --------------------------------------------solution--------------------------------------------------------------------------------------

const boolToWord = bool => bool ? 'Yes' : 'No';

// 4.

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
//     If the function is passed a valid PIN string, return true, else return false.

// --------------------------------------------solution--------------------------------------------------------------------------------------

const validatePIN = pin => /^(\d{4}|^\d{6})$/.test(pin)

// 5.

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]

// --------------------------------------------solution--------------------------------------------------------------------------------------

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

// function past(h, m, s){
//     const result = ((h*3600) + (m*60) + s)*1000
//     console.log(result)
// }
//
// past(1, 1, 1)


// const increment = (number, value) => {
//     if (!value) {
//         return number + 1;
//     } else {
//         number + value
//     }
// };
//


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
String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
};