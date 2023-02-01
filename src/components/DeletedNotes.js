import NoteCard from "./NoteCard";

export default function DeletedNotes(props) {
    console.log(props.deletedNotes)
    return(
        <div className="deleted-notes">
            {props.deletedNotes.length > 0 ?  props.deletedNotes.map(obj => <NoteCard 
                                    key={obj.id} 
                                    id={obj.id} 
                                    title={obj.title} 
                                    note={obj.note} 
                                    date={obj.date} 
                                     />
) : <p className="default-text">You currently dont't have any edited notes</p>}
        </div>
    );
}