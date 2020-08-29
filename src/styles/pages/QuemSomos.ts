import styled from 'styled-components'
import img from '../../assets/fundo-quem-somos.png'

import { ContainerEnergia } from './Energia'

export const ContainerQuemSomos = styled(ContainerEnergia)`
  background-image: url(${img});
  background-size: cover;
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
