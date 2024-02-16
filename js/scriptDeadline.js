const deadlineTask = document.querySelector('#deadline-task');
const deadlineDate = document.querySelector('#deadline-date-input');
const listContainerDeadline  = document.querySelector('#deadlineList-container');

function addDeadline(){
    if(deadlineDate.value === '' || deadlineTask.value ===''){
        alert("You shouldn't left areas empty!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = deadlineTask.value + ' -> ' + deadlineDate.value;
        listContainerDeadline.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        deadlineDate.value ='';
        deadlineTask.value ='';
        saveDeadlineData();
    }
}

listContainerDeadline.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveDeadlineData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveDeadlineData();
    }
},false);

deadlineDate.addEventListener( 'keydown',function(event){
        if(event.key === 'Enter') addDeadline();
},false);

function saveDeadlineData(){
    localStorage.setItem("deadlineData", listContainerDeadline.innerHTML);
}

function showDeadlineData(){listContainerDeadline.innerHTML =localStorage.getItem("deadlineData")||""}

showDeadlineData();
