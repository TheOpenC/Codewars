// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
   let arr = str.split(' ')
       newArr = []
   for(const w of arr) {
    newArr.push((w.split("").reverse()).join(''))
   }
   return newArr.join(" ")
    
}


console.log(reverseWords('The quick brown fox jumped over the lazy dog!'))

// best practice

// function reverseWords(str) {
//   // Go for it
//   //split words into seperate arrays
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }