import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import MovieDetail from './pages/MovieDetail'

function App () {
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [sort, setSort] = useState(false)
  const [theme, setTheme] = useState('light')

  const addMovie = useCallback((movie) => {
    setFavorites((prevFavorites) => {
      const foundedMovie = prevFavorites.find((favorite) => favorite.imdbID === movie.imdbID)

      if (foundedMovie) {
        return prevFavorites.filter((favorite) => favorite.imdbID !== foundedMovie.imdbID)
      }

      const newMovie = {
        Poster: movie.Poster,
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID
      }

      return [...prevFavorites, newMovie]
    })
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
    : [...movies]

  return (
    <BrowserRouter>
      <div className='dark:bg-neutral-800 h-screen overflow-y-auto'>
        <div className='max-w-5xl mx-auto'>
          <Navbar setTheme={setTheme} />
          <Routes>
            <Route path='/' element={<Home search={search} setSearch={setSearch} movies={sortedMovies} setMovies={setMovies} addMovie={addMovie} favorites={favorites} sort={sort} setSort={setSort} />} />
            <Route path='/favorites' element={<Favorites favorites={favorites} addMovie={addMovie} />} />
            <Route path='/movies/:id' element={<MovieDetail addMovie={addMovie} favorites={favorites} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
