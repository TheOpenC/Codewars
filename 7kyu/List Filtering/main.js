// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript

// Example
console.log(filter_list([1,2,'a','b'])) //== [1,2]
console.log(filter_list([1,'a','b',0,15])) //== [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) //== [1,2,123]

function filter_list(l) {
    let arr = []
    for(let x of l){
        if (typeof x === "number" ){
            arr.push(x)    
        }
    }return arr
  }