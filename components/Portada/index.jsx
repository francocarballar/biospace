import React from 'react'
import styles from './Portada.module.css'

function Portada () {
  return (
    <section
      className={`${styles.portada} flex flex-col justify-center items-center gap-6 w-full h-auto py-9 px-16 md:py-16 md:px-36 lg:py-24 lg:px-52 text-center text-white object-contain`}
      id='challenge'
    >
      <h1 className='text-4xl font-bold shadow-xl'>THE CHALLENGE</h1>
      <p>
        Space exploration involves overcoming numerous challenges: extreme
        gravity, disrupted sleep and circadian rhythms, limited supplies, and
        access to medical care, etc. Your challenge is to design a platform that
        allows users to explore space travel stresses, understand how diverse
        organisms deal with these stresses, and then build a “Space Biology
        Superhero” by combining features from these organisms.
      </p>
    </section>
  )
}

export { Portada }
