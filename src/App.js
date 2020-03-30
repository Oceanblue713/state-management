import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav';

import './App.css';

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

function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
