import React from 'react'
import ConnectBox from '../components/ConnectBox'
import CurrentBox from '../components/CurrentBox'
import { AiFillGithub } from 'react-icons/ai'
import { FaMailBulk } from 'react-icons/fa'

function Connect() {
  return (
    <div className='flex flex-wrap align-center justify-center'>
      <CurrentBox name='Connect' />
      <div>
        <ConnectBox
          name='Mail'
          icon={
            <FaMailBulk className='text-purple-400 text-5xl text-center my-6 mx-auto cursor-pointer' />
          }
          content="Interested in working together? Reach out and let's connect today"
          link='mailto:nishanishanth5464@gmail.com'
        />
      </div>
      <div>
        <ConnectBox
          name='Github'
          icon={
            <AiFillGithub className='text-purple-400 text-5xl text-center my-6 mx-auto cursor-pointer' />
          }
          content='Checkout source code for some cool porjects, including this portfolio project!'
          link='https://github.com/clevernishanth'
        />
      </div>
    </div>
  )
}

export default Connect
