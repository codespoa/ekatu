import React from 'react'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { ContainerSustentavel } from '../../styles/pages/Sustentavel'

import img from '../../assets/elice.png'

const Sustentavel: React.FC = () => {
  return (
    <ContainerSustentavel>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={img} alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ContainerSustentavel>
  )
}

export default Sustentavel
