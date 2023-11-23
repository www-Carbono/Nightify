import React from 'react'

interface props {
  uploadType: boolean
  handleClick: (e: React.MouseEvent) => void
}

const TabsSongConverter: React.FC<props> = ({ uploadType, handleClick }) => {
  return (
        <div className='flex flex-row button '>
        <p onClick={(e) => { handleClick(e) }} className='pb-3  button' style={uploadType
          ? { boxShadow: '2px 2px 0px 0px #000', fontWeight: 'bold' }
          : { boxShadow: '2px 2px 0px 0px #CEFF1A', fontWeight: 'normal' }}>Copiar Link Youtube</p>
        <p onClick={(e) => { handleClick(e) }} className='pb-3 button mx-5'style={!uploadType ? { boxShadow: '2px 2px 0px 0px #000', fontWeight: 'bold' } : { boxShadow: '2px 2px 0px 0px #CEFF1A', fontWeight: 'normal' }}>Buscar Por Nombre</p>
        </div>
  )
}

export default TabsSongConverter
