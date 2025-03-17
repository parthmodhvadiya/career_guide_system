import React from 'react'
import HeroSection from './HomePage/Herosection'
import FeaturesSection from './HomePage/FeatureSection'
import JobSlider from './HomePage/JobSlider'
import TestimonialsSection from './HomePage/TestimonialsSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <JobSlider/>
      <TestimonialsSection/>
    </div>
  )
}

export default Home