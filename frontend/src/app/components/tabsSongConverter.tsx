import React from 'react'

interface props {
  uploadType: boolean
  handleClick: (e: React.MouseEvent) => void
}

const TabsSongConverter: React.FC<props> = ({ uploadType, handleClick }) => {
  return (
        <div className='flex flex-col button xl:flex-row'>
        <p onClick={(e) => { handleClick(e) }} className='pb-3 mb-5 button text-center hover:bg-gray-200 ' style={uploadType
          ? { boxShadow: '2px 2px 0px 0px #000', fontWeight: 'bold', backgroundColor: 'rgb(229 231 235)' }
          : { boxShadow: '2px 2px 0px 0px #fff', fontWeight: 'normal' }}>Copiar Link Youtube</p>
        <p onClick={(e) => { handleClick(e) }} className='pb-3 mb-5 button text-center hover:bg-gray-200'style={!uploadType ? { boxShadow: '2px 2px 0px 0px #000', fontWeight: 'bold', backgroundColor: 'rgb(229 231 235)' } : { boxShadow: '2px 2px 0px 0px #fff', fontWeight: 'normal' }}>Buscar Por Nombre</p>
        </div>
  )
}

export default TabsSongConverter
