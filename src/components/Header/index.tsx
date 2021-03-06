import React, { useState } from 'react'

import { HeaderStyle } from '../../styles/pages/Header'
import LogoHeader from '../../assets/logo-ekatu.svg'
import MenuDesktop from '../../assets/menu-desktop.svg'
import { ContainerHeader } from '../../styles/pages/Home'
import styled from 'styled-components'

import { ContainerMenuMobile } from '../../styles/pages/MenuMobile'
import NewClose from '../../assets/new-close.png'

type DTO = {
  activemenu?: string
  setActiveMenu?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

const MenuMobileContainer = styled.div`
  display: none;
  transition: all 0.1s ease;
  z-index: 10;

  &.header__nav {
    display: fixed !important;
  }
`

const Header: React.FC<DTO> = () => {
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <>
      <ContainerHeader>
        <HeaderStyle>
          <div>
            <LogoHeader />
          </div>
          <ul>
            <a>
              <li>Home</li>
              <div className="circle"></div>
              {/* <div className={activeLinkHome && 'active'}></div> */}
            </a>
            <a>
              <li>Soluções Energéticas Sustentáveis</li>
              <div className="circle"></div>
            </a>
            <a>
              <li>Sustentabilidade Empresarial</li>
              <div className="circle"></div>
            </a>

            <a className="login" href="#">
              <li>Login</li>
            </a>

            <a className="menu-desk">
              <MenuDesktop />
            </a>
          </ul>
          <a
            className="menu-mobile"
            onClick={() => {
              setActiveMenu('active')
            }}
          >
            <MenuDesktop />
          </a>
        </HeaderStyle>
      </ContainerHeader>
      <MenuMobileContainer
        className={activeMenu === 'active' ? 'header__nav' : ''}
      >
        <ContainerMenuMobile>
          <nav>
            <div className="image">
              <LogoHeader />
              <img
                src={NewClose}
                alt="Ekatu"
                className="closeMenuIcon"
                onClick={() => {
                  setActiveMenu('')
                }}
              />
            </div>
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
    </>
  )
}

export default Header
