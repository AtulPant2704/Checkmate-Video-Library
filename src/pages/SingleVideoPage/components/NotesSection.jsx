import { SingleNote } from "./SingleNote";

const NotesSection = () => {
    return (
        <section className="notes-section">
            <h2>Notes</h2>
            <input type="text" className="note-input note-input-title" placeholder="Title" />
            <textarea className="note-input note-input-description" placeholder="Description"></textarea>
            <div className="note-action-btns">
                <button className="btn btn-solid-primary save-btn">Save</button>
                <button className="btn btn-outline-primary discard-btn">Discard</button>
            </div>
            <div className="notes-container">
                <SingleNote />
                <SingleNote />
            </div>
        </section>
    )
}

export { NotesSection };
