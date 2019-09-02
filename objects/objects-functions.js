let myBook = {
    title:'1984',
    author:'George Orwell',
    pageCount: 326
}

let otherBook = {
    title:'A Peoples History',
    author:'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} by ${book.author} has ${book.pageCount} pages`
    }
}

let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(myBookSummary.summary)

// temperature converter

let getTemperatures = function(fahrenheit){
    return {
        celsius: (fahrenheit-32)*(5/9),
        kelvin: (fahrenheit+459.67)*(5/9),
        fahrenheit: fahrenheit
    }
}

let temp1 = getTemperatures(32)
let temp2 = getTemperatures(83)

console.log(`Fahrenheit: ${temp2.fahrenheit}; celsius: ${temp2.celsius}; Kelvin: ${temp2.kelvin}`)