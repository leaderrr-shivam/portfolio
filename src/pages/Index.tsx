import { useState, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import StatsCounter from '@/components/StatsCounter';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TechStackVisualizer from '@/components/TechStackVisualizer';
import Credentials from '@/components/Credentials';
import Blog from '@/components/Blog';
import GitHubActivity from '@/components/GitHubActivity';
import BusinessCard from '@/components/BusinessCard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import PageLoader from '@/components/PageLoader';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <PageLoader onComplete={handleLoaded} />}
      <div className={`min-h-screen bg-background overflow-x-hidden transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <StatsCounter />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <TechStackVisualizer />
          <Credentials />
          <Blog />
          <GitHubActivity />
          <BusinessCard />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
