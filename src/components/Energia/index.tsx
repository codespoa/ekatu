import React, { useState } from 'react'

import { ContainerEnergia } from '../../styles/pages/Energia'

import ImageArrow from '../../assets/arrow-button.svg'
import MouseDown from '../../assets/mouse-down.svg'

type EnergiaProps = {
  support: string
  textMain: string
  textSeccond: string
  textButon: string
  imgTraco: string
}

const Energia: React.FC = ({
  textMain,
  textSeccond,
  support,
  textButton,
  imgTraco,
  imageContent
}: EnergiaProps) => {
  const [textSupport, setTextSupport] = useState(support)

  return (
    <ContainerEnergia>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="boxText">
        <div className="solucaoExclusiva">
          <img
            src={imgTraco}
            className={imgTraco ? 'active' : 'inactive'}
            alt="Ekatu"
          />
          <h5>{textSupport}</h5>
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
        <img src={imageContent} alt="Ekatu" />
      </div>
      <a href="#" className="imageDown">
        <MouseDown />
      </a>
    </ContainerEnergia>
  )
}

export default Energia
