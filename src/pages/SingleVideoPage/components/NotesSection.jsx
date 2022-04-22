import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNotes, useAuth } from "../../../context";
import { addNoteHandler } from "../../../utils";
import { SingleNote } from "./SingleNote";
import { toast } from "react-toastify";
import { getNotesHandler } from "../../../backend/controllers/NotesController";
import axios from "axios";

const NotesSection = ({ videoID, videoRef }) => {
    const navigate = useNavigate();
    const [newNote, setNewNote] = useState({ title: "", description: "" });
    const [videoNotes, setVideoNotes] = useState([]);
    const { authState: { token } } = useAuth();
    const { notesState: { notes }, notesDispatch } = useNotes();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setNewNote(prev => ({ ...prev, [name]: value }));
    }

    const callAddNoteHandler = () => {
        if (token) {
            const noteTime = videoRef.current.getCurrentTime();
            const note = { ...newNote, noteTime }
            addNoteHandler(token, videoID, note, notesDispatch);
            setNewNote({ title: "", description: "" });
        }
        else {
            navigate("/login");
            toast.warning("You're not logged in");
        }
    }

    const findVideoNotes = () => {
        const findVideo = notes.find(item => item._id === videoID);
        if (findVideo) {
            setVideoNotes(findVideo.vidNotes);
        }
    }

    useEffect(() => findVideoNotes(), [notes]);

    return (
        <section className="notes-section">
            <h2>Notes</h2>
            <input
                name="title"
                value={newNote.title}
                className="note-input note-input-title"
                placeholder="Title"
                onChange={changeHandler}
            />
            <textarea
                name="description"
                value={newNote.description}
                className="note-input note-input-description" placeholder="Description"
                onChange={changeHandler}>
            </textarea>
            <div className="note-action-btns">
                <button
                    className="btn btn-solid-primary save-btn"
                    onClick={callAddNoteHandler}>
                    Save
                </button>
                <button
                    className="btn btn-outline-primary discard-btn"
                    onClick={() => setNewNote({ title: "", description: "" })}>
                    Discard
                </button>
            </div>
            <div className="notes-container">
                {videoNotes.length > 0 ?
                    videoNotes.map(note => (
                        <SingleNote
                            key={note._id}
                            videoID={videoID}
                            note={note}
                        />
                    ))
                    : <p className="empty-notes">No notes Added</p>}
            </div>
        </section>
    )
}

export { NotesSection };
