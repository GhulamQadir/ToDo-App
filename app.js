var olist = document.getElementById('list')
function addToDo(){
    var addToDo = document.getElementById('input');
    var list = document.createElement('li');
    var liText = document.createTextNode(addToDo.value);
    list.appendChild(liText);
    
    //create delete btn
    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    delBtn.setAttribute('class','btn');
    delBtn.setAttribute('onclick','deleteItem(this)');
    
    //create edit btn
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    list.appendChild(delBtn);
    list.appendChild(editBtn);
    editBtn.setAttribute('class','btn');
    editBtn.setAttribute('onclick','editItem(this)')
    olist.appendChild(list);
    addToDo.value = "";
   
}
function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt('Enter edit value',val);
    e.parentNode.firstChild.nodeValue = editVal
}

function delAll(){
    olist.innerHTML = "";
}