import React from 'react'
import Image from 'next/image'
import headerLogo from '../../../public/header.jpg'
import '../globals.css'
import Link from 'next/link'

// Fuente Personalizada
import TerminaTest from 'next/font/local'
const TerminaFont = TerminaTest({
  src: [
    {
      path: '../../../public/fonts/TerminaTest.otf',
      weight: '700'
    }
  ]
})

// Modificar los svg de tiktok,youtube e instagram

const Header: React.FC = () => {
  return (
    <header className="text-white py-12">
      <div className="container mx-auto text-center">
        <Image
          src={headerLogo}
          width={200}
          height={200}
          alt="Logo de la página web"
          className="rounded-full mx-auto mb-6"
        />
        <h1 className={`text-5xl  font-bold mb-4 title sm:text-6xl md:text-6xl lg:text-7xl  ${TerminaFont.className}`}>Nightify</h1>
        <div className="flex justify-center space-x-4 mb-6">
          <svg className="socialMedia" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
          <svg className="socialMedia" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
          </svg>
          <svg className="socialMedia" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
          </svg>
        </div>
        <p className="text-base sm:text-base md:text-xl lg:text-2xl mb-8">Transforma tu Música Favorita con Nightify: Elevando Tu Experiencia Musical a un Nivel Nightcore.</p>
        <Link href={'#songConverter'}><button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full">Empezar</button></Link>
      </div>
    </header>
  )
}

export default Header
