import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/Vars'

const StyledSocialMediaWidget = styled.div`
  position: sticky;
  right: 0;
  top: 50em;
  transform: translateY(-50%);
  margin-right: 2em;
  z-index: 1000;
  transition: .1s;
  &:hover {
    margin-right: 2.2em;
  }
  div {
    padding: 5px;
    border-bottom: 1px solid ${colors.gray};
    transition: 0.1s;
    &:hover {
      border-bottom: 2px solid ${colors.black};
    }
  }
  a {
    font-size: 1em;
    font-weight: bold;
  }
`

export default function SocialMediaWidget() {
  return (
    <StyledSocialMediaWidget>
      <div>
        <a href="https://www.instagram.com/estudiomoncada/">FB</a>
      </div>
      <div>
        <a href="https://www.instagram.com/estudiomoncada/">IG</a>
      </div>
      <div>
        <a href="https://www.instagram.com/estudiomoncada/">Bē</a>
      </div>
    </StyledSocialMediaWidget>
  )
}
