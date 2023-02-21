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



// function switchItUp(number){
//     return  ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number];
// }

// Welcome!

// function greet(language) {
//     switch(language){
//         case "english": return "Welcome";
//         case "czech": return "Vitejte";
//         case "danish": return "Velkomst";
//         case "dutch": return "Welkom";
//         case "estonian": return "Tere tulemast";
//         case "finnish": return "Tervetuloa";
//         case "flemish": return "Welgekomen";
//         case "french": return "Bienvenue";
//         case "german": return "Willkommen";
//         case "irish": return "Failte";
//         case "italian": return "Benvenuto";
//         case "latvian": return "Gaidits";
//         case "lithuanian": return "Laukiamas";
//         case "polish": return "Witamy";
//         case "spanish": return "Bienvenido";
//         case "swedish": return "Valkommen";
//         case "welsh": return "Croeso";
//         default: return "Welcome";
//     }
//
// }

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         for (let i = 0; i < args.length; i++) {
//             for (let j = 0; j < args.length; j++) {
//                 if(args[j+1] < args[j]) {
//                     let tmp = args[j];
//                     args[j] = args[j+1]
//                     args[j+1] = tmp
//                 }
//             }
//         }
//         console.log(args.at(-1))
//     }
//
// }

// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
        for (let i = 0; i < args.length; i++) {
            for (let j = 0; j < args.length; j++) {
                if(args[j+1] < args[j]) {
                    let tmp = args[j];
                    args[j] = args[j+1]
                    args[j+1] = tmp
                }
            }
        }
        return args.at(0)
    }
}

//

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(" "),2);
};