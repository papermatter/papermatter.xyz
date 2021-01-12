import React from 'react'
import styled from "styled-components"
import { colors } from "../../styles/Vars"

const StyledCard = styled.div`
  width: 100%;
  background: ${colors.white};
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  grid-row: span 2;
  .photo-container {
    background: #eee;
    width: 100%;
    padding: 25%;
  }
  h3 {
    margin: 0.5em;
    background-color: #eee;
    color: #eee;
    font-size: 1.8em;
    border-radius: 5px;
  }
  p {
    margin: 0.5em auto;
    background-color: #eee;
    color: #eee;
    width: 70%;
    border-radius: 5px;
  }
`

export default function SkeletonCard() {
  return (
    <StyledCard >
      <div className="photo-container"></div>
      <h3>proyecto</h3>
      <p>link</p>
    </StyledCard>
  )
}
