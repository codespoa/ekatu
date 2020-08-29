import styled from 'styled-components'
import img from '../../assets/new-fundo-page.png'

export const ContainerEnergia = styled.section`
  width: 100%;
  height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  flex: 1;
  background-image: none;
  background-position: center;
  background-size: contain;
  flex-wrap: wrap;
  padding: 0 15px;

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

  @media (min-width: 1900px) {
    max-width: 1920px;
    margin: 0 auto;
  }

  .boxText {
    width: 100%;
    @media (min-width: 1200px) {
      width: 50%;
    }
    .solucaoExclusiva {
      display: flex;
      align-items: center;
      margin: 45px 0 25px;

      @media (min-width: 767px) {
        margin: 0;
      }

      img {
        display: none;
        margin-right: 20px;

        &.active {
          display: block !important;
        }
      }

      h5 {
        font-size: 15px;
        line-height: 21px;
        font-weight: 500;

        @media (min-width: 767px) {
          font-size: 35px;
          line-height: 41px;
        }

        /* @media (min-width: 1300px) {
          font-size: 100px;
          line-height: 117px;
        } */
      }
    }

    .text {
      @media (min-width: 1024px) {
        margin-top: 100px;
        padding: 0 50px;
      }

      @media (min-width: 1300px) {
        margin-top: 160px;
      }
      h2 {
        font-size: 100px;
        line-height: 117px;
        font-weight: 300;
        font-size: 61px;
        line-height: 63px;
        color: ${props => props.theme.colors.primary};

        @media (min-width: 767px) {
          font-size: 100px;
          line-height: 117px;
        }

        @media (min-width: 1300px) {
          max-width: 560px;
        }
      }

      p {
        color: ${props => props.theme.colors.text};
        margin: 25px 0;

        @media (min-width: 1024px) {
          margin: 50px 0 130px;
        }

        @media (min-width: 1300px) {
          font-size: 22px;
          line-height: 170%;
        }
      }

      a {
        background-color: ${props => props.theme.colors.purple};
        padding: 24px 64px;
        border-radius: 100px;
        width: 290px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        @media (min-width: 1300px) {
          margin-top: 135px;
        }

        p {
          color: ${props => props.theme.colors.white};
          margin: 0;
          margin-right: 20px;
        }
      }
    }
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 1024px) {
      padding: 0 20px;
    }

    @media (min-width: 1200px) {
      width: 50%;
    }
  }

  .imageDown {
    position: absolute;
    bottom: 65px;
    left: 0;
    right: 0;
    justify-content: center;
    display: none;
    @media (min-width: 998px) {
      display: flex;
    }
  }

  /*.ocean {
    background: #f5f7fb;
    height: 10%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;

  }
   .wave {
    background: url('https://venkat369.github.io/development/wave.svg') repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  .wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  } */
`

export const RevertContainerEnergia = styled(ContainerEnergia)`
  /* background: red; */
  background-image: url(${img});

  .image {
    order: 2;

    @media (min-width: 1200px) {
      order: 1;
    }
  }
  .boxText {
    order: 2;
  }
`

export const ContainerQuemSomos = styled(ContainerEnergia)`
  .text {
    margin: 0;
  }
`
