import NoteCard from "./NoteCard";

export default function EditedNotes(props) {
    return(
        <div className="edited-notes-container">
            {props.editedNotes.map(obj => <NoteCard 
                                    key={obj.id} 
                                    id={obj.id} 
                                    title={obj.title} 
                                    note={obj.note} 
                                    date={obj.date} 
                                    editData={props.editData} 
                                    edited={obj.edited} />
            )}
        </div>
    );
}