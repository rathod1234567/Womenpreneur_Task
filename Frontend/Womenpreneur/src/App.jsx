import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Biography from './Components/BioGraphy';
import Timeline from './Components/Timeline';
import Quote from './Components/Quotes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Timeline />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}

export default App;

