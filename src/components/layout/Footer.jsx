import Container from '../ui/Container.jsx'

const BIZINTELLIS_URL = 'https://www.bizintellis.com/'

const externalLinkClass =
  'font-medium text-zinc-300 underline-offset-2 transition hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <p className="text-center text-sm text-zinc-500">
          © 2026{' '}
          <a href={BIZINTELLIS_URL} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
            Bizintellis
          </a>
          .{' '}
          <span className="font-medium text-cyan-400">insy8.ai</span>
        </p>
      </Container>
    </footer>
  )
}
