import React from "react";
import AddNote from "./AddNote";
import BackgroundBlur from "./BackgroundBlur";
import NoteCard from "./NoteCard";

export default function Notes(props) {
    const showNote = props.notes.length > 0;
    

    return (
        <div className="notes-container">
            <section className="notes">
                {showNote ? props.notes.map(item => <NoteCard 
                                     key={item.id} 
                                     id={item.id} 
                                     title={item.title} 
                                     note={item.note} 
                                     date={item.date} 
                                     editData={props.editData} 
                                     edited={item.edited}
                                     editedDate={item.editedDate}
                                     deleteData={props.deleteData}
                                     />) : <p className="default-text">You don't have notes yet</p>}
                
            </section>

            {props.addNoteBox && <section className="add-note-box">
                <BackgroundBlur handleClick={props.addNoteClick} />
                <AddNote reciveData={props.reciveData} />
            </section>}
            <section className="add-btn-section">
                <button onClick={props.addNoteClick} className="add-btn">Add Note<i className="fa-solid fa-pen-to-square"></i></button>
            </section>
        </div>
    );
}