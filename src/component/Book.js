import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import {Routes, Route, useNavigate } from 'react-router-dom';
import SeatPicker from './SeatPicker';
import "./button.css";

export default function Book() {
 
const navigate = useNavigate();

const SeatPicker = () => {
 
  navigate('/Picker');
};

return(
<div>
  <div className="btn">
    <button onClick={SeatPicker}>Book</button>
  <Routes>
    <Route path="/Picker" element={ <SeatPicker /> }/>
  </Routes>
 
  </div>
</div>
);
}



// import React, { useState, useEffect }from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../context/UserAuthContext";
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const Book = () => {
//   const { Book } = useUserAuth();  
//   const navigate = useNavigate();

//   const handleBook = async () => {
   
//     try {
//       await Book();
//       navigate("/book");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
 

// return (
//     <>     
//         <div className="btn" style={ {paddingTop: 5, display: 'flex', justifyContent: 'right' } }>

//          <Button variant="default"  style={{ color: "black", background: "white" }}
//            onClick={handleBook} >
//           Book
//         </Button>

//       </div> 
//    </>
//    );
// }

// export default Book;
