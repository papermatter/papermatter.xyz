import React, { useState } from 'react'
import { StyledTeam, StyledTeamInfo } from './styles'
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons'
import Carousel from '../Carousel/Carousel';

export default function Team({data}) {
  const tabContent = data;
  const [activeTab, setActiveTab] = useState(0)
  return (
    <StyledTeam>
      <div className='nav-bar'>
        <h4>
          {activeTab + 1}/{data.length}
        </h4>
        <div>
          <button
            disabled={activeTab === 0 ? true : false}
            onClick={() => setActiveTab(activeTab - 1)}
          >
            <ArrowLeftIcon size="1.8em" />
          </button>
          <button
            disabled={activeTab === data.length - 1 ? true : false}
            onClick={() => setActiveTab(activeTab + 1)}
          >
            <ArrowRightIcon size="1.8em" />
          </button>
        </div>
      </div>
      <Carousel data={data} activeTab={activeTab} />
      {/* <StyledFotoContainer /> */}
      <StyledTeamInfo>
        <h4>Equipo Moncada</h4>
        <div className='nameContainer'>
          <h3>
            {tabContent[activeTab].first_name} {tabContent[activeTab].last_name}
          </h3>
          <h5>{tabContent[activeTab].business_title}</h5>
        </div>
      </StyledTeamInfo>
    </StyledTeam>
  )
}
