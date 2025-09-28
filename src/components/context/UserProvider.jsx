import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getAllCategoryApi } from "../api/CategoryApi";
import { getAllNewsApi } from "../api/NewApi";
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState(null);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newsLoading, setNewsLoading] = useState(true);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    useEffect(() => {
        async function getAllCategory() {
            try {
                const response = await getAllCategoryApi();
                setCategories(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getAllCategory();
    }, [])

    useEffect(() => {
        async function getAllNews() {
            try {
                const response = await getAllNewsApi();
                console.log("response new", response);
                setNews(response);
                setNewsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getAllNews();
        console.log("news", news);
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

    // update category but because not api so just update but will reload => initial value
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

    const deleteNews = (id) => {
        const newNews = news.filter((item) => {
            if (item.NewsArticleID !== id)
                return item
        })
        setNews(newNews);
    }

    // update news but because not api so just update but will reload => initial value
    const updateNew = (id, newItem) => {
        const newNews = news.map((item) => {
            if (item.NewsArticleID === id) {
                return newItem;
            } else {
                return item;
            }
        })
        setNews(newNews);
    }

    const handleShowUpdateModal = () => {
        setShowUpdateModal(true);
    }

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
    }

    const contextValues = {
        user,
        login,
        logout,
        categories,
        deleteCategory,
        updateCategory,
        news,
        deleteNews,
        updateNew,
        newsLoading,
        loading,
        showUpdateModal,
        handleShowUpdateModal,
        handleCloseUpdateModal
    };

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;