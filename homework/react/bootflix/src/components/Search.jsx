import React from 'react';

// Update the forms to utilize methods being passed down from App.js
const Search = (props) => {
  const {searchByTitle, searchById} = props;
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form id="title-search-form" onSubmit={(e) =>{e.preventDefault(); searchByTitle();}}>
          <input type="text" name="title" placeholder="Enter movie title" />
          <input type="submit" value="Search for this title" />
        </form>
      </div>

      <div className="search">
        <form id="id-search-form" onSubmit={(e) =>{e.preventDefault(); searchById();}}>
          <input type="text" name="id" placeholder="Enter omdb movie ID" />
          <input type="submit" value="Search by ID" />
        </form>
      </div>

    </section>
  );
};

export default Search;