import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 60vh;
  background-color: rgba(251,165,217,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  ${mobile({
    height: '40vh'
  })}
`

const Title = styled.h1`
  font-size: 4.5rem;

  ${mobile({
    fontSize: '3.5rem'
  })}
`

const Desc = styled.div`
  font-size: 1.5rem;
  font-weight: 300;

  ${mobile({
    textAlign: 'center'
  })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 2.5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({
    width: '80%'
  })}
`

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 1.25rem;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #A5AEFB;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover ${Icon} {
    transform: scale(1.2);
  }
`

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <Icon>
            <Send />
          </Icon>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter