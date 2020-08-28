import styled from 'styled-components'

import img from '../../assets/fundo-page-purple.png'

export const ContainerFooter = styled.section`
  background-image: url(${img});
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    padding: 0 10px;
    justify-content: flex-end;
  }

  @media (min-width: 1300px) {
    padding: 0 30px;
  }

  @media (min-width: 1600px) {
    padding: 0 50px;
    max-width: 1920px;
    margin: 0 auto;
  }

  @media (min-width: 1800px) {
  }

  .energiaPreserva {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .text {
      .ekatu {
        h5 {
          color: ${props => props.theme.colors.green};
          font-weight: 500;
          font-size: 32px;
          line-height: 37px;
        }

        .line {
          border: 2px solid ${props => props.theme.colors.green};
          border-radius: 100px;
          width: 84px;
          margin-top: 12px;
        }
      }

      h4 {
        color: ${props => props.theme.colors.white};
        font-weight: 300;
        font-size: 45px;
        line-height: 53px;
      }
    }
    .button {
      display: flex;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${props => props.theme.colors.green};
        box-sizing: border-box;
        border-radius: 100px;
        padding: 24px 64px;
        text-decoration: none;

        p {
          margin-right: 15px;
          font-weight: 500;
          font-size: 24px;
          line-height: 170%;
          color: ${props => props.theme.colors.green};
        }
      }
    }
  }

  .content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    @media (min-width: 1024px) {
      margin-bottom: 80px;
    }

    @media (min-width: 1300px) {
      margin: 150px 0 160px;
    }

    .institucional,
    .solucoes {
      ul {
        h6 {
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          color: ${props => props.theme.colors.white};
          margin-bottom: 60px;
        }

        a {
          text-decoration: none;
          color: ${props => props.theme.colors.text};
          font-weight: normal;
          font-size: 19px;
          line-height: 22px;

          &:hover {
            color: ${props => props.theme.colors.green};
          }

          li {
            list-style: none;
            margin-bottom: 28px;

            &.last {
              margin: 0;
            }
          }
        }
      }
    }

    .social {
      display: flex;
      flex-direction: column;

      h6 {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: ${props => props.theme.colors.white};
        margin-bottom: 60px;
      }

      .socialIconm {
        display: flex;
        align-items: center;
        margin-bottom: 60px;

        .icon {
          display: flex;
          align-items: center;
          text-decoration: none;
          margin-right: 35px;

          &.last {
            margin-right: 0px;
          }

          svg {
            margin-right: 12px;
          }

          p {
            color: ${props => props.theme.colors.text};
            font-size: 19px;
            line-height: 22px;
          }
        }
      }
    }
  }
`

export const ContainerBottomFooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.purple200};
  padding: 60px 0;

  .bottomFooter {
    width: 100%;
    position: relative;

    .text {
      p {
        color: ${props => props.theme.colors.white};
        font-weight: normal;
        font-size: 19px;
        line-height: 22px;
      }
    }
  }

  .faleConosco {
    position: absolute;
    bottom: 0;
    right: 80px;
    border-radius: 15px 15px 0px 0px;
    background-color: ${props => props.theme.colors.green};
    padding: 15px 55px;
    text-decoration: none;

    p {
      font-weight: normal;
      font-size: 19px;
      line-height: 22px;
      color: ${props => props.theme.colors.white};
    }
  }
`
