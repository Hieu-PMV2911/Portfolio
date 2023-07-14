import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Section = styled.div`
  width: 1400px;
  display: flex;
  /* background-color: rebeccapurple; */
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
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
const Navbar = () => {
  return (
    <Container>
	<Section>
		<Links>
			<Logo src="../../public/imgs/logo.png" />
			<List>
				<ListItem>HOME</ListItem>
				<ListItem>PROJECT</ListItem>
				<ListItem>WORKS</ListItem>
				<ListItem>CONTACT</ListItem>
			</List>
		</Links>
		<Icons>
			<Icon src="../../public/imgs/search.png" />
		<Button>Hire Now</Button>
		</Icons>
	</Section>
    </Container>
  )
}

export default Navbar