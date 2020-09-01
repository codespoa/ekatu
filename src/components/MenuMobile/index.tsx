import React, { useState } from 'react'
import styled from 'styled-components'

import { ContainerMenuMobile } from '../../styles/pages/MenuMobile'
import LogoMenuMobile from '../../assets/logo-ekatu.svg'
import NewClose from '../../assets/new-close.svg'

type DTO = {
  activeMenu: boolean
}

const MenuMobile: React.FC = ({ activeMenu }: DTO) => {
  const MenuMobileContainer = styled.div`
    &.header__nav {
      display: ${activeMenu ? 'none' : 'block'};
    }
  `

  return (
    <MenuMobileContainer>
      <ContainerMenuMobile className={activeMenu ? '' : 'header__nav'}>
        <nav>
          {/* <div className="image">
          <LogoMenuMobile />
          <NewClose
            className={activeMenu ? 'closeMenuIcon active' : 'closeMenuIcon'}
          />
        </div> */}
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
    </MenuMobileContainer>
  )
}

export default MenuMobile
