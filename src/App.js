import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieList from './components/movieList/MovieList'
import MovieDetails from './pages/movieDetails/MovieDetails'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import FormPages from './pages/Form/FormPages'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="movies/form/" element={<FormPages />}></Route>
        <Route path="movies/edit/:id" element={<FormPages />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
