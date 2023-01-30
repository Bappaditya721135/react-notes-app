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
    
    // check the id of the object and replace it in notes array 
    setNotes(prevNotes => {
        const newArr = prevNotes.map(obj => {
            return obj.id === editObj.id ? editObj : obj;
        })
        return newArr;
    })



    // set the edited object inside editedNotes state 
    setEditedNotes(prevEditedNotes => {
        let match = false;
        let index = 0;
        if(prevEditedNotes.length > 0) {
            for(let i=0; i<prevEditedNotes.length; i++) {
                if(prevEditedNotes[i].id === editObj.id) {
                    match = true;
                    index = i;
                }
            }
            if(match === true) {
                prevEditedNotes.splice(index, 1, editObj);
                return prevEditedNotes;
            }
            else {
                prevEditedNotes.push(editObj);
                return prevEditedNotes;
            }
        }
        else {
            return [...prevEditedNotes,editObj];
        }
    })
}



    // this function will delete the note 
    // function deleteData(objId) {
    //     // this function will add the deleted obj in deletedNotes arr 
    //     setDeletedNotes(prevDeletedNotes => {
    //         const tempArr = notes.filter(obj => obj.id === objId);
    //         return [...prevDeletedNotes,tempArr];
    //     })



    //     // This function will remove the object from notes arr 
    //     setNotes(prevNotes => {
    //         const tempArr = prevNotes.filter(obj => obj.id != objId)
    //         console.log(tempArr);
    //         return tempArr;
    //     })
    // }

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
            {/* {activeNav.deletedNotes && <DeletedNotes deletedNotes={deletedNotes} />} */}
        </div>
        </>
    );
}