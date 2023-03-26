import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import { categories } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;

  ${mobile({
    padding: 0,
    flexDirection: 'column'
  })}
`

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories