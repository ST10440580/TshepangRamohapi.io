const fname = document.getElementById('fname')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit' , (e) => {
    let messages = []
    if(fname.value === '' || fname.value == null){
        messages.push('Name is required')

    }

   if(password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')


   }
   if(password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
   }

   if(password.value === 'password' ){
    messages.push('Password cannot be password(HINT:Use a strong password e.g Fwuvfefwvsy12)')
   }
    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
          

            
})
