// // Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// // Example (Input --> Output)

// // "CodEWaRs" --> [0,3,4,6]

// // think about reproducing the desired result -- how can you do this? 
// // think about how to replicate the upper case without sorting. 
// // linear, scan and filter problem. 

// function capitals (word) {
//     let letters = word.split(''),
//         indexes = letters.reduce((acc, l, i) => {
//         if (l === l.toUpperCase()) {
//             acc.push(i)
//         }
//         return acc
//     }, [])
//     return indexes
// }

function capitals (word) {
    let letters = word.split(''),
        indexes = letters.reduce((acc, l, i) => {
            if (l === l.toUpperCase()) {
                acc.push(i)
            }
            return acc
        }, [])
        return indexes;
}





console.log(capitals("CodEWaRs"))