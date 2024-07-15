import './App.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MoviesList from './components/moviesAction.tsx';

const App = () => {
  return (
<>
<div className="App">
<Navbar />

<MovieList />

<MoviesList />

</div>

</>

);
};

export default App;
