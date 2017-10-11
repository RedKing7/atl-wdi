import React from 'react';

// Update the forms to utilize methods being passed down from App.js
const Search = (props) => {
  const {searchByTitle, searchById} = props;

  let title = '';

  let id = '';

  const handleTitleChange = (e) =>{
    title = e.target.value;
    console.log(title)
  }

  const handleIdChange = (e) =>{
    id = e.target.value;
    console.log(id)
  }

  const handleSubmitTitle = (e) =>{
    e.preventDefault();
    searchByTitle(title);
  }

  const handleSubmitId = (e) =>{
    e.preventDefault();
    searchById(id);
  }

  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form id="title-search-form" onSubmit={handleSubmitTitle}>
          <input type="text" name="title" placeholder="Enter movie title" onChange={handleTitleChange}/>
          <input type="submit" value="Search for this title" />
        </form>
      </div>

      <div className="search">
        <form id="id-search-form" onSubmit={handleSubmitId}>
          <input type="text" name="id" placeholder="Enter omdb movie ID" onChange={handleIdChange}/>
          <input type="submit" value="Search by ID" />
        </form>
      </div>

    </section>
  );
};

export default Search;