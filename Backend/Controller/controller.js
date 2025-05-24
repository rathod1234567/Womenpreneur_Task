// const { fetchQuoteFromAPI } = require('../Services/quotesServices.js');

exports.getQuote = async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    // data is an array: [{ q: 'Quote text', a: 'Author' }]
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid data format from ZenQuotes API');
    }

    res.json({
      text: data[0].q,
      author: data[0].a,
    });
  } catch (error) {
    console.error('Fetch failed:', error.message);
    res.status(500).json({ error: error.message });
  }
};
