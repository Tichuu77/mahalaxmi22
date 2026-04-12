import dynamic from "next/dynamic"
import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { AmenitiesSection } from "../components/amenities-section"
import { ProjectsSection } from "../components/projects-section"
import { GallerySection } from "../components/gallery-section"
import { WhyChooseUsSection } from "../components/why-choose-us-section"
import { UserGuideSection } from "../components/user-guide-section"
import { TestimonialsSection } from "../components/testimonials-section"

const NewsArticles = dynamic(() => import("../components/news-articals"))
const FAQSection = dynamic(() => import("../components/faq-section"))
const ContactSection = dynamic(() => import("../components/contact-section"))
const CallButton = dynamic(() => import("../components/call-button"))
const WhatsappButton = dynamic(() => import("../components/whatsapp-button"))
const Footer = dynamic(() => import("../components/footer").then((m) => ({ default: m.Footer })))

export default function Home() {
  return (
    <main id="main-content">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <ProjectsSection />
      <GallerySection />
      <WhyChooseUsSection />
      <UserGuideSection />
      <TestimonialsSection />
      <NewsArticles />
      <FAQSection />
      <ContactSection />
      <CallButton />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
