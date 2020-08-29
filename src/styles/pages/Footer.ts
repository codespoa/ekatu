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
  background-size: contain;
  padding-top: 60px;

  @media (min-width: 767px) {
    padding-top: 30px;
  }

  @media (min-width: 1024px) {
    background-size: initial;
  }

  @media (min-width: 1024px) {
    padding: 0 10px;
    justify-content: flex-end;
  }

  @media (min-width: 1300px) {
    padding: 0 30px;
  }

  @media (min-width: 1600px) {
    padding: 0;
    max-width: 1500px;
    margin: 0 auto;
  }

  @media (min-width: 1900px) {
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
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;

    @media (min-width: 767px) {
      margin-bottom: 100px;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: initial;
    }

    .text {
      .ekatu {
        h5 {
          color: ${props => props.theme.colors.green};
          font-weight: 500;
          font-size: 22px;
          line-height: 27px;

          @media (min-width: 767px) {
            font-size: 32px;
            line-height: 37px;
          }
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
        font-size: 30px;
        line-height: 36px;

        @media (min-width: 767px) {
          font-size: 45px;
          line-height: 53px;
        }
      }
    }
    .button {
      display: flex;
      margin-top: 20px;

      @media (min-width: 767px) {
        margin-top: 50px;
      }

      @media (min-width: 1024px) {
        margin-top: 0;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${props => props.theme.colors.green};
        box-sizing: border-box;
        border-radius: 100px;
        padding: 13px 44px;
        text-decoration: none;

        @media (min-width: 767px) {
          padding: 24px 64px;
        }

        p {
          margin-right: 15px;
          font-weight: 500;
          font-size: 15px;
          line-height: 170%;
          color: ${props => props.theme.colors.green};

          @media (min-width: 767px) {
            font-size: 24px;
            line-height: 170%;
          }
        }
      }
    }
  }

  .content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
      flex-direction: row;
      margin-bottom: 80px;
      align-items: initial;
    }

    @media (min-width: 1300px) {
      margin: 50px 0 160px;
    }

    .institucional,
    .solucoes {
      text-align: center;
      margin: 10px 0 0;
      @media (min-width: 1024px) {
        text-align: initial;
      }
      ul {
        h6 {
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          color: ${props => props.theme.colors.white};
          margin-bottom: 10px;

          @media (min-width: 1024px) {
            margin-bottom: 60px;
          }
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
            margin-bottom: 10px;

            @media (min-width: 1024px) {
              margin-bottom: 28px;
            }

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
      text-align: center;
      align-items: center;
      margin: 20px 0 75px;
      @media (min-width: 1024px) {
        text-align: initial;
        align-items: initial;
        margin: 0;
      }

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
        margin-bottom: 20px;

        @media (min-width: 1024px) {
          margin-bottom: 60px;
        }

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
