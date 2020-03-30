import React, {useState, createContext} from 'react';

export const MovieProvider = () => {
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
  return()
}