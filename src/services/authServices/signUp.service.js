import axios from "axios";

const signUpService = (user) => {
    return axios.post("/api/auth/signup", user);
}

export { signUpService };
