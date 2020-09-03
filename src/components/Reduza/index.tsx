import React, { useState } from 'react'

import { ContainerReduza } from '../../styles/pages/Reduza'
import MouseDown from '../../assets/mouse-down.svg'
import imgPaisagem from '../../assets/image-paisagem.png'
import arrowPurple from '../../assets/arrow-purple.png'

type DTO = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

const Reduza: React.FC<DTO> = () => {
  const [showContent, setShowContent] = useState('l1')
  const [showContentText, setShowContentText] = useState(
    'Reduza gastos e o impacto da sua empresa no mundo'
  )
  const [showContentSupport, setShowContentSupport] = useState(
    'Reduza gastos e o impacto da sua empresa no mundo'
  )

  return (
    <ContainerReduza>
      <div className="containerCustom">
        <div className="boxSelect">
          <div className="select">
            <ul>
              <a>
                <li
                  onClick={() => {
                    setShowContent('l1')
                    setShowContentText(
                      'Reduza gastos e o impacto da sua empresa no mundo'
                    )
                    setShowContentSupport(
                      'Reduza gastos e o impacto da sua empresa no mundo'
                    )
                  }}
                >
                  <p className={showContent === 'l1' ? 'green' : ''}></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li
                  onClick={() => {
                    setShowContent('l2')
                    setShowContentText('Eficientização Energética')
                    setShowContentSupport(
                      'É possível interpretar e analisar o que será melhor para sua empresa.'
                    )
                  }}
                >
                  <p className={showContent === 'l2' ? 'green' : ''}></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li
                  onClick={() => {
                    setShowContent('l3')
                    setShowContentText(
                      'Alta Tecnologia em iluminação: economia e durabilidade.'
                    )
                    setShowContentSupport('iluminação')
                  }}
                >
                  <p className={showContent === 'l3' ? 'green' : ''}></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li
                  onClick={() => {
                    setShowContent('l4')
                    setShowContentText(
                      'Equipamentos de baico consumo (lamp. Eletronicas T12 por T5)'
                    )
                    setShowContentSupport('Fazer o básico')
                  }}
                >
                  <p className={showContent === 'l4' ? 'green' : ''}></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li
                  onClick={() => {
                    setShowContent('l5')
                    setShowContentText(
                      'Software de gerenciamento de enelgia (local)'
                    )
                    setShowContentSupport('Monitorar e melhorar')
                  }}
                >
                  <p className={showContent === 'l5' ? 'green' : ''}></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li
                  onClick={() => {
                    setShowContent('l6')
                    setShowContentText('Medidores de qualidade de energia')
                    setShowContentSupport('Medir')
                  }}
                >
                  <p className={showContent === 'l6' ? 'green' : ''}></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
            </ul>
            <div className="tooltipCustom">
              <img src={arrowPurple} alt="Ekatu" />
              <h5>{showContentSupport}</h5>
            </div>
            <div className="text">
              <h1 className="textPrimary">{showContentText}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={imgPaisagem} alt="Ekatu" />
      </div>
      <a href="#" className="imageDown">
        <MouseDown />
      </a>
    </ContainerReduza>
  )
}

export default Reduza
