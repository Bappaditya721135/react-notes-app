import React from "react";
import Notes from "./Notes";
import EditedNotes from "./EditedNotes"
import DeletedNotes from "./DeletedNotes"

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
    const index = object.id -data.length;
    setData(prevData => {
        prevData.splice(index,1,object)
        return [...prevData];
    })
}

// This function will run when delete permanently button is clicked 
function permanentDelete(id) {
    setData(prevData => {
        const arr = prevData.filter(obj => obj.id !== id);
        const newData = arr.map(obj => {
            if(obj.id > id) {
                obj.id = obj.id -1;
                return obj;
            }
            else {
                return obj;
            }
        })
        return [...newData];
    })
    
}




// this function will delete the object(not permanently)
function deleteObject(object) {
    

    setData(prevData => {
        const arr = prevData.map(obj => obj.id === object.id ? object : obj);
        return [...arr];
    })

}


// this function will recover the deleted object 
function recoverObject(id) {
    setData(prevData => {
        const newData = prevData.map(note => {
            if(note.id === id) {
                return {...note,deleted: false};
            }
            else {
                return note;
            }
        })
        return newData;
    })
}







// this id will be the id of each object 
let objId = data.length;



// this function will recive the note object from Add note component 
function reciveData(object) {
    objId +=1;
    const newObj = {...object, id: objId};
    setData(prevData => [newObj,...prevData])

    
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
            {activeNav.notes && <Notes data={data}  reciveData={reciveData} editObject={editObject} deleteObject={deleteObject} />}
            {activeNav.editedNotes && <EditedNotes data={data}  />}
            {activeNav.deletedNotes && <DeletedNotes data={data} permanentDelete={permanentDelete} recoverObject={recoverObject} /> }
        </div>
        </>
    );
}