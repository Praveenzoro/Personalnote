import React, { useState }  from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
export default function Todolist(props){

const[list,setlist]= useState("")

function handleit(event){
const{value}= event.target;

setlist(value)

console.log(list)
}

function passinfo(){
  props.todolist(list);

  setlist("");
}

return <div className = "todo">
  <h3>To-Do List </h3>    
  <div className="jodi">
  <input onChange={handleit} type="text" placeholder="Eg.Grocery list" value={list}/>
  <button onClick={passinfo}><AddCircleRoundedIcon/></button>
  
  </div>
  
</div>







}