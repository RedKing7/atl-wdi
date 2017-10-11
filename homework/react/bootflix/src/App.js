import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'
import axios from 'axios';

const key = 'd31f1a94';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (title) => {
    console.log("Search by Title");
    title = 'princess+bride'
    axios.get(`http://www.omdbapi.com/?apikey=${key}&`, { params: { t: title}})
    // Step 5: Save the response array to this.state.savedGifs
    .then((response) => {
      const movie = response.data;
      this.setState({movie: movie});
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }

  searchById = (id) => {
    console.log("Search by ID");
    id = 'tt0076759';
    axios.get(`http://www.omdbapi.com/?apikey=${key}&`, { params: { i: id}})
    // Step 5: Save the response array to this.state.savedGifs
    .then((response) => {
      const movie = response.data;
      this.setState({movie: movie});
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this.searchByTitle} searchById={this.searchById}/>
        <Movie
          title={this.state.movie.Title}
          released={this.state.movie.Released}
          director={this.state.movie.Director}
          genre={this.state.movie.Genre}
          plot={this.state.movie.Plot}
        />
      </div>
    );
  }
}

export default App;
