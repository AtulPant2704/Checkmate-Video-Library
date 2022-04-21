import { useAuth, useNotes } from "../../../context";
import { removeNoteHandler } from "../../../utils";

const SingleNote = ({ videoID, note }) => {
    const { authState: { token } } = useAuth();
    const { notesDispatch } = useNotes();

    return (
        <div className="note">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <small><i className="fa-regular fa-clock"></i> {note.videoTime}</small>
            <div className="note-btns">
                <i className="fa-solid fa-pencil"></i>
                <i
                    onClick={() => removeNoteHandler(token, videoID, note, notesDispatch)}
                    className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}

export { SingleNote }
