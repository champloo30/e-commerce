import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url('https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGluayUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
    linear-gradient(90deg, rgb(251,165,217) 0 5%, rgb(255,231,227) 20% 80%, rgb(251,165,217) 95% 100%)
  ;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({
    background: "url('https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGluayUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'), linear-gradient(rgb(251,165,217) 0 5%, rgb(255,231,227) 20% 80%, rgb(251,165,217) 95% 100%)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    background: "url('https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGluayUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'), linear-gradient(rgb(251,165,217) 0 5%, rgb(255,231,227) 20% 80%, rgb(251,165,217) 95% 100%)"
  })}
`

const Wrapper = styled.div`
  padding: 2rem;
  width: 40%;
  background-color: rgba(255,255,255,0.4);

  ${mobile({
    width: '75%'
  })}
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 0.75rem;
  border: 2px solid #FBA5D9;
  background-color: transparent;
  color: black;

  &::placeholder {
    color: black;
  }
`

const Agreement = styled.span`
  font-size: 0.75rem;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1rem 1.25rem;
  background-color: #FBA5D9;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
          <Agreement>
            By creating an account, I consent to the proccessing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register