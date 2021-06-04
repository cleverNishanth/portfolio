import React from 'react'
import { Link } from 'react-router-dom'

function Level() {
  return (
    <div className='flex flex-col border-2 border-purple-800 lg:max-w-2xl md:max-w-lg sm:max-w-sm w-full mx-auto text-center p-5 bg-black bg-opacity-80 my-16'>
      <h1 className='text-yellow-500 text-3xl underline animate-bounce mb-6 '>
        Level Select
      </h1>
      <Link to='/about'>
        <h2 className='text-white text-2xl hover:text-blue-600 hover:underline cursor-pointer mb-6 max-w-max mx-auto'>
          About
        </h2>
      </Link>
      <Link to='/projects'>
        <h2 className='text-white text-2xl hover:text-blue-600 hover:underline cursor-pointer mb-6 max-w-max mx-auto'>
          Projects
        </h2>
      </Link>
      <Link to='/connect'>
        <h2 className='text-white text-2xl hover:text-blue-600 hover:underline cursor-pointer mb-6 max-w-max mx-auto'>
          Connect
        </h2>
      </Link>
      <Link to='/bonus'>
        <h2 className='text-white text-2xl hover:text-blue-600 hover:underline cursor-pointer mb-6 max-w-max mx-auto'>
          Bonus
        </h2>
      </Link>
      <div className='bg-yellow-300 bg-opacity-70 h-1 mb-4 w-5/6 mx-auto ' />
      <Link to='/start'>
        <h2 className='text-white text-2xl hover:text-blue-600 hover:underline cursor-pointer max-w-max mx-auto animate-pulse'>
          Restart
        </h2>
      </Link>
    </div>
  )
}

export default Level
