// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

// 25 is an automorphic number, because 25^2 = 625, 625 ends with 25, so return "Automorphic".

// 76 is an automorphic number, because 76^2 = 5776 ends with 76, so return "Automorphic".

// 13 is not an automorphic number, because 13^2 = 169 does not end with 13, so return "Not!!".

function automorphic(n){
    let sq = n * n
    let count = 0
    let arrN = n.toString().split('')
    let str = sq.toString().split('')
   // let digits = arrN.map(num =>  )
    
    for(i = 0; i <= arrN.length; i++){
        console.log(str[str.length - arrN.length + i])
    }
    
     // your code here
  }


  
automorphic(25)