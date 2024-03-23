import{signInWithEmailAndPassword, auth
} from "./allFirebase.js"


let userEmail = document.getElementById('email')

let userPassword = document.getElementById('password');

let loginBtn = document.getElementById('loginBtn');


let login =()=>{

    
    signInWithEmailAndPassword(auth,userEmail.value,userPassword.value)
    .then((user)=>{
        let person ={};
        let userinfo = user.user
        console.log('welcome back', userinfo.uid);
        person.uid = userinfo.uid;
        person.email = userinfo.email;
        console.log(person);
        // localStorage.setItem("variableName", person.stringify)
        // console.log(localStorage);
        let stringifyObject = JSON.stringify(person);
        console.log(stringifyObject);
        localStorage.setItem('userData',stringifyObject);
        console.log(localStorage);
        window.location ="todo.html";
        console.log('ok')

    })
    .catch((e)=>{
        console.log(e.message)
    })
}

loginBtn.addEventListener('click',login);
