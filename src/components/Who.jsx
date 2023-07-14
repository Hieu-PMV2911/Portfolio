import React from 'react'
import styled from 'styled-components'

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
  justify-content: center;
`

const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
const Who = () => {
  return (
    <Container>
      <Section>
        <Left>
          
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="../../public/imgs/line.png"/>
            <Subtitle> What We Do</Subtitle>
          </WhatWeDo>
          <Des>a creative group of designers and developers with a passion for the arts.</Des>
          <Button>See our works</Button>
        </Right>
      </Section>
    </Container>
  )
}

export default Who