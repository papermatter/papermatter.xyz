import React from "react"
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaDribbble,
} from "react-icons/fa"
import ExternalLink from "../../ui/ExternalLink"
import { StyledIconsList, StyledDiv } from "./styles"

export default function SocialMedia() {
  const iconSize = "2em"
  return (
    <StyledDiv>
      <StyledIconsList>
        <li>
          <ExternalLink>
            <FaBehance size={iconSize} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink>
            <FaFacebook size={iconSize} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink>
            <FaInstagram size={iconSize} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink>
            <FaPinterest size={iconSize} />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink>
            <FaDribbble size={iconSize} />
          </ExternalLink>
        </li>
      </StyledIconsList>
    </StyledDiv>
  )
}
