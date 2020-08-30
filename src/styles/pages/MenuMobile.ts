// import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

export const ContainerMenuMobile = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  min-height: 100vh;
  position: initial;
  z-index: 10;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding: 15% 0;

  .image {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .closeMenu {
      width: 30px;
      height: 30px;

      @media (min-width: 500px) {
        display: block;
      }

      @media (min-width: 986px) {
        display: none;
      }
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }

  ul {
    padding: 30px 40px;

    li {
      list-style: circle;
      color: ${({ theme }) => theme.colors.white};
      font-size: 22px;
      margin: 12px 0;
    }

    .login {
      width: 70%;
      text-align: center;

      li {
        list-style: none;
        color: ${({ theme }) => theme.colors.green};
        border: 2px solid ${({ theme }) => theme.colors.green};
        border-radius: 100px;
        margin-top: 35px;
        padding: 10px 0;
      }
    }
  }
`
