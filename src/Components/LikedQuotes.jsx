import React, { useEffect, useState } from 'react';

const LikedQuotes = () => {
  const [likedQuotes, setLikedQuotes] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem('likedQuotes')) || [];
    setLikedQuotes(likedIds);
    fetchLikedQuotes(likedIds);
  }, []);

  const fetchLikedQuotes = async (likedIds) => {
    const fetchedQuotes = await Promise.all(
      likedIds.map(async (id) => {
        const response = await fetch(`https://dummyjson.com/quotes/${id}`);
        return response.json();
      })
    );
    setQuotes(fetchedQuotes);
  };

  const handleUnlike = (id) => {
    const updatedLikedQuotes = likedQuotes.filter((quoteId) => quoteId !== id);
    setLikedQuotes(updatedLikedQuotes);
    localStorage.setItem('likedQuotes', JSON.stringify(updatedLikedQuotes));
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  return (
    <div>
      <h1>Liked Quotes</h1>
      {quotes.length === 0 ? (
        <p>No liked quotes yet. Start liking some quotes!</p>
      ) : (
        quotes.map((quote) => (
          <div key={quote.id}>
            <p>{quote.text}</p>
            <button onClick={() => handleUnlike(quote.id)}>Unlike</button>
          </div>
        ))
      )}
    </div>
  );
};

export default LikedQuotes;