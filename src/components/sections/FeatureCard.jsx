import { motion } from 'framer-motion'

const accentStyles = {
  green: {
    ring: 'ring-emerald-500/25',
    glow: 'shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_20px_60px_-30px_rgba(16,185,129,0.35)]',
    number: 'text-emerald-300/90',
    border: 'border-emerald-500/25',
  },
  purple: {
    ring: 'ring-violet-500/25',
    glow: 'shadow-[0_0_0_1px_rgba(139,92,246,0.18),0_20px_60px_-30px_rgba(139,92,246,0.35)]',
    number: 'text-violet-300/90',
    border: 'border-violet-500/25',
  },
  orange: {
    ring: 'ring-orange-500/25',
    glow: 'shadow-[0_0_0_1px_rgba(249,115,22,0.18),0_20px_60px_-30px_rgba(249,115,22,0.35)]',
    number: 'text-orange-300/90',
    border: 'border-orange-500/25',
  },
}

export default function FeatureCard({
  number,
  title,
  description,
  accent = 'green',
  children,
}) {
  const a = accentStyles[accent] ?? accentStyles.green

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#071028]/80 p-6 shadow-xl shadow-black/30 ring-1 backdrop-blur-md ${a.ring} ${a.glow}`}
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl`}
        aria-hidden
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`text-5xl font-semibold tabular-nums leading-none ${a.number}`}>
              {number}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              {description}
            </p>
          </div>
        </div>

        <div
          className={`mt-6 flex min-h-[11rem] flex-1 flex-col items-center justify-center rounded-2xl border bg-white/[0.03] p-4 ${a.border}`}
        >
          <div className="flex w-full items-center justify-center">{children}</div>
        </div>
      </div>
    </motion.article>
  )
}
