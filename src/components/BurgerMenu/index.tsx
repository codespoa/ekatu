import React, { useState } from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div``

type DTO = {
  openBurger: boolean
  setOpenBurger: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

const Burger: React.FC<DTO> = () => {
  return (
    <StyledBurger>
      <ul>
        <a href="#">
          <li>lala</li>
        </a>
        <a href="#">
          <li>lala</li>
        </a>
        <a href="#">
          <li>lala</li>
        </a>
      </ul>
    </StyledBurger>
  )
}

export default Burger
