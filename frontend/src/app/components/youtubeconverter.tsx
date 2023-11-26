'use client'
import React, { useState } from 'react'
import { type props } from './types'
import Image from 'next/image'

// Components
import LoaderSong from './loader'
import FormConverter from './form'
import DownloadSong from './download'

interface prueba extends props {
  sendSongYoutube: any
  search: any
  youtubeInfo: any
  youtubeSearchLoaded: boolean
}

const YoutubeConverter: React.FC<prueba> = ({ downloadInfo, loaded, sendSong, sendSongYoutube, search, youtubeInfo, youtubeSearchLoaded }) => {
  const [selected, setSelected] = useState('')

  return (
  <div>
    <FormConverter sendSong={sendSong} placeholder='Escribe el Nombre de tu Cancion' sendSongYoutube={sendSongYoutube} selected={selected} youtubeInfo={youtubeInfo}/>
    {
    (search.data === undefined || !youtubeSearchLoaded) &&
    <DownloadSong downloadInfo={downloadInfo}/>
    }
      {
        (!loaded || !youtubeSearchLoaded) &&
        <div className='flex justify-center items-center mb-10 mt-10'>
          <LoaderSong/>
        </div>
      }

      {
        search.data !== undefined && search.data.length > 1 &&
        search.data.slice(0, 10).map((rec: any) => {
          if (rec.type === 'video') {
            return (

              <div className='flex flex-col items-center bg-white  rounded-xl gap-5 cursor-pointer hover:bg-gray-200 border-solid border-2 m-6 efecto sm:flex-row sm:items-center sm:justify-start' key={rec.id} onClick={(e) => { setSelected(rec.url); search.data = undefined }}>
                <Image src={rec.bestThumbnail.url} alt={rec.title} width={128} height={128} className='rounded-md mt-4 sm:m-2' style={{ width: 210, height: 128 }}/>
                <div>
              <p className='text-center text-sm sm:text-base sm:text-start'>{rec.title}</p>
              <p className='text-center mb-5 text-sm sm:text-sm sm:text-start'>Duracion:{rec.duration}</p>

                </div>
            </div>
            )
          }
          return (null)
        })
      }
  </div>

  )
}

export default YoutubeConverter
