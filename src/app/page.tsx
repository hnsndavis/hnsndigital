export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            HNSN Digital
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
            Digital Innovation with Purpose
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-3xl leading-relaxed">
            Empowering creative people and future leaders to build lives and businesses 
            of purpose, integrity, and real impact through digital innovation.
          </p>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            Our Venture
          </h2>
          
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Web Launch Lab
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get Your Local Business Online in 7 Days — Guaranteed. Professional website 
              design and development for local businesses who need to establish their digital presence quickly.
            </p>
            <a 
              href="https://weblaunchlab.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Visit Web Launch Lab
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 7H7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to work together? We'd love to hear from you.
          </p>
          <a 
            href="mailto:hello@hnsndigital.com"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium text-lg rounded-lg hover:bg-gray-800 transition-colors"
          >
            hello@hnsndigital.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 HNSN Digital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
