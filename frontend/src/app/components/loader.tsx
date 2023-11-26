import React from 'react'
const LoaderSong: React.FC = () => {
  return (
    <div className='flex flex-col justify-center  items-center'>
<p className='mb-5'>Cargando por favor espera...</p>
    <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
    </div>
    </div>
  )
}

export default LoaderSong
