import React, { useState } from 'react'

import { HeaderStyle } from '../../styles/pages/Header'
import LogoHeader from '../../assets/logo-ekatu.svg'
import MenuDesktop from '../../assets/menu-desktop.svg'

const Header: React.FC = () => {
  // interface RequestLink = {
  //   link: String;
  // }

  // const [ activeLinkHome, setActiveLinkHome ] = useState(true)
  // const [ activeLinkSolucao, setActiveLinkSolucao ] = useState(false)
  // const [ activeLinkSustentabilidade, setActiveLinkSustentabilidade ] = useState(false)

  function openMenuDesk() {
    alert('teste')
  }

  function openMenuMobile() {
    alert('teste')
  }

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

  return (
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

        <a className="menu-desk" onClick={openMenuDesk}>
          <MenuDesktop />
        </a>
      </ul>
      <a className="menu-mobile" onClick={openMenuMobile}>
        <MenuDesktop />
      </a>
    </HeaderStyle>
  )
}

export default Header
