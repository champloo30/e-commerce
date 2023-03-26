import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
    linear-gradient(90deg, rgb(251,165,217) 0 5%, rgb(238,185,177) 20% 60%, rgb(238,188,179) 60% 80%, rgb(251,165,217) 95% 100%)
  ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 2rem;
  width: 25%;
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
  flex-direction: column;
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1rem 1.25rem;
  background-color: #FBA5D9;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`

const Link = styled.a`
  text-decoration: underline;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
`

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>WELCOME BACK</Title>
        <Form>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login