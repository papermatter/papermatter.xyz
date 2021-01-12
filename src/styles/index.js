import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from './Vars';

export const StyledBaseLink = styled(Link)`
  border-bottom: 1px solid ${colors.black};
  color: ${colors.black};
  text-decoration: none;
  font-size: .8em;
  padding: .5em 1.5em;
`