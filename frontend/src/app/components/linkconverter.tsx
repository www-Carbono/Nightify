'use client'
import React from 'react'

import { type props } from './types'

// Components
import LoaderSong from './loader'
import FormConverter from './form'
import DownloadSong from './download'

const LinkConverter: React.FC<props> = ({ downloadInfo, loaded, sendSong }) => {
  return (
    <div>
      <FormConverter sendSong={sendSong} placeholder='Inserta tu link de youtube'/>
      <DownloadSong downloadInfo={downloadInfo}/>
      {
        !loaded &&
        <div className='flex justify-center items-center mb-10 mt-10'>
        <LoaderSong/>
          </div>
      }
    </div>

  )
}

export default LinkConverter
