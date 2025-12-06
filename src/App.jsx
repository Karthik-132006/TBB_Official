import React from 'react'
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Connect from "./components/Connect.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Connect />
      <Footer />
    </main>
  )
}
export default App
