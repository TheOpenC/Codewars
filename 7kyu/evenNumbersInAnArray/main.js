// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// This strikes me as a reduceRight() problem

// function evenNumbers(array, number) {
//   return array.reduceRight((acc, n, i) => {
//         if(n%2 == 0){
//             acc.push(n)
//         } return acc
//   },[]).splice(0, number).reverse()  
// }
// this solution isn't optimal because it can't exit early

// function evenNumbers(array, number) {
//     let evens = []
//     for(let i = array.length - 1; i >= 0 && evens.length < number; i--){
//         const n = array[i];
//         if (n%2 == 0) evens.push(n);
//     } return evens.reverse()
// }

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))



function evenNumbers(array, number){
    evens = []
    for(i = array.length - 1; i >= 0 && evens.length < number ; i-- ){
        let n = array[i]; 
            if(n % 2 == 0) evens.push(n)
    } return evens.reverse()
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))