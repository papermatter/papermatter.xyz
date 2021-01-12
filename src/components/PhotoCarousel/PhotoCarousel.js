import React, { useState } from "react"
import { StyledPhotoCarousel } from "./styles"
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons"
import Title from "../Title/Title"
import Carousel from "../Carousel/Carousel"

export default function PhotoCarousel({ data }) {
  const tabContent = data
  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledPhotoCarousel>
      <div>
        {activeTab + 1}/{data.length}
      </div>
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
      <Carousel data={data} activeTab={activeTab} /> 
      <div className='title'>
        <Title data={tabContent[activeTab]} />
      </div>
    </StyledPhotoCarousel>
  )
}
