export default function AddNote() {
    return (
        <div className="add-note-container">
            <div className="date">09/01/2002</div>

            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="title.." />

            <label htmlFor="note">Note</label>
            <textarea name="note" id="note"></textarea>

            <button className="add">add</button>
        </div>
    );
}