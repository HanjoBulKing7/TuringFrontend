import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [username, setUsername] = useState(localStorage.getItem("username") || "");

    useEffect(() => {
        if (token) {
        localStorage.setItem("token", token);
        } else {
        localStorage.removeItem("token");
        }
    }, [token]);

    const login = (newToken, newUsername) => {
        setToken(newToken);
        setUsername(newUsername);
        localStorage.setItem("username", newUsername);
    };

    const logout = () => {
        setToken("");
        setUsername("");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
    };

    return (
        <AuthContext.Provider value={{ token, username, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);