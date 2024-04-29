import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  isDark: "",
  setIsDark: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

const themeCtx = () => useContext(ThemeContext);

export { themeCtx, ThemeContextProvider };
