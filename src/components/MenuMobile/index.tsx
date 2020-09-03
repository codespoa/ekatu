import React from 'react'
import { ContainerMenuMobile } from '../../styles/pages/MenuMobile'

type DTO = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

const MenuMobile: React.FC<DTO> = () => {
  return (
    <ContainerMenuMobile>
      <h1>sds</h1>
    </ContainerMenuMobile>
  )
}

export default MenuMobile
