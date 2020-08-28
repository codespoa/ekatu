import styled from 'styled-components'

export const HeaderStyle = styled.section`
  display: flex;
  align-items: center;

  div {
    margin-right: 50px;

    @media (min-width: 1300px) {
      margin-right: 200px;
    }
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.purple};
  }

  ul {
    display: flex;

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.primary};
      font-size: 19px;
      font-weight: bold;
      min-width: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-right: 50px;
      cursor: pointer;

      @media (min-with: 1300px) {
        margin-right: 70px;
      }
      li {
        list-style: none;
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
