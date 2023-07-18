import React from 'react'
import styled from 'styled-components'
import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 150vh;
  }

  @media only screen and (max-width: 768px) {
    /* height: 200vh; */
  }
`

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    align-items: center;
    /* justify-content: center; */
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Left = styled.div`
  flex: 1;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
    /* width: 100%; */
  }

  @media only screen and (max-width: 768px) {
    /* display: none; */
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
    /* width: 100%; */
    margin-top: 50px;
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    /* margin-top: 50px; */
  }

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* padding: 20px; */
    text-align: center;
    justify-content: center;
  }
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
  color: #da4ea2;
`
const Des = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px;
    text-align: center;
  }
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px;
    width: 50%;
    margin: auto;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: white;
  list-style: none;
`
const Who = () => {
  return (
    <Container>
      <Section id="project">
        <Left>
          <Canvas camera={{fov: "25", position: [8,8,8] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]}/>
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="../../public/imgs/line.png"/>
            <Subtitle> What I Do</Subtitle>
          </WhatWeDo>
          <Des>A creative group of designers and developers with a passion for the arts.</Des>
          <Button>
            <Link href="https://github.com/Hieu-PMV2911" target="_blank" rel="noopener noreferrer">See our works</Link>
          </Button>
        </Right>
      </Section>
    </Container>
  )
}

export default Who