import axios from "axios";

const getNotesService = (token) => {
    return axios.get("/api/user/notes", { headers: { authorization: token } });
}

export { getNotesService };
