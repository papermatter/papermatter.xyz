import React from 'react'
import styled from 'styled-components';
import { colors, breakpoints, fontStyleItalic } from '../../styles/Vars';
import { LinkComponent } from '../ui';
import { DivPhoto } from '../Project/styles';

const StyledCard = styled.div`
  width: 100%;
  background: ${colors.white};
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  grid-row: span 2;
  position: relative;
  h3 {
    margin: 0.5em;
    color: ${colors.black};
    font-size: 2em;
    
    ${fontStyleItalic}
  }
  ${breakpoints.mobileS} {
    h3 {
      font-size: 1.4em;
    }
  }
  ${breakpoints.tablet} {
    padding: 1em;
    border-radius: 5px;
    &:nth-child(2) {
      grid-row: 2 / 4;
      grid-column: 2;
    }
    h3 {
      font-size: 1.2em;
    }
    div {
      font-size: 0.6em;
    }
  }
  ${breakpoints.laptop} {
    h3 {
      font-size: 1.5em;
    }
  }
  ${breakpoints.laptopL} {
    h3 {
      font-size: 2em;
    }
  }
`

export default function Card({data, staticData}) {
  return (
    <StyledCard key={data.index} >
      <DivPhoto url={!staticData ? data.main_photo.formats.small.url : data.main_photo.publicURL} />
      <h3>{data.title}</h3>
      <LinkComponent to={`/portafolio/${data.slug}`}>VER PROYECTO</LinkComponent>
    </StyledCard>
  )
}
