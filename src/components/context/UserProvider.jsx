import UserContext from "./UserContext";
import { useState } from "react";

const UserProvider = ({ children}) => {
    const [user, setUser] = useState(null);

    const login = (validatedUser) => {
        setUser(validatedUser);
    }

    const logout = () => {
        setUser(null);
    }

    const contextValues = {
        user,
        login,
        logout
    };

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;