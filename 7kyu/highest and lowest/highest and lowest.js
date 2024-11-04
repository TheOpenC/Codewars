// 11/4/24
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



// Fundamentals / Strings

// this is a split and join problem. I think there's a simple solution past the 
// obvious s&j -- but I'm not 100% on that. 
// after solving, Math.min // Math.max was the right way to solve this, not all the other stuff. 


// Me: turn the string into an array, split by spaces. filter out the spaces. sort by number
function highAndLow(str) {
    let arr = str.split(' ').sort((a,b) => Number(a - b));
    return`${arr[arr.length -1]} ${arr[0]}`  
}

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"


