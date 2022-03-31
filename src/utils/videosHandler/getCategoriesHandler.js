import { getCategoriesService } from "../../services";

const getCategoriesHandler = async (setCategories) => {
    try {
        const response = await getCategoriesService();
        if (response.status === 200) {
            setCategories(response.data.categories);
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { getCategoriesHandler };
