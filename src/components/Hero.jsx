import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  /* width: 100%; */
  margin-left: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 150vh;
  }

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 80%;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
    /* width: 100%; */
  }

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 74px;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slide 5s linear infinite;
  background-size: 200% auto;

  @keyframes slide {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
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

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    padding: 20px;
    width: 50%;
  }
`

const Right = styled.div`
  flex: 1;
  position: relative;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

const Img = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`

const Hero = () => {
  return (
    <Container>
      <Navbar />
      <Section id='home'>
        <Left>
          <Title>
            Think. Make. Solve.
          </Title>
          <WhatWeDo>
            <Line src="./imgs/line.png"/>
            <Subtitle> What I Do</Subtitle>
          </WhatWeDo>
          <Des>Hope we will creating delightful, Looking forward to a long-term cooperation with you.</Des>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1,100,200]} scale={2.5}>
              <MeshDistortMaterial color="#2d044c" attach="material" distort={0.5} speed={1.5} />
            </Sphere>
          </Canvas>
          <Img src="./imgs/anhdaidien.png" />
        </Right>
      </Section>
    </Container>
  )
}

export default Hero