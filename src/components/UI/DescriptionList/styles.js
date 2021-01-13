import styled from 'styled-components'
import { colors, breakpoints, fontStyleItalic } from '../../../styles/Vars'

export const StyledDescriptionList = styled.div`
  padding: 2em 0;
  text-align: center;
  p{
    color: ${colors.black};
    margin: 0;
    font-weight: bold;
  }
  h5 {
    font-size: 2em;
    margin-bottom: 1.5em;
  }
  span {
    ${fontStyleItalic}
  }
  ${breakpoints.tablet} {
    .container {
      padding: 0;
    }
    p {
      font-size: 1.5em;
      margin-bottom: .5em;
    }
  }
  ${breakpoints.laptop} {
    p {
      font-size: 1em;
      margin-bottom: .2em;
    }
    h5 {
      font-size: 3em;
      margin-bottom: 1em;
    }
  }
`