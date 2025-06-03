// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

// 25 is an automorphic number, because 25^2 = 625, 625 ends with 25, so return "Automorphic".

// 76 is an automorphic number, because 76^2 = 5776 ends with 76, so return "Automorphic".

// 13 is not an automorphic number, because 13^2 = 169 does not end with 13, so return "Not!!".

function automorphic(n){
    let sq = n * n
    let count = n.toString().length
    let str = sq.toString().lastIndexOf(n)
    if (str == 0){
        return count == 1 ? "Automorphic" : "Not!!"
    } else {
    return str >= (count - 1) ? "Automorphic" : "Not!!"
    }
}


  
console.log(automorphic(3))