// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
   return array.sort((a, b) => a.length - b.length);
 }

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2614440412.
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))