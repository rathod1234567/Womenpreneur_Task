export const fetchQuote = async () => {
  try {
    const response = await fetch('https://womenpreneur-task.onrender.com/api/quote');
console.log(response)
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const data = await response.json();

    return {
      text: data.text,
      author: data.author,
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
};
