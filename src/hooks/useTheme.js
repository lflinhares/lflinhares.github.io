import { useEffect, useState } from "react";

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  function themeChange() {
    setDarkMode((anterior) => !anterior);
  }
  useEffect(() => {
    darkMode
      ? (document.documentElement.className = "dark")
      : (document.documentElement.className = "light");
  }, [darkMode]);

  return { themeChange, darkMode };
}
