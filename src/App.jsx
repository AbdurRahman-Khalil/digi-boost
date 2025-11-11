import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';
import styles from './App.module.css';


function App() {

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;