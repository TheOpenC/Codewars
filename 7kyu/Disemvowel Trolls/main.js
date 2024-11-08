// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    let arr = Array.from(str);
    let filtered = arr.filter((l) => (l !== "i") && (l !== "o") && (l !== "a") && (l !== "e") && (l !== "u") && (l !== "I") && (l !== "O") && (l !== "A") && (l !== "E")&& (l !== "U"))
    
    return filtered.join("")
  }

  console.log(disemvowel("This website is for losers LOL!"))

  console.log(disemvowel("Where are all the poptarts AT?!"))