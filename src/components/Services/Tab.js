import React, {useState} from 'react'
import {
  StyledTabs,
  StyledTab,
  StyledTabContent,
  StyledTadContentDiv,
  StyledBorder,
} from "./styles"

export default function Tab({data}) {
  const TabContent = [
    {
      content: data.description,
    },
    {
      content: data.advantages,
    },
  ]

  const [activeTab, setActiveTab] = useState(0)
  const [margin, setMargin] = useState(0)

  const onTabClick = (activeTab, marginTab) => {
    setActiveTab(activeTab)
    setMargin(marginTab)
  }

  return (
    <div>
      <StyledTabs>
        <StyledTab onClick={() => onTabClick(0, 0)} >¿Qué es?</StyledTab>
        <StyledTab onClick={() => onTabClick(1, '50%')} >Ventajas</StyledTab>
        <StyledBorder margin={margin}/>
      </StyledTabs>
      <StyledTabContent>
        <StyledTadContentDiv>
          <p>{TabContent[activeTab].content}</p>
        </StyledTadContentDiv>
      </StyledTabContent>
    </div>
  )
}
