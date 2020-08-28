import styled from 'styled-components'

export const ContainerReduza = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
  position: relative;
  padding-top: 0;
  padding-bottom: 0;

  @media (min-width: 1024px) {
    margin: 0 auto;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1600px) {
    max-width: 1400px;
    margin: 0 auto;
  }

  .boxSelect {
    .select {
      display: flex;
      align-items: center;
      ul {
        @media (min-width: 1024px) {
          margin-right: 50px;
        }

        @media (min-width: 1600px) {
          margin-right: 75px;
        }

        li {
          list-style: none;

          p {
            width: 8px;
            height: 8px;
            background-color: ${props => props.theme.colors.grey200};
            border-radius: 50%;
            margin-bottom: 20px;
          }
        }
      }

      .text {
        h1 {
          color: ${props => props.theme.colors.grey};
          font-weight: 300;

          @media (min-width: 1024px) {
            font-size: 30px;
            line-height: 38px;
          }

          @media (min-width: 1600px) {
            font-size: 45px;
            line-height: 53px;
          }
        }
      }
    }
  }

  .image {
    @media (min-width: 998px) {
      margin-right: -10%;
    }
  }

  .imageDown {
    position: absolute;
    bottom: 0px;
  }
`
