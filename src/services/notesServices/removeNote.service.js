import axios from "axios";

const removeNoteService = (token, videoID, note) => {
    return axios.post(`/api/user/notes/delete/${videoID}`, { note }, { headers: { authorization: token } })
}

export { removeNoteService };
