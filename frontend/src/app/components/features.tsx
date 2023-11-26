import React from 'react'
import '../globals.css'

import Feature from './feature'

const Features: React.FC = () => {
  return (
  <div className="sm:mx-10 md:mx-20 lg:flex lg:flex-wrap lg:mx-5 lg:my-10 xl:mx-10 2xl:mx-64">
  <div className="lg:w-1/3 lg:mb-5 ">
  <Feature
        name="Conversión Rápida y Sencilla"
        subtitle="Experimenta una conversión rápida y sencilla de cualquier canción de YouTube a la emocionante y enérgica versión 'nightcore' con solo un par de clics. Nuestra interfaz intuitiva facilita el proceso para que disfrutes de tus canciones favoritas en un nuevo nivel."
      />
  </div>
  <div className="lg:w-1/3">
  <Feature
        name="Ajustes Personalizables"
        subtitle="Personaliza la experiencia nightcore según tus preferencias. Ajusta la velocidad y el tono de la canción para crear la mezcla perfecta que se adapte a tu gusto musical. Nuestra plataforma te ofrece el control total sobre cómo quieres transformar tus canciones favoritas."
      />
  </div>
  <div className="lg:w-1/3">
  <Feature
          name="Compatibilidad Multiplataforma"
          subtitle="Descarga las versiones nightcore en el formato que prefieras. Ofrecemos compatibilidad con una variedad de formatos de salida, como MP3 y WAV, para garantizar que puedas disfrutar de tus canciones nightcore en tus dispositivos y plataformas favoritas."
        />
  </div>
  <div className="lg:w-1/3">
  <Feature
        name="Reproducción Previa Instantánea"
        subtitle="Antes de realizar la descarga, disfruta de una reproducción previa instantánea de tu canción nightcore recién creada. Esto te permite asegurarte de que la versión modificada se ajuste exactamente a lo que estás buscando antes de guardarla en tu biblioteca musical."
      />
  </div>
  <div className="lg:w-1/3">
  <Feature
          name="Conversión por Enlace o Búsqueda"
          subtitle="Inicia la experiencia nightcore copiando el enlace de YouTube o buscando la canción por su nombre. Ofrecemos flexibilidad para que elijas la forma más conveniente de seleccionar tus canciones y transformarlas en emocionantes versiones nightcore."
        />
  </div>
  <div className="lg:w-1/3">
  <Feature
          name="Feedback Directo de Usuarios"
          subtitle="Envía comentarios y sugerencias directamente desde la aplicación para ayudarnos a mejorar. Valoramos tu opinión y estamos comprometidos a hacer de tu experiencia en 'Nightify' algo aún mejor. ¡Tu retroalimentación es clave para hacer crecer nuestra comunidad y mejorar la aplicación!"
        />
  </div>
</div>

  )
}

export default Features
