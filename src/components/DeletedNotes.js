import NoteCard from "./NoteCard";

export default function DeletedNotes(props) {
    const deletedObjects = props.data.filter(obj => obj.deleted === true);

    return(
        <div className="deleted-notes">
            {deletedObjects.length > 0 ?
            deletedObjects.map(obj => <NoteCard 
                                        key={obj.id} 
                                        id={obj.id} 
                                        title={obj.title} 
                                        deleted={obj.deleted} 
                                        note={obj.note} 
                                        date={obj.deleteDate} 
                                        permanentDelete={props.permanentDelete}
                                        recoverObject={props.recoverObject}
                                        showDotBtn={false} />)
             : <p className="default-text">You currently dont't have any deleted notes</p>}
        </div>
    );
}