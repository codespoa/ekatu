import React, { useState } from 'react'
import styled from 'styled-components'

import { ContainerMenuMobile } from '../../styles/pages/MenuMobile'
import LogoMenuMobile from '../../assets/logo-ekatu.svg'
import NewClose from '../../assets/new-close.svg'

const MenuMobile: React.FC = () => {
  const [closeMenuMobile, setCloseMenuMobile] = useState(false)
  const MenuMobileContainer = styled.div`
    .closeMenu {
      display: ${!closeMenuMobile ? 'flex' : 'none'};
    }
  `
  return (
    <MenuMobileContainer>
      <ContainerMenuMobile className="closeMenu">
        <nav>
          <div className="image">
            <LogoMenuMobile />
            <NewClose
              className="closeMenuIcon"
              onClick={() => setCloseMenuMobile(!closeMenuMobile)}
            />
          </div>
          <ul>
            <a href="#">
              <li>Home</li>
              <div className="circle"></div>
              {/* <div className={activeLinkHome && 'active'}></div> */}
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
    </MenuMobileContainer>
  )
}

export default MenuMobile
