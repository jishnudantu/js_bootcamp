// Multiple arguements
let add = function(a, b, c){
    return a + b + c
}
let result = add(1, 2, 3)
console.log(result)

// Default arguement
let getScoreText = function(name = 'Anonymous', score = 0){
    return 'Name: ' + name + '; Score: ' + score
}
let scoreTextDefault = getScoreText()
let scoreText1 = getScoreText('Jishnu')
let scoreText2 = getScoreText('Jishnu',500)
console.log(scoreText)
console.log(scoreText1)
console.log(scoreText2)

// challenge area

let getTip = function(total, tipPercent = 20){
    return (tipPercent/100)*total
}
