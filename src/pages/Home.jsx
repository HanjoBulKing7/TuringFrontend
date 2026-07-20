import React from 'react'
import About from '../components/About'
import Catalog from '../components/Catalog'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      Main home welcome to my ecommerce
      <section id="hero">
        <Hero/>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="catalog">
        <Catalog />
      </section>

    </div>
  )
}

export default Home