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
  flex-wrap: wrap;
  overflow: hidden;

  @media (min-width: 1024px) {
    margin: 0 auto;
    align-items: center;
  }

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
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

  .boxSelect {
    width: 100%;
    .select {
      display: flex;
      align-items: center;
      flex-direction: column;

      @media (min-width: 1024px) {
        flex-direction: row;
      }

      @media (min-width: 1200px) {
      }

      ul {
        flex-direction: row;
        margin: 30px;
        display: flex;

        @media (min-width: 1024px) {
          flex-direction: column;
          margin: 0;
          margin-right: 50px;
        }

        @media (min-width: 1600px) {
          margin-right: 75px;
        }

        li {
          list-style: none;
          margin: 0 20px;

          @media (min-width: 1024px) {
            margin: 0;
          }

          p {
            width: 8px;
            height: 8px;
            background-color: ${props => props.theme.colors.grey200};
            border-radius: 50%;
            margin-bottom: 20px;

            &:nth-of-type(1) {
              /* background: ${props => props.theme.colors.green}; */
            }
          }
        }
      }

      .text {
        h1 {
          color: ${props => props.theme.colors.grey};
          font-weight: 300;

          @media (min-width: 1024px) {
            font-size: 45px;
            line-height: 53px;
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
    width: 100%;
    @media (min-width: 998px) {
      margin-right: -10%;
    }

    @media (min-width: 1200px) {
      width: 50%;
    }
  }

  .imageDown {
    position: absolute;
    bottom: 0px;
  }
`
