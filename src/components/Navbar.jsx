import React from 'react'
import { Link } from 'react-router-dom'
import { CiDark } from 'react-icons/ci'

function Navbar () {
  return (
    <nav className='flex items-center justify-between h-20 p-5'>
      <Link className='text-xl font-bold text-indigo-800 uppercase' to='/'>Home</Link>
      <ul className='flex  gap-5'>
        <button className='hover:bg-neutral-300 group relative transition-colors rounded-lg p-1'>
          <CiDark className='text-3xl' />
          <span className='absolute hidden group-hover:block -bottom-4 left-1/2 -translate-x-1/2 text-xs w-20 pointer-events-none font-semibold'>Dark Mode</span>
        </button>
        <Link className='text-lg font-semibold bg-indigo-800 hover:bg-indigo-900 transition-colors text-white px-6 py-1 inline-block rounded-lg' to='/favorites'>
          Favorites
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
