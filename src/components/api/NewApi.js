const BASE_URL_NEWS = "http://localhost:3333/newsArticles";
export const getAllNewsApi = async () => {
    try {
        const response = await fetch(BASE_URL_NEWS);
        if(!response.ok){
            return new Error(`HTTP error with status: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}