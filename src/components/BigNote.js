import React from "react";
import EditNote from "./EditNote";

export default function BigNote(props) {
    const [dotBtn, setDotBtn] = React.useState(false);


    // state for editComponent 
    const [edit, setEdit] = React.useState(false);
    // when the 3dot button is clicked this function will run 
    function handleClick() {
        setDotBtn(prevDotBtn => !prevDotBtn)
    }

    // when edit button is clicked this function will run 
    function handleEditClick() {
        setEdit(true)
    }

    // when delete button is clicked this function will run 
    function handleDeleteClick() {
        console.log("deleted");
    }

    const style = {
        backgroundColor: dotBtn ? "#e4e2e2" : "none",
    }

    return(
        <>
            <div className="big-note-card">
                <div className="date-dot-btn">
                <div className="note-date">Date-{props.date}</div>
                <i onClick={handleClick} className="fa-solid fa-ellipsis-vertical dot-btn" style={style}>
                {dotBtn && 
                    <ul className="dot-btn-option">
                        <li className="edit" onClick={handleEditClick}>edit<i className="fa-solid fa-pen-to-square"></i></li>
                        <li className="delete" onClick={handleDeleteClick}>delete<i className="fa-solid fa-trash"></i></li>
                    </ul>}
                </i>                
            </div>
            <div className="title-section">
                <p className="big-note-title">{props.title}</p>
            </div>
            <div className="note-section">
                <div className="big-note-disc">{props.note}</div>
            </div>
        </div>
        {edit && <EditNote id={props.id} title={props.title} note={props.note} editData={props.editData} handleCardClick={props.handleCardClick} />}
        </>
    );
}