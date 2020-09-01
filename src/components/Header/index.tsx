import React, { useState } from 'react'

import { HeaderStyle } from '../../styles/pages/Header'
import LogoHeader from '../../assets/logo-ekatu.svg'
import MenuDesktop from '../../assets/menu-desktop.svg'
import { ContainerHeader } from '../../styles/pages/Home'
import styled from 'styled-components'
import MenuMobile from './../MenuMobile/'

type DTO = {
  children: JSX.Element
}

const Header: React.FC<DTO> = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  // const [open, setOpen] = useState(false)
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
    .header__nav {
      transform: translateX(${activeMenu ? 0 : '100%'});
      transition: all 0.5s ease;
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

            <a className="menu-desk">
              <MenuDesktop />
            </a>
          </ul>
          <a className="menu-mobile" onClick={() => setActiveMenu(!activeMenu)}>
            <MenuDesktop />
          </a>
        </HeaderStyle>
      </ContainerHeader>
      <MenuMobileContainer className={activeMenu ? '' : 'header__nav'}>
        <MenuMobile />
      </MenuMobileContainer>
    </>
  )
}

export default Header
