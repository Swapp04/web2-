import React from 'react';
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50 -z-10"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get in Touch
          <div className="w-24 h-2 bg-primary mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-3d">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:swapnil@beiyo.in" 
                  className="flex items-center justify-between text-gray-600 hover:text-gray-900 p-4 rounded-lg bg-gray-50 hover:bg-primary/20 transition-colors group"
                >
                  <span className="flex items-center">
                    <Mail className="w-6 h-6 mr-3" />
                    swapnil@beiyo.in
                  </span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a 
                  href="https://linkedin.com/in/swapnilpatel04" 
                  className="flex items-center justify-between text-gray-600 hover:text-gray-900 p-4 rounded-lg bg-gray-50 hover:bg-primary/20 transition-colors group"
                >
                  <span className="flex items-center">
                    <Linkedin className="w-6 h-6 mr-3" />
                    LinkedIn Profile
                  </span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a 
                  href="https://twitter.com/pswap_nil" 
                  className="flex items-center justify-between text-gray-600 hover:text-gray-900 p-4 rounded-lg bg-gray-50 hover:bg-primary/20 transition-colors group"
                >
                  <span className="flex items-center">
                    <Twitter className="w-6 h-6 mr-3" />
                    Twitter Profile
                  </span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-3d">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-all transform hover:translate-y-[-2px] shadow-3d"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;