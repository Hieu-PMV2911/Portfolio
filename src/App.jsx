import { useState } from 'react'
import Hero from './components/Hero'
import Who from './components/Who'
import Work from './components/Work'
import Contact from './components/Contact'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  scrollbar-width: none;
  background: url("./imgs/bg.jpeg");
  &::-webkit-scrollbar{
    display:none;
  }
`


function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/>
    </Container>
  )
}

export default App
