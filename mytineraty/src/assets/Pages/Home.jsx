import React from 'react'
import Carrusel from '../Components/Carrusel'
import Welcome from '../Components/Welcome'
import CTA from '../Components/CTA'


export default function Home() {
  return (
   
    <>
        <Welcome></Welcome>
        
        <div className='flex flex-col min-h-[80vh] justify-around items-center sm:flex-row w-full h-auto bg-[url("https://img.freepik.com/foto-gratis/cielo-azul-nubes_1417-1866.jpg")] bg-cover object-contain bg-center' >
        <CTA />
        <Carrusel></Carrusel>
        </div>
        </>
  )
}
