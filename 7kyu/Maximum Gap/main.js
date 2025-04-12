// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives and negatives also zeros_
// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

// Note : Regardless the sign of negativity .

// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
// Explanation:
// The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

// Note : Regardless the sign of negativity .

function maxGap (numbers){
    numbers.sort((a,b) => a - b)
    return numbers[0] < 0 ? 
    -numbers[0] + numbers[numbers.length - 1] :
    numbers[numbers.length - 1] - numbers[0]

//     if(numbers[0] < 0){
//         return -numbers[0] + numbers[numbers.length - 1]
//     } else {
//         return numbers[0] numbers[numbers.length - 1]
//    }
   
  }

  console.log(maxGap([24,299,131,14,26,25]),168)