import Container from '../ui/Container.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <p className="text-center text-sm text-zinc-500">
          © 2026 Bizintellis.{' '}
          <span className="font-medium text-cyan-400">insy8.ai</span>
        </p>
      </Container>
    </footer>
  )
}
