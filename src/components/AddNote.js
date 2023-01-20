import React from "react";
export default function AddNote(props) {


    // date for each note object 
    const d = new Date();
    const day = d.getDate();
    const m = d.getMonth()+1;
    const month = m>9 ? m : `0${m}`;
    const year = d.getFullYear();

    const date = `${day}/${month}/${year}`;



    // store note in state 
    const [note, setNote] = React.useState({});

    // when user inputs data 
    function handleChange(event) {
        setNote(prevNote => {
            return {
                ...prevNote,
                date: date,
                [event.target.name]: event.target.value,
            }
        })
    }


    // when data will be sent 
    function sendData() {
        props.reciveData(note);
        // i = i + 1;
        // console.log(i);
        // props.rerender();
    }

    

    return (
        <div className="add-note-container">

            <label htmlFor="title">Title</label>
            <input type="text" onChange={handleChange} name="title" id="title" maxLength="90"  placeholder="title.." required />

            <label htmlFor="note">Note</label>
            <textarea onChange={handleChange} name="note" id="note" placeholder="write your note here" required ></textarea>

            <button onClick={sendData} className="add">add</button>
        </div>
    );
}