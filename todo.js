import{db, ref, set} from "./firebase.js"


let addItem = document.getElementById('addItem');
let enterTask = document.getElementById('enterTask');
let mainDiv = document.getElementById('mainDiv');
let deleteAll = document.getElementById('deleteAll');
let welcomeName = document.getElementById('welcomeName');

addItem.addEventListener('click',()=>{

    console.log(localStorage);
let myObj = localStorage.getItem('userData');
let userObj = JSON.parse(myObj);
console.log(userObj);
console.log(userObj.uid);

let refer = ref(db,`todo/${userObj.uid}`);
set(refer,enterTask.value);

// localStorage.getItem('stringifyObject');

// let div = document.createElement('div');
// let content = document.createElement('p');
// let contentText = document.createTextNode(enterTask.value);
// content.appendChild(contentText);
// div.appendChild(content);
// div.className = "d-flex justify-content-start align-item-center container mb-3 gap-2 rounded bg-opacity-50 bg-light"
// content.className = "bg-light text-start my-2"
// mainDiv.appendChild(div);

// let editBtn = document.createElement('button');
// let editHeading = document.createTextNode('Edit Task');
// editBtn.appendChild(editHeading);
// div.appendChild(editBtn);
// editBtn.className = "btn btn-primary"
// editBtn.setAttribute('onclick','edit(this)');

// let delTaskBtn  = document.createElement('button');
// let delTaskHeading = document.createTextNode('Delete Task');
// delTaskBtn.appendChild(delTaskHeading);
// div.appendChild(delTaskBtn);
// delTaskBtn.className="btn btn-danger ms-2"
// delTaskBtn.setAttribute('onclick','delTask(this)');
// enterTask.value = "";

})


deleteAll.addEventListener('click',()=>{
    mainDiv.innerHTML = '';
    enterTask.value ="";
})


window.edit= function(a){
    let userPrompt = prompt();
   let abc = a.parentNode.firstChild;
   abc.innerHTML = userPrompt;
}

window.delTask= function(a){
    a.parentNode.remove();
}

let home = document.getElementById('home');
home.addEventListener('click',()=>{
    alert("go")

    window.location = "index.html";
})