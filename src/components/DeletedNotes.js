import NoteCard from "./NoteCard";

export default function DeletedNotes(props) {
    const deletedObjects = props.data.filter(obj => obj.deleted === true);
    console.log(deletedObjects);

    return(
        <div className="deleted-notes">
            {props.data.length > 0 ?
            deletedObjects.map(obj => <NoteCard key={obj.id} title={obj.title} note={obj.note} date={obj.deleteDate} />)
             : <p className="default-text">You currently dont't have any edited notes</p>}
        </div>
    );
}