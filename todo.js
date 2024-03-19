import{db, ref, set, onValue, push} from "./firebase.js"


let addItem = document.getElementById('addItem');
let enterTask = document.getElementById('enterTask');
let mainDiv = document.getElementById('mainDiv');
let deleteAll = document.getElementById('deleteAll');
let welcomeName = document.getElementById('welcomeName');
// console.log(enterTask.value); yahan pa koi value show nai kar raha the why ??? jbke input main likha howa tha main na, function ka andar rakha tou chala yeh.
let myObj = localStorage.getItem('userData');
let userObj = JSON.parse(myObj);
console.log(userObj);
console.log(userObj.uid);
console.log(localStorage);
welcomeName.innerText = userObj.email.slice(0,userObj.email.indexOf('@'));


// +++++++++++++++++ Add task btn  +    ++++++++++++++++++++++++++++++++++++++++

addItem.addEventListener('click',()=>{
    // mainDiv.innerText = "" yeh yousuf bhai ka method hy
    userObj.task = enterTask.value;

let id = push(ref(db,`todo/${userObj.uid}`)).key;

let refer = ref(db,`todo/${userObj.uid}/${id}`);
set(refer,userObj);
// return id;
console.log(userObj.task);

// let refer = ref(db,`todo/${userObj.uid}/`);    yeh yousuf na bola tha
// push(refer,userObj);
// // return id;
// console.log(enterTask.value);

// let reference = ref(db,)
// onValue(refer, (snapshot) => {
//   const data = snapshot.val();
// console.log(data);
 

//   let div = document.createElement('div');
//   let content = document.createElement('p');
//   let contentText = document.createTextNode(userObj.task);
//   content.appendChild(contentText);
//   div.appendChild(content);
//   div.className = "d-flex justify-content-start align-item-center container mb-3 gap-2 rounded bg-opacity-50 bg-light"
//   content.className = "bg-light text-start my-2"
//   mainDiv.appendChild(div);
  
//   let editBtn = document.createElement('button');
//   let editHeading = document.createTextNode('Edit Task');
//   editBtn.appendChild(editHeading);
//   div.appendChild(editBtn);
//   editBtn.className = "btn btn-primary"
//   editBtn.setAttribute('onclick','edit(this)');
  
//   let delTaskBtn  = document.createElement('button');
//   let delTaskHeading = document.createTextNode('Delete Task');
//   delTaskBtn.appendChild(delTaskHeading);
//   div.appendChild(delTaskBtn);
//   delTaskBtn.className="btn btn-danger ms-2"
//   delTaskBtn.setAttribute('onclick','delTask(this)');
//   enterTask.value = "";
// });

})
// +++++++++++++++ yeh bhi experiment tha igonre it+++++++++++++++Start horaha hy +++++++++++++++++++++++++++

function getData(){    
let reference = ref(db,`todo/${userObj.uid}`)
onValue(reference, (snapshot) => {
    let snapshotData = snapshot.val();
  console.log(snapshotData);
   for(let i=0; i<Object.values(snapshotData).length;i++){
    console.log(Object.values(snapshotData)[i].value)

    let div = document.createElement('div');
    let content = document.createElement('p');
    let contentText = document.createTextNode(Object.values(snapshotData)[i].value);
    content.appendChild(contentText);
    div.appendChild(content);
    div.className = "d-flex justify-content-start align-item-center container mb-3 gap-2 rounded bg-opacity-50 bg-light"
    content.className = "bg-light text-start my-2"
    mainDiv.appendChild(div);
    
    let editBtn = document.createElement('button');
    let editHeading = document.createTextNode('Edit Task');
    editBtn.appendChild(editHeading);
    div.appendChild(editBtn);
    editBtn.className = "btn btn-primary"
    editBtn.setAttribute('onclick','edit(this)');
    
    let delTaskBtn  = document.createElement('button');
    let delTaskHeading = document.createTextNode('Delete Task');
    delTaskBtn.appendChild(delTaskHeading);
    div.appendChild(delTaskBtn);
    delTaskBtn.className="btn btn-danger ms-2"
    delTaskBtn.setAttribute('onclick','delTask(this)');
    enterTask.value = "";
    // div.innerHTML = "";
   }
  });
   }
  


getData()


// +++++++++++++++ upar wala experiment tha igonre it+++++++++++++++end hogaya hy +++++++++++++++++++++++++++

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
    // alert("go")

    window.location = "index.html";
})