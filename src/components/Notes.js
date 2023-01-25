import React from "react";
import AddNote from "./AddNote";
import BackgroundBlur from "./BackgroundBlur";
import NoteCard from "./NoteCard";

export default function Notes(props) {
    console.log(props)

    // const [addNoteBox, setAddNoteBox] = React.useState(false);

    // function handleClick() {
    //     setAddNoteBox(prevAddNoteBox => !prevAddNoteBox);
    // }

    // const [notes, setNotes] = React.useState([]);
    // // this function will recieve the note entered by user in addNote component 
    // function reciveData(noteObj) {
    //     handleClick();
    //     const newObj = {
    //         ...noteObj,
    //         edited: false,
    //         id: notes.length +1,
    //     }
    //     setNotes(prevNotes => [...prevNotes,newObj]);
    // }

    // // edit function
    // function editData(editObj) {
    // //    console.log(editObj);
    // setNotes(prevNotes => {
    //     const newArr = prevNotes.map(obj => {
    //         return obj.id === editObj.id ? editObj : obj;
    //     })
    //     return newArr;
    // })
    // }

    return (
        <div className="notes-container">
            <section className="notes">
                {props.notes.map(item => <NoteCard 
                                    key={item.id} 
                                    id={item.id} 
                                    title={item.title} 
                                    note={item.note} 
                                    date={item.date} 
                                    editData={props.editData} 
                                    edited={item.edited} />)}
                
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