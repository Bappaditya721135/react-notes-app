import React from "react";
import Notes from "./Notes";
import EditedNotes from "./EditedNotes"

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

// this is the state where all the object note will be stored 
const [data, setData] = React.useState([]);


// this function will edite the objects in data array 
function editObject(object) {
    const index = object.id -1;
    setData(prevData => {
        prevData.splice(index,1,object)
        return [...prevData];
    })
}

// this id will be the id of each object 
let objId = data.length;



// this function will recive the note object from Add note component 
function reciveData(object) {
    objId +=1;
    const newObj = {...object, id: objId};
    console.log(newObj);
    setData(prevData => [...prevData,newObj])

    
}

console.log(data);


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
            {activeNav.notes && <Notes data={data} reciveData={reciveData} editObject={editObject} />}
            {activeNav.editedNotes && <EditedNotes />}
        </div>
        </>
    );
}