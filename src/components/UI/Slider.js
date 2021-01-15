import React from "react"
import styled, { keyframes } from "styled-components"

const SlideAnimation = initial => keyframes`
  from {
    transform: translateX(-${initial});
  }
  to {
    transform: translateX(calc(-100% - ${initial}));
  }
`

const StyledSlider = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  overflow: hidden;
  .content {
    display: flex;
    transform: translateX(-${props => props.initial});
    justify-content: flex-start;
    margin: 0;
    position: relative;
    animation: ${props => SlideAnimation(props.initial)} ${props => props.time}
      linear infinite;
  }
  .content > * {
    padding: 0 ${props => props.gap};
  }
`

const Slider = ({
  children,
  initialPosition = "0%",
  time = "15s",
  gap = "1rem",
}) => {
  return (
    <StyledSlider initial={initialPosition} time={time} gap={gap}>
      <div className="content">{children}</div>
      <div className="content">{children}</div>
    </StyledSlider>
  )
}

export default Slider
