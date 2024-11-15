import Header from "../components/header";
import Coundtdown from "../components/countdown";
import Location from "../components/location";
import Note from "../components/note";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { React } from 'react';

export default function Home() {
  return (
    <div>
      <header>
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
  );
}
