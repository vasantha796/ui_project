import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextType | undefined>(
    undefined
  );

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [theme, setTheme] =
    useState(
      localStorage.getItem("theme") || "light"
    );

  const toggleTheme = () => {

    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    );
  };

  useEffect(() => {

    localStorage.setItem(
      "theme",
      theme
    );

    document.body.className =
      theme;

  }, [theme]);

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>

  );
};

export const useTheme = () => {

  const context =
    useContext(ThemeContext);

  if (!context) {

    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );

  }

  return context;
};