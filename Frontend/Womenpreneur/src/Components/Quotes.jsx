import React, { useState, useEffect } from 'react';
import { fetchQuote } from '../Components/Services/QuoteService';

const Quote = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      try {
        setIsLoading(true);
        const quoteData = await fetchQuote();
        setQuote(quoteData);
        setError(null);
      } catch (err) {
        setError('Failed to load quote. Please try again later.');
        setQuote({
          text: 'The future belongs to those who believe in the beauty of their dreams.',
          author: 'Eleanor Roosevelt'
        });
      } finally {
        setIsLoading(false);
      }
    };

    getQuote();
  }, []);

  return (
    <section id="quote" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-amber-400">Inspiration</span> Corner
        </h2>

        <div 
          className={`max-w-3xl mx-auto relative transition-all duration-500 
            ${isHovered ? 'transform scale-105' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-live="polite"
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
            </div>
          ) : error ? (
            <div className="bg-red-900/20 p-8 rounded-lg border border-red-700">
              <p>{error}</p>
              <p className="mt-4 text-xl italic">"{quote.text}"</p>
              <p className="mt-2 text-amber-400">— {quote.author}</p>
            </div>
          ) : (
            <div className="bg-gray-800/50 p-8 md:p-12 rounded-lg relative shadow-xl">
              <div className={`absolute -top-6 -left-6 text-6xl text-amber-400 opacity-50 
                transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
                "
              </div>
              <p className="text-xl md:text-2xl italic mb-6">{quote.text}</p>
              <p className="text-right text-amber-400 font-semibold">— {quote.author}</p>
              <div className={`absolute -bottom-6 -right-6 text-6xl text-amber-400 opacity-50 
                transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
                "
              </div>

              {isHovered && (
                <div className="absolute inset-0 bg-amber-400/5 rounded-lg animate-pulse"></div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quote;
