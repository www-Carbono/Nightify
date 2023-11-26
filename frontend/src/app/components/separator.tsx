'use client'
import React, { useEffect, useState } from 'react'

// Define la prop 'text' como un string directamente
interface SeparatorProps {
  text: string
}

// Utiliza las props en la firma del componente
const Separator: React.FC<SeparatorProps> = ({ text }) => {
  const [number, setNumber] = useState(6)

  useEffect(() => {
    const handleResize = (): void => {
      // Ajusta el número según el ancho de la pantalla
      if (window.innerWidth < 450) {
        setNumber(2) // Por ejemplo, puedes establecer 3 en pantallas pequeñas
      } else if (window.innerWidth < 768) {
        setNumber(3) // Por ejemplo, puedes establecer 3 en pantallas pequeñas
      } else if (window.innerWidth < 1040) {
        setNumber(5) // Por ejemplo, puedes establecer 3 en pantallas pequeñas
      } else {
        setNumber(6) // Vuelve a 6 en pantallas más grandes
      }
    }

    // Llama a la función handleResize cuando cambia el tamaño de la pantalla
    window.addEventListener('resize', handleResize)

    // Llama a handleResize al cargar la página
    handleResize()

    // Elimina el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // const NUMBER = 6 sm,md,lg,xl

  return (
    <div className="bg-black overflow-x-hidden p-4 md:p-6 lg:p-6 xl:p-6 items-center w-full">
      <ul className="flex flex-row justify-center lg:justify-around">
        {Array.from({ length: number }, (_, index) => (
            <li className="text-[#CEFF1A] text-center workSans text-sm md:text-md lg:text-lg font-semibold leading-7 px-1" key={index}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Separator
