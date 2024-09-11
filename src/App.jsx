import { useState } from 'react';
import React from 'react';

import Header from './Head&foot/Header';
import Creatarea from './components Notes/Createarea';
import Notes from './components Notes/Notes';
import Todolist from './components todo/Todo';
import Lists from './components todo/Lists';


function App(props) {
const[finnote,setfinnote] = useState([]);

function additem(newnote){


setfinnote((prevValue)=>{
  return [...prevValue, newnote];
})

console.log(finnote);
}

function delitem(id){

  setfinnote((prevValue)=>{
    const newfinnote = [...prevValue];
    newfinnote.splice(id,1)
    return newfinnote;
  })

}

const[todo,settodo] = useState([])

function addlist(list){
settodo((prevValue)=>{
  return [...prevValue,list]
})

console.log(todo)
}

function deletelist(id){

  settodo((prevValue)=>{
    const newtodo = [...prevValue];
    newtodo.splice(id,1);
    return newtodo;
  })
}



 return <div className="whole">

 <Header />


<div className="tod">
  <Creatarea addnew={additem} />

  
</div>
<div className="right">   
<ul>
<Todolist todolist={addlist}/>
{todo.map((list,index)=>{

  if(list && list.trim() !== ''){
  return <Lists  key={index} id={index} value={list} passid={deletelist} />
  }else{
    return null;
  }
})}
</ul>
</div>

<div className='Notearea'>
{finnote && finnote.length > 0 && finnote.map((eachnote, index) => {
  if (eachnote !== null && eachnote.title && eachnote.content) {
    return (
      <Notes 
        key={index} 
        id={index} 
        newtitle={eachnote.title} 
        newcontent={eachnote.content}
        newdate = {eachnote.date}
        deleteitem={delitem} 
      />
    );
  }
  return null;
})}

</div>

</div>
}

export default App
