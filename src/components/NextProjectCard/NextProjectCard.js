import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { colors, breakpoints, fontStyleItalic } from '../../styles/Vars'
import { Link } from 'gatsby'
import { DivPhoto } from '../Project/styles'

const StyledNextProjectCard = styled.div`
  padding: 2em 0 4em;
  border-top: 1px solid ${colors.lightGray};
  .photo-container {
    width: 100%;
  }
  h4 {
    margin: 1em 0 0;
    font-size: 1.7em;
  }
  h3 {
    ${fontStyleItalic}
  }
  a {
  }
  ${breakpoints.tablet} {
    padding: 4em 0;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .photo-container {
      width: 25%;
      min-width: 25%;
      padding-bottom: 25%;
      border-radius: 5px;
    }
    h3 {
      font-size: 2.2em;
    }

    h4 {
      font-size: 2.2em;
    }
  }
  ${breakpoints.laptopL} {
    .photo-container {
      width: 15%;
      min-width: 15%;
      padding-bottom: 15%;
    }
  }
`

export default function NextProjectCard({currentProject}) {
  const [loading, setLoading] = useState(true)
  const [nextProject, setNextProject] = useState(null)
  
  useEffect(() => {
    const nextProjectIndex = currentProject === 5 ? 1 : currentProject + 1;
    setLoading(true)
    fetch(`${process.env.API_URL}/projects/${nextProjectIndex}`)
      .then(response => response.json())
      .then(resultData => {
        setNextProject(resultData)
        setLoading(false)
      })
  }, [currentProject])
    console.log(nextProject);
  return (
    <StyledNextProjectCard>
      {loading
        ? <p>...</p>
        : <Link to={`/portafolio/${nextProject.slug}`} >
          <div>
            <h4>Siguiente proyecto</h4>
            <h3>{nextProject.title}</h3>
          </div>
          <DivPhoto className='photo-container' url={nextProject.main_photo.formats.small.url} />
        </Link>
      }
    </StyledNextProjectCard>
  )
}
