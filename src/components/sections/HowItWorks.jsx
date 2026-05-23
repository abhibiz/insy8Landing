import { ArrowRight, BarChart3, Database, MessageSquare, PieChart, Upload } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import FeatureCard from './FeatureCard.jsx'

function ConnectVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent">
        <Database className="h-10 w-10 text-emerald-200" aria-hidden />
      </div>
      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <Upload className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
          Encrypted connection
        </span>
      </div>
    </div>
  )
}

function AskVisual() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-[280px] space-y-3">
      <div className="flex flex-wrap justify-center gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
          Why did sales drop last month?
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
          Which SKU is trending?
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
          Forecast next quarter
        </span>
      </div>
      <div className="flex min-w-0 items-center justify-center gap-2">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10">
          <MessageSquare className="h-6 w-6 text-violet-200" aria-hidden />
        </div>
        <div className="flex min-h-12 min-w-0 flex-1 items-center rounded-xl border border-white/10 bg-white/5 px-3 text-xs text-zinc-400">
          <span className="truncate">Ask anything about your metrics…</span>
        </div>
      </div>
    </div>
  )
}

function InsightVisual() {
  return (
    <div className="mx-auto grid w-full max-w-[280px] grid-cols-5 gap-2">
      <div className="col-span-3 rounded-2xl border border-orange-500/25 bg-gradient-to-b from-orange-500/10 to-transparent p-3">
        <div className="flex h-24 items-end gap-1.5">
          {[32, 52, 40, 60, 44, 72].map((px, i) => (
            <div key={i} className="flex h-full flex-1 items-end justify-center">
              <div className="w-2 rounded-md bg-orange-300/80" style={{ height: `${px}px` }} />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400">
          <span>Revenue</span>
          <span className="text-orange-200">+12.4%</span>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3">
        <PieChart className="h-10 w-10 text-orange-200" aria-hidden />
        <BarChart3 className="mt-2 h-6 w-6 text-zinc-400" aria-hidden />
      </div>
    </div>
  )
}

function StepArrow() {
  return (
    <div
      className="hidden shrink-0 flex-col items-center justify-center gap-2 self-center px-1 text-zinc-600 lg:flex"
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <div className="h-px w-6 border-t border-dashed border-white/20 sm:w-10" />
        <ArrowRight className="h-5 w-5" />
        <div className="h-px w-6 border-t border-dashed border-white/20 sm:w-10" />
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          title="How "
          highlight="Insy8.ai"
          titleSuffix=" Works"
        />

        <div className="relative mt-12 lg:mt-16">
          <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-stretch lg:gap-3">
            <div className="min-w-0 flex-1">
              <FeatureCard
                number="01"
                title="Connect your data"
                description="Securely connect your company database"
                accent="green"
              >
                <ConnectVisual />
              </FeatureCard>
            </div>

            <StepArrow />

            <div className="min-w-0 flex-1">
              <FeatureCard
                number="02"
                title="Ask questions"
                description="Ask anything about your business data"
                accent="purple"
              >
                <AskVisual />
              </FeatureCard>
            </div>

            <StepArrow />

            <div className="min-w-0 flex-1">
              <FeatureCard
                number="03"
                title="Get AI Insights"
                description="AI analyzes your data and delivers visual insights, predictions, and recommendations."
                accent="orange"
              >
                <InsightVisual />
              </FeatureCard>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-zinc-600 lg:hidden">
            Connect → Ask → Insights
          </p>
        </div>
      </Container>
    </section>
  )
}
