import React from 'react'

function CardProblematic ({ title, content, image }) {
  const background_image = {
    backgroundImage: `url(${image})`
  }
  return (
    <article className='rounded-xl shadow-2xl min-w-[320px] md:min-w-[350px] max-w-[400px] h-[560px] sm:h-[480px]'>
      <div
        style={background_image}
        className='bg-cover bg-no-repeat bg-center rounded-t-3xl w-full h-44'
      ></div>
      <div className='rounded-b-3xl py-7 px-12 w-full'>
        <h3 className='font-bold text-lg mb-2 text-center'>{title}</h3>
        <p className='leading-5'>{content}</p>
      </div>
    </article>
  )
}

export { CardProblematic }
