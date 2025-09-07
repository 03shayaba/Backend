import React from 'react'
import Search from './Search'
import User from './User';
const left = () => {
  return (
    <div className='w-[30%]  text-white bg-black'>
        <h1 className='font-bold text-4xl p-2 px-11'>Chats</h1>
    <Search></Search>
    <hr />
    <User></User>
    
    </div>
  )
}

export default left