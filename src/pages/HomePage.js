import React from 'react'
import HeroHome from '../components/home/HeroPage'
import SliderClient from '../components/home/SliderClient'
import HowWork from '../components/home/HowWork'
import Meals from '../components/home/Meals'
import Testimonials from '../components/home/Testimonials'
import Pricing from '../components/home/Pricing'
import ContactForm from '../components/home/ContactForm'

const HomePage = () => {
  return (
    <div>
        <HeroHome/>
        <SliderClient/>
        <HowWork/>
        <Meals/>
        <Testimonials/>
        <Pricing/>
        <ContactForm/>
    </div>
  )
}

export default HomePage