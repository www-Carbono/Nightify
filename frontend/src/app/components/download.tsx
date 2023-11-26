import React from 'react'
import Link from 'next/link'

import { type info } from './types'

interface props {
  downloadInfo: info | null
}

const DownloadSong: React.FC<props> = ({ downloadInfo }) => {
  console.log(process.env.URL)
  return (
    downloadInfo !== null &&
        <div className='flex flex-col items-center justify-center text-center my-5 '>
        <h3 className='font-bold text-sm mb-2'>{downloadInfo.nombre}</h3>
          <p className='text-sm'>Descargar Cancion: <Link href={`${process.env.URL}/download/${downloadInfo.fileName}`} className='font-bold pb-5'>Click Aquí</Link> </p>
          <audio
      controls
      src={`${process.env.URL}/download/${downloadInfo.fileName}`}
      className='mt-5'
      >
      Your browser does not support the
      <code>audio</code> element.
</audio>
      </div>
  )
}

export default DownloadSong
