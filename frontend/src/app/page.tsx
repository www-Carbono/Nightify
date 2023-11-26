import React from 'react'
import './globals.css'

// Componentes Imports
import Header from './components/header'
import Features from './components/features'
import Separator from './components/separator'
import SongConverter from './components/songConverter'
import Faqs from './components/faqs'

const Home: React.FC = () => {
  return (
<main className='bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 pb-5'>

  <Header/>
  <Separator text='¿Que Ofrecemos? ☁'/>
  <Features/>
  <Separator text='Convierte tu cancion ☁'/>
  <div id='songConverter'>

  <SongConverter/>
  </div>
  <Separator text='Preguntas Frecuentes ☁'/>
  <Faqs/>

</main>

  )
}

export default Home
