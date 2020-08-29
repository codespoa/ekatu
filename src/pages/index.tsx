import React, { useState } from 'react'
import Head from 'next/head'
import 'styled-components'

import Header from '../components/Header'
import Reduza from '../components/Reduza'
import Energia from '../components/Energia'
import QuemSomos from '../components/QuemSomos'
import Sustentavel from '../components/Sustentavel'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'

import { ContainerHeader } from '../styles/pages/Home'
import { ContainerReduza } from '../styles/pages/Reduza'
import { ContainerQuemSomos } from '../styles/pages/QuemSomos'
import { ContainerSustentavel } from '../styles/pages/Sustentavel'
import { ContainerFooter, ContainerBottomFooter } from '../styles/pages/Footer'

import {
  ContainerEnergia,
  RevertContainerEnergia
  // eslint-disable-next-line import/no-duplicates
} from '../styles/pages/Energia'

import imageBosque from '../assets/bosque.png'
import imageElice from '../assets/elice.png'
import imageTraco from '../assets/traco.png'

const Home: React.FC = () => {
  // const [showImage, setShowImage] = useState(false)
  return (
    <>
      <Head>
        <title>Ekatu - Soluções exclusivas em energia</title>
      </Head>

      <ContainerHeader>
        <Header />
      </ContainerHeader>

      <ContainerReduza>
        <Reduza />
      </ContainerReduza>

      <ContainerEnergia>
        <Energia
          textMain="Energia Eólica"
          textSeccond="Transformação da energia do vento em energia útil."
          support="Soluções exclusivas em energia"
          textButton="Leia mais"
          imgTraco={null}
          imageContent={imageBosque}
          imgTraco={imageTraco}
        ></Energia>
      </ContainerEnergia>

      <RevertContainerEnergia>
        <Energia
          textMain="Energia Solar"
          textSeccond="Energia solar fotovoltaica é a energia obtida através da conversão direta da luz solar em eletricidade."
          textButton="Leia mais"
          imageContent={imageBosque}
        ></Energia>
      </RevertContainerEnergia>

      <ContainerEnergia>
        <Energia
          textMain="Biogás"
          textSeccond="Transforma gases poluentes de aterros sanitários em energia limpa."
          textButton="Leia mais"
          imageContent={imageBosque}
        ></Energia>
      </ContainerEnergia>

      <RevertContainerEnergia>
        <Energia
          textMain="Hídrico"
          textSeccond="Transformando o movimento das águas em energia renovável."
          textButton="Leia mais"
          imageContent={imageBosque}
        ></Energia>
      </RevertContainerEnergia>

      <ContainerEnergia>
        <Energia
          textMain="Bateria"
          textSeccond="Dispositivo eletroquímico de duas ou mais células para armazenamento de energia elétrica."
          textButton="Leia mais"
          imageContent={imageBosque}
        ></Energia>
      </ContainerEnergia>

      <ContainerQuemSomos>
        <QuemSomos
          textSeccond="A Ekatu é uma empresa com uma forte visão sobre o seu papel na preservação ambiental e deseja espalhar esta mesma paixão para outros negócios. O nosso objetivo é levar energia limpa e outras soluções sustentáveis para a sua empresa, diminuindo o impacto ambiental e aumentando a sua lucratividade"
          textButton="Conheça-nos"
          support="Quem é a Ekatu?"
          imageContent={imageElice}
          imgTraco={imageTraco}
        ></QuemSomos>
      </ContainerQuemSomos>

      <ContainerSustentavel>
        <Sustentavel />
      </ContainerSustentavel>

      <ContainerFooter>
        <Footer />
      </ContainerFooter>

      <ContainerBottomFooter>
        <BottomFooter />
      </ContainerBottomFooter>
    </>
  )
}

export default Home
