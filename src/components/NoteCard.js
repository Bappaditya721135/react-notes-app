export default function NoteCard(props) {
    return (
        <div className="note-card">
            <p>Title- {props.title}</p>
            <p>Note- {props.note}</p>
        </div>
    );
}