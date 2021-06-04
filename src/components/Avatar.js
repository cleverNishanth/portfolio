import React from 'react'
import {FaMailBulk} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import avatar from '../images/avatar.jpg'

function Avatar() {
    return (
      <div className='flex m-4 ml-8 flex-col sm:my-0 '>
        <img
          className=' sm:h-24 sm:w-24 h-28 w-28 object-cover border-2 border-white rounded-full mb-8 sm:mb-4 '
          src={avatar}
          alt='avatar'
        />
        <div className='flex justify-around w-full text-3xl cursor-pointer text-purple-600 '>
          <a target='_blank' href='mailto:nishanishanth5464@gmail.com'>
            <FaMailBulk />
          </a>
          <a target='_blank' href='https://github.com/clevernishanth'>
            <AiFillGithub />
          </a>
        </div>
      </div>
    )
}

export default Avatar
