// import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import arrowLeft from '../../assets/arrow.alt.left.png'
import arrowRight from '../../assets/arrow.alt.right.png'

export const ContainerMenuMobile = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 17%;
  right: 0;
  z-index: 5;
  transition: all 0.5 ease;

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
