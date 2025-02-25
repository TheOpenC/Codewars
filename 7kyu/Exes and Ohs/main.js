// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str){
    let xo = str.toLowerCase().split('').filter(l => l === 'x' || l === 'o')
    let x = xo.filter(l => l === 'x')
    let o = xo.filter(l => l === 'o')
    return o.length === x.length ? true : false
}

console.log(XO("zzoo"))