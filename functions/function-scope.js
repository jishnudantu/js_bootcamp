//Scope Tree
// Global Scope (convertFahrenheitToCelsius, celsius1, celsius2)
  // Local Scope (fahrenheit, celsius)
      // Localscope(isFreezing)


let convertFahrenheitToCelsius = function(fahrenheit){
    let celcius = (fahrenheit - 32) * (5/9)
    if (celcius<=0){
        let isFreezing = true
    }

    return celcius
}
let fahrenheit1 = 32
let fahrenheit2 = 46

let celcius1 = convertFahrenheitToCelsius(fahrenheit1)
let celcius2 = convertFahrenheitToCelsius(fahrenheit2)
console.log(fahrenheit1,'degrees fahrenheit is equal to', celcius1,'degrees celsius')
// Template strings `${variable/function}`
console.log(`${fahrenheit2} degrees is equal to ${celcius2} degrees celsius`)

