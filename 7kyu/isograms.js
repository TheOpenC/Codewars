// Description:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Strings Fundamentals

function isIsogram(str){
    // convert string to lowercase to ignore case sensitivity
      let lower = str.toLowerCase();
      
    //   Use a Set to store unique letters;
      let uniqLetters = new Set(lower);
      
    //   compare lengths of the set and original strong
      return uniqLetters.size === lower.length;
    }
    console.log(isIsogram("Dermatoglyphics"));


    
    // optimal solution: 
    function isIsogram(str){
        return new Set(str.toUpperCase()).size == str.length;
    }