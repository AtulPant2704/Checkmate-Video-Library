import { toast } from "react-toastify";
import { updateNoteService } from "../../services";

const updateNoteHandler = async (token, videoID, note, notesDispatch) => {
    try {
        const response = await updateNoteService(token, videoID, note);
        if (response.status === 200) {
            notesDispatch({ type: "UPDATE_NOTE", payload: response.data.notes });
            toast.success("Note updated successfully");
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        toast.error(error.response.data.errors[0]);
    }
}

export { updateNoteHandler };
