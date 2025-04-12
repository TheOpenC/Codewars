// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

function maxProduct(numbers, size){
    return numbers.sort((a,b)=> a-b)
                  .slice(numbers.length - size)
                  .reduce((a,b)=> a * b)
}

console.log(maxProduct([4, 3, 5], 2),20)
console.log(maxProduct([10, 8, 7, 9], 3), 720)
console.log(maxProduct([8, 6, 4, 6], 3), 288)
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600)
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375)
