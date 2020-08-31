import React from 'react'
import { ContainerBottomFooter } from '../../styles/pages/Footer'

const BottomFooter: React.FC = () => {
  return (
    <ContainerBottomFooter>
      <div className="containerCustom">
        <div className="bottomFooter">
          <div className="text">
            <p>Ekatu © 2020 - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
      <a href="#" className="faleConosco">
        <p>Fale Conosco</p>
      </a>
    </ContainerBottomFooter>
  )
}

export default BottomFooter
