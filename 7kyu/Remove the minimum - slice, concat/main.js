// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


// no sorting allowed
//for of to move through the array. 
// start the lowest = 0
// compare each value to lowest. 
// if it's lower than lowest, lowest become current element.
// filter for lowest. 


// copy original array and sort, filter for everthing that isn't that element. 
// function removeSmallest(numbers) {
//     if (numbers === 0){
//         return []
//     }
//     let clone = numbers.sort((a, b) => a - b)
//     console.log(numbers)
//     return numbers.filter(n => n !== clone[0])
//   }

// console.log(removeSmallest([1,2,3,4,5]))
// console.log(removeSmallest([5,3,2,1,4]))
// console.log(removeSmallest([2,2,1,2,1]))


function removeSmallest(numbers){
    if (numbers === 0){
        return []
    }

    let lowest = numbers.indexOf(Math.min(...numbers))
        clone = numbers.slice(0, lowest).concat(numbers.slice(lowest + 1))
    return clone
}

console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest([5,3,2,1,4]))
console.log(removeSmallest([2,2,1,2,1]))