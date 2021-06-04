import React from 'react'
import { Link } from 'react-router-dom'
import playerImageOne from '../images/me.jpg'

function Player() {
  return (
    <div className='lg:max-w-xl md:max-w-lg sm:max-w-sm flex flex-col text-center mx-auto mt-20 border-2 border-purple-500 sm:mt-32 bg-black bg-opacity-80 '>
      <h1 className='text-yellow-600 my-6 font-normal text-4xl text__spaced underline'>
        Player Select
      </h1>
      <Link to='/menu'>
        <div className='p-4 border-dashed border-transparent border-2 hover:border-purple-400 hover:border-opacity-30 cursor-pointer w-1/2 block mx-auto rounded-lg my-4'>
          <img
            src={playerImageOne}
            className='h-32 w-32 border-2 rounded-full block mx-auto object-cover object-center'
            alt='player__logo'
          />
          <h2 className='my-2 font-normal text-3xl text__spaced text-yellow-600'>
            Nishanth
          </h2>
        </div>
      </Link>
      <div className='h-0.5 w-3/4 mx-auto bg-yellow-400 my-4' />
      <Link to='/start'>
        <h1 className='cursor-pointer hover:text-blue-500 hover:underline my-2 font-normal text-3xl text__spaced text-white mb-4 w-1/3 mx-auto'>
          restart
        </h1>
      </Link>
    </div>
  )
}

export default Player
