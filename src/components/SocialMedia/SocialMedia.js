import React from 'react'
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaDribbble,
} from "react-icons/fa"
import { StyledIconsList, StyledDiv, StyledTitle } from './styles'

export default function SocialMedia() {
  const iconSize = '2em'
  return (
    <StyledDiv>
      <StyledTitle>#estudiomoncada</StyledTitle>
      <StyledIconsList>
        <li>
          <a href="https://www.instagram.com/estudiomoncada/" target="_blank" rel="noreferrer">
            <FaBehance size={iconSize} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/estudiomoncada/" target="_blank" rel="noreferrer">
            <FaFacebook size={iconSize} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/estudiomoncada/" target="_blank" rel="noreferrer">
            <FaInstagram size={iconSize} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/estudiomoncada/" target="_blank" rel="noreferrer">
            <FaPinterest size={iconSize} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/estudiomoncada/" target="_blank" rel="noreferrer">
            <FaDribbble size={iconSize} />
          </a>
        </li>
      </StyledIconsList>
    </StyledDiv>
  )
}
