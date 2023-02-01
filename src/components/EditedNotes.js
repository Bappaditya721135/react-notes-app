import NoteCard from "./NoteCard";

export default function EditedNotes(props) {
    const arr = props.data.filter(obj => obj.edited === true);
    return(
        <div className="edited-notes-container">
            {arr.length > 0 ? 
            arr.map(obj => <NoteCard 
                            key={obj.id} 
                            id={obj.id} 
                            title={obj.title} 
                            note={obj.note} 
                            date={obj.date}
                            edited={obj.edited}
                            editDate={obj.editDate}
                 />)
            : <p className="default-text">You currently dont't have any edited notes</p>}
        </div>
    );
}