const BASE_URL = "http://localhost:3333/categories";
export const getAllCategoryApi = async () => {
    try {
        const response = await fetch(BASE_URL);
        if(!response.ok){
            return new Error(`HTTP error with status: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}
