import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    minHeight: "100vh",
    padding: 20,
    backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
    color: theme === "light" ? "#111" : "#fff",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h2>Bài 7 - Theme Switcher</h2>
      <Layout />
    </div>
  );
}

function Layout() {
  return (
    <div style={{ padding: 20, border: "1px solid gray" }}>
      <h3>Layout Component</h3>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div style={{ padding: 20, border: "1px solid gray", marginTop: 10 }}>
      <h4>Card Component</h4>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Theme hiện tại: {theme} - Bấm để đổi</button>
  );
}

export default function ThemeSwitcherApp() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
