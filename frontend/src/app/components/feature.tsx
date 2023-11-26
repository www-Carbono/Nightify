import React from 'react'

interface props {
  name: string
  subtitle: string
}

const Feature: React.FC<props> = ({ name, subtitle }) => {
  return (
      <div className='boxService px-5 py-1 m-3 my-5 hover:bg-gray-300 sm:my-5 md:my-8 lg:max-w-sm lg:h-60'>
        <h1 className='font-bold mb-2 mt-2'>{name}</h1>
        <p className='text-justify'>{subtitle}</p>
      </div>

  )
}

export default Feature

// width: 380.9104px;
// height: 240.9792px;
