import React from 'react'
import CurrentBox from '../components/CurrentBox'
import Header from '../components/Header'

function About() {
  const playerImageOne = 'https://bit.ly/3c9rZt4'
  return (
    <div>
      <CurrentBox name='about' />
      <div className=' flex flex-col text-center border-2 border-purple-600 p-6 bg-black bg-opacity-80 m-4 lg:w-1/2 lg:mx-auto transition-all duration-700 my-16'>
        <div className='items-center flex flex-row text-center mx-auto justify-around w-full mb-10'>
          <img
            src={playerImageOne}
            className='h-32 w-32 border-2 rounded-full max-w-max mx-auto object-cover object-center'
            alt='player__logo'
          />
          <div className='text-white mx-auto text__spaced text-xl text-left font-serif sm:text-lg'>
            <h1 className='m-4'>
              <strong className='text-yellow-400'>Name: </strong>Nishanth
            </h1>
            <h1 className='m-4'>
              <strong className='text-yellow-400'>Location: </strong>India
            </h1>
            <h1 className='m-4'>
              <strong className='text-yellow-400'>Occupation: </strong>Student
            </h1>
          </div>
        </div>
        <div>
          <h1 className='text-blue-500 sm:text-lg font-sans mb-6 italic'>
            Nishanth is a React JS Web and Mobile Developer who is also Student
            In a VSB Engineering collage. He is well versed in React,
            JavaScript, TailwindCss, Python, c and traditional web languages
            such as CSS and HTML....
          </h1>
          <h1 className=' sm:text-lg font-sans text-blue-500 mb-8 italic'>
            he has built numerous progressive web and mobile application With
            React JS. These projects are hosted on netlify. If you want to check
            those projects, please kindly navigate to the project level...
          </h1>
          <h1 className='text-3xl animate-bounce text-red-500'>Thank you</h1>
        </div>
      </div>
    </div>
  )
}

export default About
