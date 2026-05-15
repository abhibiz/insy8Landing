import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import CTASection from '../components/sections/CTASection.jsx'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="bg-grid-fine absolute inset-0 opacity-70" />
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />
      </div>

      <Navbar />

      <main>
        <HeroSection />
        <HowItWorks />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
