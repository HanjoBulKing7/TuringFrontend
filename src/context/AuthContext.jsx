import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");

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

    try {
      const decoded = jwtDecode(newToken);
      const decodedRole = decoded.role || "";
      setRole(decodedRole);
      localStorage.setItem("role", decodedRole);
    } catch {
      setRole("");
    }
  };

  const logout = () => {
    setToken("");
    setUsername("");
    setRole("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
  };

  const isAdmin = role === "ROLE_ADMIN";

  return (
    <AuthContext.Provider value={{ token, username, role, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);