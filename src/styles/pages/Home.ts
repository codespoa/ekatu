import styled from 'styled-components'

export const ContainerHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  background: #f5f7fb;
  /* position: fixed; */
  z-index: 9;
  transition: all 0.5s ease;

  @media (min-width: 520px) {
    position: initial;
  }

  @media (min-width: 998px) {
    margin: 0 auto;
    align-items: center;
  }

  @media (min-width: 1200px) {
    position: initial;
  }

  @media (min-width: 1600px) {
    max-width: 1500px;
    margin: 0 auto;
  }

  @media (min-width: 1900px) {
    max-width: 1920px;
    margin: 0 auto;
  }
`

export const ContainerMain = styled.main`
  width: 100%;
  overflow-x: hidden;
`
