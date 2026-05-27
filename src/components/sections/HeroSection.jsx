import { useState, useEffect, useRef } from 'react'
import { Database, MoveRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { INSY8_APP_URL } from '../../constants/links.js'
import insy8Logo from '../../assets/images/insy8-logo.svg'
import heroWhite from '../../assets/images/app/white.png'
import heroDark from '../../assets/images/app/dark.png'

export default function HeroSection() {
  const [showLight, setShowLight] = useState(true)
  const reduceMotion = useReducedMotion()

  const duration = reduceMotion ? 0.15 : 0.55
  const ease = [0.22, 1, 0.36, 1]
  const [previewSlide, setPreviewSlide] = useState(0)

  const previewBulletsPrimary = [
    'Secure database connection',
    'Setup in under 5 minutes',
  ]
  const previewBulletsSecondary = ['Ask unlimited questions', 'Cancel anytime']

  const togglePreview = () => setShowLight((v) => !v)
  const prevPreview = () => setPreviewSlide((current) => (current === 0 ? 1 : current - 1))
  const nextPreview = () => setPreviewSlide((current) => (current === 1 ? 0 : current + 1))

  // Auto-scroll preview slider every 5 seconds; respects reduced motion preference and pauses on hover.
  const autoScrollRef = useRef(null)
  const isHoveredRef = useRef(false)

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }

  const startAutoScroll = () => {
    stopAutoScroll()
    if (reduceMotion || isHoveredRef.current) return
    autoScrollRef.current = setInterval(() => {
      setPreviewSlide((current) => (current === 1 ? 0 : current + 1))
    }, 5000)
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      stopAutoScroll()
    }
  }, [reduceMotion])

  return (
    <section id="top" className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <a href="#top" className="mb-6 inline-block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80">
              <img
                src={insy8Logo}
                alt="insy8.ai"
                width={1408}
                height={768}
                decoding="async"
                className="h-14 w-auto sm:h-16 md:h-20 lg:h-24"
              />
            </a>

            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              <span className="block">Your Data.</span>
              <span className="block">Your Questions.</span>
              <span className="mt-1 block whitespace-nowrap bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                AI-Powered Growth.
              </span>
            </h1>

            <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
              Insy8.ai connects to your company data, understands your questions, and delivers instant
              insights with AI-powered intelligence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* <Button href={INSY8_APP_URL} variant="primary" size="lg" className="rounded-full px-7 shadow-blue-500/30">
                Get Started Free
                <MoveRight className="h-4 w-4" aria-hidden />
              </Button> */}
              <Button href={INSY8_APP_URL} variant="primary" size="lg" className="rounded-full px-7">
                See Demo
                <MoveRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-2xl"
              aria-hidden
            />

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
              onMouseEnter={() => {
                isHoveredRef.current = true
                stopAutoScroll()
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false
                startAutoScroll()
              }}
            >
              <motion.div
                layout
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl shadow-black/50 ring-1 ring-white/10 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] bg-slate-950/95 sm:aspect-[16/10]">
                  {previewSlide === 0 ? (
                    <motion.button
                      type="button"
                      onClick={togglePreview}
                      aria-pressed={!showLight}
                      aria-label={
                        showLight
                          ? 'Product preview: light theme. Click to show dark theme.'
                          : 'Product preview: dark theme. Click to show light theme.'
                      }
                      whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                      className="absolute inset-0 cursor-pointer overflow-hidden rounded-[2rem]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/80" />
                      <motion.img
                        src={heroWhite}
                        alt="insy8.ai dashboard preview in light mode"
                        loading="eager"
                        decoding="async"
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-contain p-2 sm:p-4"
                        initial={false}
                        animate={{
                          opacity: showLight ? 1 : 0,
                          scale: reduceMotion ? 1 : showLight ? 1 : 1.03,
                          filter: reduceMotion ? 'none' : showLight ? 'blur(0px)' : 'blur(6px)',
                        }}
                        transition={{ duration, ease }}
                      />
                      <motion.img
                        src={heroDark}
                        alt="insy8.ai dashboard preview in dark mode"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-contain p-2 sm:p-4"
                        initial={false}
                        animate={{
                          opacity: showLight ? 0 : 1,
                          scale: reduceMotion ? 1 : showLight ? 1.03 : 1,
                          filter: reduceMotion ? 'none' : showLight ? 'blur(6px)' : 'blur(0px)',
                        }}
                        transition={{ duration, ease }}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" aria-hidden />
                     
                    </motion.button>
                  ) : (
                    <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950/95 to-slate-900/90 p-6 sm:p-8">
                      <div className="flex h-full items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-8">
                        <div className="w-full max-w-lg space-y-6">
                        <div className="grid place-items-center gap-5 text-center sm:grid-cols-[auto_minmax(0,1fr)] sm:place-items-start sm:text-left lg:items-center">
                          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg shadow-blue-500/25">
                            <Database className="h-8 w-8" aria-hidden />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                              Connect Your Database
                            </p>
                            <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                              Start Getting Smarter Today
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                              No data uploads. No manual reports. Just real answers from your data.
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 sm:items-center sm:justify-items-center lg:justify-items-stretch">
                          <ul className="space-y-3">
                            {previewBulletsPrimary.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" aria-hidden />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-3">
                            {previewBulletsSecondary.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" aria-hidden />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {previewSlide === 0 ? (
                  <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 sm:bottom-6">
                    <motion.span
                      layout
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1.5 text-[11px] font-medium text-zinc-200 shadow-lg backdrop-blur-md sm:text-xs"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.35 }}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${showLight ? 'bg-slate-200' : 'bg-indigo-400'} shadow-[0_0_10px_rgba(129,140,248,0.65)]`}
                        aria-hidden
                      />
                      {showLight ? 'Light preview' : 'Dark preview'} — tap to switch
                    </motion.span>
                  </div>
                ) : null}
              </motion.div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={prevPreview}
                  className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/80"
                >
                  Prev
                </button>
                <div className="flex items-center gap-2">
                  {[0, 1].map((index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setPreviewSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        index === previewSlide ? 'bg-blue-400' : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Show preview slide ${index + 1}`}
                      aria-pressed={index === previewSlide}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={nextPreview}
                  className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/80"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
