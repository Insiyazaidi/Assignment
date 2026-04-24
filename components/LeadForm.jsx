'use client'

import { useState } from 'react'

const teamSizes = ['1–10', '11–50', '51–200', '201–500', '500+']

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    phone: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email'
    if (!form.company.trim()) newErrors.company = 'Company is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setForm({ name: '', email: '', company: '', teamSize: '', phone: '' })
      } else {
        setStatus('error')
        setMessage(data.message)
      }
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="lead-form" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-2 mb-6">
              Ready to transform your{' '}
              <span className="gradient-text">learning culture?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Book a free, no-commitment 30-minute demo with one of our enterprise consultants. We'll
              map your team's skill gaps and propose a tailored learning strategy.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🎯', text: 'Customized skill gap assessment for your team' },
                { icon: '📊', text: 'Live demo of the analytics dashboard' },
                { icon: '🎓', text: 'Program recommendations from 60+ options' },
                { icon: '💰', text: 'Flexible pricing for your team size' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">You're in!</h3>
                <p className="text-gray-500">{message}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-brand-600 font-medium hover:underline text-sm"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">
                  Book a Free Demo
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Priya Mehta"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 ${
                      errors.name ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="priya@company.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 ${
                      errors.email ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="TechCorp India"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 ${
                      errors.company ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>

                {/* Phone + Team Size */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                    <select
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-colors text-gray-700 bg-white"
                    >
                      <option value="">Select</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-600/20 hover:shadow-xl text-base flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Booking...
                    </>
                  ) : (
                    'Book Free Demo →'
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  No spam. We respond within 24 hours. 🔒 Your data is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
