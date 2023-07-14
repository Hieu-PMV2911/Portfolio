import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;

`
const Hero = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

export default Hero