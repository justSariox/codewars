



// --------------------------------------------solution--------------------------------------------------------------------------------------











//Who likes it?

// function likes (names) {
//     if (names.length === 0) {
//         return 'no one likes this';
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`;
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`;
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else if (names.length > 3) {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
//     }
// }

//

// Are they the "same"?

// function comp(array1, array2){
//     if (!array1 || array2 || array1.length !== array2.length) {
//         return false;
//     } else {
//         return array1.map(item => item * item).sort().toString() === array2.sort().toString();
//     }
// }

// function switchItUp(number){
//     return  ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number];
// }