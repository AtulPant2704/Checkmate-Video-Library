import axios from "axios";

const updateNoteService = (token, videoID, note) => {
    return axios.post(`/api/user/notes/update/${videoID}`, { note }, { headers: { authorization: token } })
}

export { updateNoteService };
