import React, { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { useParams } from 'react-router-dom'

function MovieDetail () {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=6c0a72d6&i=${id}`)
      const json = await response.json()
      if (json.Response === 'True') setMovie(json)
      else if (json.Response === 'False') setMovie({})
    }
    getMovie()
  }, [])

  return (
    <div className='h-[calc(100dvh-80px)] p-5 flex items-center justify-center'>
      <div className='max-w-xs md:max-w-none md:flex-row flex flex-col justify-center md:w-full'>
        <div className='relative max-w-sm'>
          <img src={movie.Poster} className='w-full h-full object-cover ' />
          <button className='absolute group top-2 right-2 bg-indigo-600 hover:bg-indigo-700 transition-colors  rounded-full p-1 '>
            <CiHeart className='text-3xl text-white' />
            <span className='absolute group-hover:backdrop-blur-sm hidden group-hover:block -bottom-6 left-1/2 -translate-x-1/2 text-xs w-12 py-0.5 px-1 rounded-lg pointer-events-none font-semibold text-white bg-black/50'>I like it</span>
          </button>
        </div>
        <section className='bg-neutral-200 p-4 flex flex-col gap-y-2 md:gap-y-4 max-w-lg w-full'>
          <div className='flex md:flex-col items-baseline justify-between'>
            <h2 className={`text-3xl ${movie.Title?.length > 10 ? 'text-lg md:text-3xl' : ''}  md:text-6xl text-indigo-800 font-bold`}>{movie.Title}</h2>
            <p className='text-gray-700 text-lg md:text-2xl min-w-max font-semibold'>({movie.Year})</p>
          </div>
          <div className='flex items-baseline gap-x-2 md:flex-col justify-between'>
            <p className='text-lg md:text-2xl font-medium text-violet-800'>Genre: </p>
            <ul className='flex items-center justify-center flex-wrap gap-x-3 gap-y-1'>
              {
              movie.Genre?.split(',').map(genre => <li className='bg-gray-500 px-2 text-xs rounded-lg py-0.5 md:px-6 md:py-1 md:text-base text-white' key={genre}>{genre}</li>)
            }
            </ul>
          </div>
          <div className='flex justify-between md:flex-col items-baseline gap-x-2'>
            <p className='text-lg font-medium md:text-2xl text-violet-800'>Plot:</p>
            <span className='font-medium text-clip text-xs md:text-lg'>{movie.Plot}</span>
          </div>

          <div className='flex items-baseline gap-x-2 md:flex-col justify-between'>
            <p className='text-lg font-medium md:text-2xl text-violet-800'>Tipo: </p>
            <span className='text-base uppercase text-gray-500 md:text-2xl font-semibold'>{movie.Type}</span>
          </div>
          <div className='flex items-baseline md:flex-col gap-x-2 justify-between'>
            <p className='text-lg font-medium md:text-2xl text-violet-800'>Writer:</p>
            <p className='text-base uppercase text-gray-500 font-semibold md:text-2xl'>{movie.Writer}</p>
          </div>

        </section>
      </div>
    </div>
  )
}

export default MovieDetail
