// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

//arr -> no funny biz, sum

//all pairs two numbers -> arr of pairs
// see how many pairs can be made.

function twoSum(arr, sum) {
    //pairs arr
    const pairs = []
    //hashmap obj
    const seenNums = {}
    //loop 
    for(const currentNum of arr){
        const diff = sum - currentNum
        if(seenNums[diff]){
            pairs.push([currentNum, diff])
        } else {
            // seenNums
            seenNums[currentNum] = true
        }
    }
    //
}



console.log(twoSum([1,2,2,3,4],4), '[[2,2],[1,3]]' )