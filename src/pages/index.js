import Header from "../components/header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coundtdown from "../components/countdown";
import Location from "../components/location";
import Note from "../components/note";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { createContext, React, useState } from 'react';
import ReactSwitch from "react-switch";
import { faBars, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

  const ThemeContext = createContext(null)

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <header>
          <div className="sticker">
            <Image
              src="/logo.png"
              className="logo"
              alt="logo"
              width={60}
              height={60} />
            <nav>
              <ul className="lists">
                <li>
                  <a href="#">intro</a>
                </li>
                <li>
                  <a href="#countdownlink">countdown</a>
                </li>
                <li>
                  <a href="#noteslink">notes</a>
                </li>
                <li>
                  <a href="#contactlink">Contact</a>
                </li>
              </ul>
            </nav>
            <ReactSwitch style={{
          position: "fixed",
        }} onChange={toggleTheme} checked={theme === "dark"} />
            <FontAwesomeIcon icon={faBars} id="menu" />
            <button id="button">
              <FontAwesomeIcon icon={faPhoneVolume} className="call" />
              <a href="#">Call us</a>
            </button>
          </div>
          <Header />
        </header>
        <section>
          <Coundtdown />
          <Note />
          <Location />
          <Contact />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
