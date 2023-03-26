import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({
    height: '70vh'
  })}
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

const Arrow = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '1rem'};
  right: ${props => props.direction === 'right' && '1rem'};
  margin: auto;
  cursor: pointer;
  z-index: 2;
  
  ${mobile({
    left: props => props.direction === 'left' && '0.25rem',
    right: props => props.direction === 'right' && '0.25rem'
  })}
`

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
  
  ${mobile({
    flexDirection: 'column',
    position: 'relative'
  })}
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Img = styled.img`
  height: 100%;
  
  ${mobile({
    width: '100%'
  })}
`

const InfoContainer = styled.div`
  flex: 2;
  padding: 3rem;
  
  ${mobile({
    height: '40vh',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.4)',
    top: 0,
    bottom: 0,
    margin: 'auto'
  })}
`

const Title = styled.h1`
  font-size: 5rem;
  
  ${mobile({
    fontSize: '3rem'
  })}
`
const Desc = styled.p`
  margin: 3rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  
  ${mobile({
    margin: '1.5rem 0'
  })}
`
const Button = styled.button`
  padding: 0.5rem;
  font-size: 1.25rem;
  background-color: transparent;
  border: 2px solid black;
  cursor: pointer;
  
  ${mobile({
    backgroundColor: 'black',
    color: 'white'
  })}
`

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  function handleClick(direction) {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowBackIos style={{color:'darkgray'}} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowForwardIos style={{color:'lightgray'}} />
      </Arrow>
    </Container>
  )
}

export default Slider