import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import leafLogo from '../assets/leaf-eco-svgrepo-com.svg'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 10vh;

  ${mobile({
    height: '9vh'
  })}
`

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${mobile({
    padding: '1.125rem 0'
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 0.875rem;
  cursor: pointer;
  
  ${mobile({
    display: 'none'
  })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 5px;
  
  ${mobile({
    marginRight: '0.5rem'
  })}
`

const Input = styled.input`
  border: none;
  
  ${mobile({
    width: '3rem'
  })}
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LogoContainer = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  
  ${mobile({
    gap: '0'
  })}
`

const Logo = styled.h1`
  font-weight: 600;
  color: #fba5d9;
  text-align: center;
  cursor: pointer;
  
  ${mobile({
    fontSize: '1rem',
    marginLeft: '1rem'
  })}
`

const Img = styled.img`
  height: 2rem;
  width: 2rem;
  
  ${mobile({
    display: 'none'
  })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  
  ${mobile({
    flex: 2,
    justifyContent: 'center',
    gap: '0.5rem'
  })}
`

const MenuItem = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  
  ${mobile({
    fontSize: '0.75rem'
  })}
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{color:'gray', fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <LogoContainer href='/'>
            <Logo>THE PINK LEAF</Logo>
            <Img src={leafLogo} />
          </LogoContainer>
        </Center>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar