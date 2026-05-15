import { Check, Database, MoveRight, Upload } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'

const bullets = [
  'Secure database connection',
  'Setup in under 5 minutes',
  'Ask unlimited questions',
  'Cancel anytime',
]

export default function CTASection() {
  return (
    <section id="cta" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#071028] p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-md sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="flex justify-center lg:col-span-3 lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 to-indigo-500/10 blur-xl" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] shadow-lg shadow-blue-500/10 sm:h-32 sm:w-32">
                  <Database className="h-14 w-14 text-blue-200 sm:h-16 sm:w-16" aria-hidden />
                  <span className="absolute -right-2 -top-2 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-[#020617]/80 text-white shadow-lg backdrop-blur">
                    <Upload className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Connect Your Database{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Start Getting Smarter Today
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
                No data uploads. No manual reports. Just real answers from your data.
              </p>
            </div>

            <div className="lg:col-span-4">
              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-200 sm:text-[15px]">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-200 ring-1 ring-blue-400/25">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant="primary" size="lg" className="w-full rounded-full px-7 sm:w-auto">
                  Get Started Free
                  <MoveRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
