
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let lCount = {};
    for(const l of string){
        lCount[l] ? lCount[l] += 1 : lCount[l] = 1;
    }
    return lCount
}

console.log(count('aba'))