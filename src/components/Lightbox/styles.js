import styled from "styled-components"
import { colors } from "../../styles/Vars"

export const StyledLightbox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${props => props.isShow ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 100000;
  button {
    position: absolute;
    cursor: pointer;
  }
  .exit-btn {
    top: 10px;
    right: 0;
  }
  .btn-left {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  .btn-right {
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  img {
    width: 100%;
  }
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 25px;
    color: ${colors.darkGray};
  }
  p {
    position: absolute;
    top: 1em;
    left: 1em;
    color: ${colors.black};
  }
`
