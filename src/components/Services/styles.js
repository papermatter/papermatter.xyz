import styled from 'styled-components';
import {colors, breakpoints, fontStyleItalic} from '../../styles/Vars'
 
export const Div = styled.div`
  height: 90vh;
  border-top: 1px solid ${colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DesktopDiv = styled.div`
  height: 90vh;
  border-top: 1px solid ${colors.lightGray};
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5vh 0;
  ${breakpoints.tablet} {
    margin: 0 -6em;
  }
  ${breakpoints.laptop} {
    margin: 0 -10em;
  }
  ${breakpoints.laptopL} {
    margin: 0 -14em;
  }
  
`

export const Title = styled.h2`
  font-size: 2em;
  margin: .5em 0;
  ${fontStyleItalic}
  `

export const StyledTabs = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};
  position: relative;
  `
export const StyledTab = styled.div`
  text-align: center;
  padding: 1em 0;
  width: 100%;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 800;
  & [active] {
    border-bottom: 1px solid ${colors.black};
  }
`
export const StyledTabContent = styled.div`
  padding: 2em 0;
  color: ${colors.gray};
  font-size: 1em;
  display: flex;
  flex-wrap: nowrap;
`

export const StyledTadContentDiv = styled.div`
  width: 100vw;
`

export const StyledBorder = styled.div.attrs(props => ({
  maring: props.margin || 0,
}))`
  content: "";
  width: 50%;
  position: absolute;
  border: 1px solid ${colors.black};
  bottom: 0;
  transition: 0.2s;
  margin-left: ${props => props.margin};
`

export const StyledPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: ${props => props.imgWidth};
    max-height: ${props => props.imgHeight};
  }
`