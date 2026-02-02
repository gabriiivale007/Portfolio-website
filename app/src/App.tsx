import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Marquee from './sections/Marquee';
import ValueProp from './sections/ValueProp';
import SelectedWorks from './sections/SelectedWorks';
import Process from './sections/Process';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-site-gray">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Marquee />
        <ValueProp />
        <SelectedWorks />
        <Process />
        <Footer />
      </main>
    </div>
  );
}

export default App;
