import React, {useState, createContext} from 'react';
import MovieList from './MovieList';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMoviews] = useState([
    {
      name: 'Harry Pooter',
      price: '$10',
      id: 23456
    },
    {
      name: 'Molan',
      price: '$10',
      id: 23457
    },
    {
      name: 'Star Wars',
      price: '$10',
      id: 23453
    }
  ]);
  return(
    <MovieContext.Provider value={[movies, setMoviews]}>
        {props.children}
    </MovieContext.Provider>
  )
}