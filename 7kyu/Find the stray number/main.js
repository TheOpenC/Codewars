// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

//https://www.codewars.com/kata/57f609022f4d534f05000024

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 17, 17, 17, 17, 3] //==> 3
// assert.strictEqual(stray([1, 1, 2]), 2);
// assert.strictEqual(stray([1, 2, 1]), 2);
// assert.strictEqual(stray([2, 1, 1]), 2);

function filterNum(arr){
    let sorted = arr.sort((a,b) => (a-b));
    let mIndex = (sorted.length - 1) / 2; 
    return Number(sorted.filter((num )=> num != sorted[mIndex]))
}

console.log(filterNum([1, 1, 2]))
console.log(filterNum([17, 17, 17, 17, 17, 17, 3]))
console.log(filterNum([21, 21, 21, 21, 21, 21, 21, 8, 21]))
console.log(filterNum([ 5, 5, 5, 5, 52]))