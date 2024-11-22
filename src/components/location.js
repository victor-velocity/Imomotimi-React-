import Image from "next/image";
import { React } from 'react';

export default function Location({theme}) {
    const image4 = theme === "light" ? "/shape-top-grey-80.png" : "/shape-top-dark-grey-80.png";
    return (
        <section id="section3">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.217862403855!2d3.3308180744810585!3d6.619835722037391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e5b4e94d63%3A0x93aba540bfd71764!2sHoneyTreat%20Trade%20Academy!5e0!3m2!1sen!2sng!4v1727634805217!5m2!1sen!2sng"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Image
                id="topgrey2"
                src={image4}
                class="overlayimage"
                width={1000}
                height={100} />
        </section>
    )
}