import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
const db= getDatabase();

var namebox= document.getElementById("sec-1");
var emailbox= document.getElementById("sec-2");
var messagebox= document.getElementById("sec-3");
let nam=0;
let ema=0;
let mesg=0;
document.querySelector("button").addEventListener("click",sendData);
function sendData(event){
    event.preventDefault();
    data();
    if(nam==="" || ema==="" || mesg===""){
        alert("Fill all fields");
    }
    else{
        set(ref(db, "data/" + nam),{
            Name: nam,
            email:ema,
            message:mesg,
        }).then(() => {
            alert("Data Stored Successfully");
          })
          .catch((error) => {
            alert("Unsccussful", error);
          });
        
    }
    clearform();
}

function data(){
    nam=namebox.value;
    ema=emailbox.value;
    mesg=messagebox.value;
}
function clearform(){
    namebox.value="";
    emailbox.value="";
    messagebox.value="";
}
