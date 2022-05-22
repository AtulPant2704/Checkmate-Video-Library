import { getNotesService } from "../../services";

const getNotesHandler = async (token, notesDispatch) => {
    if (token) {
        try {
            const response = await getNotesService(token);
            if (response.status === 200) {
                notesDispatch({ type: "GET_NOTES", payload: response.data.notes })
            } else {
                throw new Error();
            }
        }
        catch (error) {
            alert(error);
        }
    }
}

export { getNotesHandler };
