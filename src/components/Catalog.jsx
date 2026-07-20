import React from 'react'

function Catalog() {
  return (
    <section className='py-20 px-6'>

      <div className='max-w-7xl mx-auto'>

        <h2 className='text-4xl font-semibold text-amber-950 text-center'>
          Nuestro catálogo
        </h2>

        <p className='mt-6 text-center text-gray-600 max-w-3xl mx-auto'>
          Descubre nuestra selección de instrumentos musicales organizados por
          categorías. Filtra fácilmente entre guitarras, bajos, teclados,
          baterías y mucho más para encontrar el instrumento ideal.
        </p>

        {/* Aquí irá el grid de productos */}

      </div>

    </section>
  )
}

export default Catalog