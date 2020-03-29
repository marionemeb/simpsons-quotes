import React from 'react';
  
function DisplayQuotes({ quotes }) {
  return (
    <div className="DisplayQuotes">
      <img
        src={quotes.image}
        alt={quotes.character}
      />
      <ul>
        <li>Character: {quotes.character}</li>
        <li>Quote: {quotes.quote}</li>
      </ul>
    </div>
  );
};
  
export default DisplayQuotes;