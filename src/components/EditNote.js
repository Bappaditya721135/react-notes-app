import React from "react";

export default function EditNote(props) {
    const d = new Date();
    const day = d.getDate();
    const m = d.getMonth()+1;
    const month = m>9 ? m : `0${m}`;
    const year = d.getFullYear();

    const date = `${day}/${month}/${year}`;


    // This state will change when user changes the note or title 
    const [editNote, setEditNote] = React.useState({
        id:props.id,
        title: props.title,
        note:props.note,
    });



    function handleChange(event) {
        setEditNote(prevEditNote => {
            return {
                ...prevEditNote,
                date: date,
                edited: true,
                [event.target.name]: event.target.value,
            }
        })
    }

    function handleSave() {
        props.editData(editNote);
        props.handleCardClick();
    }
    

   
    return(
        <div className="edit-note-form">
            {/* date */}
            <div className="edit-date">{`edited on ${date}`}</div>

            {/* edit title  */}
            <div className="edit-title-section">
                <label htmlFor="edit-title">edit title</label>
                <input onChange={handleChange} id="edit-title" className="edit-title" type="text" name="title" value={editNote.title} />
            </div>

            {/* edit note */}

            <div className="edit-note-section">
                <label htmlFor="edit-note">edit note</label>
                <textarea onChange={handleChange} id="edit-note" className="edit-note" name="note" value={editNote.note}></textarea>
            </div>

            {/* edit save button section  */}
            <div className="save-button-section">
                <button onClick={handleSave} className="save-btn">save</button>
            </div>
        </div>
    );
}