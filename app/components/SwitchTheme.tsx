"use client";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function SwitchTheme() {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useLocalStorage("theme", "cmyk");
  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "luxury" ? "cmyk" : "luxury");
  };
  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "luxury" ? (
        <button className="w-5 h-5">Dark</button>
      ) : (
        <button className="w-5 h-5">light</button>
      )}
    </button>
  );
}
