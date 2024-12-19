import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for recipes..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
