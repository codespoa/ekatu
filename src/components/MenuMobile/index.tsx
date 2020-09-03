import React from 'react'
import { ContainerMenuMobile } from '../../styles/pages/MenuMobile'

type DTO = {
  children: JSX.Element
}

const MenuMobile: React.FC<DTO> = () => {
  return (
    <ContainerMenuMobile>
      <h1>sds</h1>
    </ContainerMenuMobile>
  )
}

export default MenuMobile
