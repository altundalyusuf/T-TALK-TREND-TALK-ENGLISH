import { useContext, createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem("theme") || "light";


export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'halloween' : 'light';
        setTheme(newTheme);
    };


    // Export to other files
    const values = {
        theme,
        toggleTheme,
    }



    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}