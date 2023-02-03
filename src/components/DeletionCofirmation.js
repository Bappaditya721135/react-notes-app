
export default function DeletionConfirmation(props) {
    console.log(props)
    function handleClick(event) {
        const value = event.target.name === 'delete' ? true : false;
        if(props.deleted === false) {
        props.deleteObj(value);
        }
        else {
            if(value === true) {
                props.permanentDelete(props.id);
                props.setDeleteConfirm(false);
                props.setBigNote(false);
            }
            else {
                props.setDeleteConfirm(false);
            }
        }
    }

    return(
        <>
        <div className="deletion-background"></div>
        <div className="deletion-confirm-box">
            <p>are you sure you want to {props.deleted && <span>permanently</span>} delete this note ?</p>
            <div className="buttons">
                <button onClick={handleClick} className="yes-btn" name="delete">delete</button>
                <button onClick={handleClick} className="no-btn" name="cancel">cancel</button>
            </div>
        </div>
        </>
    );
}