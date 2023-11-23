import React, { useEffect, useState } from 'react'

interface props {
  sendSong: (e: React.FormEvent<HTMLFormElement>) => void
  placeholder: string
  sendSongYoutube?: any
  selected?: string
  youtubeInfo?: any

}
const FormConverter: React.FC<props> = ({ sendSong, placeholder, sendSongYoutube, selected, youtubeInfo }) => {
  const [tempo, setTempo] = useState(1.20)
  const [pitch, setPitch] = useState(1.20)
  const [advancedOptions, setAdvancedOptions] = useState(false)
  const handleTempo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTempo = Number(e.target.value)
    setTempo(newTempo)
  }

  const handlePitch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newPitch = Number(e.target.value)
    setPitch(newPitch)
  }

  const toggleAdvancedOptions = (): void => {
    setAdvancedOptions(!advancedOptions)
  }

  useEffect(() => {
    const objeto = {
      tempo,
      pitch
    }
    if (selected !== undefined && selected.length > 1) {
      sendSongYoutube(selected, objeto.tempo, objeto.pitch)
    }
  }, [selected])

  if (placeholder === 'Escribe el Nombre de tu Cancion') {
    return (
        // <form className='flex flex-col items-center justify-center text-center' onSubmit={(e) => { sendSong(e, true) } }>
        <form className='flex flex-col items-center justify-center text-center' onSubmit={(e) => { youtubeInfo(e) }}>
        <label className='font-bold mt-5'>Escribe el Nombre de la cancion:</label>
        <input
          name="songLink"
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-[70%] mt-5"
        />

        <h3 className='pt-5 flex flex-row items-center cursor-pointer' onClick={toggleAdvancedOptions}><svg className='mx-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>Opciones Avanzadas</h3>

        <div className='mt-5' style={advancedOptions ? { display: 'block' } : { display: 'none' }}>
        <label>Pitch (Afinacion)</label>
        <div className='flex justify-center items-center'>
         <input type="range" min="1" max="2" step="0.1" value={pitch} name='pitch' onChange={(e) => { handlePitch(e) }}/>
         <label className='text-sm'>{pitch}  </label>
        </div>
        <label>Tempo</label>

        <div className='flex justify-center items-center'>
        <input type="range" min="1" max="2" step="0.1" value={tempo} name='tempo' onChange={(e) => { handleTempo(e) }}/>
         <label className='text-sm'>{tempo}</label>
         </div>

         <p className='mt-5'><span className='font-bold'>*</span> Valor de <span className='font-bold'>1.2 recomendado</span> en ambas opciones</p>

        </div>

        <button className='mb-5 hover:bg-[#fff]'>Buscar</button>

        </form>
    )
  }

  return (
      <form className='flex flex-col items-center justify-center text-center' onSubmit={(e) => { sendSong(e) }}>
      <label className='font-bold mt-5'>Pega el Link de youtube de la cancion:</label>
      <input
        name="songLink"
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-[70%] mt-5"
      />

      <h3 className='pt-5 flex flex-row items-center cursor-pointer' onClick={toggleAdvancedOptions}><svg className='mx-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>Opciones Avanzadas</h3>

      <div className='mt-5' style={advancedOptions ? { display: 'block' } : { display: 'none' }}>
      <label>Pitch (Afinacion)</label>
      <div className='flex justify-center items-center'>
       <input type="range" min="1" max="2" step="0.1" value={pitch} name='pitch' onChange={(e) => { handlePitch(e) }}/>
       <label className='text-sm'>{pitch}  </label>
      </div>
      <label>Tempo</label>

      <div className='flex justify-center items-center'>
      <input type="range" min="1" max="2" step="0.1" value={tempo} name='tempo' onChange={(e) => { handleTempo(e) }}/>
       <label className='text-sm'>{tempo}</label>
       </div>

       <p className='mt-5'><span className='font-bold'>*</span> Valor de <span className='font-bold'>1.2 recomendado</span> en ambas opciones</p>

      </div>

      <button className='mb-5 hover:bg-[#fff]'>Enviar</button>

      </form>
  )
}

export default FormConverter
