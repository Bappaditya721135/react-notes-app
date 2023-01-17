export default function BigNote(props) {
    return(
        <div className="big-note-card">
            <div className="note-date">Date-{`${props.day}/${props.month}/${props.year}`}</div>
            <div className="title-section">
                <p className="big-note-title">{props.title}</p>
            </div>
            <div className="note-section">
                <div className="big-note-disc">{props.note}</div>
            </div>
        </div>
    );
}