// Function - input (argument), code, output(return value)

let greetUser = function(){
    console.log('Welcome user!')
}

greetUser() // calling the function

let square = function(num){
    let result = num * num
    return result
}

let result = square(3)
let result1 = square(10)
console.log(result, result1)

let convertFahrenheitToCelsius = function(fahrenheit){
    let celcius = (fahrenheit - 32) * (5/9)
    return celcius
}
let fahrenheit1 = 32
let fahrenheit2 = 46

let celcius1 = convertFahrenheitToCelsius(fahrenheit1)
let celcius2 = convertFahrenheitToCelsius(fahrenheit2)
console.log(fahrenheit1,'degrees fahrenheit is equal to', celcius1,'degrees celsius')
console.log(fahrenheit2, 'degrees fahrenheit is equal to', celcius2,'degrees celsius')
