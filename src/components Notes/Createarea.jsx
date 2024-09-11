import React,{useState} from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function Creatarea(props){
const[newnote,setnewnote] = useState({
    title:"",
    content:"",
    date : "",
});

const[expansion,setexpansion] = useState(false);

function expand(){

setexpansion(true);
}

function handlechange(event){

    const{name,value} = event.target;
    
    setnewnote((prevValue)=>{
        if(name==="title"){
            return {
                title : value,
                content : prevValue.content,
                date : new Date().toLocaleString(),
            }
        }else if(name==="content"){
            return {
                title : prevValue.title,
                content : value,
                date : new Date().toLocaleString(),
            }
        }
    })
    
   
}
function passinfo(event){

    event.preventDefault();
   

    props.addnew(newnote);   

setnewnote({
    title: "",
    content: "",
   
})
}


return <div className="first"> 

   <form className="createform">

    { expansion? <input  onChange={handlechange} name="title" placeholder="Title" value={newnote.title} /> : null}
 
    <textarea onClick={expand} onChange={handlechange} name="content" placeholder="Take a note." value={newnote.content} />
 
    <Zoom in={expansion}>
    <Fab onClick={passinfo} className="ten"> <NoteAddIcon/> </Fab>
    
    </Zoom>
   
    
 </form>

 </div>

};