import styled from 'styled-components'

export const ContainerHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;

  @media (min-width: 998px) {
    margin: 0 auto;
    align-items: center;
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
