// declare a variable without an assigned value
let name
console.log(name)
// JS creates an undefined value 

if (name == undefined){
    console.log('Please define a name')
}else{
    console.log(name)
}

// Undefined for function argument
let square = function(num){
    let square = num*num
}

console.log(square(),'function with no value defined')
let result = square(2)
console.log(result,'Return value from a function which doesnt return anything')

//we can assign undefined or we can assign null
// undefined means something wrong with the code 
//null means explicitly set by the developer

let age = 25
age = null
console.log(age)