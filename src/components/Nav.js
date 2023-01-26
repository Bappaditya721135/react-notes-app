import React from "react";
import Notes from "../components/Notes";
import EditedNotes from "../components/EditedNotes";
import DeletedNotes from "../components/DeletedNotes";

export default function Nav() {
    
    const [activeNav, setActiveNav] = React.useState({
        notes: true,
        editedNotes: false,
        deletedNotes: false,
    })

// this function will run when a nav item is clicked
    function navClick(event) {
        setActiveNav({
            notes: false,
            editedNotes: false,
            deletedNotes: false,
           [event.target.id]: true,

        })
    }


    // all the states for notes, edited notes and deleted notes
    const [notes, setNotes] = React.useState([]);
    const [editedNotes, setEditedNotes] = React.useState([]);
    const [deletedNotes, setDeletedNotes] = React.useState([]);


// This function will recive the data object from add note component and save it inside notes array 
    function reciveData(noteObj) {
        handleClick();
        const newObj = {
            ...noteObj,
            edited: false,
            editedDate: "",
            id: notes.length +1,
        }
        setNotes(prevNotes => [...prevNotes,newObj]);
    }

    // edit function to add edited notes in notes state array
    function editData(editObj) {
      
        setEditedNotes(prevEditedNotes => {
            return (prevEditedNotes.map(obj => obj.id === editObj.id ? editObj : obj));
        })
        


    // check the id of the object and replace it in notes array 
    setNotes(prevNotes => {
        const newArr = prevNotes.map(obj => {
            return obj.id === editObj.id ? editObj : obj;
        })
        return newArr;
    })
    }

    // Add note component toggle function 
    const [addNoteBox, setAddNoteBox] = React.useState(false);

    function handleClick() {
        setAddNoteBox(prevAddNoteBox => !prevAddNoteBox);
    }
    return (
        <>
        <nav className="nav-bar">
            <ul className="nav-items">
                <li className={activeNav.notes ? "active" : "not-active"} id="notes" onClick={navClick}>Notes</li>
                <li className={activeNav.editedNotes ? "active" : "not-active"} id="editedNotes" onClick={navClick}>Edited Notes</li>
                <li className={activeNav.deletedNotes ? "active" : "not-active"} id="deletedNotes" onClick={navClick}>Deleted Notes</li>
            </ul>
        </nav>
        <div className="main-content">
            {activeNav.notes && <Notes notes={notes} reciveData={reciveData} editData={editData} addNoteBox={addNoteBox} addNoteClick={handleClick} />}
            {activeNav.editedNotes && <EditedNotes editedNotes={editedNotes} />}
            {activeNav.deletedNotes && <DeletedNotes />}
        </div>
        </>
    );
}