import React, { useState } from 'react'
import styled from 'styled-components'
import WebDesign from './WebDesign'
import Development from './Development'
import SocialMedia from './SocialMedia'

const data = [
  "Web Designer",
  "Development",
  "Social Media"
]

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%; 
  }
`

const Section = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
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
    width: 50%;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 70px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover:after {
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to{
        width: 100%;
      }
    }
  }
`;
const Work = () => {
  const [work, setWork] = useState("Web Designer");
  return (
    <Container>
      <Section id="works">
        <Left>
          <List>
            {data.map((e)=>(
              <ListItem key={e} text={e} onClick={() => setWork(e)}>{e}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Designer" ? (
              <WebDesign />
            ) : work === "Development" ? (
              <Development />
            ) : (
              <SocialMedia />
            )}
        </Right>
      </Section>
    </Container>
  )
}

export default Work