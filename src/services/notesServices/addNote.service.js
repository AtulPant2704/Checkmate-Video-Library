import axios from "axios"

const addNoteService = (token, videoID, note) => {
    return axios.post(`/api/user/notes/${videoID}`, { note }, { headers: { authorization: token } });
}

export { addNoteService };
