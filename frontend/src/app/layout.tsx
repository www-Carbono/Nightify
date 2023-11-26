import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nightify',
  description: 'Transforma tu Música Favorita con Nightify: Elevando Tu Experiencia Musical a un Nivel Nightcore.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): any {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
