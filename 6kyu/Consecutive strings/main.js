// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
    // safety code
        let n = strarr.length
        if(n = 0 || k > n || k <= 0 ){
            return ""
        }
           
        // creates the consecutive string combos
        let strCombos = []
        strarr.map((num, index, array) => {
            let stringHolder = ""
            // This many numbers of strings (k) to be combined
            for(let i = 0; i < k; i++ ){
                // strCombos.push(num + array[index + i])
                array[index + i] === undefined
                ? i = k
                : stringHolder += array[index+i]        
            } 

            //PUSH the newly created combos.
            strCombos.push(stringHolder)
        });

        // eliminiate the unncessary strings:
        for(let i = (k - 1) ; i > 0; i--){
            strCombos.pop()
        }

        //This finds the length of the strings in array for the min max
        let highest = 0
        strCombos.forEach(string => {
            let count = string.length
            // string length tracker
            count > highest ? highest = count : count = 0;
            count = 0       
        }); 
        console.log(strCombos.find(item => item.length === highest))
    }


// }




longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 3)// "abigailtheta")