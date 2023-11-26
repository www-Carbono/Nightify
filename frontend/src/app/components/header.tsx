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
        <div className="flex justify-center space-x-4 mb-6 items-center">
          <div className='items-center flex flex-col'>
            <Link className='items-center flex flex-col' href={'https://www.instagram.com/nightify.dev/'}>
        <svg className='medidas' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ffffff" strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"></path><circle cx="96" cy="96" r="30" stroke="#ffffff" strokeWidth="12"></circle><circle cx="135" cy="57" r="9" fill="#ffffff"></circle></g></svg>
        <p className='text-xs'>nightify.dev</p>
            </Link>

          </div>
        <div className='items-center flex flex-col'>
        <Link className='items-center flex flex-col' href={'https://www.tiktok.com/@nightify.dev'}>
        <svg className='medidas' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ffffff" strokeLinecap="round" strokeWidth="12" d="M108 132a38.004 38.004 0 0 1-23.458 35.107 37.995 37.995 0 0 1-41.412-8.237 37.996 37.996 0 0 1-8.237-41.412A38.001 38.001 0 0 1 70 94"></path><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M108 132V22c0 18 24 50 52 50"></path></g></svg>
        <p className='text-xs'>@dev.Nightify</p>
        </Link>
        </div>
        <div className='items-center flex flex-col'>
        <Link className='items-center flex flex-col' href={'https://www.youtube.com/channel/UC9kVBIvcPy5cg9Ilg9HF8uw'}>
        <svg className='medidas' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ffffff" strokeWidth="12" d="M170 96c0-45-4.962-49.999-50-50H72c-45.038.001-50 5-50 50s4.962 49.999 50 50h48c45.038-.001 50-5 50-50Z"></path><path stroke="#ffffff" strokeLinejoin="round" strokeWidth="12" d="M118 96 82 74v44l36-22Z"></path></g></svg>
        <p className='text-xs'>@nightify.dev</p>
        </Link>
        </div>
        </div>

        <p className="text-base sm:text-base md:text-xl lg:text-2xl mb-8">Transforma tu Música Favorita con Nightify: Elevando Tu Experiencia Musical a un Nivel Nightcore.</p>
        <Link href={'#songConverter'}><button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full">Empezar</button></Link>
      </div>
    </header>
  )
}

export default Header
