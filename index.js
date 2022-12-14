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

