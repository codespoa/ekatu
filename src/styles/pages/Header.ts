import styled from 'styled-components'

export const HeaderStyle = styled.section`
  display: flex;
  align-items: center;
  position: initial;

  @media (min-width: 1300px) {
    padding: 0 30px;
    position: initial;
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

  div {
    margin-right: 50px;

    @media (min-width: 1300px) {
      margin-right: 50px;
    }

    @media (min-width: 1600px) {
      margin-right: 100px;
      padding: 0;
    }

    @media (min-width: 1920px) {
      max-width: 1920px;
      margin: 0 auto;
      padding: 0 40px;
    }
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.purple};
  }

  ul {
    display: none;

    @media (min-width: 1200px) {
      display: flex;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.primary};
      font-size: 16px;
      font-weight: bold;
      min-width: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      margin-right: 30px;

      @media (min-width: 1400px) {
        margin-right: 45px;
      }

      @media (min-width: 1600px) {
        font-size: 16px;
        margin-right: 70px;
      }

      @media (min-width: 1920px) {
        font-size: 19px;
      }
      li {
        list-style: none;

        &:hover {
          color: ${props => props.theme.colors.purple};
        }
      }

      .circle {
        display: none;
        width: 8px;
        height: 8px;
        background-color: ${props => props.theme.colors.green};
        border-radius: 50%;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        margin: 0 auto;

        &.active {
          display: block !important;
        }
      }

      &:hover {
        color: ${props => props.theme.colors.purple};
      }
    }
  }

  .menu-mobile {
    @media (min-width: 1200px) {
      display: none;
    }
  }

  .login {
    border: 2px solid ${props => props.theme.colors.purple};
    box-sizing: border-box;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px 64px;
    margin-right: 70px;

    li {
      margin: 0;
    }
  }

  .menu-desk {
    cursor: pointer;
  }
`
