import CareerServices from "@/components/CareerServices"
import ClientLogos from "@/components/ClientLogos"
import ContactUsEnhanced from "@/components/ContactUs"
import DigitalMarketingCoursePage from "@/components/DigitalMarketingCoursePage"
import FeaturedCourses from "@/components/FeaturedCourses"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PlacementPartners from "@/components/PlacementPartners"
import WhyChooseUs from "@/components/WhyChooseUs"
import CareerTrainingFocus from "@/components/CareerTrainingFocus"
import KeyStats from "@/components/KeyStats"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import JobTraining from "@/components/JobTraining"



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
       
      <WhyChooseUs/>
      <PlacementPartners/>
      <FeaturedCourses/>
      <CareerServices/>
      <KeyStats/>
      <JobTraining/>
     <CareerTrainingFocus/>
     <HowItWorks/>
     <Testimonials/>
      </main>
       <Footer /> 
    </div>
  )
}

