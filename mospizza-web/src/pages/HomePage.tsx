import Hero from '../components/home/Hero.tsx'
import MenuShowcase from '../components/home/MenuShowcase.tsx'
import AboutSection from '../components/home/AboutSection.tsx'
import WhyLocalsLoveMos from '../components/home/WhyLocalsLoveMos.tsx'
import OrderCTA from '../components/home/OrderCTA.tsx'
import Reviews from '../components/home/Reviews.tsx'
import LocationHours from '../components/home/LocationHours.tsx'
import Reveal from '../components/common/Reveal.tsx'

function HomePage() {
  return (
    <>
      <Hero />
      <MenuShowcase />
      <Reveal><WhyLocalsLoveMos /></Reveal>
      <Reveal><AboutSection /></Reveal>
      <Reveal><OrderCTA /></Reveal>
      <Reveal><Reviews /></Reveal>
      <Reveal><LocationHours /></Reveal>
    </>
  )
}

export default HomePage
