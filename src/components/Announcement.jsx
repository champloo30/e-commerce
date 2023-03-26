import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 5vh;
  background-color: #A5AEFB;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
`

function Announcement() {
  return (
    <Container>Super Deal! Free Shipping on Orders Over $50</Container>
  )
}

export default Announcement