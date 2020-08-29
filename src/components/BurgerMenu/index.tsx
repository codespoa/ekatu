import React, { useState } from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div``

type DTO = {
  openBurger: boolean
  setOpenBurger: boolean
}

const Burger: React.FC = () => {
  const [openBurger, setOpenBurger]: DTO = useState(false)
  return (
    <StyledBurger>
      <ul openBurger={openBurger}>
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
