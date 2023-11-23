import React from 'react'
import Faq from './faq'
const Faqs: React.FC = () => {
  return (
        <div className='flex flex-col mt-10 faqsContainer mx-[30%] '>

            <Faq question='¿Cómo puedo convertir una canción a nightcore en Nightify?' answer='Puedes convertir una canción a nightcore de dos maneras: simplemente copiando y pegando el enlace de YouTube en la barra de búsqueda, o escribiendo el nombre de la canción directamente. Luego, ajusta las preferencias de velocidad y tono según tu gusto antes de realizar la conversión.'/>
            <Faq question='¿Necesito una cuenta para utilizar Nightify?' answer='No es necesario tener una cuenta para convertir canciones a nightcore en Nightify.'/>
            <Faq question='¿Cómo puedo proporcionar retroalimentación sobre la aplicación?' answer='Nightify valora tu opinión. Puedes enviar tus comentarios y sugerencias directamente desde la aplicación en la sección de Feedback. Estamos comprometidos a mejorar continuamente y tu retroalimentación es esencial para hacer crecer la comunidad Nightify.'/>
            <Faq question='¿Cada cuánto tiempo se borran las canciones convertidas en Nightify?' answer='Para evitar la sobrecarga del servidor, las canciones convertidas se borran automáticamente cada 10 minutos. Te recomendamos descargar y guardar tus versiones nightcore dentro de ese período.'/>
            <Faq question='¿Tienen redes sociales donde pueda seguir las actualizaciones de Nightify?' answer='¡Sí! Puedes seguirnos en nuestras redes sociales para recibir las últimas actualizaciones, noticias y contenido exclusivo. Mantente conectado con la comunidad Nightify a través de nuestras redes sociales.'/>

        </div>
  )
}

export default Faqs
