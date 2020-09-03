import React from 'react'
import { ContainerFooter } from '../../styles/pages/Footer'

import ImgFacebook from '../../assets/facebook.svg'
import ImgLinkedin from '../../assets/linkedin.svg'
import ImgAneel from '../../assets/aneel.svg'
import ImgArrow from '../../assets/arrow-button-grey.svg'

type DTO = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

const Footer: React.FC<DTO> = () => {
  return (
    <>
      <ContainerFooter>
        <div className="energiaPreserva">
          <div className="text">
            <div className="ekatu">
              <h5>Ekatu</h5>
              <div className="line"></div>
            </div>
            <h4>Energia que preserva</h4>
          </div>
          <div className="button">
            <a href="#">
              <p>Fale conosco agora mesmo</p>
              <ImgArrow />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="institucional">
            <ul>
              <h6>Institucional</h6>
              <a href="#">
                <li>Página principal</li>
              </a>
              <a href="#">
                <li>Quem Somos</li>
              </a>
              <a href="#">
                <li>Artigos</li>
              </a>
              <a href="#">
                <li className="last">Fale Conosco</li>
              </a>
            </ul>
          </div>

          <div className="solucoes">
            <ul>
              <h6>Soluções</h6>
              <a href="#">
                <li>Soluções Energéticas Sustentáveis</li>
              </a>
              <a href="#">
                <li>Sustentabilidade Empresarial</li>
              </a>
            </ul>
          </div>

          <div className="social">
            <h6>Social</h6>
            <div className="socialIconm">
              <a href="#" className="icon">
                <ImgFacebook />
                <p>Facebook</p>
              </a>
              <a href="#" className="icon last">
                <ImgLinkedin />
                <p>Linkedin</p>
              </a>
            </div>
            <ImgAneel />
          </div>
        </div>
      </ContainerFooter>
    </>
  )
}

export default Footer
