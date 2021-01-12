import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../styles/Vars'

const StyledCarousel = styled.div`
  align-items: center;
  display: flex;
  height: 80vw;
  margin: 2em -2em;
  overflow: hidden;
  position: relative;
  ${breakpoints.tablet} {
    height: 45vw;
    margin: 2em -6em;
  }
  ${breakpoints.laptop} {
    height: 30vw;
    margin: 2em -10em;
  }
  ${breakpoints.laptopL} {
    margin: 2em -14em;
  }
`
const StyledContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  align-items: center;
  left: ${props => `-${props.activeIndex * 70}vw`};
  transition: 0.2s;
  &:before,
  :after {
    content: " ";
    min-width: 9vw;
  }
  ${breakpoints.tablet} {
    left: ${props => `-${props.activeIndex * 56}vw`};
    &:before,
    :after {
      content: " ";
      min-width: 17vw;
    }
  }
  ${breakpoints.laptop} {
    left: ${props => `-${props.activeIndex * 52}vw`};
    &:before,
    :after {
      content: " ";
      min-width: 19vw;
    }
  }
`

// const activePhotoWidth = ({isActive}) => {
//   const photoHeight= 20
//   const photoWidth = isActive ? (photoHeight*1.5) : (photoHeight)
//   return `
//     width: ${photoWidth}vw;
//   `
// }

const PhotoContainer = styled.div`
  flex: 0 0 auto;
  margin: 0 5vw;
  width: ${({ isActive }) => (isActive ? "72vw" : "60vw")};
  border: ${({ isActive }) =>
    isActive ? "8vw solid white" : "3px solid white"};
  transition: 0.2s;
  div {
    height: 60vw;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  ${breakpoints.tablet} {
    margin: 0 13vw;
    border: ${({ isActive }) =>
      isActive ? "5vw solid white" : "10px solid white"};
    width: ${({ isActive }) => (isActive ? "40vw" : "30vw")};
    div {
      height: 30vw;
    }
  }
  ${breakpoints.laptop} {
    margin: 0 16vw;
    border: ${({ isActive }) =>
      isActive ? "5vw solid white" : "10px solid white"};
    width: ${({ isActive }) => (isActive ? "30vw" : "20vw")};

    div {
      height: 20vw;
    }
  }
`

export default function Carousel({data, activeTab}) {
  return (
    <StyledCarousel>
      <StyledContent activeIndex={activeTab}>
        {data.map((item, index) => (
          <PhotoContainer
            key={index}
            isActive={activeTab === index}
          >
            <div
              style={{ backgroundImage: `url(${item.photo.publicURL})` }}
            ></div>
            {/* <img src={item.photo.publicURL} alt={`Foto de ${item.first_name}`} /> */}
          </PhotoContainer>
        ))}
      </StyledContent>
    </StyledCarousel>
  )
}
