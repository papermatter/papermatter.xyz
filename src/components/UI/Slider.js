import React from "react"
import styled, { keyframes } from "styled-components"

const SlideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const StyledSlider = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
  .content {
    display: flex;
    margin: 0;
    position: relative;
    justify-content: flex-start;
    left: ${props => props.initial};
    animation: ${SlideAnimation} ${props => props.time}
      linear infinite;
  }
  .content > * {
    margin-right: ${props => props.gap};
  }
`

const Slider = ({
  children,
  initialPosition = "0",
  time = "15s",
  gap = "1.5rem",
}) => {
  return (
    <StyledSlider initial={initialPosition} time={time} gap={gap}>
      <div className="content">{children}</div>
      <div className="content">{children}</div>
    </StyledSlider>
  )
}

export default Slider
