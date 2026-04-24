'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('.hero-item')
    items?.forEach((el, i) => {
      el.style.animationDelay = `${i * 120}ms`
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero-gradient relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-item opacity-0 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 500+ enterprises across India
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-item opacity-0 font-display font-bold text-white leading-tight mb-6">
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block">
              Upskill Your
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block">
              Workforce{' '}
              <span className="text-blue-300">at Scale</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-item opacity-0 text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Partner with IITs, IIMs, and global universities to upskill your enterprise teams with
            curated programs, live mentorship, and real-time analytics that deliver{' '}
            <strong className="text-white/90">measurable ROI</strong>.
          </p>

          {/* CTAs */}
          <div className="hero-item opacity-0 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
            >
              Book a Free Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-200 text-base"
            >
              Explore Programs
            </a>
          </div>

          {/* Quick stats */}
          <div className="hero-item opacity-0 grid grid-cols-3 gap-6 sm:gap-10">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '94%', label: 'Completion Rate' },
              { value: '40%', label: 'Avg. ROI Improvement' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-2xl sm:text-3xl text-white">{stat.value}</p>
                <p className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card — visible on md+ */}
        <div className="hidden lg:block absolute right-8 xl:right-0 top-1/2 -translate-y-1/2 w-[380px]">
          <div className="glass rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm">Learning Dashboard</p>
                <p className="text-white/50 text-xs">Real-time analytics</p>
              </div>
            </div>
            {[
              { label: 'Team Completion Rate', value: 94, color: 'bg-green-400' },
              { label: 'Skills Mastered', value: 78, color: 'bg-blue-400' },
              { label: 'Learner Satisfaction', value: 96, color: 'bg-purple-400' },
            ].map((item) => (
              <div key={item.label} className="mb-4">
                <div className="flex justify-between text-xs text-white/60 mb-1.5">
                  <span>{item.label}</span>
                  <span className="font-semibold text-white">{item.value}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex -space-x-2">
                {['S', 'P', 'R', 'A'].map((l, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-[10px] font-bold border-2 border-white/20"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-white/50 text-xs">+246 active learners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
