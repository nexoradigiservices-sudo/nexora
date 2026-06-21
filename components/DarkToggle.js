"use client";
import { useEffect, useState } from "react";

export default function DarkToggle({ className = "" }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return (
    <button
      aria-label="Toggle theme"
      className={`${className} btn ghost`}
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
    >
      {!mounted ? "☀️" : theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
