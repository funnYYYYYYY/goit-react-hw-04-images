// import React, { Component } from 'react';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleSubmit = ({ target: { value: query } }) => {
    setQuery(query);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmitForm}>
        <button type="button" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSubmit}
          value={query}
        />
      </form>
    </header>
  );
}
