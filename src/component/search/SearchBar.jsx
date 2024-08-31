import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;

    // Send the search query to the backend
    axios.get(`http://localhost:3000/search?q=${query}`)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  };

  return (
    <div>
        
      <form onSubmit={handleSearch}>
      <div className='search'>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='search-input'
        />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
       
        </div>
      
        
       
      </form>

      {/* Display search results */}
      <div>
        {/* {results.length > 0 ? (
          <ul>
            {results.map(result => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )} */}
      </div>
    </div>
  );
}

export default SearchBar;
