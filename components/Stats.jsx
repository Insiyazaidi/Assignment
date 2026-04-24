'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Enterprise Clients', description: 'Across Fortune 500 and fast-growing startups' },
  { value: 94, suffix: '%', label: 'Completion Rate', description: 'Industry-leading, driven by cohort accountability' },
  { value: 40, suffix: '%', label: 'Productivity Gain', description: 'Average improvement reported by L&D heads' },
  { value: 60, suffix: '+', label: 'Programs Available', description: 'Co-certified by IITs, IIMs, and global universities' },
]

function useCountUp(target, isVisible, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const start = performance.now()
    const step = (timestamp) => {
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, target, duration])

  return count
}

function StatItem({ stat, isVisible }) {
  const count = useCountUp(stat.value, isVisible)
  return (
    <div className="text-center">
      <p className="font-display font-bold text-4xl sm:text-5xl text-white mb-1">
        {count}{stat.suffix}
      </p>
      <p className="font-semibold text-blue-200 text-lg mb-2">{stat.label}</p>
      <p className="text-blue-300/70 text-sm">{stat.description}</p>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 hero-gradient relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Numbers that speak for themselves
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Real outcomes from enterprises that trusted Accredian to transform their learning culture.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
