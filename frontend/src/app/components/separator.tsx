import React from 'react'

// Define la prop 'text' como un string directamente
interface SeparatorProps {
  text: string
}

// Utiliza las props en la firma del componente
const Separator: React.FC<SeparatorProps> = ({ text }) => {
  const NUMBER = 6

  return (
    <div className='bg-black text-white contenedorSeparador'>
      <ul className='flex flex-row p-5'>
        {Array.from({ length: NUMBER }, (_, index) => (
          <li className='separadorText mx-10' key={index}>{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Separator
