const input= document.getElementById("input");
const list = document.getElementById('list');
show();
function addTask(){
    if (input.value ===''){
        alert("You must write something")}
    
    else if (list.children.length >=7){
        alert("sorry for the time being you can only add upto 7 tasks")
        input.value=''; 
}
else {
    let li= document.createElement('li');
    li.innerHTML=input.value;
    list.appendChild(li);
    input.value='';
    let span = document.createElement('span');
    span.innerHTML=('\u00d7')
    li.appendChild(span);
    saveData()
}};
document.addEventListener("keydown",(event)=>{ 
    if (event.key === "Enter") {addTask();}
 });
 list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
 },false);

 function saveData(){
    localStorage.setItem("data",list.innerHTML)
 };
 function show(){
    list.innerHTML=localStorage.getItem('data')
 };
 