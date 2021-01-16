import React, { useState } from "react"
import CardContainer from "./CardContainer/CardContainer"
import { colors, breakpoints } from "../../styles/Vars"
import withLocation from "../HoC/withLocation"
import ButtonComponent from "../ui/ButtonComponent"
import PortfolioNav from "./PortfolioNav"
import styled from "styled-components"

const PortfolioContainer = ({ categories, projects }) => {
  const { category } = search
  const [loading, setLoading] = useState(true)

  // const filterData = async (category = "todo") => {
  //   if (category === "todo") {
  //     setVisibleData(data)
  //   } else {
  //     const filteredData = data.filter(
  //       project => project.project_category.slug === category
  //     )
  //     setVisibleData(filteredData)
  //   }
  // }

  const handleTabClick = async tab => {
    // filterData(tab)
  }

  return (
    <StyledPortafolioContainer>
      <PortfolioNav
        categories={navData}
        handleTabClick={handleTabClick}
        activeCategory={category}
      />

      <CardContainer data={visibleData} loading={loading} />
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
