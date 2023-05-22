"use client";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const initialThemeState = localStorage.getItem("theme") as "light" | "dark";
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (event: MediaQueryListEvent) => {
      const newTheme = event.matches ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    if (initialThemeState) {
      setTheme(initialThemeState);
    } else {
      setTheme(prefersDarkMode.matches ? "dark" : "light");
    }

    prefersDarkMode.addEventListener("change", handleThemeChange);

    return () => {
      prefersDarkMode.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.remove("light", "dark");
    rootElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  
  return (
    <header className="mb-10 mt-10 flex items-center space-x-1">
      <h1 className="ml-1 flex-grow text-2xl font-bold tracking-tighter text-blue-950 dark:text-white">
        Azabache Software
      </h1>

      <span className="p-1 text-xs text-blue-950 dark:text-white">
        {theme === "light" ? "Modo Claro" : "Modo Oscuro"}
      </span>

      <button onClick={handleTheme}>
        {theme === "light" ? (
          <MoonIcon className="text-blue-950 dark:fill-white" height={20} />
        ) : (
          <SunIcon className="text-blue-950 dark:fill-white" width={20} />
        )}
      </button>
    </header>
  );
};

export default Navbar;
