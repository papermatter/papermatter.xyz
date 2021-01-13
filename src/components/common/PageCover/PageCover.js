import React from 'react'
import styled from 'styled-components';

import { ArrowDownIcon } from '../../Icons'

const StyledPageCover = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  p {
    margin: 1em 0;
    font-size: 1em;
  }
  a {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 3em;
  }
`

export default function PageCover({children, scrollTo}) {
  return (
    <StyledPageCover>
      {children}
      <a href={`#${scrollTo}`}>
        <ArrowDownIcon size="1.5em" />
      </a>
    </StyledPageCover>
  )
}
