'use client'
import React, { useState } from 'react'

interface props {
  question: string
  answer: string
}

const Faq: React.FC<props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  return (
        <div className='faqChildren cursor-pointer hover:bg-gray-200' onClick={(e) => { setOpen(!open) }}>
            <div className='flex flex-row m-5 justify-between'>
            <p className={open ? 'font-bold' : ''}>{question}</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </div>
        {
        open &&
        <div className='m-5'>
            <p>{answer}</p>
        </div>
        }
        </div>

  )
}

export default Faq
