export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  titleSuffix = '',
  subtitle,
  align = 'center',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
        {highlight ? (
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        ) : null}
        {titleSuffix}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base text-zinc-400 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
