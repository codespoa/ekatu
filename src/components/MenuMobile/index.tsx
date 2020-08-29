import React, { useState } from 'react'

import { ContainerMenuMobile } from '../../styles/pages/MenuMobile'
import LogoMenuMobile from '../../assets/logo-ekatu.svg'

const MenuMobile: React.FC = () => {
  const [activeMenuMob, setActiveMenuMob] = useState(false)

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

  return (
    <ContainerMenuMobile>
      <nav>
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
        </ul>
      </nav>
    </ContainerMenuMobile>
  )
}

export default MenuMobile
