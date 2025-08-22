'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setShowContent(true);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://go.hnsndigital.com/mlo-demo', '_blank');
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Header */}
      <header className="nav-glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3 shadow-glow-blue">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold gradient-text">HNSN Digital</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Simple & Focused */}
      <section className="pt-24 pb-16 bg-hero-gradient section-luxury">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-5xl md:text-6xl mb-6 leading-tight">
            Get 3x More Qualified Leads 
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent">
              Using Perspective.co Funnels
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop wasting money on tire-kickers. Our proven funnel system pre-qualifies leads and delivers only motivated mortgage and real estate prospects to your calendar.
          </p>

          {!showContent ? (
            <div className="premium-card p-8 max-w-lg mx-auto">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Book Your Strategy Call</h3>
                <p className="text-gray-600 mb-6">
                  Enter your details to schedule a private consultation and discover how our Perspective.co system can 3x your qualified leads.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input w-full"
                  required
                />
                <button type="submit" className="btn-primary w-full text-lg">
                  📞 Book My Strategy Call →
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                ✅ Free Consultation • ⚡ No Pressure • 🎯 Custom Strategy
              </p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="premium-card p-8 max-w-2xl mx-auto mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900">Perfect! Here&apos;s What Happens Next:</h3>
                </div>
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">1</span>
                    <span className="text-gray-700">I&apos;ll review your current lead generation setup</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">2</span>
                    <span className="text-gray-700">We&apos;ll identify exactly where you&apos;re losing qualified prospects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">3</span>
                    <span className="text-gray-700">I&apos;ll show you the Perspective.co system that can 3x your results</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">4</span>
                    <span className="text-gray-700">You&apos;ll get a custom action plan to implement immediately</span>
                  </div>
                </div>
                <button 
                  onClick={() => window.open('https://go.hnsndigital.com/mlo-demo', '_blank')}
                  className="btn-primary w-full text-lg"
                >
                  📅 Schedule My Call Now
                </button>
              </div>
            </div>
          )}
        </div>
      </section>



      {/* Footer */}
      <footer className="footer-glow text-white py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3 shadow-glow-blue">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold">HNSN Digital</span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="mailto:hello@hnsndigital.com" className="hover:text-white transition-colors">hello@hnsndigital.com</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>Perspective.co funnel strategies for mortgage and real estate professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}