import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
    const [categoryState, categoryDispatch] = useReducer(categoryReducer, { category: "" });

    return (
        <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
