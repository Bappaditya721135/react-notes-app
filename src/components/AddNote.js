import React from "react";
export default function AddNote(props) {


    // date for each note object 
    const dateTime = new Date();
    const d = dateTime.getDate();
    const day = d>9 ? d : `0${d}`;
    const m = dateTime.getMonth()+1;
    const month = m>9 ? m : `0${m}`;
    const year = dateTime.getFullYear();

    const date = `${day}/${month}/${year}`;



    // store note in state 
    const [note, setNote] = React.useState({
        date: "",
        title: "",
        note: "",
        edited: false,
        editDate: "",
        deleted: false,
        deleteDate: "",
    });

    // console.log(note.length)

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
    // the -4 in for loop is to avoide editedate and deleteDate empty string value 
    function sendData() {
        let data = true;
        const valArr = Object.values(note);
        for(let i=0; i<valArr.length-4; i++) {
            if(valArr[i] === "") {
                data = false;
            }
        }
        if(data == true) {
            props.reciveData(note);
            props.handleAddNoteClick();
        }
        else {
            alert("fill out your note");
        }
    }

    

    return (
        <div className="add-note-container">

            <label htmlFor="title">Title</label>
            <input type="text" onChange={handleChange} name="title" id="title" maxLength="90"  placeholder="title.." autoFocus />

            <label htmlFor="note">Note</label>
            <textarea onChange={handleChange} name="note" id="note" placeholder="write your note here" ></textarea>

            <button onClick={sendData} className="add">add</button>
        </div>
    );
}