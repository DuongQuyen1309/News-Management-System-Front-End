const BASE_URL_ACCOUNT = "http://localhost:3333/systemAccounts";
export const getAllAccountApi = async () => {
    try {
        const response = await fetch(BASE_URL_ACCOUNT);
        if(!response.ok){
            return new Error(`HTTP error with status: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}