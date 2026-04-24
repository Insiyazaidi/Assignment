const footerLinks = {
  Solutions: ['Enterprise Learning', 'Custom Programs', 'Mentorship', 'Analytics Dashboard', 'Certifications'],
  Programs: ['Data Science & AI', 'Product Management', 'Engineering', 'Leadership', 'Business Analytics'],
  Company: ['About Accredian', 'Careers', 'Blog', 'Press', 'Contact Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-white text-lg">
                Accredian
                <span className="text-brand-400 ml-1 text-sm font-medium">Enterprise</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The complete operating system for enterprise learning. Powered by India's best institutions.
            </p>
            <div className="flex gap-3">
              {['in', 'tw', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-brand-600 rounded-lg flex items-center justify-center text-xs font-bold text-white transition-colors"
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2024 Accredian. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
