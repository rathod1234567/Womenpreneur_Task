import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold text-amber-400"
              aria-label="My Startup TV - Womenpreneur Show"
            >
              <Sparkles className="h-6 w-6" />
              <span>Womenpreneur Show</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Celebrating women entrepreneurs who are changing the world through innovation, 
              leadership, and social impact.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-400 transition-colors"
              aria-label="Follow us on Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-400 transition-colors"
              aria-label="Follow us on Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-400 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-400 transition-colors"
              aria-label="Subscribe to our YouTube channel"
            >
              YouTube
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 My Startup TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
