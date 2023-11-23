'use client'
import React from 'react'

// Components
import TabsSongConverter from './tabsSongConverter'
import YoutubeConverter from './youtubeconverter'
import LinkConverter from './linkconverter'

// Custom hook
import useSongConverter from '../hooks/useSongConverter'

const SongConverter: React.FC = () => {
  const { handleClick, sendSong, uploadType, downloadInfo, loaded, sendSongYoutube, search, youtubeInfo, youtubeSearchLoaded, error } = useSongConverter()

  return (
  <div className='flex justify-center'>
    <div className='boxServiceStart w-[50%] m-20'>
      <TabsSongConverter uploadType={uploadType} handleClick={handleClick}/>
      {
        error.length > 0 &&
        <p className='text-center font-bold bg-red-500 mx-[20%] my-5 rounded-md p-3'>{error}</p>
      }
      {
      uploadType
        ? <LinkConverter downloadInfo={downloadInfo} loaded={loaded} sendSong={sendSong} />
        : <YoutubeConverter downloadInfo={downloadInfo} loaded={loaded} sendSong={sendSong} sendSongYoutube={sendSongYoutube} search={search} youtubeInfo={youtubeInfo} youtubeSearchLoaded={youtubeSearchLoaded}/>
      }
  </div>
</div>

  )
}

export default SongConverter
