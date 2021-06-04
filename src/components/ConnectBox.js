import React from 'react'

function ConnectBox({ name, icon, content, link }) {
  return (
    <div className='m-10 border-2 border-purple-500 p-6 text-center bg-black bg-opacity-80 lg:max-w-2xl md:max-w-full sm:max-w-full'>
      <h1 className='mb-2 text-purple-500 text-5xl '>{name}</h1>
      <a target='_blank' href={link}>{icon}</a>
      <div className='bg-yellow-300 w-3/4 mx-auto h-1 mb-4 opacity-80' />
      <h1 className='text-lg text__spaced font-sans text-white mt-8'> {content}</h1>
    </div>
  )
}

export default ConnectBox
