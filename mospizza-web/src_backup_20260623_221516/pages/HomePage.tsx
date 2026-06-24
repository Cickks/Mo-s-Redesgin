import QuickActionsBar from "../components/layout/QuickActionsBar.tsx"
import Hero from "../components/home/Hero.tsx"
import FeaturedFood from "../components/home/FeaturedFood.tsx"
import AboutSection from "../components/home/AboutSection.tsx"
import WhyLocalsLoveMos from "../components/home/WhyLocalsLoveMos.tsx"
import OrderCTA from "../components/home/OrderCTA.tsx"
import Reviews from "../components/home/Reviews.tsx"
import LocationHours from "../components/home/LocationHours.tsx"

function HomePage() {
  return (
    <>
      <QuickActionsBar />
      <Hero />
      <FeaturedFood />
      <AboutSection />
      <WhyLocalsLoveMos />
      <OrderCTA />
      <Reviews />
      <LocationHours />
    </>
  )
}

export default HomePage