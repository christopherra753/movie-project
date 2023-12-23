import React from 'react'
import { Link } from 'react-router-dom'
import { CiDark, CiSun } from 'react-icons/ci'

function Navbar ({ setTheme }) {
  const handleClick = () => {
    console.log('first')
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className='flex items-center justify-between h-20 p-5'>
      <Link className='text-xl font-bold text-indigo-800 uppercase dark:text-indigo-400' to='/'>Home</Link>
      <ul className='flex  gap-5'>
        <button onClick={handleClick} className='hover:bg-neutral-300 dark:hover:bg-neutral-700 group relative transition-colors rounded-lg p-1'>
          <CiDark className='text-3xl dark:hidden' />
          <CiSun className='hidden dark:block text-3xl text-white' />
          <p className='absolute hidden group-hover:block -bottom-4 left-1/2 -translate-x-1/2 text-xs w-20 pointer-events-none font-semibold'>
            <span className='dark:hidden'>Dark Mode</span>
            <span className='hidden dark:block text-white'>Light Mode</span>
          </p>
        </button>
        <Link className='text-lg font-semibold dark:bg-indigo-400 dark:text-neutral-800 bg-indigo-800 dark:hover:bg-indigo-500 hover:bg-indigo-900 transition-colors text-white px-6 py-1 inline-block rounded-lg' to='/favorites'>
          Favorites
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
