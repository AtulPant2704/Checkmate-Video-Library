import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducer";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
    const [notesState, notesDispatch] = useReducer(notesReducer, { notes: [] });

    return (
        <NotesContext.Provider value={{ notesState, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
