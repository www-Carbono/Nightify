import React from 'react'
import './globals.css'
import Script from 'next/script'

// Componentes Imports
import Header from './components/header'
import Features from './components/features'
import Separator from './components/separator'
import SongConverter from './components/songConverter'
import Faqs from './components/faqs'

const Home: React.FC = () => {
  return (
<main className='bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 pb-5'>
<div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RXLML0Z4GD" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RXLML0Z4GD');
        `}
      </Script>
    </div>

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
