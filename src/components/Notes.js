import React from "react";
import AddNote from "./AddNote";

export default function Notes() {

    const [addNoteBox, setAddNoteBox] = React.useState(false);
    const [notes, setNotes] = React.useState([]);

    // this function will recieve the note entered by user in addNote component 
    function reciveData(noteObj) {
        console.log(notes)
        setNotes(prevNotes => {
            prevNotes.push(noteObj);

            return prevNotes;
        }) 
        console.log(notes);
    }

    function handleClick() {
        setAddNoteBox(prevAddNoteBox => !prevAddNoteBox);
    }

    return (
        <div className="notes-container">
            <section className="notes">
                {notes.map(obj => {
                    return (<div>
                        <p>{obj.title}</p>
                        <p>{obj.note}</p>
                        </div>);
                })}
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