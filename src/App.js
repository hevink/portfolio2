import Navbar from './components/Navbar';
import './App.css';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero'
import Aboutus from './components/Aboutus';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact_us from './components/Contact_us';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Hero />
      <Aboutus />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact_us />
      <Footer />
    </div>
  );
}

export default App;
