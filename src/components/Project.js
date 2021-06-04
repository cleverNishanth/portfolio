import React from 'react'

function Project({selectedProject}) {
  return (
    <div className='flex flex-col '>
      <h1 className='text-center text-4xl text-yellow-500 text__spaced hover:underline animate-pulse m-4'>
        {selectedProject.title}
      </h1>
      <div className='transition-all duration-500 flex align-center justify-center lg:flex-nowrap flex-wrap object-cover'>
        <a target='_blank' href={selectedProject.link}>
          <img
            className=' object-cover border-2 border-green-500'
            src={selectedProject.image}
            alt={selectedProject.title}
          />
        </a>
        <div className='flex flex-col lg:ml-10 md:text-center sm:text-center lg:mt-2 mt-8 '>
          <h1 className='text-yellow-500 text-2xl text__spaced mb-4'>
            Mission Brief:
          </h1>
          <p className='text-white text-xl font-serif mb-8'>
            {selectedProject.description}
          </p>
          <h1 className='text-yellow-500 text-2xl text__spaced mb-4'>
            Technologies:
          </h1>
          <p className='text-white text-xl font-sans'>
            {selectedProject.technologies}
          </p>
          <h1 className='text-yellow-500 mt-4 mb-1 text-2xl'>created:</h1>
          <p className='text-white font-serif italic text-xl'>
            {selectedProject.date_created}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project
