'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const openCalendly = () => {
    window.open('https://calendly.com/keegan-weblaunchlab/30min', '_blank');
  };

  const handlePricingView = () => {
    // Track pricing views if needed
  };

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50 shadow-premium">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <div>
                <span className="text-xl font-semibold heading-premium tracking-tight">HNSN Digital</span>
                <p className="text-xs text-slate-500">Mortgage Appointment Engine</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-all duration-200 hover:scale-105">
                How It Works
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-all duration-200 hover:scale-105" onMouseEnter={handlePricingView}>
                Pricing
              </a>
              <a href="#faq" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-all duration-200 hover:scale-105">
                FAQ
              </a>
              <button onClick={openCalendly} className="btn-primary text-sm">
                Book Strategy Session
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold heading-premium mb-8 leading-[0.95] tracking-tighter">
            Get 15-75 Qualified
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Borrower Consultations Per Month
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Done-for-you funnels + ads + nurture. All-inclusive pricing. 3-month commitment. NMLS/EHL compliant.
          </p>

          {/* Lead Capture Form */}
          <div id="hero-form" className="max-w-md mx-auto mb-16 animate-slide-up">
            <div className="space-y-5">
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input w-full px-6 py-4 text-base"
              />
              <button onClick={openCalendly} className="btn-primary w-full text-base font-semibold py-4">
                Book Your Free Strategy Session
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4 font-medium">✓ NMLS compliant ✓ 7-day launch guarantee</p>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center items-center space-x-16 mb-20 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold heading-premium mb-1">7 Days</div>
              <div className="text-sm text-slate-500 font-medium">Launch guarantee</div>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold heading-premium mb-1">$2K+</div>
              <div className="text-sm text-slate-500 font-medium">Monthly packages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold heading-premium mb-6 tracking-tight">
              Finally, <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Predictable Lead Flow</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
              Stop the feast-or-famine cycle. Get consistent, qualified mortgage consultations booked directly to your calendar every month.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-xl mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold heading-premium mb-4 text-red-600">The Problem</h3>
              <p className="text-slate-600 leading-relaxed">
                Inconsistent pipeline, erratic lead sources, and marketing that drains budget without delivering qualified consultations.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold heading-premium mb-4 text-blue-600">Our Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete consultation funnel + expert ad management. Continuous stream of qualified prospects directly to your calendar.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold heading-premium mb-4 text-green-600">Your Result</h3>
              <p className="text-slate-600 leading-relaxed">
                Predictable client acquisition. Steady business growth. The &quot;oxygen&quot; for your sustained mortgage business success.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold heading-premium mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join MLOs who&apos;ve moved from unpredictable lead generation to consistent, high-quality consultations every month.
              </p>
              <button onClick={openCalendly} className="btn-primary text-base font-semibold py-4 px-8">
                Get Your Free Strategy Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-white/50 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold heading-premium mb-6 tracking-tight">
              What You Get
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Complete consultation funnel setup + ongoing lead generation management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* One-time Setup */}
            <div className="card-elevated p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold heading-premium mb-2">Custom Consultation Funnel Setup</h3>
                <p className="text-slate-500 font-medium">(One-time fee)</p>
              </div>
              
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>High-Converting 1-Page Funnel:</strong> Optimized for lead capture and mobile performance, utilizing our battle-tested, proprietary templates.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>Click-to-Call Functionality:</strong> Prospects can call you directly from their mobile device.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>Calendly Integration:</strong> Seamlessly book consultations onto your calendar.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>NMLS & EHL Compliant Footer:</strong> Professionally display all necessary disclosures.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>GA4 Event Tracking:</strong> See exactly how your funnel performs.
                  </div>
                </li>
              </ul>
            </div>

            {/* Recurring Service */}
            <div className="card-elevated p-10 border-2 border-blue-200 bg-blue-50/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold heading-premium mb-2 text-blue-600">Recurring Lead Generation & Ad Management</h3>
                <p className="text-slate-500 font-medium">(Monthly fee, ad spend included)</p>
              </div>
              
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>Continuous Qualified Lead Flow:</strong> Strategic ad campaigns targeting ideal prospects actively seeking home loan information.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>Expert Campaign Management:</strong> Ongoing optimization to maximize lead quality and minimize cost-per-consultation.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>Private Client Dashboard:</strong> Full transparency into campaign performance, ad spend, and leads generated.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="gradient-subtle py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold heading-premium mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Simple process to get your consultation engine running
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="card-elevated p-8 hover:shadow-premium-lg transition-all duration-500 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-700 font-bold text-lg">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold heading-premium mb-3">Free Strategy Session</h3>
                  <p className="text-slate-600 leading-relaxed">Let&apos;s discuss your goals, target audience, and current lead gen challenges.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-elevated p-8 hover:shadow-premium-lg transition-all duration-500 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-700 font-bold text-lg">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold heading-premium mb-3">Funnel Setup Investment</h3>
                  <p className="text-slate-600 leading-relaxed">Secure your build slot with a deposit for your custom consultation funnel. Complete our simple intake.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-elevated p-8 hover:shadow-premium-lg transition-all duration-500 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-700 font-bold text-lg">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold heading-premium mb-3">Rapid Funnel Build & Launch</h3>
                  <p className="text-slate-600 leading-relaxed">We build your high-converting funnel (utilizing our proprietary templates) and launch it live in 7 business days.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="card-elevated p-8 hover:shadow-premium-lg transition-all duration-500 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-700 font-bold text-lg">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold heading-premium mb-3">Recurring Lead Generation Begins</h3>
                  <p className="text-slate-600 leading-relaxed">We activate and manage your ad campaigns, driving continuous, qualified traffic to your new funnel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 - Full Width Bottom */}
          <div className="mt-6">
            <div className="card-elevated p-8 hover:shadow-premium-lg transition-all duration-500 group bg-gradient-to-r from-blue-50 to-slate-50">
              <div className="flex items-start space-x-4 justify-center text-center md:text-left md:justify-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-700 font-bold text-lg">5</span>
                  </div>
                </div>
                <div className="max-w-4xl">
                  <h3 className="text-xl font-bold heading-premium mb-3">Ongoing Optimization & Growth</h3>
                  <p className="text-slate-600 leading-relaxed">We continuously monitor and optimize campaigns for peak performance, providing regular reports on your consistent lead flow. This is where your business transforms from unpredictable to systematically successful.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white/50 backdrop-blur-sm py-24" onMouseEnter={handlePricingView}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold heading-premium mb-6 tracking-tight">
              All-Inclusive Pricing
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Single monthly fee - Ad spend included
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Foundation Plan */}
            <div className="pricing-card p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold heading-premium mb-3">Foundation</h3>
                <p className="text-slate-600 font-medium">Perfect for getting started</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-4xl font-bold heading-premium">$997</span>
                  <span className="block text-slate-600 text-sm font-medium mt-1">Setup (one-time)</span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold heading-premium">$2,000</span>
                  <span className="text-slate-600 font-medium">/month</span>
                  <p className="text-sm text-slate-500 mt-2">includes ~$1,000 ad budget</p>
                </div>
              </div>
              
              <button onClick={openCalendly} className="btn-primary w-full py-3 mb-6">
                Get Started
              </button>
            </div>

            {/* Growth Plan */}
            <div className="pricing-card featured p-8 relative">
              <div className="text-center mb-8">
                <div className="popular-badge mb-4">MOST POPULAR</div>
                <h3 className="text-2xl font-bold heading-premium mb-3">Growth</h3>
                <p className="text-slate-600 font-medium">Ideal for scaling MLOs</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-4xl font-bold heading-premium">$1,497</span>
                  <span className="block text-slate-600 text-sm font-medium mt-1">Setup (one-time)</span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold heading-premium">$3,500</span>
                  <span className="text-slate-600 font-medium">/month</span>
                  <p className="text-sm text-slate-500 mt-2">includes ~$1,750 ad budget</p>
                </div>
              </div>
              
              <button onClick={openCalendly} className="btn-primary w-full py-3 mb-6">
                Get Started
              </button>
            </div>

            {/* Scale Plan */}
            <div className="pricing-card p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold heading-premium mb-3">Scale</h3>
                <p className="text-slate-600 font-medium">Maximum lead volume</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-4xl font-bold heading-premium">$2,497</span>
                  <span className="block text-slate-600 text-sm font-medium mt-1">Setup (one-time)</span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold heading-premium">$5,000</span>
                  <span className="text-slate-600 font-medium">/month</span>
                  <p className="text-sm text-slate-500 mt-2">includes ~$2,500 ad budget</p>
                </div>
              </div>
              
              <button onClick={openCalendly} className="btn-primary w-full py-3 mb-6">
                Get Started
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 font-medium">
              ✓ 3-month minimum commitment ✓ Full transparency ✓ NMLS compliant
            </p>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="gradient-subtle py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-premium mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How soon will I see leads?",
                answer: "Typically within 7-14 days after ad campaign launch."
              },
              {
                question: "What&apos;s the commitment?",
                answer: "Initial funnel setup is one-time; monthly ad management is a 3-month minimum commitment to allow for optimization."
              },
              {
                question: "Do you guarantee X leads?",
                answer: "We guarantee expert campaign management and continuous optimization, leveraging your included ad budget. Lead volume depends on market competitiveness."
              },
              {
                question: "Can you integrate with my CRM?",
                answer: "Lead forms route to your email; we will explore webhook integrations for popular CRMs with higher plans."
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6 hover:shadow-premium-lg transition-all duration-300">
                <h3 className="text-lg font-bold heading-premium mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Stop Chasing Loans?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Start attracting pre-qualified mortgage consultations on repeat with our proven system.
          </p>
          
          <button onClick={openCalendly} className="btn-secondary text-base font-semibold py-4 px-8">
            Book Your Free Strategy Session
          </button>
          <p className="text-sm text-slate-400 mt-6 font-medium">✓ NMLS compliant ✓ 7-day launch guarantee ✓ Free consultation</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200/60 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-9 h-9 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-semibold heading-premium tracking-tight">HNSN Digital</span>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              Business-critical lead generation services for mortgage loan officers. 
              From funnel to leads in just 7 days.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors duration-200">
                Terms of Service
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              NMLS Disclaimer: This is a marketing service for licensed mortgage professionals. Equal Housing Opportunity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
