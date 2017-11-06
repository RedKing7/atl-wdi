<<<<<<< HEAD
import React from 'react';

// Update the forms to utilize methods being passed down from App.js
const Search = (props) => {
  const {searchByTitle, searchById} = props;

  let title = '';

  let id = '';

  const handleTitleChange = (e) =>{
    title = e.target.value;
    title = title.split(' ').join('+');
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
=======
import React, { Component } from 'react'

class Search extends Component {
  // Update the forms to utilize methods being passed down from App.js,
  // along with the Handle Change Functions to update state
  state = {
    title: "",
    id: ""
  }

    // Use this function to update the state as a user types in the "title" input
  handleTitleChange = (event) => {
    event.preventDefault()

  }


    // Use this function to update the state as a user types in the "id" input
  handleIdChange = (event) => {
    event.preventDefault()

  }
  render () {
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

        <div className="search">
          <form id="title-search-form" method="get">
            /* Use "Value" to make the Title input update as state updates*/
            <input type="text" name="title" placeholder="Enter movie title" />
            <input type="submit" value="Search for this title" />
          </form>
        </div>

        <div className="search">
          <form id="id-search-form" method="get">
            /* Use "Value" to make the ID input update as state updates*/
            <input type="text" name="id" placeholder="Enter omdb movie ID" />
            <input type="submit" value="Search by ID" />
          </form>
        </div>

      </section>
    );
  }
}

export default Search;
>>>>>>> 2f37674758137f42ba7cf539ea877fa754e057cc
