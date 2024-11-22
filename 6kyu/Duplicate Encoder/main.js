//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// mine. Could be much cleaner -- the object portion isn't efficient. 
function duplicateEncode(word){
    let holder = {}
    let str = ""
    let arr = Array.from(word.toLowerCase()) // to arr, lowercases string

    arr.forEach(letter => holder[letter] = 0) // logs existence
    arr.forEach(letter => holder[letter] += 1) // counts 

    for(let i = 0; i < word.length; i++){ // compares original string to counter obj. records in '(' ')'
        if (holder[arr[i]] > 1){
            str += ")"
        } else {
            str += "("
        }
    }return str
}

//other great solutions: 
// functional approach: 

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }


////////////////////////////////
//simplest 


// function duplicateEncode(word){
   
//     let unique='';
//     word = word.toLowerCase();
//     for(const i=0; i<word.length; i++){
//         if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//             unique += '(';
//         }
//         else{
//             unique += ')';
//         }
//     }
//     return unique;

// }