import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const Scroller = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer>
        <button onClick={Scroller} className="arrowButton">
          <FontAwesomeIcon icon={faArrowUp} className="fa-solid fa-arrow-up arrow" />
        </button>
        <p className="social">we are social</p>
        <div>
          <p><FontAwesomeIcon icon={faFacebookF} className="fa-brands fa-facebook-f" /></p>
          <p><FontAwesomeIcon icon={faXTwitter} className="fa-brands fa-x-twitter" /></p>
          <p><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" /></p>
          <p><FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube" /></p>
        </div>
        <hr className="hr2" />
        <p className="end">© 2024 Imomotimi Foundation. All Rights Reserved</p>
      </footer>
    )
}