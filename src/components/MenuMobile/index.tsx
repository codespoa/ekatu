import React from 'react'
import { ContainerMenuMobile } from '../../styles/pages/MenuMobile'

type DTO = {
  activemenu: boolean
  children: JSX.Element
}

const MenuMobile: React.FC<DTO> = ({ activemenu }: DTO) => {
  return (
    <ContainerMenuMobile className={activemenu ? '' : 'header__nav'}>
      <nav>
        <ul>
          <a href="#">
            <li>Home</li>
            <div className="circle"></div>
          </a>
          <a href="#">
            <li>Soluções Energéticas Sustentáveis</li>
            <div className="circle"></div>
          </a>
          <a href="#">
            <li>Sustentabilidade Empresarial</li>
            <div className="circle"></div>
          </a>

          <a className="login" href="#">
            <li>Login</li>
          </a>
        </ul>
      </nav>
    </ContainerMenuMobile>
  )
}

export default MenuMobile
