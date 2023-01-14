export default function BigNote(props) {
    return(
        <div className="big-note-card">
            <div onClick={props.handleCardClick} className="cross-btn">x</div>
            <div className="note-date"><span>note written on -</span>{`${props.day}/${props.month}/${props.year}`}</div>
            <div className="title-section">
                <p className="big-note-heading">Title-</p>
                <p className="big-note-title">{props.title}</p>
            </div>
            <div className="note-section">
                <p className="big-note-heading">Note-</p>
                <textarea className="big-note-disc" defaultValue={props.note}></textarea>
            </div>
        </div>
    );
}