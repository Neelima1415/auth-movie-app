import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import Signup from "./component/Signup";
import ProtectedRoute from "./component/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import React, {  useState } from "react";
// import styled from "styled-components";




// const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2baa49f27ec5d798d264b0a0b571d5c0&page=1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=2baa49f27ec5d798d264b0a0b571d5c0&query="

function App() {
   const [ movies, setMovies ] = useState([
  //   {
  //     "Title": "Star Wars",
  //     "Year": "1977",
  //     "imdbID": "tt0076759",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
  // },
  // {
  //     "Title": "Star Wars: Episode V - The Empire Strikes Back",
  //     "Year": "1980",
  //     "imdbID": "tt0080684",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  // },
  // {
  //     "Title": "Star Wars: Episode VI - Return of the Jedi",
  //     "Year": "1983",
  //     "imdbID": "tt0086190",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  // },
  ]);

  // useEffect(() => {
  //   fetch(FEATURED_API)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setMovies(data.results);
  //   });
    
  // }, []);


  return (
    
    <Container style={{ width: "400px" }}>
      {/* <Header>React Movie App</Header> */}
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot" element={<ForgotPassword/>} />          
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>

    
  );
}

export default App;