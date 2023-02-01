
export default function DeletionConfirmation(props) {
    function handleClick(event) {
        const value = event.target.name === 'delete' ? true : false;
        props.deleteObj(value);
    }

    return(
        <>
        <div className="deletion-background"></div>
        <div className="deletion-confirm-box">
            <p>are you sure you want to delete this note ?</p>
            <div className="buttons">
                <button onClick={handleClick} className="yes-btn" name="delete">delete</button>
                <button onClick={handleClick} className="no-btn" name="cancel">cancel</button>
            </div>
        </div>
        </>
    );
}