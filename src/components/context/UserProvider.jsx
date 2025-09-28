import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import { getAllCategoryApi } from "../api/CategoryApi";
import { getAllNewsApi } from "../api/NewApi";
import { getAllAccountApi } from "../api/AccountApi"
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [categories, setCategories] = useState(null);
    const [news, setNews] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newsLoading, setNewsLoading] = useState(true);
    const [accountLoading, setAccountLoading] = useState(true);
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
    }, [])

    useEffect(() => {
        async function getAllAccounts() {
            try {
                const response = await getAllAccountApi();
                console.log("response new", response);
                setAccounts(response);
                setAccountLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getAllAccounts();
    }, [])

    const login = (validatedUser) => {
        setUser(validatedUser);
         localStorage.setItem("user", JSON.stringify(validatedUser));
    }

    const logout = () => {
        setUser(null);
         localStorage.removeItem("user");
    }

    const deleteCategory = (id) => {
        const newCategories = categories.filter((category) => {
            if (category.CategoryID !== id)
                return category
        })
        setCategories(newCategories);
    }

    // update category but because not api so just update but will reload => initial value

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

    const deleteAccounts = (id) => {
        const newAccounts = accounts.filter((item) => {
            if (item.AccountID !== id)
                return item
        })
        setAccounts(newAccounts);
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
        news,
        deleteNews,
        updateNew,
        accounts,
        deleteAccounts,
        accountLoading,
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