import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/movieList/MovieList';
import MovieDetails from './pages/movieDetails/MovieDetails';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Router>
        <Routes>
          <Route path='/movies/:id' element={<MovieDetails />}></Route>
          <Route path='/' element={<MovieList />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
