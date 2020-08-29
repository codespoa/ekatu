import React, { useState } from 'react'

import { ContainerQuemSomos } from '../../styles/pages/QuemSomos'

import ImageArrow from '../../assets/arrow-button-grey.svg'

type EQuemSomosProps = {
  support: string
  textMain: string
  textSeccond: string
  textButon: string
  imgTraco: string
}

const QuemSomos: React.FC = ({
  textSeccond,
  support,
  textButton,
  imgTraco,
  imageContent
}: QuemSomosProps) => {
  return (
    <ContainerQuemSomos>
      <div className="boxText">
        <div className="solucaoExclusiva">
          <img
            src={imgTraco}
            className={imgTraco ? 'active' : 'inactive'}
            alt="Ekatu"
          />
          <h5>{support}</h5>
        </div>

        <div className="text">
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
    </ContainerQuemSomos>
  )
}

export default QuemSomos
