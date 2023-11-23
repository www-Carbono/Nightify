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

              <div className='flex flex-row items-center my-2 py-3 px-10 bg-white mx-10 rounded-xl gap-10 cursor-pointer hover:bg-gray-200' key={rec.id} onClick={(e) => { setSelected(rec.url); search.data = undefined }}>
                <Image src={rec.bestThumbnail.url} alt={rec.title} width={128} height={128} className='rounded-md' style={{ width: 170, height: 'auto' }}/>
                <div>
              <p>{rec.title}</p>
              <p>Duracion:{rec.duration}</p>

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
