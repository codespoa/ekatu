import styled from 'styled-components'
import img from '../../assets/fundo-quem-somos.png'

import { ContainerEnergia } from './Energia'

export const ContainerQuemSomos = styled(ContainerEnergia)`
  background-image: url(${img});
  background-size: cover;

  @media (min-width: 1024px) {
    margin: 0 auto;
    align-items: top;
    padding: 50px 20px;
    max-width: 1500px;
  }

  @media (min-width: 1600px) {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 40px;
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
  .boxText {
    @media (min-width: 1024px) {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    .solucaoExclusiva {
      h5 {
        color: ${props => props.theme.colors.white};
        font-size: 35px;
        line-height: 41px;
      }
    }

    .text {
      margin: 0;

      p {
        color: ${props => props.theme.colors.white};
        font-size: 22px;
        line-height: 170%;
        font-weight: normal;
        width: 100%;

        @media (min-width: 1024px) {
          margin: 40px 0 70px;
          max-width: 630px;
        }
      }

      a {
        margin: 0;
        background-color: ${props => props.theme.colors.purple};
        border: 2px solid ${props => props.theme.colors.green};
        width: 326px;

        @media (min-width: 1024px) {
        }

        p {
          color: ${props => props.theme.colors.green};
          font-size: 24px;
          margin: 0;
          margin-right: 20px;
        }
      }
    }
  }
`
