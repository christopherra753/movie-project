import React from 'react'
import Movies from '../components/Movies'

function Favorites ({ favorites, addMovie }) {
  return (
    <div className='p-5'>
      <div>
        <h2 className='text-3xl font-semibold text-gray-600 mb-5'>Favorite Movies:</h2>
        <Movies movies={favorites} addMovie={addMovie} favorites={favorites} />
      </div>
    </div>
  )
}

export default Favorites
