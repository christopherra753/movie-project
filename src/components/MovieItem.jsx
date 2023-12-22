import React from 'react'
import { BsHeart, BsHeartbreak, BsHeartFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

function MovieItem ({ addMovie, movie, isLike }) {
  return (
    <li className='flex max-w-md mx-auto group relative  w-full' key={movie.imdbID}>
      <img className='flex-1 object-cover' src={movie.Poster} />
      <div className='absolute opacity-0 p-5 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity pointer-events-none backdrop-blur-sm flex items-center justify-center flex-col gap-5 text-white top-0 left-0 inset-0 bg-black/50'>
        <p className='text-4xl text-center text-gray-200'>{movie.Title}</p>
        <span className='text-indigo-500 text-center font-bold text-3xl'>({movie.Year})</span>
        <Link to={`/movies/${movie.imdbID}`} className='px-8 py-2 rounded-lg inline-block bg-indigo-400 hover:bg-indigo-500 transition-colors'>Show Detail</Link>
      </div>
      <button onClick={() => addMovie(movie)} className={`absolute ${isLike ? 'block hover:text-red-400 hover:bg-transparent bg-white/70 hover:backdrop-blur-none backdrop-blur-sm' : 'hidden group-hover:block hover:text-indigo-500'} group/button top-5 right-5 text-white transition-colors rounded-full p-2`}>
        {
          isLike
            ? (
              <>
                <BsHeartFill className='text-2xl block text-indigo-500 group-hover/button:hidden' />
                <BsHeartbreak className='text-2xl hidden group-hover/button:block ' />
              </>
              )

            : (
              <>
                <BsHeartFill className='text-2xl hidden text-indigo-500 group-hover/button:block' />
                <BsHeart className='text-2xl group-hover/button:hidden group-hover/button:text-indigo-500' />
              </>)
        }
        <span className='absolute hidden group-hover/button:block -bottom-4 left-1/2 -translate-x-1/2 text-xs min-w-max px-1 rounded-md pointer-events-none font-semibold bg-white'>{isLike ? "Don't Like it" : 'I like it'}</span>
      </button>
    </li>
  )
}

export default MovieItem
