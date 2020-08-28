import React from 'react'
import Head from 'next/head'
import 'styled-components'

import Header from '../components/Header'
import Reduza from '../components/Reduza'
import Energia from '../components/Energia'

import { ContainerHeader } from '../styles/pages/Home'
import { ContainerReduza } from '../styles/pages/Reduza'
import {
  ContainerEnergia,
  RevertContainerEnergia
} from '../styles/pages/Energia'

type Props = {
  justify: boolean
}

const Home: React.FC = ({ justify }: Props) => {
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
          justify={justify}
          background="red"
        ></Energia>
      </ContainerEnergia>

      <RevertContainerEnergia>
        <Energia
          textMain="Energia Solar"
          textSeccond="Energia solar fotovoltaica é a energia obtida através da conversão direta da luz solar em eletricidade."
          textButton="Leia mais"
          justify={justify}
        ></Energia>
      </RevertContainerEnergia>
    </>
  )
}

export default Home
