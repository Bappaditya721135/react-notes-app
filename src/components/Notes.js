
import React from "react";
import AddNote from "./AddNote"
import NoteCard from "./NoteCard"
import BackgroundBlur from "./BackgroundBlur"


 export default function Notes(props) {

    const notes = props.data.filter(obj => obj.deleted !== true);

    const [addNotebox, setAddNoteBox] = React.useState(false);

    // this function will toggle the add note box 
    function handleAddNoteClick() {
        setAddNoteBox(prevAddNoteBox => !prevAddNoteBox);
    }
    return (
        <div className="notes-container">
            {/* this is the section where all the notes will show  */}
            <section className="notes">
                {notes.length > 0 ? notes.map(obj => <NoteCard 
                                                                key={obj.id} 
                                                                id={obj.id} 
                                                                title={obj.title} 
                                                                note={obj.note} 
                                                                date={obj.date}
                                                                edited={obj.edited}
                                                                editDate={obj.editDate}
                                                                deleted={obj.deleted}
                                                                deleteDate={obj.deleteDate}
                                                                editObject={props.editObject}
                                                                deleteObject={props.deleteObject}
                                                                showDotBtn={true}
                                                                 />):
                <p className="default-text">You don't have any notes</p>}
            </section>

            {/* this is the add note form  */}
            {addNotebox && <section className="add-note-box">
                <BackgroundBlur handleClick={handleAddNoteClick} />
                <AddNote reciveData={props.reciveData} handleAddNoteClick={handleAddNoteClick} />
            </section>}

            {/* this is the button for add note  */}
            <section className="add-btn-section">
                <button onClick={handleAddNoteClick} className="add-btn">Add Note<i className="fa-solid fa-pen-to-square"></i></button>
            </section>
        </div>

    )
 }