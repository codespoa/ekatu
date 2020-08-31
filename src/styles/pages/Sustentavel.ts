// import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import arrowLeft from '../../assets/arrow.alt.left.png'
import arrowRight from '../../assets/arrow.alt.right.png'

export const ContainerSustentavel = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    width: 100%;
    margin-bottom: 20px;
    padding: 0 20px;

    @media (min-width: 767px) {
      padding: 0 160px;
      margin-bottom: 160px;
    }
    .solucaoExclusiva {
      display: flex;

      img {
        margin-right: 25px;
        width: 60px;
        height: 24px;
      }

      h5 {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        color: ${({ theme }) => theme.colors.primary};
        max-width: 630px;

        @media (min-width: 767px) {
          font-size: 35px;
          line-height: 41px;
        }
      }
    }
  }

  .carrouselSlide {
    width: 100%;

    .carousel-inner {
      .carousel-item {
        min-height: 500px;

        @media (min-width: 767px) {
          min-height: 500px;
        }
        /* display: flex;
        justify-content: center;
        align-items: center; */
      }
    }
  }

  .carousel-control-prev-icon {
    background-image: url(${arrowLeft});
  }

  .carousel-control-next-icon {
    background-image: url(${arrowRight});
  }

  .carrouselCaption {
    bottom: 80px;

    @media (min-width: 767px) {
      bottom: 0px;
    }

    @media (min-width: 1200px) {
      bottom: 80px;
    }

    h3 {
      font-weight: 500;
      font-size: 15px;
      line-height: 28px;
      text-align: center;
      color: ${({ theme }) => theme.colors.purple};

      @media (min-width: 767px) {
        font-size: 24px;
      }
    }

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      color: ${({ theme }) => theme.colors.text};
      margin: 20px 0;

      @media (min-width: 767px) {
        font-size: 22px;
        line-height: 170%;
        margin: 40px 0;
      }
    }

    span {
      font-size: 22px;
      line-height: 170%;
      /* or 37px */

      text-align: center;

      /* título */

      color: #474a56;
    }
  }
`
