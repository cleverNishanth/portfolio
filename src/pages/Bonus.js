import React, { useState } from 'react'
import song from '../sounds/song.mp3'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'

function Bonus() {
  return (
    <div className='flex flex-col justify-center align-center'>
      <Link
        to='menu'
        className=' mx-auto my-14 border-2 border-yellow-500 text-yellow-300 px-4 text-2xl bg-black bg-opacity-80 rounded-lg hover:bg-white hover:text-black transition-all duration-500 '
      >
        <button>Menu</button>
      </Link>
      <ReactAudioPlayer
        src={song}
        loop
        className='mx-auto text-white'
        controls
      />
    </div>
  )
}

export default Bonus
