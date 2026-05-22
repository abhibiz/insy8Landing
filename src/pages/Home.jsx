import { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import CTASection from '../components/sections/CTASection.jsx'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  const prevSlide = () => setActiveSlide((current) => (current === 0 ? 1 : current - 1))
  const nextSlide = () => setActiveSlide((current) => (current === 1 ? 0 : current + 1))

  useEffect(() => {
    const interval = window.setInterval(nextSlide, 5000)
    return () => window.clearInterval(interval)
  }, [])

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
        <section
          aria-roledescription="carousel"
          aria-label="Top and CTA slides"
          className="relative overflow-hidden"
        >
          <div className="relative mx-auto overflow-hidden">
            <div
              className="flex w-[200%] transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 50}%)` }}
            >
              <div className="w-1/2 shrink-0">
                <HeroSection />
              </div>
              <div className="w-1/2 shrink-0">
                <CTASection />
              </div>
            </div>
          </div>

          <div className="absolute right-6 bottom-6 z-10">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/80"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/80"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}
