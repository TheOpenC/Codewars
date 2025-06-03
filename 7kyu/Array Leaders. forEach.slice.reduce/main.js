// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).

function arrayLeaders(numbers){
    let leader = [];
        compare = 0;

    numbers.forEach((n, index) => {
        if (index == numbers.length - 1){
            return n > 0 ? leader.push(n) : leader;   // accounts for last operation
        }
        compare = numbers.slice(index+1).reduce((a,cv)=> a + cv)
            n > compare ? leader.push(n) : leader;
    })
    return leader  
}
console.log(arrayLeaders([-1,-29,-26,-2]))