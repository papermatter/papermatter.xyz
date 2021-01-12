import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/Vars'

const StyledQuickNav = styled.div`
  position: sticky;
  bottom: 2em;
  left: 2em;
`
const LineSpace = styled.div`
  position: relative;
  border-left: 2px solid ${colors.lightGray};
  height: 5em;
  left: 50%;
  margin: 1em 0;
  margin-left:-1px;
`

export default function QuickNav() {
  return (
    <StyledQuickNav>
      <div >
        {/* <a href="#">01</a> */}1
      </div>
      <LineSpace />
      <div>
        {/* <a href="#">02</a> */}2
      </div>
      <div>
        {/* <a href="#">03</a> */}3
      </div>
    </StyledQuickNav>
  )
}
