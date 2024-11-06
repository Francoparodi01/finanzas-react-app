// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';

// Crear el contexto
const ThemeContext = createContext();

// Crear un hook personalizado para usar el contexto
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#6538ae');  // Color principal
  const [secondaryColor, setSecondaryColor] = useState('#5f438b');  // Color secundario

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
  };

  const changeSecondaryColor = (color) => {
    setSecondaryColor(color);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        changePrimaryColor,
        changeSecondaryColor,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
