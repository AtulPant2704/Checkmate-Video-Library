import { useState } from 'react';
import { useAuth, useNotes } from "../../../context";
import { removeNoteHandler, updateNoteHandler } from "../../../utils";

const SingleNote = ({ videoID, note }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editNote, setEditNote] = useState({ ...note })
    const { authState: { token } } = useAuth();
    const { notesDispatch } = useNotes();

    const editChangeHandler = (e) => {
        const { name, value } = e.target;
        setEditNote(prev => ({ ...prev, [name]: value }));
    }

    const callUpdateNoteHandler = () => {
        updateNoteHandler(token, videoID, editNote, notesDispatch);
        setIsEdit(false);
    }

    const getTime = () => {
        const videoTimeInSeconds = Math.floor(note.noteTime);
        let minutes = Math.floor(videoTimeInSeconds / 60);
        let seconds = Math.floor(videoTimeInSeconds - minutes * 60);
        if (Math.floor(minutes / 10) === 0) {
            minutes = "0" + minutes;
        }
        if (Math.floor(seconds / 10) === 0) {
            seconds = "0" + seconds;
        }
        return `${minutes} : ${seconds}`;
    }

    return (
        <div className="note">
            {isEdit ?
                <>
                    <input
                        name="title"
                        value={editNote.title}
                        className="note-input note-input-title"
                        onChange={editChangeHandler}
                    />
                    <textarea
                        name="description"
                        value={editNote.description}
                        className="note-input note-input-description" placeholder="Description"
                        onChange={editChangeHandler}>
                    </textarea>
                    <div className="note-action-btns edit-note-btns">
                        <button
                            className="btn btn-solid-primary save-btn"
                            onClick={callUpdateNoteHandler}>
                            Save
                        </button>
                        <button
                            className="btn btn-outline-primary discard-btn"
                            onClick={() => setIsEdit(false)}>
                            Discard
                        </button>
                    </div>
                </>
                :
                <>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    <small><i className="fa-regular fa-clock"></i> {getTime()}</small>
                    <div className="note-btns">
                        <i
                            onClick={() => setIsEdit(true)}
                            className="fa-solid fa-pencil">
                        </i>
                        <i
                            onClick={() => removeNoteHandler(token, videoID, note, notesDispatch)}
                            className="fa-solid fa-trash-can">
                        </i>
                    </div>
                </>}
        </div>
    )
}

export { SingleNote }
