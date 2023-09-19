import React, { useEffect, useState } from 'react';
import MovieItems from './movieItems.jsx';
import Nav from './Nav.jsx';
import './App.css';

const App = () => {

  const move = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Title": "Superman Returns",
    "Type": "movie",
    "Year": "2006",
    "imdbID": "tt0348150"
  }

  const [movies, setMovies] = useState([]);
  const [Search, setSearch] = useState('superman');

  const movieSearch = async () => {
    let url = `http://omdbapi.com?apikey=46bc6974&s=${Search}`;
    let request = await fetch(url);
    let response = await request.json();
    setMovies(response.Search);
  }

  useEffect(() => {
    movieSearch(Search);
  }, []);

  const updateSearch = (value) => {
    setSearch(value);

  }
  const updateMovies = () => {
    movieSearch(Search);
    // console.log(Search);
  }

  return (
    <>
      <Nav
        mySearch={Search}
        updateSearch={updateSearch}
        updateMovies={updateMovies}
      />
      <div className="mx-5 row">
        {
          movies?.length > 0 ?
            (movies.map((element) => {
              return <div key={element.imdbID} className="col-3">
                <MovieItems movie={element} />
              </div>
            })) :
            (<div>No movies found.</div>)
        }
      </div>
      <div className="my-5">&nbsp;</div>
    </>
  );
};

export default App;
