import React from 'react'
import { CiGrid41 } from 'react-icons/ci'
import Movies from '../components/Movies'

function Home ({ addMovie, search, setSearch, movies, favorites, setMovies }) {
  const searchMovies = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://www.omdbapi.com/?apikey=6c0a72d6&s=${search}`)
    const json = await response.json()

    if (json.Response === 'True') setMovies(json.Search)
    else if (json.Response === 'False') setMovies([])
  }

  return (
    <div className='p-5'>
      <header>
        <section className='flex items-center gap-2'>
          <h2 className='text-3xl font-semibold text-gray-600'>Movie Browser</h2>
          <CiGrid41 className='text-3xl mt-1.5' />
        </section>
        <section className='flex flex-col gap-y-3  sm:flex-row md:items-center justify-between py-5'>
          <form onSubmit={searchMovies} className='flex gap-2'>
            <input
              type='text'
              className='outline-none border px-4 py-1 rounded-lg focus:border-gray-400'
              placeholder='Movie'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className='bg-indigo-600/90 hover:bg-indigo-600 transition-colors px-4 py-1 rounded-lg text-white'>Search</button>
          </form>
          <aside>
            <button className='border border-gray-500 hover:bg-blue-500 hover:border-blue-500 transition-colors font-medium hover:text-white rounded-lg px-4 py-1 '>Sort by Title</button>
          </aside>
        </section>

      </header>
      <main className='py-5'>
        <Movies addMovie={addMovie} movies={movies} favorites={favorites} />
      </main>
    </div>
  )
}

export default Home
