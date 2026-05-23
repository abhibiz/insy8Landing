import { useEffect, useState } from 'react'
import { Menu, MoveRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'

const BIZINTELLIS_URL = 'https://www.bizintellis.com/'

function PoweredByBizintellis({ className = '' }) {
  return (
    <p className={`text-xs text-zinc-500 sm:text-[13px] ${className}`}>
      Powered by{' '}
      <a
        href={BIZINTELLIS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-zinc-300 underline-offset-2 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80"
      >
        Bizintellis
      </a>
    </p>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const shell = scrolled
    ? 'border-b border-white/10 bg-[#020617]/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.35)]'
    : 'border-b border-transparent bg-transparent'

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className={`transition-all duration-300 ${shell}`}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                insy8<span className="text-blue-400">.ai</span>
              </span>
              <span
                className="hidden h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.85)] sm:inline"
                aria-hidden
              />
              <span className="hidden text-sm text-zinc-500 sm:inline sm:text-[13px]">
                AI Data Analyst
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-5 md:flex">
            <PoweredByBizintellis className="whitespace-nowrap" />
            <Button variant="primary" size="md" className="rounded-full px-5">
              Get Started Free
              <MoveRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </Container>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-white/10 bg-[#020617]/95 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              <p className="text-sm text-zinc-500">AI Data Analyst</p>
              <PoweredByBizintellis />
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-full justify-center"
                onClick={() => setOpen(false)}
              >
                Get Started Free
                <MoveRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
