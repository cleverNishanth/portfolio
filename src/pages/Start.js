import React from 'react'
import { Link } from 'react-router-dom'
import start__logo from '../images/start.jpg'

function Start() {
  return (
    <div className='rounded lg:max-w-xl md:max-w-lg sm:max-w-sm relative text-center  mx-auto mt-20 border-2 border-purple-500 sm:mt-32'>
      <img className='w-full h-auto' src={start__logo} alt='start__logo' />
      <Link to='/player'>
        <p className='text-4xl bg-opacity-0 absolute bottom-0 w-full mx-auto mb-12 hover:underline cursor-pointer text-yellow-500 text__spaced start animate-pulse'>
          Start Game
        </p>
      </Link>
    </div>
  )
}

export default Start
