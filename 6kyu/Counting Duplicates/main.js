// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

// Strings / Fundamentals

// Create a set from the array and compare and add up the instances of each element in the array. 

// return the set


// could you also run the arr through a set and then subtract that set from the original to define dupes -- remaining + 1 = # of dupes
function dupeCount(str){
    
    // create an array from the original string
    let arr = Array.from(str)
    let obj = {}


    //Set creates an array of uniques. Not sure if this is helpful
    // Unique letter list
    const uniques = new Set(arr);

    // for each letter, push in a key to the obj
    arr.forEach(l => arr.push(l))

    console.log(obj)

}

dupeCount("Hippo")
