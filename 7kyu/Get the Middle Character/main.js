// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
//https://www.codewars.com/kata/56747fd5cb988479af000028/solutions/javascript
// Examples:

console.log(getMiddle("test")) // --> "es"
console.log(getMiddle("testing")) //"testing" --> "t"
console.log(getMiddle("middle"))//"middle" --> "dd"
console.log(getMiddle("A"))//"A" --> "A"

function getMiddle(s) {
    let count = 0
    if(s.length % 2 === 0){
        //evens
        count = s.length / 2
        return `${s[count - 1]}${s[count]}`
    } else{
        //odds
        count = s.length 
        return `${s[(count-1) / 2]}`
    } 
  }