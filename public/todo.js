import{db, ref, set, onValue, push, remove} from "./allFirebase.js"


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


// +++++++++++++++++ Add task btn  +   Sending DATA TO DATABASE ++++++++++++++++++++++++++++++++++++++++

addItem.addEventListener('click',()=>{
if(enterTask.value!==""){
    
    userObj.task = enterTask.value;

    userObj.taskId = push(ref(db,`todo/${userObj.uid}`)).key;

let refer = ref(db,`todo/${userObj.uid}/${userObj.taskId}`);
set(refer,userObj);
// return id;
console.log(userObj.task);

}


else{alert('Please enter the task')};
})
// +++++++++++++++ Getting DATA from DATABASE +++++++++++++++Start horaha hy +++++++++++++++++++++++++++

 
let reference = ref(db,`todo/${userObj.uid}`);
onValue(reference, (snapshot) => {
    let snapshotData = snapshot.val();
    if(!snapshotData){return};
  console.log(snapshotData);
  mainDiv.innerHTML = "";
   for(let i=0; i<Object.values(snapshotData).length;i++){
    console.log(Object.values(snapshotData)[i])

    let div = document.createElement('div');
    let content = document.createElement('p');
    let contentText = document.createTextNode(Object.values(snapshotData)[i].task);
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
    editBtn.setAttribute('id',`${Object.values(snapshotData)[i].taskId}`);
    // editBtn.setAttribute('id',`${Object.values(snapshotData)[i].task}`);
    
    let delTaskBtn  = document.createElement('button');
    let delTaskHeading = document.createTextNode('Delete Task');
    delTaskBtn.appendChild(delTaskHeading);
    div.appendChild(delTaskBtn);
    delTaskBtn.className="btn btn-danger ms-2"
    delTaskBtn.setAttribute('onclick','delTask(this)');
    delTaskBtn.setAttribute('id',`${Object.values(snapshotData)[i].taskId}`);
        enterTask.value = "";
 
   }
  });

// +++++++++++++++ Getting DATA from DATABASE  +++++++++++++++end hogaya hy +++++++++++++++++++++++++++

deleteAll.addEventListener('click',()=>{
    mainDiv.innerHTML = '';
    enterTask.value ="";
    remove(reference);

})


window.edit= function(a){
    let userPrompt = prompt("Enter the task", a.parentNode.firstChild.innerHTML);
    let abc = a.parentNode.firstChild;
    console.log(a.parentNode.firstChild.innerHTML);
    console.log(a);
       if(userPrompt!==""){
           abc.innerHTML = userPrompt;
       }
let EditReference = ref(db,`todo/${userObj.uid}/${a.id}`);
userObj.task = userPrompt;
userObj.id=a.id;


set(EditReference,userObj);

}

window.delTask= function(a){
    console.log(a);
    console.log(a.id)
    var delReference = ref(db,`todo/${userObj.uid}/${a.id}`);
    // a.parentNode.remove();
    remove(delReference);
   

}

let home = document.getElementById('home');
home.addEventListener('click',()=>{

    window.location = "index.html";
})