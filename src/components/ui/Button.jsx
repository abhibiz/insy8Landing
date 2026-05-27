import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 border border-white/10',
  secondary:
    'border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-white/30 hover:bg-white/10',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/5',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm font-medium',
  lg: 'px-6 py-3 text-base font-medium',
}

const MotionButton = motion.button
const MotionLink = motion.a

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  children,
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] disabled:pointer-events-none disabled:opacity-50',
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ].join(' ')

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
    className: classes,
    ...props,
  }

  if (href) {
    return (
      <MotionLink href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {children}
      </MotionLink>
    )
  }

  return (
    <MotionButton type="button" {...motionProps}>
      {children}
    </MotionButton>
  )
}
