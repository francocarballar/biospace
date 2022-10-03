import React from 'react'
import { Timeline, Events, TextEvent } from '@merc/react-timeline'
import { Scence } from '../Scene'

function TimeLine () {
  return (
    <Timeline>
      <Events>
        <TextEvent
          date='Stage 1'
          text='Sensors detect a signal from a suitable environment, and send the signal to the enzymes. The head is automatically released and metamorphosis begins.'
        >
          <Scence url='/models/Fase-1/NASA-Fase01.gltf' zPosition={400} />
        </TextEvent>
        <TextEvent
          date='Stage 2'
          text='Enzymes begin to replicate, translate, and transcribe DNA to form new enzymes that will synthesize the necessary organelles.'
        >
          <Scence url='/models/Fase-2/NASA-Fase02.gltf' zPosition={200} />
        </TextEvent>
        <TextEvent
          date='Stage 3'
          text='With all the materials and tools ready, the spatial metabolism is activated and the cell begins to live to replicate itself and perpetuate the code. According to the requirements of each Planet, consume what is there to obtain materials to synthesize new daughter cells.'
        >
          <Scence url='/models/Fase-3/NASA-Fase03.gltf' zPosition={200} />
        </TextEvent>
        <TextEvent
          date='Stage 4'
          text='The cells are already duplicating and adapting to the environment. They are more and more. The Biofilm stage begins. Together they come together to form Biofilms where they will exchange information and nutrients to grow.'
        >
          <Scence url='/models/Fase-4/NASA.04 (Nuevo).gltf' zPosition={450} />
        </TextEvent>
      </Events>
    </Timeline>
  )
}

export { TimeLine }
