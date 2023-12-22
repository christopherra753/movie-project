import { memo } from 'react'
import MovieItem from './MovieItem'

const Movies = memo(({ movies, addMovie, favorites }) => {
  const hasMovies = movies.length > 0
  return (
    hasMovies
      ? (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {
            movies.map(movie => {
              const isLike = favorites?.find(favorite => favorite.imdbID === movie.imdbID)
              return (
                <MovieItem key={movie.imdbID} addMovie={addMovie} movie={movie} isLike={isLike} />
              )
            })
          }
        </ul>
        )
      : (
        <div className='flex justify-center relative before:absolute before:h-[2px] before:w-full before:left-0 before:bg-gray-200 before:top-1/2 before:-translate-y-1/2'>
          <p className='text-3xl text-gray-600 relative px-4 bg-white'>¡No Movies!</p>
        </div>
        )
  )
})

export default Movies
