// import React, { useState, useEffect }from "react";
import React, { useState } from "react";
import { Component } from 'react';
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../context/UserAuthContext";
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';
import axios from "axios";
import {
  Container,
  Header,
  AppName,
  SearchBox,
  SearchIcon,
  SearchInput,
  MovieListContainer,
  Placeholder
} from './StyledHome';

const API_KEY = 'c67a45f5';

function Home()  {
  const [searchQuery, updateSearchQuery] = useState();

  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (searchString) => {
    const response= await axios.get(
      `http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
      );
    // console.log(response)
    updateMovieList(response.data.Search);
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData (event.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    // style={{ width: "1200px" }} 
  <Container>
  
    <Header>
      <AppName>
        React Movie App
        </AppName>
        <SearchBox>
           <SearchIcon src="/search_icon.png" /> 
          <SearchInput 
           placeholder="Search Movie"
           value={searchQuery} 
           onChange={onTextChange}/>
        </SearchBox>
        </Header>
        <MovieListContainer>
          {movieList?.length
           ? movieList.map((movie, index)=> (
           <MovieList key={index} movie={movie} />
           ))
            :"No Movie Search" } 
        
          
          </MovieListContainer>
          
     </Container>
  );
  }

  export default Home;
  































  // const Home = () => {
  // const [movies, setMovies] = useState([]);
   
  
  // const { logOut, user } = useUserAuth();
  // const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const getMovieRequest = async () => {
  //   const url = "http://www.omdbapi.com/?s=star wars&apikey=c67a45f5"
    
  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   console.log(responseJson);
  //   setMovies(responseJson.Search);

  // };

  // useEffect(() => {
  //   getMovieRequest();
  // }, []);

  //  return (
  //   <div className='container-fluid movie-app'>
  //     {/* <div className="row"> */}
  //     <MovieList movies={movies} />
  //     </div>
  //   //  </div> 
  //  )




       {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
       </div> */}

      {/* <div className="movie"> This is a movie component </div> */}
      
       {/* <div className="d-grid gap-2">
         <Button variant="primary" onClick={handleLogout}>
          Log out
     </Button>
      </div> */}
  //  </>
  // );
// };
 
