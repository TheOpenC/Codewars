// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
//https://www.codewars.com/kata/553e8b195b853c6db4000048/solutions/javascript

// Algorithms / Strings

function hasUniqueChars(str){
    const uniques = new Set();
    
    let arr = Array.from(str);
    
    arr.forEach(char => uniques.add(char));
       return uniques, (uniques.size == arr.length ? true : false);
  }