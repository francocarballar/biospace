import React from 'react'

function Video () {
  return (
    <section className='flex justify-center items-center w-full h-auto px-16 md:px-36'>
      <iframe
        className='w-full h-[225px] sm:h-[275px] md:h-[380px] lg:h-[570px]'
        src='https://www.youtube.com/embed/RB9yKNdNrus'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </section>
  )
}

export { Video }
