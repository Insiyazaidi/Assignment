const institutions = [
  { name: 'IIT Guwahati', abbr: 'IITG', tier: 'IIT' },
  { name: 'IIT Kanpur', abbr: 'IITK', tier: 'IIT' },
  { name: 'IIT Roorkee', abbr: 'IITR', tier: 'IIT' },
  { name: 'IIM Lucknow', abbr: 'IIML', tier: 'IIM' },
  { name: 'IIM Trichy', abbr: 'IIMT', tier: 'IIM' },
  { name: 'IIM Visakhapatnam', abbr: 'IIMV', tier: 'IIM' },
  { name: 'XLRI Jamshedpur', abbr: 'XLRI', tier: 'XLRI' },
  { name: 'SP Jain School', abbr: 'SPJ', tier: 'Global' },
]

const tierColors = {
  IIT: 'bg-blue-50 text-blue-700 border-blue-100',
  IIM: 'bg-purple-50 text-purple-700 border-purple-100',
  XLRI: 'bg-green-50 text-green-700 border-green-100',
  Global: 'bg-amber-50 text-amber-700 border-amber-100',
}

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
            Academic Partners
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mt-2 mb-4">
            Programs certified by India's{' '}
            <span className="gradient-text">most prestigious institutions</span>
          </h2>
          <p className="text-gray-500">
            Every program on our platform carries the credential of a top-tier institution.
            No fluff. No self-certification.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {institutions.map((inst) => (
            <div
              key={inst.name}
              className="feature-card border border-gray-100 rounded-2xl p-5 text-center bg-white"
            >
              <div className={`w-14 h-14 mx-auto rounded-2xl border flex items-center justify-center mb-3 ${tierColors[inst.tier]}`}>
                <span className="font-display font-bold text-xs">{inst.abbr}</span>
              </div>
              <p className="font-semibold text-gray-800 text-sm">{inst.name}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium mt-1 inline-block ${tierColors[inst.tier]}`}>
                {inst.tier}
              </span>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div className="bg-gradient-to-br from-brand-50 to-indigo-50 rounded-3xl p-8 sm:p-12 text-center border border-brand-100">
          <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">
            Why institution-backed credentials matter
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            In a world flooded with self-certifications, our university partnerships create real signal.
            Employees feel pride, employers trust the rigor, and HR teams see measurable retention uplift.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { stat: '37%', label: 'Higher employee retention' },
              { stat: '2.4x', label: 'Better internal promotion rate' },
              { stat: '91%', label: 'Employees proud of credential' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display font-bold text-3xl text-brand-600">{item.stat}</p>
                <p className="text-gray-500 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
