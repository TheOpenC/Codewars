// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// pattern -- the index of the letter +1 = how many times it should be repeated
// 
// first letter is always upper cased 
// letters are separated by '-'
// 

function accum(s) {
	arr = s.toLowerCase().split("")
    let solver = arr.map((l, index) => multX(l, index)).join("-")
    return solver
}
function multX(letter, number){
    let letters = letter.repeat(number)
    let firstL = letter.toUpperCase()
    return (firstL + letters)
}

console.log(accum("EfdkekahdKKd"))