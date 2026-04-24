'use client'

import { useState, useEffect } from 'react'

const categories = ['All', 'Data & AI', 'Leadership', 'Product', 'Engineering', 'Analytics']

const badgeColors = {
  blue: 'bg-blue-100 text-blue-700',
  orange: 'bg-orange-100 text-orange-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
}

function ProgramCard({ program }) {
  return (
    <div className="feature-card bg-white border border-gray-100 rounded-2xl p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {program.badge && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[program.badgeColor] || 'bg-gray-100 text-gray-600'} mb-2 inline-block`}>
              {program.badge}
            </span>
          )}
          <h3 className="font-display font-semibold text-gray-900 text-base leading-snug">
            {program.title}
          </h3>
        </div>
      </div>

      {/* University */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-brand-600/10 rounded flex items-center justify-center">
          <span className="text-brand-600 font-bold text-[9px]">{program.university.slice(0, 2)}</span>
        </div>
        <span className="text-sm text-gray-500 font-medium">{program.university}</span>
      </div>

      <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{program.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {program.skills.map((skill) => (
          <span key={skill} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
            {skill}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center mb-4">
        <div>
          <p className="text-xs text-gray-400">Duration</p>
          <p className="text-xs font-semibold text-gray-700 mt-0.5">{program.duration}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Format</p>
          <p className="text-xs font-semibold text-gray-700 mt-0.5">{program.format}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Learners</p>
          <p className="text-xs font-semibold text-gray-700 mt-0.5">{program.learners}</p>
        </div>
      </div>

      <a
        href="#lead-form"
        className="block text-center bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
      >
        Enroll Your Team
      </a>
    </div>
  )
}

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/programs?category=${activeCategory}`)
        const data = await res.json()
        setPrograms(data.programs)
      } catch (err) {
        console.error('Failed to fetch programs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPrograms()
  }, [activeCategory])

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Program Library
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-2">
              World-class programs for{' '}
              <span className="gradient-text">every team</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            60+ programs across domains, co-certified by leading institutions.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-gray-100 rounded w-1/3 mb-3" />
                <div className="h-5 bg-gray-100 rounded w-3/4 mb-4" />
                <div className="h-3 bg-gray-100 rounded w-1/2 mb-6" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded" />
                  <div className="h-3 bg-gray-100 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            View all 60+ programs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
