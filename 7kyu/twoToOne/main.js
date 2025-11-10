// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// in order to search this effectively, an initial sort would be useful
// concat // split // sort >> convert to set >> array 
// flatMap could also be useful here 
// print keys with properties larger than 0



// function longest(s1, s2) {
//   let combined = s1.concat(s2).split('').sort(),
//       set = new Set(combined),
//       longest = Array.from(set).join('');
//   return longest
// }

function longest(s1, s2) {
  let combined = [...new Set(s1.concat(s2))],
        longest = Array.from(combined).sort().join('')
        return longest
}

console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))
//returns "abcdefklmopqwxy"