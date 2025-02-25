function validatePIN (pin) {
console.log(typeof +pin)
let arr = Array.from(pin)
arr.filter(num =>{
    num
})
if (pin.length === 4 || pin.length === 6){
    let noFloat = Math.trunc(pin)
    if (pin.length === 4 || pin.length === 6){
        return true
    }
}else{
    return false
}
}
 console.log(validatePIN("a234.5"))