import React from 'react'
import { Link } from 'react-router-dom'

function CurrentBox({name}) {
  return (
    <div className=' text-center lg:absolute lg:right-0 lg:top-0 lg:m-8 lg:mr-16 border-2 border-purple-600 p-4 bg-black bg-opacity-80 lg:w-2/6 md:w-11/12 md:mx-auto sm:w-11/12 sm:mx-auto'>
      <h1 className=' text-yellow-500 text-3xl mb-4 '>current level</h1>
      <h1 className=' text-blue-500 text-2xl mb-4 '>{name}</h1>
      <div className='bg-yellow-300 bg-opacity-50 h-1 mb-4 w-5/6 mx-auto ' />
      <Link to='/menu'>
        <h1 className='animate-pulse text-white text-xl text__spaced cursor-pointer max-w-max mx-auto hover:underline'>
          return to menu
        </h1>
      </Link>
    </div>
  )
}

export default CurrentBox
