//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//return your answer as a Number

//[] all have value; nums/str/; pos /whole ; no funny biz;
//num -> 

function sumAllValues(arr){
// loop arr -> sum all
//reduce 

return arr.reduce( (a,c) => a + +c, 0)
}


console.log(sumAllValues([9, 3, '7', '3']), 22)
console.log(sumAllValues(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
//assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);