import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* margin-right: 20px; */
  /* z-index: 999;
  position: fixed;
  top: 0; */

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px){
    width: 100%;
  }
`
const Section = styled.div`
  width: 1400px;
  display: flex;
  /* background-color: rebeccapurple; */
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }

  @media only screen and (max-width: 768px){
    width: 100%;
    padding: 10px;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

`
const Logo = styled.img`
  height: 50px;
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px){
    display: none;
  }
`
const ListItem = styled.li`
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Link = styled.a`
  text-decoration: none;
  color: white;
  list-style: none;
`
const Navbar = () => {
  return (
    <Container>
      <Section>
        <Links>
          <Logo src="./imgs/logo.png" />
          <List>
            <ListItem>
              <Link href='#home'>HOME</Link>
            </ListItem>
            <ListItem>
              <Link href="#project">PROJECT</Link>
            </ListItem>
            <ListItem>
              <Link href="#works">WORKS</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">CONTACT</Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./imgs/search.png" />
        <Button>
          <Link href="#contact">Hire Now</Link>
        </Button>
        </Icons>
      </Section>
    </Container>
  )
}

export default Navbar