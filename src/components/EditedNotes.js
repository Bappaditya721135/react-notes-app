import NoteCard from "./NoteCard";

export default function EditedNotes(props) {
    const arr = props.data.filter(obj => obj.edited === true);
    const editedArr = arr.filter(obj => obj.deleted === false)
    
    return(
        <div className="edited-notes-container">
            {editedArr.length > 0 ? 
            editedArr.map(obj => <NoteCard 
                            key={obj.id} 
                            id={obj.id} 
                            title={obj.title} 
                            note={obj.note} 
                            date={obj.date}
                            edited={obj.edited}
                            editDate={obj.editDate}
                            showDotBtn={false}
                 />)
            : <p className="default-text">You currently dont't have any edited notes</p>}
        </div>
    );
}