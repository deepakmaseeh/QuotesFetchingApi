import React, { useState, useEffect } from 'react';
import '../App.css'

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [liked, setLiked] = useState(false);

  const fetchQuote = async () => {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    setQuote(data);
    console.log(data);
    setLiked(localStorage.getItem(`quote_${data.id}`) !== null);
  };

  const handleLike = () => {
    if (liked) {
      localStorage.removeItem(`quote_${quote.id}`);
      setLiked(false);
    } else {
      localStorage.setItem(`quote_${quote.id}`, JSON.stringify(quote));
      setLiked(true);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <p className="quote">{quote.quote}</p>
      <p className="author">- {quote.author}</p>
      <div className="button-container">
        <button className="button" onClick={fetchQuote}>New Quote</button>
        <button className="button" onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
      </div>
    </div>
  );
};

export default Quote;