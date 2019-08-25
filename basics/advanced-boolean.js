let isAccountLocked = false
let userRole = 'user1'

if (isAccountLocked){
    console.log('Account is locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin!')
} else {
    console.log('Welcome', userRole)
}
