import React from 'react'

import { ContainerEnergia } from '../../styles/pages/Energia'
import ImageArrow from '../../assets/arrow-button.svg'
import Bosque from '../../assets/bosque.svg'
import Traco from '../../assets/traco.svg'
import MouseDown from '../../assets/mouse-down.svg'

type EnergiaProps = {
  support: string
  textMain: string
  textSeccond: string
  textButon: string
}

const Energia: React.FC = ({
  textMain,
  textSeccond,
  support,
  textButton
}: EnergiaProps) => {
  return (
    <ContainerEnergia>
      <div className="boxText">
        <div className="solucaoExclusiva">
          <Traco />
          <h5>{support}</h5>
        </div>

        <div className="text">
          <h2>{textMain}</h2>
          <p>{textSeccond}</p>
          <a href="#">
            <p>{textButton}</p>
            <ImageArrow />
          </a>
        </div>
      </div>

      <div className="image">
        <Bosque />
      </div>
      <a href="#" className="imageDown">
        <MouseDown />
      </a>
    </ContainerEnergia>
  )
}

export default Energia
