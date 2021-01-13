import React, { useState, useEffect } from 'react'
import CardContainer from '../CardContainer/CardContainer'
import { colors, breakpoints } from '../../styles/Vars'
import withLocation from '../HoC/withLocation' 
import ButtonComponent from '../UI/ButtonComponent'
import PortfolioNav from './PortfolioNav'
import styled from 'styled-components'

const PortfolioContainer = ({ children, search, navData }) => {
  const { category } = search
  const [data, setData] = useState([])
  const [visibleData, setVisibleData] = useState([])
  const [loading, setLoading] = useState(true)
  const [fullData, setFullData] = useState(false)
  const [fullDataCategories, setFullDataCategories] = useState([])

  const SHOWED_PROJECTS = 2

  const fetchData = async (category = "todo") => {
    setLoading(true)
    try {
      let response = await fetch(
        `${process.env.API_URL}/projects?_start=${
          visibleData.length
        }&_limit=${SHOWED_PROJECTS}${
          category !== "todo" ? `&project_category.slug=${category}` : ""
        } `
      )
      let req = await response.json()
      let queryData = req

      const isInData = dataEntry => {
        const arr = []
        dataEntry.forEach(project => {
          const found = data.some(el => {
            return el.id === project.id
          })
          if (!found) arr.push(project)
        })
        return { arr }
      }

      const { arr } = isInData(queryData)

      if (arr.length !== 0) {
        setData(data.concat(arr))
        setVisibleData(visibleData.concat(arr))
      }
      if (arr.length < SHOWED_PROJECTS) {
        setFullDataCategories([...fullDataCategories, category])
        setFullData(true)
      }
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (fullDataCategories.includes(category)) {
      return setFullData(true)
    }
    setFullData(false)
    if (visibleData.length < SHOWED_PROJECTS) {
      if (category === undefined || category === "todo") {
        fetchData()
      } else {
        fetchData(category)
      }
    }
  }, [category])

  const filterData = async (category = "todo") => {
    if (category === "todo") {
      setVisibleData(data)
    } else {
      const filteredData = data.filter(
        project => project.project_category.slug === category
      )
      setVisibleData(filteredData)
    }
  }

  const handleTabClick = async tab => {
    filterData(tab)
  }

  const handleLoadMore = () => {
    fetchData(category)
  }

  return (
    <StyledPortafolioContainer>
      {children}
      <PortfolioNav
        categories={navData}
        handleTabClick={handleTabClick}
        activeCategory={category}
      />
      <CardContainer data={visibleData} loading={loading} />
      {fullData ? null : (
        <ButtonComponent onClick={handleLoadMore} color={colors.white}>
          {loading ? "cargando..." : "CARGAR MÁS"}
        </ButtonComponent>
      )}
    </StyledPortafolioContainer>
  )
}

const StyledPortafolioContainer = styled.div`
  padding-top: 100px;
  ${breakpoints.tablet} {
    padding: 20vh 0 5em;
  }
  ${breakpoints.laptop} {
    padding: 20vh 2.5em 5em;
  }
  ${breakpoints.laptopL} {
    padding: 30vh 5em 5em;
  }
`

export default withLocation(PortfolioContainer)