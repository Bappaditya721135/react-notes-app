export default function NoteCard(props) {
    const date = new Date();
    const day = date.getDate();
    const m = date.getMonth()+1;
    const month = m>9 ? m : `0${m}`;
    const year = date.getFullYear();
    return (
        <div className="note-card">
            <div className="date">{`${day}/${month}/${year}`}</div>
            <p>Title- {props.title}</p>
            <p>Note- {props.note}</p>
        </div>
    );
}