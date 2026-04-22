// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.


function findAverage(arr) {
  if(arr == 0) return 0;
  const total = arr.reduce((acc,cv) => acc+cv);
        return total / arr.length
  }