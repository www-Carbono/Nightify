import React from 'react'

interface props {
  name: string
  subtitle: string
}

const Feature: React.FC<props> = ({ name, subtitle }) => {
  return (
        <div className='boxService px-5 py-1 m-3'>
        <h1 className='font-bold mb-2 mt-2'>{name}</h1>
        <p className='text-justify'>{subtitle}</p>
      </div>

  )
}

export default Feature
