import React from "react"
import styled from "styled-components"

import SocialMedia from "../SocialMedia/SocialMedia"
import FullLogo from '../../assets/full_logo.svg'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4em 2em 1em;
  border-top: 1px solid #e2e2e2;
  & p {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
`

export default function Footer() {
  return (
    <div>
      <div style={{padding: '64px 0'}}>
        <SocialMedia />
      </div>
      <Div>
        <div>
          <FullLogo style={{width:'8em', margin: '0 -12px'}} />
          <p>(C) 2020 MONCADA CO.</p>
        </div>
      </Div>
    </div>
  )
}
