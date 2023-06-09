import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { mobile } from '../responsive'
import Product from './Product'

const Container = styled.div`
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mobile({
    padding: '0.25rem'
  })}
`

function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products