import React from 'react'
import { Link } from 'react-router-dom'

import { CiHeart } from 'react-icons/ci'

function Movies ({ movies }) {
  const hasMovies = movies.length > 0
  return (
    hasMovies
      ? (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {
            movies.map(movie => (
              <li className='flex max-w-md mx-auto group relative  w-full' key={movie.imdbID}>
                <img className='flex-1 object-cover' src={movie.Poster} />
                <div className='absolute opacity-0 p-5 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity pointer-events-none backdrop-blur-sm flex items-center justify-center flex-col gap-5 text-white top-0 left-0 inset-0 bg-black/50'>
                  <button className='absolute group/button top-5 right-5 hover:bg-indigo-600 transition-colors rounded-full p-1'>
                    <CiHeart className='text-3xl' />
                    <span className='absolute hidden group-hover/button:block -bottom-4 left-1/2 -translate-x-1/2 text-xs w-20 pointer-events-none font-semibold'>I like it</span>
                  </button>
                  <p className='text-4xl text-center text-gray-200'>{movie.Title}</p>
                  <span className='text-indigo-500 text-center font-bold text-3xl'>({movie.Year})</span>
                  <Link to={`/movies/${movie.imdbID}`} className='px-8 py-2 rounded-lg inline-block bg-indigo-400 hover:bg-indigo-500 transition-colors'>Show Detail</Link>
                </div>

              </li>
            ))
          }
        </ul>
        )
      : <p className='text-xl text-gray-600'>¡No Movies!</p>
  )
}

export default Movies
