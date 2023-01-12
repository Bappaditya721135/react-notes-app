import React from "react";
export default function AddNote(props) {

    // store note in state 
    const [note, setNote] = React.useState({});

    // when user inputs data 
    function handleChange(event) {
        setNote(prevNote => {
            return {
                ...prevNote,
                [event.target.name]: event.target.value,
            }
        })
    }


    // when data will be sent 
    function sendData() {
        props.reciveData(note);
    }

    
    // this code is to the date in notes 
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const showMonth = month>9 ? month : `0${month}`;
    const year = date.getFullYear();

    return (
        <div className="add-note-container">
            <div className="date">{`${day}/${showMonth}/${year}`}</div>

            <label htmlFor="title">Title</label>
            <input type="text" onChange={handleChange} name="title" id="title" placeholder="title.." />

            <label htmlFor="note">Note</label>
            <textarea onChange={handleChange} name="note" id="note" placeholder="write your note here"></textarea>

            <button onClick={sendData} className="add">add</button>
        </div>
    );
}