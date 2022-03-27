import { createContext, useContext, useReducer } from "react";
import { likesReducer } from "../reducer/likes-reducer";

const LikesContext = createContext(null);

const LikesProvider = ({ children }) => {
    const [likesState, likesDispatch] = useReducer(likesReducer, { likes: [] });

    return (
        <LikesContext.Provider value={{ likesState, likesDispatch }}>
            {children}
        </LikesContext.Provider>
    )
}

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
