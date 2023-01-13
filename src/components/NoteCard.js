export default function NoteCard(props) {
    return (
        <div className="note-card">
            <p>{props.title}</p>
            <p>{props.note}</p>
        </div>
    );
}