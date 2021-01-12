import styled from 'styled-components';
import { colors, breakpoints, responsiveSections, fontStyleItalic } from '../../styles/Vars';

export const StyledHomeSectionServices = styled.section`
  padding: 5em 0 4em;
  .description {
    padding: 1em 0 2em;
    ${breakpoints.laptop} {
      padding: 0;
    }
  }
  .services-container {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .service-item {
    border-bottom: 1px solid ${colors.darkGray};
    padding: 1em 0;
    width: 100%;
    &:nth-child(-n+3){
      border-top: 1px solid ${colors.darkGray};
    }
    .service-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      line-height: 1.2;
      padding: .2em 0;
      margin: 0;
      font-size: 2em;
      ${fontStyleItalic}
      ${breakpoints.laptopL} {
        font-size: 2.8em;
      }
    }
  }
  ${breakpoints.laptop} {
    .services-container {
      padding: 2em 0;
    }
    .service-item {
      margin: 1%;
      width: 30%;
      height: 8em;
    }
  }
`

export const StyledHomeSectionPortfolio = styled.section`
  margin: 0 -2em -2em;
  background: ${colors.black};
  padding: 4em 2em;
  color: ${colors.white};
  ${responsiveSections}
`

export const StyledHomeSectionAbout = styled.section`
  margin: 0 -2em;
  background: ${colors.gray};
  padding: 4em 2em;

  ${responsiveSections}
`