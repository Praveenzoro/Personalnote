import React from "react";
import Fab from '@mui/material/Fab';
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

export default function Notes(props){

    function handleinfo(){
        props.deleteitem(props.id);
    }

    return  <div className="Notes">
      <h2>{props.newtitle}</h2>
      <p>{props.newcontent}</p>
      
      <div className="datejod"> 
      <button onClick={handleinfo} className="tent"><DeleteSweepIcon style={{color :"white"}}/> </button> 
      <h5>{props.newdate}</h5>
      </div>

  
    </div>
}