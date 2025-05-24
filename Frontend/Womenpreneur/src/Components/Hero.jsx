import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
      style={{ 
        minHeight: '100vh', 
        height: '100dvh' // dynamic viewport height for mobile
      }}
    >
      {/* Hero background image with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-700 ease-out"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
        aria-hidden="true"
      />
      
      {/* Dark overlay with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
        aria-hidden="true"
      />

      {/* Animated particles background */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className={`inline-block text-amber-400 transform transition-all duration-1200 ${
              isLoaded ? 'scale-100 rotate-0' : 'scale-95 -rotate-1'
            }`}>
              Sarah Johnson
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Founder & CEO of <span className="text-amber-300 font-medium">EcoTech Solutions</span>
          </p>
          
          {/* Description */}
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-4 lg:px-0 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Revolutionizing sustainability through innovative technology and conscious entrepreneurship
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-0 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a
              href="#biography"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 sm:py-4 px-8 sm:px-10 lg:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 text-center text-sm sm:text-base lg:text-lg group"
              aria-label="Learn more about Sarah Johnson"
            >
              <span className="group-hover:animate-pulse">Learn More</span>
            </a>
            <a
              href="#achievements"
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:border-amber-400 text-white hover:text-amber-400 hover:bg-amber-400/10 font-semibold py-3 sm:py-4 px-8 sm:px-10 lg:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 text-center text-sm sm:text-base lg:text-lg backdrop-blur-sm"
              aria-label="View Sarah Johnson's achievements"
            >
              View Achievements
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="flex flex-col items-center text-white/80">
          <span className="text-xs sm:text-sm mb-2 font-light">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;