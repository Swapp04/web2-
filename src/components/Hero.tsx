import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Code, Globe, Instagram, Linkedin } from 'lucide-react';
import ParallaxCard from './ParallaxCard';
import SpotlightButton from './SpotlightButton';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const achievements = [
    { icon: Code, text: '5+ Years of Development' },
    { icon: Globe, text: '10+ Projects Delivered' },
    { icon: Sparkles, text: 'Tech Community Leader' },
  ];

  return (
    <section 
      ref={containerRef}
      className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative bg-gradient-to-br from-primary-light via-white to-accent-light"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="parallax-layer" style={{
              transform: `translate3d(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px, 0)`
            }}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-spotlight">
                <span className="text-gradient-primary">Swapnil Patel</span>
                <span className="block text-4xl md:text-5xl mt-4 flex items-center gap-3">
                  Founder & CEO at
                  <a 
                    href="https://beiyo.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="glass-morphism px-6 py-2 rounded-xl inline-flex items-center hover-lift"
                  >
                    Beiyo
                    <Sparkles className="ml-2 w-5 h-5 text-primary animate-pulse" />
                  </a>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Full Stack Developer & Tech Entrepreneur building the future of web development. Leading Beiyo to empower developers with innovative solutions and fostering a thriving tech community.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <SpotlightButton 
                  className="group inline-flex items-center px-8 py-4 bg-primary text-gray-900 font-bold rounded-xl hover-lift"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </SpotlightButton>

                <div className="flex gap-4">
                  {[
                    { href: 'https://www.instagram.com/pswap.nil', Icon: Instagram, gradient: 'from-primary to-accent' },
                    { href: 'https://www.linkedin.com/in/swapnilpatel04', Icon: Linkedin, gradient: 'from-accent to-secondary' },
                    { href: 'https://beiyo.in', Icon: Globe, gradient: 'from-secondary to-primary' }
                  ].map(({ href, Icon, gradient }, index) => (
                    <ParallaxCard key={index}>
                      <a 
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center hover:shadow-neon transition-all`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </a>
                    </ParallaxCard>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map(({ icon: Icon, text }, index) => (
                  <ParallaxCard key={index}>
                    <div className="glass-morphism p-4 flex items-center gap-3 hover-lift">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{text}</span>
                    </div>
                  </ParallaxCard>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <ParallaxCard className="w-full">
              <div className="gradient-border rounded-2xl">
                <div className="card-content bg-white p-6 rounded-2xl">
                  <div className="relative overflow-hidden rounded-xl aspect-square">
                    <img 
                      src="/swapnil-profile.jpg" 
                      alt="Swapnil Patel - Founder & CEO of Beiyo"
                      className="w-full h-full object-cover object-center shadow-3d transition-transform duration-300"
                      loading="eager"
                      priority="high"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass-morphism p-4 rounded-xl transform rotate-3 hover:rotate-0 transition-transform">
                    <p className="font-bold text-gray-900 flex items-center">
                      Tech Innovator
                      <Sparkles className="ml-2 w-4 h-4 text-primary" />
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;