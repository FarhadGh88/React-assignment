import React from 'react'
import '../Contacts/map.css'

const Map = () => {
  return (
    <div>
         <section className="map">   
            <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8139.52722541286!2d18.0568737421841!3d59.33492709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5d913d097b%3A0x960dd7913bd176bb!2sSveav%C3%A4gen%2022%2C%20111%2057%20Stockholm!5e0!3m2!1ssv!2sse!4v1696090605764!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'}>
            </iframe>
        </section> 
    </div>
  )
}

export default Map