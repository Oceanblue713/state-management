import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {
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
  ])

  return(
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
      ))}
    </div>
  );
}

export default MovieList;