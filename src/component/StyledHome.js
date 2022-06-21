import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;

`;
export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: black;
color: white;
align-items: center;
padding: 10px;
font-size: 20px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;
export const AppName = styled.div`
 display: flex;
 flex-direction: row;
 align-items: clearInterval;
 `;
export const SearchBox = styled.div`
 display: flex;
 flex-direction: row;
 padding: 10px 10px;
 background-color: white;
 border-radius: 6px;
 margin-left: 20px;
 width: 50%;
 `;
export const SearchIcon = styled.img`
 width: 25px;
 height: 25px;
 `;

export const SearchInput = styled.input`
color: black;
font-size: 16px;
font-weight: bold;
border: none;
outline: none;
margin-left: 15px;
`;
export const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 24px;
justify-content: space-between;
max-width: 1200px;
`; 
export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;