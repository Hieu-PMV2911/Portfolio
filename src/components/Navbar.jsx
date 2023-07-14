import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Section = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
  justify-content: space-between;
`
const Links = styled.div`
  
`
const Logo = styled.div`
  
`
const List = styled.div`
  
`
const ListItem = styled.div`
  
`
const Icons = styled.div`
  
`
const Icon = styled.div`
  
`
const Button = styled.div`
  
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
			<Icon src="" />
		</Icons>
		<Button>Hire Now</Button>
	</Section>
    </Container>
  )
}

export default Navbar