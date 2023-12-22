import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import MovieDetail from './pages/MovieDetail'

function App () {
  return (
    <BrowserRouter>
      <div className=''>
        <div className='max-w-5xl mx-auto'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/movies/:id' element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
