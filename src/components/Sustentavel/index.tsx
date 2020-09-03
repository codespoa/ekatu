import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { ContainerSustentavel } from '../../styles/pages/Sustentavel'

import img from '../../assets/icon-slide.png'
import imageTraco from '../../assets/traco.png'

type DTO = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

const Sustentavel: React.FC<DTO> = () => {
  return (
    <ContainerSustentavel>
      <div className="boxText">
        <div className="solucaoExclusiva">
          <img
            src={imageTraco}
            className={imageTraco ? 'active' : 'inactive'}
            alt="Ekatu"
          />
          <h5>Empresas que já são sustentáveis com a ajuda da Ekatu</h5>
        </div>
      </div>
      <Carousel indicators={false} className="carrouselSlide">
        <Carousel.Item>
          <img className="d-block m-auto" src={img} alt="First slide" />
          <Carousel.Caption className="carrouselCaption">
            <h3>Rudi Duarte</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              mollis neque in quam. Sit elementum vulputate bibendum lobortis
              dignissim quam ac lacus, massa. Nibh urna tempus dui pellentesque
              orci sit tortor.
            </p>
            <span>Razzo Software House</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block m-auto" src={img} alt="Third slide" />
          <Carousel.Caption className="carrouselCaption">
            <h3>Neomar</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              mollis neque in quam. Sit elementum vulputate bibendum lobortis
              dignissim quam ac lacus, massa. Nibh urna tempus dui pellentesque
              orci sit tortor.
            </p>
            <span>Razzo Software House</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  m-auto" src={img} alt="Third slide" />
          <Carousel.Caption className="carrouselCaption">
            <h3>Cadu Alves</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              mollis neque in quam. Sit elementum vulputate bibendum lobortis
              dignissim quam ac lacus, massa. Nibh urna tempus dui pellentesque
              orci sit tortor.
            </p>
            <span>Razzo Software House</span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ContainerSustentavel>
  )
}

export default Sustentavel
