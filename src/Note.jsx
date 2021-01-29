import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Note =(props)=>
{
    const deleteNote=()=>{
        props.deleteItem(props.id);

    }
    return(
        <>

        <div className="note">
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
        <FontAwesomeIcon icon={faTrashAlt}/>
        </button>
        
        </div>

        </>

    )
}

export default Note;
