import React from 'react'
import HeroImg from '../assets/img/HeroImg.jpg'

function Hero() {
  return (
    <section className='pt-5 flex flex-col-reverse md:flex-row items-center justify-between gap-8'>

      <div className='md:w-1/2 px-6'>
        <h1 className='text-amber-950 text-4xl md:text-5xl font-semibold tracking-wide leading-tight'>
          Encuentra el instrumento perfecto para comenzar tu historia musical.
        </h1>

        <p className='mt-6 text-gray-600 text-lg leading-8'>
          En Arpegio reunimos una selección de instrumentos de calidad para
          músicos principiantes y experimentados. Explora nuestro catálogo,
          compara opciones y encuentra el instrumento ideal para llevar tu
          talento al siguiente nivel.
        </p>

        <p className='w-fit mt-8 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition'>
          <a href='#catalog'>Ver catálogo</a>
        </p>
      </div>

      <img
        src={HeroImg}
        alt="Persona tocando una guitarra eléctrica"
        className='md:w-[45%] rounded-lg shadow-lg'
      />

    </section>
  )
}

export default Hero