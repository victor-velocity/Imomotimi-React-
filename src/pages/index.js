import React, { useState, createContext } from "react";
import Header from "../components/header";
import NavBar from "../components/navbar.js";
import Countdown from "../components/countdown";
import Location from "../components/location";
import Note from "../components/note";
import Contact from "../components/contact";
import Footer from "../components/footer";

export const ThemeContext = createContext(null);

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <header>
          <NavBar /> {/* Imported NavBar */}
          <Header theme={theme} />
        </header>
        <section>
          <Countdown theme={theme} />
          <Note theme={theme} />
          <Location theme={theme} />
          <Contact theme={theme} />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
