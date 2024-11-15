import Image from "next/image";
import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1Wave, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function Note() {
    return (
        <div id="noteslink" className="noteslink">
            <Image
                id="bottomgrey"
                src="/shape-bottom-grey-80.png"
                className="grey-bottom"
                width={1000}
                height={100} />
            <div className="note">
                <p className="p5">Important things<br />to note...</p>
                <div className="list2">
                    <ul id="price">
                        <li><FontAwesomeIcon icon={faMoneyBill1Wave} className="icon2" /></li>
                        <li className="headlist">Pricing</li>
                        <li className="noted">Auction forms are available for<br /> ₦1000 for single contestants,<br /> and
                            ₦1500 for a group of five.</li>
                    </ul>
                    <ul id="prize">
                        <li><FontAwesomeIcon icon={faTrophy} className="icon2" /></li>
                        <li className="headlist">Prizes</li>
                        <li className="noted"><strong>1st Prize: </strong>₦2,000,000</li>
                        <li className="noted"><strong>2nd Prize: </strong>₦1,000,000</li>
                        <li className="noted"><strong>3rd Prize: </strong>₦500,000</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}