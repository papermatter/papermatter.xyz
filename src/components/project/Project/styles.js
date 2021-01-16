import styled from "styled-components"
import { colors, breakpoints, fontStyleItalic } from "../../../styles/Vars"

export const StyledProject = styled.div`
  padding: 4em 0;
  h1 {
    font-size: 2em;
    margin: 0 0 0.5em;
    ${fontStyleItalic}
  }
  h5 {
    margin: 0.2em 0;
    font-size: var(--font-xl);
  }
  div.mainPhoto {
    width: 100%;
    padding-bottom: 50%;
    background: ${colors.lightGray};
  }
  .project-info-container {
    display: grid;
    grid-template-columns: 1fr;
  }
  ${breakpoints.tablet} {
    padding-top: 6em;
    h1 {
      font-size: 3em;
      margin-top: 0;
    }
  }
  ${breakpoints.laptop} {
    padding: 20vh 0;
    h1 {
      margin-top: 0.5em;
    }
    .project-info-container {
      grid-template-columns: 2fr 1fr;
      .description-container {
        padding-right: 10em;
      }
    }
  }
  p {
    color: ${colors.gray};
  }
`

export const StyledProjectInfoContainer = styled.div`
  padding: 2em 0;
  div.infoContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    div {
      max-width: 100%;
      padding-right: 1em;
    }
  }
`

export const StyledPhotosContainer = styled.div`
  padding: 0 0 3em 0;
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
  ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  grid-auto-rows: 1.5fr 1fr;
`

export const DivPhoto = styled.div`
  width: 100%;
  padding-bottom: 50%;
  background: ${colors.lightGray};
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.tablet} {
    &:nth-child(3n) {
      grid-column: span 2;
    }
  }
`
