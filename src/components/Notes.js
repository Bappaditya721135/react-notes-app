import React from "react";
import AddNote from "./AddNote";
import NoteCard from "./NoteCard";

export default function Notes() {

    const [addNoteBox, setAddNoteBox] = React.useState(false);
    const [notes, setNotes] = React.useState([]);
    // This state is only for rerendering 
    // const [render, setRender] = React.useState(false);

    // function rerender() {
    //     setRender(prevRender => !prevRender);
    // }
    console.log(notes.length + 1)
    // this function will recieve the note entered by user in addNote component 
    function reciveData(noteObj) {
        const newObj = {
            ...noteObj,
            id: notes.length +1,
        }
        setNotes(prevNotes => [...prevNotes,newObj]);
    }
    console.log(notes);
    function handleClick() {
        setAddNoteBox(prevAddNoteBox => !prevAddNoteBox);
    }

    return (
        <div className="notes-container">
            <section className="notes">
                {notes.map(item => <NoteCard key={item.id} title={item.title} note={item.note}/>)}
                
            </section>

            {addNoteBox && <section className="add-note-box">
                <AddNote reciveData={reciveData} />
            </section>}
            <section className="add-btn-section">
                <button onClick={handleClick} className="add-btn">Add Note</button>
            </section>
        </div>
    );
}