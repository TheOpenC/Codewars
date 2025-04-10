function minMax(arr){
    arr.sort((a,b) => a - b)
    return [arr[0], arr[arr.length - 1]]
  }

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([5, 2334454]))
console.log(minMax([5, 5]))