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
  min-height: 50vh;

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

  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .containerCustom {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 998px) {
      flex-direction: row;
    }

    @media (min-width: 1920px) {
      max-width: 1520px;
      margin: 0 auto;
    }
  }

  .boxSelect {
    width: 100%;
    .select {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;

      @media (min-width: 1024px) {
        flex-direction: row;
      }

      @media (min-width: 1200px) {
      }

      ul {
        flex-direction: row;
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

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

          &:hover p {
            background: ${props => props.theme.colors.green};
          }

          p {
            width: 8px;
            height: 8px;
            background-color: ${props => props.theme.colors.grey200};
            border-radius: 50%;
            margin-bottom: 20px;
          }

          .green {
            background: ${props => props.theme.colors.green};
            width: 16px;
            height: 16px;
          }
        }
      }

      .tooltipCustom {
        display: none;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        padding: 16px 24px;
        background-color: ${props => props.theme.colors.purple};
        border-radius: 10px;
        left: 46px;
        top: 25px;
        @media (min-width: 1023px) {
          display: flex;
          top: -26px;
          top: 157px;
        }

        @media (min-width: 1200px) {
          top: -26px;
        }

        img {
          width: 12px;
          transform: translateX(-34px);

          @media (min-width: 998px) {
            position: absolute;
            top: 23px;
          }

          @media (min-width: 1200px) {
            position: initial;
          }
        }

        h5 {
          color: #fff;
          font-size: 13px;
          line-height: 15px;
          max-width: 191px;
        }
      }

      .text {
        h1 {
          color: ${props => props.theme.colors.grey};
          font-weight: 300;
          font-size: 27px;

          @media (min-width: 767px) {
            font-size: 29px;
            line-height: 34px;
          }

          @media (min-width: 1024px) {
            font-size: 39px;
            line-height: 44px;
            max-width: 598px;
          }

          @media (min-width: 1400px) {
            font-size: 40px;
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
    display: none;

    @media (min-width: 767px) {
      display: block;
      transform: translateX(10%);
    }

    @media (min-width: 1300px) {
      display: block;
      transform: translateX(6%);
    }

    @media (min-width: 1900px) {
      transform: translateX(0%);
    }

    @media (min-width: 1900px) {
      transform: translateX(32%);
    }
  }

  .imageDown {
    display: none;
    @media (min-width: 998px) {
      display: block;
    }
    position: absolute;
    bottom: 0px;
  }
`
