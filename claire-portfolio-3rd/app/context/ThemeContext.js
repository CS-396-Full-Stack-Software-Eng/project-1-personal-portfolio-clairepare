"use client"
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'light', // provide a default value
  setTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Persist theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
