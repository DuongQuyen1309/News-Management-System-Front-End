import UserContext from "./UserContext";
import { useState } from "react";

const UserProvider = ({ children}) => {
    const [user, setUser] = useState(null);

    const contextValues = {
        user,
    };

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;