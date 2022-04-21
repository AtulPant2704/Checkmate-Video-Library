import { toast } from "react-toastify";
import { addNoteService } from "../../services";

const addNoteHandler = async (token, videoID, note, notesDispatch) => {
    try {
        const response = await addNoteService(token, videoID, note);
        console.log(response);
        if (response.status === 201) {
            notesDispatch({ type: "ADD_NOTE", payload: response.data.notes });
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
