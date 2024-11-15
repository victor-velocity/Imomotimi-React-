import Image from "next/image";
import { React } from 'react';

export default function Coundtdown() {
    var countDownDate = new Date("Nov 31, 2024 23:59:59").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;

        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    return (
        <div id="countdownlink">
            <Image
                id="bottomwhite"
                className="bottom-white"
                src="/shape-bottom-white-80.png"
                width={1000}
                height={100} />
            <p className="p4">
                Countdown to Audition
            </p>
            <div className="countdown">
                <div className="countdown-section">
                    <span className="value days" id="day">29</span>
                    <hr className="hr1" />
                    <span className="label">Days</span>
                </div>
                <div className="seperator">:</div>
                <div className="countdown-section">
                    <span className="value hours" id="hour">02</span>
                    <hr className="hr1" />
                    <span className="label">Hours</span>
                </div>
                <div className="seperator">:</div>
                <div className="countdown-section">
                    <span className="value minutes" id="minute">08</span>
                    <hr className="hr1" />
                    <span className="label">Minutes</span>
                </div>
                <div className="seperator">:</div>
                <div className="countdown-section">
                    <span className="value seconds" id="second">06</span>
                    <hr className="hr1" />
                    <span className="label">Seconds</span>
                </div>
            </div>
            <Image
                id="topgrey"
                src="/shape-top-grey-80.png"
                className="grey-top"
                width={1000}
                height={100} />
        </div>
    )
}