export default function NoteCard(props) {
    const date = new Date();
    const day = date.getDate();
    const m = date.getMonth()+1;
    const month = m>9 ? m : `0${m}`;
    const year = date.getFullYear();
    return (
        <div className="note-card">
            <div className="date">{`${day}/${month}/${year}`}</div>
            <p className="note-title ">Title- <span className="note-span">{props.title}</span></p>
            <p className="note-disc ">Note- <span className="note-span">{props.note}</span></p>
        </div>
    );
}