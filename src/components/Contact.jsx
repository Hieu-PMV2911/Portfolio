import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
    /* width: 100%; */
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
const Right = styled.div`
  flex: 1;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1;
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`
const Input = styled.input`
  padding: 20px;
  background-color: #e3e3e3;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e3e3e3;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null)

  const handleClick = (e) =>{
    e.preventDefault();
  
    emailjs.sendForm("service_bj29o5r", "template_c8atwk9", form.current, "GSd1O2136uucRzw48")
        .then((result) => {
            setSuccess(true);
        }, (error) => {
            setSuccess(false);
    });
  }

  return (
    <Container>
      <Section id="contact">
        <Left>
          <Form ref={form} onSubmit={handleClick}>
            <Title>Contact Us</Title>
            <Input type="text"  name="name" placeholder="Name" />
            <Input type="text" name="email" placeholder="Email" />
            <TextArea name="message" placeholder="Write your message..." rows={7}/>
            <Button type="submit">Send Message</Button>
            {success && "Your message has been sent. We'll get back to you soon :))"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Section>
    </Container>
  )
}

export default Contact