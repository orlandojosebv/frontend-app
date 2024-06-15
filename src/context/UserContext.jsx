import {
    useState,
    createContext,
    useMemo,
    useCallback,
    useEffect, 
  } from "react";
  
  const UserContext = createContext({});
  
  const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
      localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
    );
    const [token, setToken] = useState(
      localStorage.getItem("token") || null
    );
    const [loading, setLoading] = useState(false);
  
    const logout = useCallback(() => {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }, []);

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    useEffect(() => {
      localStorage.setItem("token", token)
    }, [token])
  
    const value = useMemo(() => {
      return {
        user, 
        token,
        setUser,
        loading,
        logout,
        setLoading,
        setToken
      };
    }, [user, token, loading, logout, setLoading]);
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };
  
  export { UserProvider, UserContext };