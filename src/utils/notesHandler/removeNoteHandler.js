import { toast } from "react-toastify";
import { removeNoteService } from "../../services";

const removeNoteHandler = async (token, videoID, note, notesDispatch) => {
    try {
        const response = await removeNoteService(token, videoID, note);
        if (response.status === 200) {
            notesDispatch({ type: "REMOVE_NOTE", payload: response.data.notes });
            toast.info("Note removed successfully");
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        toast.error(error.response.data.errors[0]);
    }
}

export { removeNoteHandler };
