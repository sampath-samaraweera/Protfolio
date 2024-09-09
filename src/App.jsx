// import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technology from './components/Technology'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Achievements from './components/Achievements'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
        rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-5'>
        <Navbar/>
        <section id="home" className="pt-24">
          <Hero />
        </section>
        <section id="about" className="pt-16">
          <About/>
        </section>        
        <section id="technology" className="pt-16">
          <Technology/>
        </section>
        <section id="projects" className="pt-16">
          <Projects/>
        </section>
        <section id="achievements" className="pt-16">
          <Achievements/>
        </section>
        <section id="contact" className="pt-16">
          <Contact/>
        </section>
        <section id="footer" className="pt-16">
          <Footer/>
        </section>
      </div>
    </div>
  )
}

export default App
