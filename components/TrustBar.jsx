export default function TrustBar() {
  const partners = [
    'IIT Guwahati',
    'IIT Kanpur',
    'IIT Roorkee',
    'IIM Lucknow',
    'IIM Trichy',
    'XLRI Jamshedpur',
    'SP Jain',
    'IIM Visakhapatnam',
  ]

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Curriculum co-designed with India's top institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <div className="w-8 h-8 bg-brand-600/10 rounded-lg flex items-center justify-center">
                <span className="text-brand-600 font-bold text-xs">{name.slice(0, 2)}</span>
              </div>
              <span className="font-semibold text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
