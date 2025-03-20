// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


// function incrementString (strng) {
//     let split = strng.split("")
//         firstNum = split.includes("0") ? split.indexOf("0") : split.findIndex(char => parseInt(char))  
//         length = split.splice(firstNum).length
//         numPlus = +strng.slice(firstNum) + 1
    
//     return length == numPlus.length ? split.splice(firstNum, length,"0", numPlus) : split.splice(firstNum, length, numPlus);

//   }

//   console.log(incrementString("foobar023"))


function incrementString(strng) {
    let i = strng.length - 1;

    while (i >= 0 && strng[i] >= "0" && strng[i] <= '9') {
        i--;
    }


    let textPart    = strng.slice(0, i + 1);
        numPart     = strng.slice(i + 1);
        
    
    if (!numPart) return strng + "1";    
    let numValue    = parseInt(numPart, 10) + 1;
        paddedNum   = numValue.toString().padStart(numPart.length, "0");
        
        return textPart + paddedNum;
}

console.log(incrementString('foo99bar023'))