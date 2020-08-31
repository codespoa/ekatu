import React, { useState } from 'react'

import { ContainerReduza } from '../../styles/pages/Reduza'
import MouseDown from '../../assets/mouse-down.svg'
import imgPaisagem from '../../assets/image-paisagem.png'

const Reduza: React.FC = () => {
  const [showContent, setShowContent] = useState(false)

  return (
    <ContainerReduza>
      <div className="containerCustom">
        <div className="boxSelect">
          <div className="select">
            <ul>
              <a>
                <li>
                  <p className="green"></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li>
                  <p></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li>
                  <p></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li>
                  <p></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li>
                  <p></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
              <a href="#">
                <li>
                  <p></p>
                  <div className="box-dialog"></div>
                </li>
              </a>
            </ul>
            <div className="text">
              <h1 className="textPrimary">
                Reduza gastos e o impacto da sua empresa no mundo
              </h1>
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
