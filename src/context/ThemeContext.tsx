import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of your context
interface ThemeContextType {
  darkMode: boolean;
  toggle: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggle: () => {},
});

// Define the type for the `children` prop
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing the ThemeContext
export const useTheme = () => useContext(ThemeContext);
