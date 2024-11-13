import React from 'react';
import { Target, Lightbulb, Users, Sparkles } from 'lucide-react';

const About = () => {
  const cards = [
    {
      Icon: Target,
      title: 'Vision',
      description: 'Building innovative solutions that empower businesses and developers to create exceptional digital experiences.',
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      Icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering the future of web development through cutting-edge technologies and creative solutions.',
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      Icon: Users,
      title: 'Community',
      description: 'Fostering a vibrant developer community and mentoring the next generation of tech innovators.',
      color: 'from-yellow-500/20 to-yellow-500/5'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-animated"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          About Me
          <div className="w-24 h-2 bg-primary mx-auto mt-4 rounded-full pulse-shadow"></div>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group card-hover bg-gradient-to-br p-8 rounded-xl shadow-sharp"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: `linear-gradient(135deg, ${index === 0 ? '#ffef2c10' : index === 1 ? '#ffef2c15' : '#ffef2c20'} 0%, #ffffff 100%)`
              }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-white shadow-lg group-hover:shadow-glow transition-all">
                <card.Icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                {card.title}
                <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sharp hover:shadow-glow transition-shadow">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As the founder and CEO of Beiyo, I'm dedicated to revolutionizing the web development landscape. With expertise in full-stack development and a passion for creating innovative solutions, I lead our team in building cutting-edge tools and platforms that empower developers worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in tech has been driven by a vision to make web development more accessible and efficient. At Beiyo, we're creating a comprehensive ecosystem that streamlines the development process while maintaining the highest standards of quality and performance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I'm deeply committed to fostering a vibrant developer community. Through mentorship, knowledge sharing, and collaborative initiatives, we're building a platform that not only provides tools but also nurtures the growth of developers at every stage of their journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;