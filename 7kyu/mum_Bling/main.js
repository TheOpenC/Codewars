// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//Determine the problem. 
// based on the index order, each letter should be treated the following way:
    //Index determines number of times the letter is repeated.
    //First instance, always capital
    //second and all following instances are lowercase
    // might be a good chance to try object mapping

function accum(word) {
    
    return word
        .split('')
        .map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i))
        .join('-')
    
}

console.log(accum("abcd"))