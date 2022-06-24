import React, { Component } from 'react';
// import styled from "styled-components";
import { Button } from "react-bootstrap";
// import React from "react";
import SeatPicker from "./SeatPicker";
import Book from "./Book";

import {
  MovieContainer,
  CoverImage,
  MovieName,
  InfoColumn,
  MovieInfo
} from './StyledMovieList';

const MovieList = (props) => {
   const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    
  <MovieContainer>
    <CoverImage src={Poster} />
  <MovieName>{Title}</MovieName>
  <InfoColumn>
    <MovieInfo>Year: {Year}</MovieInfo>
    {/* <MovieInfo>Type: {Type}</MovieInfo> */}
          <Book />
      
  </InfoColumn>
  </MovieContainer>
  );
};

export default MovieList;























// const MovieList = () => {
//   <div className="movie">
//      this is a movie
//     </div>
// };




// const MovieList = (props) => {
//     return ( 
//     <>
//       {props.movies.map((movie, index)=> (
//       <div>
//         <img src={movie.Poster} alt='movie'></img>
//       </div>
//       ))}
//     </>
  
// );
// };


// export default MovieList;