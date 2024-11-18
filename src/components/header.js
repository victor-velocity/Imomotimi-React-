import Image from "next/image";
import { useRef } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload, faComputerMouse, faChevronLeft, faChevronRight, faToggleOn, faMoon, faSun, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
        const carouselRef = useRef(null);
      
        const goToPrevSlide = () => {
          if (carouselRef.current) {
            carouselRef.current.slidePrev();
          }
        };
      
        const goToNextSlide = () => {
          if (carouselRef.current) {
            carouselRef.current.slideNext();
          }
        };
    return (
        <>
            <AliceCarousel autoPlay
                autoPlayInterval={3000}
                infinite
                disableButtonsControls
                disableDotsControls
                ref={carouselRef}
                className="carousel">
                <div class="bg bg1"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
            </AliceCarousel>
            <div className="section1">
                <header className="sticker">
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
                    <div className="toggleswitch">
                        <FontAwesomeIcon icon={faMoon} />
                        <button className="toggle">
                            <FontAwesomeIcon icon={faToggleOn} className="toggleon" id="toggle" />
                        </button>
                        <FontAwesomeIcon icon={faSun} />
                    </div>
                    <FontAwesomeIcon icon={faBars} id="menu" />
                    <button id="button">
                        <FontAwesomeIcon icon={faPhoneVolume} className="call" />
                        <a href="#">Call us</a>
                    </button>
                </header>
                <div className="angle-flex">
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} className="angle" id="prev" onClick={goToPrevSlide} />
                    </div>
                    <div className="text1">
                        <p id="p1">
                            <b>imomotimi foundation presents</b>
                        </p>
                        <p id="p2">
                            imomotimi ijaw <br />
                            dance contest 2024
                        </p>
                        <p className="entryform">
                            <a href="#">
                                download entry form <FontAwesomeIcon icon={faDownload} className="download" />
                            </a>
                        </p>
                        <p className="p3">
                            All duly filled out forms and the entry fees should be brought along to
                            the audition.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} className="angle" id="next" onClick={goToNextSlide} />
                    </div>
                </div>
                <div className="mouse">
                    <FontAwesomeIcon icon={faComputerMouse} className="fa-solid fa-computer-mouse" />
                </div>
                <Image
                    id="topwhite"
                    src="/shape-top-white-80.png"
                    className="top-white"
                    width={1100}
                    height={100} />
            </div></>
    )
}