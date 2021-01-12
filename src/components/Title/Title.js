import React from 'react'
import styled from "styled-components"
import { colors, breakpoints, fontStyleItalic } from "../../styles/Vars"

const responsivesFontSizes = () => {
  return `
    margin: 0;
    font-size: 2em;
    ${breakpoints.mobileS} {
      font-size: 1.8em;
    }
    ${breakpoints.tablet} {
      font-size: 2.5em;
    }
    ${breakpoints.laptopL} {
      font-size: 3em;
    }
  `
}

const BlackText = styled.h2`
  color: ${props => props.color};
  font-weight: 800;

  ${responsivesFontSizes}
`

const ItalicText = styled.h3`
  color: ${props => props.color};
  ${fontStyleItalic}

  ${responsivesFontSizes}
`

export default function Title({data, color = colors.black, inverted = false}) {
  if (inverted === true) {
    return (
      <div>
        <ItalicText color={color}>{data.title_italic}</ItalicText>
        <BlackText color={color}>{data.title_black}</BlackText>
      </div>
    )
  }
  return (
    <div>
      <BlackText color={color}>{data.title_black}</BlackText>
      <ItalicText color={color}>{data.title_italic}</ItalicText>
    </div>
  )
}
 