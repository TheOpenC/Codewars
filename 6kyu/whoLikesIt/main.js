
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.


// insert the 'and' after 1st index

// function likes(names) {
//     let str = 'like this'
//     let count = names.length

//     if (names.length === 0){
//         return `no one likes this`

//     }else if(count === 1){
//         return `${names[0]} likes this`

//     }else if(count === 2){
//         names.splice(1, 0,'and')
//         return `${names.join(' ')} ${str}`
    
//     }else if (count === 3){
//         names[0]+=","
//         names.splice(2, 0,'and')
//         return `${names.join(' ')} ${str}`
 
//     } else if (count > 3) {
//         str = `${count - 2} others like this`;
//         names[0]+=","
//         names.splice(2, 0,'and');
//         names.splice(3,names.length, str);
//         return `${names.join(' ')}`
//     }
// }


console.log(likes(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"]))

//Use object mapping in cases that can use switch or lengthly if else statements.

function likes(names) {
    const n = names.length;
    const [a, b, c] = names;

    const byCount = {
        0: 'no one likes this',
        1: `${a} likes this`,
        2: `${a} and ${b} like this`,
        3: `${a}, ${b} and ${c} like this`,
    };

    return byCount[n] || `${a}, ${b} and ${n-2} others like this`;
}


function likes(names) {
    const n = names.length;
    const [a, b, c] = names;

    const byCount = {
        0: 'no one likes this',
        1: `${a} likes this`,
        2: `${a} and ${b} like this`,
        3: `${a}, ${b} and ${c} like this`,
    };

    return byCount[n] || `${a}, ${b} and ${n-2} others like this`;
}