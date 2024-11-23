//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

//Example (Input --> Output)
//"CodEWaRs" --> [0,3,4,6]

let capitals = function (word) {
    let caps = []
    let theRest = word.split("").map((l, index) => {
        l === l.toUpperCase() ? caps.push(index) : index
    })
    return caps
}

console.log(capitals("CodEWaRs"))