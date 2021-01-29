import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'


const CreateNote =(props)=>
{
    const [expand,setExpand]=useState();

    const [note,setNote]=useState(
        {
            title:"",
            content:"",
        }
    );
    
    const InputEvent=(event)=>
    {
        // const value = event.target.value;
        // const name = event.target.name;
        // lets do these things using object destructuring

        const {name,value}=event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]: value,
            } ;
        });
    }; 

    const addEvent=(e)=>
    {
        props.passNote(note); 
        e.preventDefault(); 
        
    }

    const expanded =()=>
    {
       setExpand(true); 
    }
    const unexpand=()=>{
        setExpand(false);
    }

    return (
        <>

<div className="main_note" onDoubleClick={unexpand}>
<form >
{expand? 
    <input type="text" placeholder="Title" autoComplete="off" onChange={InputEvent} value={note.title} name="title"  />
    :null}
    

    <textarea rows="" column="" placeholder="Write your note..." onChange={InputEvent} value={note.content} name="content" onClick={expanded} ></textarea> 

{expand? (
        <button onClick={addEvent}>
          <FontAwesomeIcon icon={faAddressCard}/>
        </button>
        ) :null}
</form> 
</div>
        </>
    )
}

export default CreateNote;
