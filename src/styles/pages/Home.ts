import styled from 'styled-components'

export const ContainerHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  background: #f5f7fb;
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

  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: 0 auto;
    padding: 25px 40px;
  }

  .containerCustom {
    display: flex;
    flex-direction: column;

    @media (min-width: 998px) {
      flex-direction: row;
    }

    @media (min-width: 1920px) {
      max-width: 1520px;
      margin: 0 auto;
    }
  }
`

export const ContainerMain = styled.main`
  width: 100%;
  overflow-x: hidden;
`
