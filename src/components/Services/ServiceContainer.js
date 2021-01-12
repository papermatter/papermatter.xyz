import React from 'react'
import {Title, StyledPhotoContainer} from "./styles"
import styled from 'styled-components'
import { colors } from '../../styles/Vars'

const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  text-align: ${props => (props.isRight ? "right" : "left")};
  justify-self: center;
  h2 {
    font-size: 3em;
    margin: 0;
  }
  h3 {
    font-size: 0.8em;
    margin: 2em 0 1em;
    text-transform: uppercase;
    position: relative;
    &::before {
      content: "-";
      position: absolute;
      margin-left: -1em;
    }
    ${({ isRight }) =>
      isRight &&
      `
      &::before {
        content: '';
      }
      &::after {
      content: '-';
      position: absolute;
      margin-left: 1em;
     }
    `}
  }
  p {
    color: ${colors.gray};
    line-height: 1.4;
    margin: 0;
  }
`



export default function ServiceContainer({data, index, services, isRight}) {
  console.log(services);
  
  return (
    <>
      {isRight && (
        <StyledPhotoContainer imgWidth={'40%'} imgHeight={'60%'}
          style={{ borderRight: `1px solid ${colors.gray}` }}
        >
          <img src={data.Illustration.publicURL} alt="" />
        </StyledPhotoContainer>
      )}
      <StyledInfoDiv isRight={isRight}>
        <p>
          {index + 1} / {services.length}
        </p>
        <Title>{data.title}</Title>
        <h3>¿Qué es {data.title}?</h3>
        <p>{data.description}</p>
        <h3>Ventajas del {data.title}</h3>
        <p>{data.advantages}</p>
      </StyledInfoDiv>
      {!isRight && (
        <StyledPhotoContainer imgWidth={'40%'} imgHeight={'60%'}
          style={{ borderLeft: `1px solid ${colors.gray}`, marginLeft: "-1px" }}
        >
          <img src={data.Illustration.publicURL} alt="" />
        </StyledPhotoContainer>
      )}
    </>
  )
}
