import React from 'react'
import AvatarGroup from './avatarGroup'

interface CardProps {
  title: string,
  status: string
  type: string,
  dev: string
}

const CardTask = ({title, status, type, dev}: CardProps) => {
  return (
    <div className='bg-white shadow-lg rounded-lg w-auto h-45 mt-4 mb-4 mr-4 ml-4'>
      <p className='text-left ml-3 mr-3 mt-3 mb-2 font-semibold'>{title}</p>
      <p className='text-left ml-3 mb-3 mr-3'>{status}</p>
      <div className='flex row items-start px-2 text-sm font-semibold text-gray=800'>
        <span className="w-1 h-7 bg-red-500 rounded-l"></span>
        <p className='text-left bg-gray-200 p-1 rounded-r-md'>{type}</p>
      </div>
      <div className="ml-3 mt-3">
        <AvatarGroup names={dev.split(',')}/>
      </div>
    </div>
  )
}

export default CardTask