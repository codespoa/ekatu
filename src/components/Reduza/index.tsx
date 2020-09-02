import React, { useState } from 'react'

import { ContainerReduza } from '../../styles/pages/Reduza'
import MouseDown from '../../assets/mouse-down.svg'
import imgPaisagem from '../../assets/image-paisagem.png'

type DTO = {
  children: JSX.Element
}

const Reduza: React.FC<DTO> = () => {
  const [showContent, setShowContent] = useState('l1')
  const [showContentText, setShowContentText] = useState(
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
                    setShowContentText('teste 2')
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
                    setShowContentText('teste 3')
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
                    setShowContentText('teste 4')
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
                    setShowContentText('teste 5')
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
                    setShowContentText('teste 6')
                  }}
                >
                  <p className={showContent === 'l6' ? 'green' : ''}></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
            </ul>
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
