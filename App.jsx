import React from 'react'
import Navbar1 from './components/Navbar/Navbar1'
import Navbar2 from './components/Navbar/Navbar2'
import UpperCategory from './components/Navbar/UpperCategory'
import Hero from './components/Hero'
import HeroCategories from './components/HeroCategories'
import PhotoSlider from './components/PhotoSlider'
import Marquee from './components/Marquee'
import Poster from './components/Poster'
import Gifting  from './components/Gifting'
import Footer from './components/Footer'
import Questions from './components/Questions'



function App() {
  return (
    <>
    <div className="  w-full h-screen bg-[#EDF1F1]">

      <Navbar1/>
      <Navbar2/>
      <UpperCategory/>
      
      <Hero/><HeroCategories/>
      <PhotoSlider headerText="Current favourites!"/>
      <PhotoSlider headerText="More categories!"/>
      <Marquee/>
      <Poster/>
      <Gifting/>
      
      <Footer/>
      </div>
    
    </>
  )
}

export default App