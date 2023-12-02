import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/herosection/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
const App = () => {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id='services'><Parallax type="services" /></section>
      <section> <Services /></section>
      <section id='portfolio'><Parallax type="portfolio" /></section>
      <section>Portfolio1</section>
      <section>POrtfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </>
  )
}

export default App