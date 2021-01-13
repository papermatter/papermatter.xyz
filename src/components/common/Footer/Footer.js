import React from "react"
import styled from "styled-components"
import SocialMedia from "../SocialMedia/SocialMedia"

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4em 2em 1em;
  border-top: 1px solid #0a3;
  & p {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
`

export default function Footer() {
  return (
    <Div>
      <div>
        <p>(C) 2020 MONCADA CO.</p>
      </div>
      <div style={{padding: '64px 0'}}>
        <SocialMedia />
      </div>
    </Div>
  )
}
