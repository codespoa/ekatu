import styled from 'styled-components'

export const ContainerEnergia = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  flex: 1;

  @media (min-width: 1024px) {
    margin: 0 auto;
    align-items: top;
    padding: 50px 0px;
    max-width: 1500px;
  }

  @media (min-width: 1600px) {
    max-width: 1500px;
    margin: 0 auto;
  }

  .boxText {
    .solucaoExclusiva {
      display: flex;
      align-items: center;


      svg {
        margin-right: 20px;
      }

      h5 {
        font-size: 35px;
        line-height: 41px;
        font-weight: 500;

        /* @media (min-width: 1300px) {
          font-size: 100px;
          line-height: 117px;
        } */
      }
    }

    .text {
      @media (min-width: 1024px) {
        margin-top: 100px;
      }

      @media (min-width: 1300px) {
        margin-top: 160px;
      }
      h2 {
        font-size: 100px;
        line-height: 117px;
        font-weight: 300;
        font-size: 100px;
        line-height: 117px;
        color: ${props => props.theme.colors.primary};

        @media (min-width: 1300px) {
          max-width: 590px;
        }
      }

      p {
        color: ${props => props.theme.colors.text};

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
          margin-right: 20px;
        }
      }
    }
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imageDown {
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }
`

export const RevertContainerEnergia = styled(ContainerEnergia)`
  .boxText {
    order: 2;
  }
`
