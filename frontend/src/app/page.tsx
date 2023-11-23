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
<main>
  <Header/>
  <Features/>
  <Separator text='Convierte tu cancion ☁'/>
  <SongConverter/>
  <Separator text='Preguntas Frecuentes ☁'/>
  <Faqs/>

</main>

  )
}

export default Home
