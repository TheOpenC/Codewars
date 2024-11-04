// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Strings Fundamentals

function getCount(str) {
    //   put all the letters into an array
      let arr = Array.from(str);
    //   filter everthing but the vowels out of the array
      let filtered = arr.filter((l) => l == "a" || l == "e" || l == "i" || l == "o" || l == "u");
    // count the length of the array and return it
      return filtered.length;
    }