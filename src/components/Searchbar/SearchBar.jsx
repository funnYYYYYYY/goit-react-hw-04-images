import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = ({ target: { value: query } }) => {
    this.setState({ query });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmitForm}>
          <button type="button" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSubmit}
            value={query}
          />
        </form>
      </header>
    );
  }
}
