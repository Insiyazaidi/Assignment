'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    step: '01',
    title: 'Discovery & Skill Gap Analysis',
    description:
      'Our consultants map your organization\'s skill gaps, business goals, team size, and learning preferences to design a customized learning blueprint.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Custom Program Design',
    description:
      'We curate or build a tailored curriculum from our library of 60+ university-grade programs, aligned entirely to your organization\'s specific tech stack and goals.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Live Cohort Delivery',
    description:
      'Structured cohorts with live sessions, mentor guidance, peer accountability, and hands-on capstone projects — driving completion rates above 94%.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Analytics & ROI Reporting',
    description:
      'Track every metric — completion, assessments, engagement, and business impact — in real-time through your enterprise dashboard.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'))
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
            The Process
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-2 mb-4">
            From strategy to outcomes —{' '}
            <span className="gradient-text">in 4 steps</span>
          </h2>
          <p className="text-gray-500">
            A proven engagement model that has helped 500+ enterprises build future-ready teams.
          </p>
        </div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-20 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step circle */}
                <div className="relative w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-600/25 mb-6 z-10">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-brand-600 rounded-full flex items-center justify-center text-brand-600 text-[10px] font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-600/20 hover:shadow-xl"
          >
            Start Your Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
