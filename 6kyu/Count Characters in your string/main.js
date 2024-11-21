//Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    if (string === ""){
        return {}
    }
    let sum = {}
    let arr = Array.from(string);

    arr.forEach(letter => sum[letter] = 0)
    arr.forEach(letter => sum[letter] += 1)
    return sum
}


count('a')
count('ab')
count('abaa')
console.log(count('AaBbbbBCcCcCc'))