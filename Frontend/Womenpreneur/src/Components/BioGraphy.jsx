import React from 'react';

const Biography = () => {
  return (
    <section id="biography" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 text-center lg:text-left">
              The <span className="text-amber-500">Journey</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 lg:space-y-5 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                Sarah Johnson, a visionary entrepreneur with a passion for sustainable innovation, founded EcoTech Solutions in 2015 after witnessing the environmental impact of traditional tech manufacturing during her tenure at a major tech corporation.
              </p>
              <p>
                With a Master's degree in Environmental Engineering from Stanford and an MBA from Harvard Business School, Sarah combined her technical expertise with business acumen to create a company that develops eco-friendly technology solutions without compromising on performance or design.
              </p>
              <p>
                Under her leadership, EcoTech Solutions has grown from a small startup with just 3 employees to a globally recognized brand with over 200 team members across 15 countries. The company specializes in creating biodegradable electronics components and solar-powered consumer devices that have disrupted the tech industry.
              </p>
              <p>
                Beyond her business achievements, Sarah is an advocate for women in STEM and entrepreneurship. She has mentored over 50 women founders and regularly speaks at conferences about sustainable business practices and inclusive leadership.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <img 
                src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sarah Johnson portrait"
                className="w-full aspect-[3/4] sm:aspect-[4/5] object-cover rounded-lg shadow-xl"
              />
              {/* Quote Box */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-amber-400 p-3 sm:p-4 lg:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-sm">
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-900 leading-tight">
                  "Innovation and sustainability can coexist. We don't have to choose."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Biography;
