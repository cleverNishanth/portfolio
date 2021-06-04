import React from 'react'
import Avatar from './Avatar'
import HeaderInfo from './HeaderInfo'

function Header() {
  return (
    <div className="justify-around bg-black bg-opacity-80 text-left flex lg:w-5/12 lg:m-5 md:w-11/12 sm:w-11/12 sm:mx-auto md:mx-auto mb-16 p-4 border-2 border-purple-800 sm:mb-7">
      <HeaderInfo />
      <Avatar />
    </div>
  )
}

export default Header
