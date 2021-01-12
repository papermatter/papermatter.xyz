import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/Vars';

export const StyledClients = styled.div`
  background: ${colors.black};
  margin: 0 -2em -2em;
  padding: 4em 2em;
  color: ${colors.white};
  
  ${breakpoints.tablet} {
    margin: 0 -6em -2em;
    padding: 8em 6em;
  }
  ${breakpoints.laptop} {
    margin: 0 -10em -2em;
    padding: 8em 14em;
  }
  ${breakpoints.laptopL} {
    margin: 0 -14em -2em;
    padding: 10em 18em;
  }
  
`
