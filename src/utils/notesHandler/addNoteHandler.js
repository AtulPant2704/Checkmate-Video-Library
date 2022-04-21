import { toast } from "react-toastify";
import { addNoteService } from "../../services";

const addNoteHandler = async (token, videoID, note, notesDispatch) => {
    try {
        const response = await addNoteService(token, videoID, note);
        if (response.status === 201) {
            notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
            toast.success("Note added successfully");
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        toast.error(error.response.data.errors[0]);
    }
}

export { addNoteHandler };
