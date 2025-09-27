import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getAllCategoryApi } from "../api/CategoryApi";
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAllCategory() {
            try {
                const response = await getAllCategoryApi();
                console.log(response);
                setCategories(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getAllCategory();
    }, [])

    const login = (validatedUser) => {
        setUser(validatedUser);
    }

    const logout = () => {
        setUser(null);
    }

    const deleteCategory = (id) => {
        const newCategories = categories.filter((category) => {
            if (category.CategoryID !== id)
                return category
        })
        setCategories(newCategories);
    }
    
    const updateCategory = (id, newCategory) => {
        const newCategories = categories.map((category) => {
            if (category.CategoryID === id) {
                return newCategory;
            } else {
                return category;
            }
        })
        setCategories(newCategories);       
    }

    const contextValues = {
        user,
        login,
        logout,
        categories,
        deleteCategory,
        updateCategory,
        loading,
    };

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;