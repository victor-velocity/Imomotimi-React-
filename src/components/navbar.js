// components/NavBar.js
import React, { useContext } from "react";
import Image from "next/image";
import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../pages/index"; // Adjust the path as needed

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="sticker">
      <Image
        src="/logo.png"
        className="logo"
        alt="logo"
        width={60}
        height={60}
      />
      <nav>
        <ul className="lists">
          <li>
            <a href="#">Intro</a>
          </li>
          <li>
            <a href="#countdownlink">Countdown</a>
          </li>
          <li>
            <a href="#noteslink">Notes</a>
          </li>
          <li>
            <a href="#contactlink">Contact</a>
          </li>
        </ul>
      </nav>
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <FontAwesomeIcon icon={faBars} id="menu" aria-label="Menu" />
      <button id="button">
        <FontAwesomeIcon icon={faPhoneVolume} className="call" />
        <a href="#">Call us</a>
      </button>
    </div>
  );
};

export default NavBar;
