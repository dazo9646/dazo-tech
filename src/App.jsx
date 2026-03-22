import './index.css'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CursorGlow from './components/ui/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <div className="noise-overlay" />
      <CursorGlow />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
