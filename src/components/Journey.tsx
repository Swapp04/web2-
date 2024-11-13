import React from 'react';

const Journey = () => {
  const milestones = [
    {
      year: "2024",
      title: "Beiyo Launch",
      description: "Founded Beiyo with a vision to revolutionize the industry through innovative solutions."
    },
    {
      year: "2020-2023",
      title: "Tech Leadership",
      description: "Led multiple successful tech initiatives and built high-performing teams across various organizations."
    },
    {
      year: "2015-2020",
      title: "Innovation & Development",
      description: "Developed cutting-edge solutions and contributed to major technological advancements in the field."
    }
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50 -z-10"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Professional Journey
          <div className="w-32 h-2 bg-primary mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}>
                <div className="w-1/2"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-primary bg-white shadow-lg z-10"></div>
                
                <div className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'
                }`}>
                  <div className="timeline-card bg-white p-6 rounded-xl shadow-lg hover:shadow-3d">
                    <span className="inline-block bg-primary px-4 py-1 rounded-full font-bold text-gray-900 mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;