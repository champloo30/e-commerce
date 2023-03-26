import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;

  ${mobile({
    padding: '0.5rem'
  })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TopButton = styled.button`
  padding: ${props => props.type === 'filled' ? '0.625rem' : '0.5rem'};
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
  ${mobile({
    display: 'none'
  })}
`

const TopText = styled.span`
  text-decoration: underline;
  margin: 0 0.5rem;
  cursor: pointer;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: 'column'
  })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: 'column'
  })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Img = styled.img`
  width: 17.5rem;

  ${mobile({
    width: '15rem',
    height: '100%'
  })}
`

const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  gap: 0.25rem;
`

const ProductAmount = styled.span`
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 2px solid #FBA5D9;
  display: flex;
  align-items: center;
  justify-content: center;

${mobile({
  margin: '0.5rem 1rem'
})}
`

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;

  ${mobile({
    marginBottom: '1.5rem'
  })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`

const Summary = styled.div`
  flex: 1;
  border: 2px solid lightgray;
  border-radius: 0.5rem;
  padding: 1rem;
  height: 50vh;
`

const SummaryTitle = styled.h2`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '600'};
  font-size: ${props => props.type === 'total' && '1.5rem'};
  border-top: ${props => props.type === 'total' && '2px solid black'};
  padding-top: ${props => props.type === 'total' && '1.5rem'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`

function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Img src='https://img.freepik.com/premium-photo/blue-sport-running-shoes-white-background-sports-shoes-blue-color-trendy-sport-footwear_256259-2485.jpg?w=996' />
                <Details>
                  <ProductName><b>Product:</b> MENS RUNNING SHOES</ProductName>
                  <ProductId><b>ID:</b> 745292474</ProductId>
                  <ProductColor color='#5D6364' />
                  <ProductSize><b>Size:</b> 11.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </AmountContainer>
                <ProductPrice>$74.99</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Img src='https://st.depositphotos.com/1007385/3594/i/450/depositphotos_35942949-stock-photo-sport-shorts-on-a-white.jpg' />
                <Details>
                  <ProductName><b>Product:</b> MENS BASKETBALL SHORTS</ProductName>
                  <ProductId><b>ID:</b> 238923514</ProductId>
                  <ProductColor color='#169454' />
                  <ProductSize><b>Size:</b> L</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </AmountContainer>
                <ProductPrice>$11.99</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$86.98</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$6.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$6.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$86.98</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart