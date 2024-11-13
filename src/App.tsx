import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Swapnil Patel. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;