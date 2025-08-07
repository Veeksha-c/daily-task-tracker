function add(){
let inputtype=document.getElementById("textbox");
let input=inputtype.value.trim();

if(input=="") return;

//list
let li=document.createElement("li");


//tastleft
let left=document.createElement("div");
left.className="task-left";


//checkbox
let checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.className="checkbox";
 checkbox.onchange = function () {
        li.classList.toggle("completed", checkbox.checked);
    };
left.appendChild(checkbox);

//input
let inputtext=document.createElement("span");
inputtext.className="inputtext";
inputtext.innerText=input;
left.appendChild(inputtext);


//right
let right=document.createElement("div");
right.className="task-right";

//delete
let del=document.createElement("span");
del.className = "material-symbols-outlined delete-icon";
del.innerText = "delete";
del.onclick=function(){
    li.remove();
};

//edit
let edit=document.createElement("span");
edit.className="material-symbols-outlined edit-icon";
edit.innerText="edit";
edit.onclick=function(){
      let edittext=document.createElement("input");
      edittext.type="text";
      edittext.value=inputtext.innerText;
      left.replaceChild(edittext,inputtext);
      edit.innerText="check";
      edit.onclick=function()
      {
        inputtext.innerText=edittext.value;
        left.replaceChild(inputtext,edittext);
        edit.innerText="edit";
        edit.onclick= enableEdit;
      };
}
right.appendChild(edit);
right.appendChild(del);

li.appendChild(left);
li.appendChild(right);

document.getElementById("list").appendChild(li);
inputtype.value=""
}
document.getElementById("searchbox").addEventListener("input",function()
{
    let searchvalue=this.value.toLowerCase();
    let listitems=document.querySelectorAll("#list li");
listitems.forEach(function(task){
 let taskText = task.querySelector(".inputtext").innerText.toLowerCase();
 if(taskText.includes(searchvalue))
 {
    task.style.display="flex";
 }else
 {
    task.style.display="none";
 }
});
});
document.getElementById("filerbox").addEventListener('change', function () {
    let filtervalue = this.value;
    let listitems = document.querySelectorAll("#list li");

    listitems.forEach(function (task) {
        let checkbox = task.querySelector(".checkbox"); // ✅ Correct class and variable

        if (filtervalue === "all") {
            task.style.display = "flex";
        } else if (filtervalue === "completed") {
            if (checkbox.checked) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        } else if (filtervalue === "pending") {
            if (!checkbox.checked) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        }
    });
});
