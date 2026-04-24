import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Features from '@/components/Features'
import Programs from '@/components/Programs'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Programs />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <LeadForm />
      <Footer />
    </main>
  )
}
