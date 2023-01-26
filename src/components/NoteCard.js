import React from "react";
import BigNote from "./BigNote";
import BackgroundBlur from "./BackgroundBlur";

export default function NoteCard(props) {
    
    // This state will store the bigNote 
    const [bigNote, setBigNote] = React.useState(false);

    // This function will run when a note card is clicked 
    function handleCardClick() {
        setBigNote(prevBigNote => {
            return !prevBigNote;
        })

    }

    return (
    <>
        {/* <abbr className="abbr" title="click to see the full note"> */}
            <div onClick={handleCardClick} className="note-card">
                <p className="note-title ">{props.title}</p>
                <p className="note-disc ">{props.note}</p>
                <hr />
                {props.edited && <p className="edited">(edited)</p>}
                <div className="date">{props.date}</div>
            </div>
        {/* </abbr> */}
        {bigNote && <BigNote 
                    id={props.id}
                    title={props.title} 
                    note={props.note} 
                    handleCardClick={handleCardClick}
                    date={props.date}
                    editedDate={props.editedDate}
                    editData={props.editData}
                    edited={props.edited}
                    />}
                    
        {bigNote && <BackgroundBlur handleClick={handleCardClick} />}
        </>
    );
}