import Image from "next/image";
import { useState, useEffect } from "react";

export default function Countdown({theme}) {

    const image2 = theme === "light" ? "/shape-bottom-white-80.png" : "/shape-bottom-black-80.png";
    const image3 = theme === "light" ? "/shape-top-grey-80.png" : "/shape-top-dark-grey-80.png";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("Nov 30, 2024 23:59:59").getTime(); // Corrected the date format.

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setExpired(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on unmount.
  }, []);

  return (
    <div id="countdownlink">
      <Image
        id="bottomwhite"
        className="bottom-white"
        src={image2}
        width={1000}
        height={100}
        alt="Bottom Decoration"
      />
      <p className="p4">Countdown to Audition</p>
      {expired ? (
        <div className="expired-message">The countdown has expired!</div>
      ) : (
        <div className="countdown">
          <div className="countdown-section">
            <span className="value days">{timeLeft.days}</span>
            <hr className="hr1" />
            <span className="label">Days</span>
          </div>
          <div className="seperator">:</div>
          <div className="countdown-section">
            <span className="value hours">{timeLeft.hours}</span>
            <hr className="hr1" />
            <span className="label">Hours</span>
          </div>
          <div className="seperator">:</div>
          <div className="countdown-section">
            <span className="value minutes">{timeLeft.minutes}</span>
            <hr className="hr1" />
            <span className="label">Minutes</span>
          </div>
          <div className="seperator">:</div>
          <div className="countdown-section">
            <span className="value seconds">{timeLeft.seconds}</span>
            <hr className="hr1" />
            <span className="label">Seconds</span>
          </div>
        </div>
      )}
      <Image
        id="topgrey"
        src={image3}
        className="grey-top"
        width={1000}
        height={100}
        alt="Top Decoration"
      />
    </div>
  );
}
