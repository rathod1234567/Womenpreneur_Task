const fetch = require('node-fetch');

exports.fetchQuoteFromAPI = async () => {
  const response = await fetch('https://zenquotes.io/api/random');

  if (!response.ok) {
    throw new Error('Failed to fetch quote from ZenQuotes API');
  }

  const data = await response.json();
  return {
    text: data[0].q,
    author: data[0].a,
  };
};
