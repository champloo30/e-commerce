import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  min-width: 17.5rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }

  ${mobile({
    margin: '0.5rem 0.25rem'
  })}
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`

const Title = styled.h1`
  color: white;
  text-align: center;
  width: 80%;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #FBA5D9;
  }
`

function Product({item}) {
  return (
    <Container>
      <Img src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <IconContainer>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </IconContainer>
      </Info>
    </Container>
  )
}

export default Product