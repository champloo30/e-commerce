import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import leafLogo from '../assets/leaf-eco-svgrepo-com.svg'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;

  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
`

const Logo = styled.a`
  color: #FBA5D9;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
`

const LogoIcon = styled.img`
  width: 2rem;
  height: 2rem;
`

const Desc = styled.p`
  font-weight: 300;
`

const SocialContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 1.25rem;

  ${mobile({
    display: 'none'
  })}
`

const Title = styled.h3`
  margin-bottom: 1rem;
  color: #FBA5D9;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.5rem;
`

const ListItem = styled.li`
  width: 50%;
`

const Right = styled.div`
  flex: 1;
  padding: 1.25rem;

  ${mobile({
    backgroundColor: '#f1f1f1',
    padding: '1.5rem'
  })}
`

const ContactItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Payment = styled.img`
  width: 50%;
`

function Footer() {
  return (
    <Container>
      <Left>
        <Logo href='/'>THE PINK LEAF <LogoIcon src={leafLogo} /></Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem pariatur, illo vel placeat, explicabo eligendi aliquam totam, assumenda omnis doloribus atque ipsam voluptate ab animi fuga delectus nisi praesentium voluptatem?
        </Desc>
        <SocialContainer>
          <SocialIcon color='#3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='#E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='#55ACEE'>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{color: '#FBA5D9'}} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{color: '#FBA5D9'}} />
          (123)456-7890
        </ContactItem>
        <ContactItem>
          <MailOutline style={{color: '#FBA5D9'}} />
          contact@thepinkleaf.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer