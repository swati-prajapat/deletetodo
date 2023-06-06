let form = document.querySelector('form');
let input = document.querySelector('input');
let listGroup = document.querySelector("ul");

const saveTodo = (e) =>{
    e.preventDefault ();
    let newli = document.createElement("li");
    newli.innerText = input.value;
    newli.className = "list-group-item rounded-0"
    let delBtn = document.createElement('button');
    delBtn.innerText ="Delete"
    delBtn.className ="btn btn-danger  rounded-0 btn-sm float-end w-20 delete"
    newli.appendChild(delBtn);
    listGroup.appendChild(newli);
    form.reset()

};

form.addEventListener("submit" , saveTodo)


const deleteTodo=(e)=>{
if(e.target.className.includes(" delete")){
    let li=e.target.parentElement
   if( window.confirm("are you sour ?")){
    listGroup.removeChild(li)
   }
  
}
    
}


listGroup.addEventListener('click' , deleteTodo);
