// import React from "react";
// import AddNote from "./AddNote";
// // import BackgroundBlur from "./BackgroundBlur";
// // import NoteCard from "./NoteCard";

// export default function Notes(props) {
//     const showNote = props.notes.length > 0;
    

//     return (
//         <div className="notes-container">
//             <section className="notes">
//                 {showNote ? props.notes.map(item => <NoteCard 
//                                      key={item.id} 
//                                      id={item.id} 
//                                      title={item.title} 
//                                      note={item.note} 
//                                      date={item.date} 
//                                      editData={props.editData} 
//                                      edited={item.edited}
//                                      editedDate={item.editedDate}
//                                      deleteData={props.deleteData}
//                                      />) : <p className="default-text">You don't have notes yet</p>}
                
//             </section>

//             {props.addNoteBox && <section className="add-note-box">
//                 <BackgroundBlur handleClick={props.addNoteClick} />
//                 <AddNote reciveData={props.reciveData} />
//             </section>}
//             <section className="add-btn-section">
//                 <button onClick={props.addNoteClick} className="add-btn">Add Note<i className="fa-solid fa-pen-to-square"></i></button>
//             </section>
//         </div> 
//     );
// }

import React from "react";
import AddNote from "./AddNote"
import NoteCard from "./NoteCard"
import BackgroundBlur from "./BackgroundBlur"


 export default function Notes(props) {

    const [addNotebox, setAddNoteBox] = React.useState(false);

    // this function will toggle the add note box 
    function handleAddNoteClick() {
        setAddNoteBox(prevAddNoteBox => !prevAddNoteBox);
    }
    return (
        <div className="notes-container">
            {/* this is the section where all the notes will show  */}
            <section className="notes">
                {props.data.length > 0 ? props.data.map(obj => <NoteCard 
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