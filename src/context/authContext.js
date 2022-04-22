import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialState = {
    user: "",
    token: "",
}

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, initialState);

    if (!authState.token) {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        token && user ? authDispatch({ type: "CHECK_USER", payload: { user, token } }) : null;
    }

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
