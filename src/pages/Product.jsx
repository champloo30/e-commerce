import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 100%;
`

const Wrapper = styled.div`
  height: 100%;
  padding: 3rem;
  display: flex;

  ${mobile({
    flexDirection: 'column',
    padding: '0.5rem'
  })}
`

const Left = styled.div`
  height: 100%;
  flex: 1;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({
    height: '40vh'
  })}
`

const Right = styled.div`
  height: 100%;
  flex: 1;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mobile({
    padding: '0.5rem'
  })}
`

const Title = styled.h1`
  font-weight: 300;
  color: #FBA5D9;
`

const Desc = styled.p``

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`

const FilterContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;

  ${mobile({
    width: '100%'
  })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const FilterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
`

const FilterColor = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  transition: all 0.25s ease;

&:hover {
  transform: scale(1.1);
}
`

const FilterSize = styled.select`
  padding: 0.25rem;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  height: 10vh;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    width: '100%'
  })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  gap: 0.25rem;
`

const Amount = styled.span`
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 2px solid #FBA5D9;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  padding: 1rem;
  border: 2px solid #FBA5D9;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: rgba(251,165,217,0.2);
  }
`

function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Left>
          <Img src='https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        </Left>
        <Right>
          <Title>LEAVE THE ROAD TEE</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in mollitia tenetur blanditiis aspernatur sint reprehenderit harum sed quae vero eos repellendus, laboriosam dolores accusantium voluptates ipsum soluta nisi quasi.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='lightgray' />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </Right>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product