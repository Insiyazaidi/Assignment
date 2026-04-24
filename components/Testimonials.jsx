'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Mehta',
    role: 'CHRO',
    company: 'TechCorp India',
    initials: 'PM',
    color: 'from-blue-500 to-indigo-600',
    metric: '40% Velocity Gain',
  },
  {
    quote:
      'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
    name: 'Rahul Sharma',
    role: 'VP Engineering',
    company: 'FinServe Solutions',
    initials: 'RS',
    color: 'from-purple-500 to-pink-500',
    metric: 'Independent ML Teams',
  },
  {
    quote:
      'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
    name: 'Anjali Kapoor',
    role: 'Head of L&D',
    company: 'Global Logistics Co.',
    initials: 'AK',
    color: 'from-green-500 to-teal-600',
    metric: '96% Completion Rate',
  },
  {
    quote:
      'The custom curriculum aligned perfectly with our product stack. Every module felt designed specifically for our team — because it essentially was. Exceptional execution.',
    name: 'Sanjay Patel',
    role: 'CTO',
    company: 'HealthTech Ventures',
    initials: 'SP',
    color: 'from-amber-500 to-orange-600',
    metric: 'Custom Curriculum',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
            Case Studies
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-2">
            What L&D leaders say
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left: Selector */}
          <div className="lg:col-span-2 space-y-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  active === i
                    ? 'bg-white border-brand-200 shadow-md'
                    : 'bg-white/50 border-transparent hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role} · {t.company}</p>
                  </div>
                  {active === i && (
                    <span className="ml-auto text-xs bg-brand-50 text-brand-600 font-semibold px-2 py-1 rounded-full">
                      {t.metric}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Quote */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-6 right-8 text-gray-100 font-display text-[80px] font-bold leading-none select-none">
                "
              </div>

              <div
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${t.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6`}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {t.metric}
              </div>

              <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed font-medium mb-8">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
