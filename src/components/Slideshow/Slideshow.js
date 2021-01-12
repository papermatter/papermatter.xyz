import React from 'react'
import styled, { keyframes } from 'styled-components';
import { fontStyleItalic } from '../../styles/Vars';

const StyledSlideshow = styled.div`
  overflow: hidden;
  position: relative;
`

const Slide = keyframes`
  from {
    margin-left: -5em;
  }
  to {
    margin-left: -100%;
  }
`

const StyledContent = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  display: flex;
  margin: 0;
  margin-left: -5em;
  h3 {
    font-size: 1.5em;
    white-space: nowrap;
    margin: 0.2em 0.25em;
    &:nth-child(${props => props.start}) {
      ${fontStyleItalic}
    }
  }
  animation: ${Slide} ${props => props.time}s linear infinite;
`

export default function Slideshow({children, time = '10', start = 'odd'}) {
  return (
    <StyledSlideshow>
      <StyledContent time={time} start={start} >
        {children}
      </StyledContent>
    </StyledSlideshow>
  )
}
