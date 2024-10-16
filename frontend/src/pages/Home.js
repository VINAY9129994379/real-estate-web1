import React from 'react'
import Hero from '../components/Hero'
import PropertyContain from '../components/PropertyContain'
import Property from '../components/Property'
import RentProperty from '../components/RentProperty'
import MiddleContact from '../components/MiddleContact'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className='home'>
      <Hero/>
      <br/>
      <PropertyContain/>
      <hr/>
      <Property/>
      <hr/>
      <RentProperty/>
      <MiddleContact/>
      <Contact/>
            




    </div>
  )
}


export default Home