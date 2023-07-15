import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Right = styled.div`
  flex: 5;
  position: relative;
`
const Title = styled.h1`
  font-size: 74px;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`
const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`
const Hero = () => {
  return (
    <Container>
      <Navbar />
      <Section>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="../../public/imgs/line.png"/>
            <Subtitle> What We Do</Subtitle>
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
          <Img src="../../public/imgs/anhdaidien.png" />
        </Right>
      </Section>
    </Container>
  )
}

export default Hero