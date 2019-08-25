// Global (name)
  // Local (name)
    // Local 
  // Local


//Variable shadowing
let name = 'Jishnu'

if (true) {
    let name = 'Dantu'
    if (true) {
        let name = 'Maharshi'
        console.log(name)
    }
}
if (true) {
    console.log(name)
}
//If a variable is not declared but is assigned a value later on in a local scope it becomes a leaked variable