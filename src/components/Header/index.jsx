

import React from 'react'

import { ContainerHeader, Nav } from './styles'



const Header = () => {
  return (
    <ContainerHeader>
      <h1>Meu Sistema Financeiro</h1>
      <Nav>
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
      </Nav>
    </ContainerHeader>
  )
}

export default Header
