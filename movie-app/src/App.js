// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import NotfoundView from "./components/Notfound";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/Aboutview";
import SearchView from "./components/Searchview";
import { Route, Routes } from "react-router-dom";
import MovieView from "./components/Movieview";
// import Hero from "./components/Hero";
// import { matchRoutes } from "react-router-dom";

function App() {
  const [popularResults, setPopularResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e65371827c08bf1de82a0f186dc1b813&language=en-US&`
    )
      .then((res) => res.json())
      .then((data1) => {
        setPopularResults(data1.results);
      });
  });

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=e65371827c08bf1de82a0f186dc1b813&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <>
      <NavBar serachText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home popularResults={popularResults} />}
        />
        <Route exact path="/aboutus" element={<AboutView />} />

        <Route
          exact
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route exact path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<NotfoundView />} />
      </Routes>
    </>
  );
}

export default App;
