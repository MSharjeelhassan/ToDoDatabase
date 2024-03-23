import{
    auth, createUserWithEmailAndPassword
} from './firebase.js'

// +++++++ Sign-UP process strat + ++++++

let userEmail = document.getElementById('email');
let userPassword = document.getElementById('password');
let register = document.getElementById('registerBtn')

register.addEventListener('click',()=>{

    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
      .then((userCredential) => {
       console.log(userCredential)
    
        console.log(userCredential.user.uid)
        alert("user created Sucess")
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
})
