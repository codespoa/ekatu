import React, { useState } from 'react'

import { HeaderStyle } from '../../styles/pages/Header'
import LogoHeader from '../../assets/logo-ekatu.svg'
import MenuDesktop from '../../assets/menu-desktop.svg'
import { ContainerHeader } from '../../styles/pages/Home'
import styled from 'styled-components'
import MenuMobile from './../MenuMobile/'

const Header: React.FC = () => {
  // interface RequestLink = {
  //   link: String;
  // }
  const [activeMenu, setActiveMenu] = useState(false)
  // const [ activeLinkHome, setActiveLinkHome ] = useState(true)
  // const [ activeLinkSolucao, setActiveLinkSolucao ] = useState(false)
  // const [ activeLinkSustentabilidade, setActiveLinkSustentabilidade ] = useState(false)

  // function openMenuDesk() {
  //   alert('teste')
  // }

  // function openMenuMobile() {
  //   alert('teste')
  // }

  function activePage() {
    // if(link == 1) {
    //   setActiveLinkSolucao(false)
    //   setActiveLinkSustentabilidade(false)
    //   setActiveLinkHome(true)
    //   return;
    // }
    // if(link == 2) {
    //   setActiveLink(true)
    // }
    // if(link == 3) {
    //   setActiveLink(true)
    // }
  }

  const MenuMobileContainer = styled.div`
    &.OpenMenuMobile {
      visibility: ${activeMenu ? 'hidden' : 'visible'};
    }
  `

  return (
    <>
      <ContainerHeader>
        <HeaderStyle>
          <div>
            <LogoHeader />
          </div>
          <ul>
            <a onClick={activePage}>
              <li>Home</li>
              <div className="circle"></div>
              {/* <div className={activeLinkHome && 'active'}></div> */}
            </a>
            <a onClick={activePage}>
              <li>Soluções Energéticas Sustentáveis</li>
              <div className="circle"></div>
            </a>
            <a onClick={activePage}>
              <li>Sustentabilidade Empresarial</li>
              <div className="circle"></div>
            </a>

            <a className="login" href="#">
              <li>Login</li>
            </a>

            <a className="menu-desk" onClick={() => setActiveMenu(!activeMenu)}>
              <MenuDesktop />
            </a>
          </ul>
          <a className="menu-mobile" onClick={() => setActiveMenu(!activeMenu)}>
            <MenuDesktop />
          </a>
        </HeaderStyle>
      </ContainerHeader>
      <MenuMobileContainer className="OpenMenuMobile">
        <MenuMobile />
      </MenuMobileContainer>
    </>
  )
}

export default Header
