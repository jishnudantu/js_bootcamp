
// Javascript uses Lexical scoping (Static Scope)
// 2 types of scopes ->
//Global scope : Defined outside all code blocks
//Local scope : Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor

//Global scope (var1)
  //Local scope(var2)
    //Local scope(var4)
  //Local scope(var3)


let var1 = 'varOne' // this is a global scope

if(true){
    console.log(var1)
    let var2 = 'varTwo'// this is a local scope
    console.log(var2)

    if (true){
        let var4 = 'varFour'
    }
}
if(true){
    let var3 = 'varThree'
}

console.log(var2)// out of scope
