import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./utillities/data";

const getBlogs = () => {
  const blogData = JSON.parse(localStorage.getItem("blogs"));
  if (blogData) return blogData;
  return [];
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <AppContext.Provider
      value={{
        alert,
        showAlert,
        setBlogs,
        blogs,
        getBlogs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;
