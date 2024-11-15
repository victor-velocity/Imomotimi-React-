import Image from "next/image";
import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPencil, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
    function Submission() {
        return (alert('Submission failed. Check back later'))
    }

    return (
        <section className="section4" id="contactlink">
            <Image
                id="bottomgrey2"
                src="/shape-bottom-grey-80.png"
                className="grey-bottom"
                width={1000}
                height={100} />
            <div id="sect4">
                <div className="info">
                    <h2 className="h2">For More Information:</h2>
                    <p><strong>Hotlines: </strong>07035973706 & 08108112759</p>
                    <p><strong>Email: </strong> info@ijawdancecontest.ng</p>
                    <p><strong>Audition Location: </strong> Nitro Studio, Tamara Hall,<br />Otiotio Road, Yenagoa,
                        Bayelsa state.</p>
                </div>

                <form className="form">
                    <div className="form1">
                        <div className="fdiv1">
                            <div className="border mg2">
                                <FontAwesomeIcon icon={faUser} className="fa-regular fa-user icons" />
                                <input type="text" name="f.name" placeholder="Name" required />
                            </div>
                            <div className="border mg2">
                                <FontAwesomeIcon icon={faEnvelope} className="fa-regular fa-envelope icons" />
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>
                        </div>

                        <div className="fdiv2">
                            <div className="border mg mg2">
                                <FontAwesomeIcon icon={faPhoneVolume} className="fa-solid fa-phone-volume icons" />
                                <input type="tel" name="number" placeholder="Phone" required />
                            </div>
                            <div className="border mg mg2">
                                <FontAwesomeIcon icon={faCircleInfo} className="fa-solid fa-circle-info icons" />
                                <input type="text" name="subject" placeholder="Subject" required />
                            </div>
                        </div>

                        <div className="border tarea mg2">
                            <FontAwesomeIcon icon={faPencil} className="fa-solid fa-pencil icons" />
                            <textarea name="comment" id="comment"
                                placeholder="How can we help you? Feel free to get in touch!" rows="4"
                                required></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <button id="button2" onClick={Submission}><strong>Get in
                Touch</strong></button>
        </section>
    )
}