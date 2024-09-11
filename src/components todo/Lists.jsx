import React,{useState} from "react";


export default function Lists(props){



return  <li >{props.value}   <span> <button onClick={()=>{
        props.passid(props.id)
    }} className="x">x</button> </span>  </li>
    



}