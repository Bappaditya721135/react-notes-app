import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import BigNote from "./BigNote";

export default function NoteCard(props) {
    // This state will store the bigNote 
    const [bigNote, setBigNote] = React.useState(false);

    // This function will run when a note card is clicked 
    function handleCardClick() {
        setBigNote(prevBigNote => {
            return !prevBigNote;
        })
        console.log("clicked");

    }

    const date = new Date();
    const day = date.getDate();
    const m = date.getMonth()+1;
    const month = m>9 ? m : `0${m}`;
    const year = date.getFullYear();
    return (
    <>
        {/* <abbr className="abbr" title="click to see the full note"> */}
            <div onClick={handleCardClick} className="note-card">
                <p className="note-title ">{props.title}</p>
                <p className="note-disc ">{props.note}</p>
                <hr />
                <div className="date">{`${day}/${month}/${year}`}</div>
            </div>
        {/* </abbr> */}
        {bigNote && <BigNote 
                    title={props.title} 
                    note={props.note} 
                    handleCardClick={handleCardClick}
                    day={day}
                    month={month}
                    year={year}
                    />}
                    
        {bigNote && <div onClick={handleCardClick} className="background-blur"></div>}
        </>
    );
}