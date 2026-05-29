import { Check, Database, MoveRight, Sparkles, Upload } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { INSY8_APP_URL } from '../../constants/links.js'

const bulletsPrimary = ['Market research data', 'Sales and customer data', 'Operational reports', 'Financial and performance data']
const bulletsSecondary = ['Why did sales drop last month?', 'Which region is underperforming?', 'What are the top drivers of customer satisfaction?', 'Summarize the biggest trends in this dataset.']

export default function CTASection() {
  return (
    <section id="cta" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#071028]/70 p-4 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-xl sm:p-6"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-white/3" aria-hidden />

          <div className="relative grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-stretch lg:gap-8">
            {/* Left card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.9)] backdrop-blur-md">
              <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" aria-hidden />

              <div className="relative">
                <div className="relative inline-flex">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#020617]/55 shadow-lg shadow-black/40">
                    <Database className="h-10 w-10 text-blue-200" aria-hidden />
                  </div>
                  <span className="absolute -right-2 -top-2 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#020617]/80 text-white shadow-lg backdrop-blur">
                    <Upload className="h-4 w-4" aria-hidden />
                  </span>
                </div>

                <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Built for Business Data
                </h2>
                <p className="mt-4 max-w-[32ch] text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
                  No data uploads. No manual reports. Just real answers from your data.
                </p>
              </div>
            </div>

            {/* Right content */}
            <div className="relative">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
                {/* Middle column */}
                <div className="lg:pr-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-100 shadow-lg shadow-black/30">
                      <Database className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Connect Your Data</h3>
                      <p className="text-sm text-zinc-400">Use the data you already have</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {bulletsPrimary.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.9)]"
                      >
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/25">
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0 text-pretty leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column */}
                <div className="lg:border-l lg:border-white/10 lg:pl-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-100 shadow-lg shadow-black/30">
                      <Sparkles className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Get Instant Answers</h3>
                      <p className="text-sm text-zinc-400">AI turns your data into clarity</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {bulletsSecondary.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.9)]"
                      >
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/25">
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0 text-pretty leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex w-full justify-center sm:justify-end">
                    <Button href={INSY8_APP_URL} variant="primary" size="lg" className="w-full rounded-full px-7 sm:w-auto">
                      Get Started
                      <MoveRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
