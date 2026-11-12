import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
    
      <main className="pt-16 md:pt-20">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}

export default App;