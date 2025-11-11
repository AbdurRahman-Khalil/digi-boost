import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
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