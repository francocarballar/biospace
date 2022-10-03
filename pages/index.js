import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import { Portada } from '../components/Portada'
import { BioBac } from '../components/BioBac'
import { CardProblematic } from '../components/CardProblematic'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md'
import { Video } from '../components/Video'
import { TimeLine } from '../components/TimeLine'

export default function Home () {
  const [container, setContainer] = useState('')
  useEffect(() => {
    const container_CardProblematic = document.querySelector(
      '#container_CardProblematic'
    )
    setContainer(container_CardProblematic)
    //container.scrollTop = container.scrollHeight
  })
  const moveToRight = () => {
    container.scrollLeft += 425
  }
  const moveToLeft = () => {
    container.scrollLeft -= 425
  }
  return (
    <>
      <Portada />
      <div
        className='w-full flex justify-center items-center text-center mt-8'
        id='problems'
      >
        <h2>PROBLEMS DETECTED</h2>
      </div>
      <section className='flex justify-center items-start relative'>
        <section
          className='flex flex-row justify-start items-center gap-[70px] sm:gap-7 p-8 pb-14 overflow-x-scroll transition-all ml-10'
          id='container_CardProblematic'
        >
          <button
            className='absolute p-3 md:p-4 rounded-xl shadow-lg left-4 bg-purple-700 md:text-lg text-white'
            onClick={moveToLeft}
          >
            <MdArrowBackIos />
          </button>
          <CardProblematic
            title=' RADIATION '
            content='Over and above the Earths natural protection, radiation exposure increase the risk of cancer, damages the central nervous system, leads to cognitive function, reduce motor function, and cause behavioral changes.
        To find out what can happen above low Earth orbit, NASA studies how radiation affects biological samples using a ground-based research laboratory.'
            image='/img/radiation.jpg'
          />
          <CardProblematic
            title='ISOLATION AND CONFINEMENT'
            content='On a trip to Mars, astronauts will be more isolated and confined. Sleep deprevation, circadian desynchronization, and work overload exacerbate this problem and can lead to decreased performance, adverse health outcomes, and compromised mission objectives.
          Various tools and technologies to use in the spaceflight environments to detect and treat early risk factors.'
            image='/img/aislamiento.png'
          />
          <CardProblematic
            title=' EXTREME GRAVITY '
            content='To find out what could happen above low Earth orbit, NASA studies how radiation affects biological samples using a ground-based research laboratory.'
            image='/img/gravity.jpg'
          />
          <CardProblematic
            title='DISTANCE FROM EARTH'
            content='Planning and self-sufficiency are essential keys to the success of a Martian mission. Facing a communication delay of up to 20 minutes one way and the possibility of equipment failure or a medical emergency, astronauts must be able to deal with a variety of situations without the support of their teammate on Earth.'
            image='/img/moon-earth.jpg'
          />
          <CardProblematic
            title=' HARSH ENVIRONMENTS '
            content='Technology, as is often the case with out-of-this-world exploration, comes to the rescue to create a livable home in a harsh environment. Everything is monitored, from air quality to possible microbial inhabitants. Astronauts also contribute data points through urine and blood samples, and can reveal valuable information about potential stressors.'
            image='/img/ambiente-hostil.jpg'
          />
          <button
            className='absolute p-3 md:p-4 rounded-xl shadow-lg bg-purple-700 right-4 md:text-lg text-white'
            onClick={moveToRight}
          >
            <MdArrowForwardIos />
          </button>
        </section>
      </section>
      <div
        className='w-full flex justify-center items-center text-center mt-8'
        id='super_biobac'
      >
        <h2>¡HI! I AM SUPER BIOBAC</h2>
      </div>
      <BioBac />
      <section className='flex flex-col justify-center items-start w-full h-auto py-4 px-16 md:px-36'>
        <p>
          Based on Bacteriophage viruses We will use their structure to carry
          the genetic code that will produce interplanetary life in different
          spaces. For the synthesis of this genome we will start with the
          Deinococcus radiodurans genome, since it is the organism capable of
          resisting radiation and survive in conditions of heat, cold,
          dehydration, vacuum and acid. Under technologies such as
          nanotechnology, we will add TiO2 nanoparticles to its structure to
          resist cosmic radiation, temperature and other conditions.
        </p>
        <h4>Is composed of:</h4>
        <ul className='list-disc'>
          <li>
            <b>Synthetic DNA:</b> contains the necessary instructions for this
            being to reproduce once it reaches its destination.
          </li>
          <li>
            <b>Enzymes as molecular machines: </b>These enzymes, once they
            receive the signal from the environmental sensors, will be activated
            to begin the cycle of development of this superhero at the
            destination. They will duplicate the DNA and synthesize other basic
            enzymes necessary for the maturation of the organism.
          </li>
          <li>
            <b>Air Sensor (Environmental Sensors): </b>They detect if the
            conditions are valid to propagate or not. If they are, they will
            emit signals to begin the development stage.
          </li>
        </ul>
      </section>
      <Video />
      <TimeLine />
    </>
  )
}
