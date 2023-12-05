import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/herosection/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";
import Cursor from './components/cursor/Cursor';

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>

      <section ><Parallax type="services" /></section>
      <section id="services" >
        <Services />
      </section>

      {/* <section id='portfolio'><Parallax type="portfolio" /></section>
      <Portfolio />

      <section id="contact"><Contact /></section> */}


    </div>
  )
}

export default App