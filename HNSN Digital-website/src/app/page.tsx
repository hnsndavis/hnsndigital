'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const openDemo = () => {
    window.open('https://go.hnsndigital.com/mlo-demo', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openDemo();
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
            <nav className="hidden md:flex items-center gap-8">
              <a href="#process" className="nav-link">Process</a>
              <a href="#results" className="nav-link">Results</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <button onClick={openDemo} className="btn-primary text-sm px-6 py-3">
                Book Strategy Call
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-glow pt-20 pb-32 bg-hero-gradient section-luxury">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-primary text-6xl md:text-7xl lg:text-8xl mb-8 leading-[0.85] tracking-tight">
              Proven Advanced Funnel Strategies
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent">Driving Exclusive Qualified Leads</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 gradient-text">for Mortgage and Real Estate Professionals</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We use Perspective.co&apos;s cutting-edge funnel system to deliver you high-intent leads — not just contacts. Say goodbye to tire-kickers and low-quality inquiries.
            </p>

            <button onClick={openDemo} className="btn-primary text-lg mb-16">
              Book Your Free Strategy Call
            </button>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="icon-glow w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900">Exclusive Leads</div>
              </div>
              <div className="text-center">
                <div className="icon-glow w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900">Fast Setup</div>
              </div>
              <div className="text-center">
                <div className="icon-glow w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900">Proven Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-luxury py-24 bg-section-gradient">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-primary text-4xl md:text-5xl mb-6">
              Unlock Exclusive, High-Quality Leads with Funnels Built on <span className="gradient-text">Perspective.co</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Forget generic lead lists. Our funnels are designed with one goal — to attract and pre-qualify only the most serious buyers and loan applicants. Using Perspective.co&apos;s proven technology, we create mobile-first, conversion-optimized funnels specifically for mortgage loan originators and real estate agents.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our clients experience higher conversion rates and more booked appointments, streamlining your sales pipeline and maximizing your revenue potential.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="section-luxury py-24 bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-primary text-4xl md:text-5xl mb-6">
              Our Proven Process to Fill Your Calendar with <span className="gradient-text">Qualified Appointments</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="process-card text-center p-8">
              <div className="icon-glow w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-blue">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Funnel Build</h3>
              <p className="text-gray-600">
                We design a bespoke funnel tailored to your target audience, niche, and offers — ensuring maximum relevance and engagement.
              </p>
            </div>

            <div className="process-card text-center p-8">
              <div className="icon-glow w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-blue">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Lead Qualification</h3>
              <p className="text-gray-600">
                Using advanced funnel logic, we filter out low-intent prospects, focusing your time on only the most motivated buyers and loan seekers.
              </p>
            </div>

            <div className="process-card text-center p-8">
              <div className="icon-glow w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-blue">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Nurture Sequences</h3>
              <p className="text-gray-600">
                We set up email and SMS sequences that keep your leads warm and ready to act — without you lifting a finger.
              </p>
            </div>

            <div className="process-card text-center p-8">
              <div className="icon-glow w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-blue">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Booking & Follow-Up</h3>
              <p className="text-gray-600">
                Complete integration with booking systems ensures your pipeline stays full and your calendar booked with qualified prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Get Results That Transform Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of advanced funnel strategies designed to deliver:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="premium-card group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Increased Flow of Qualified Leads</h3>
              <p className="text-gray-600">Experience consistent lead generation within just weeks of launch</p>
            </div>

            <div className="premium-card group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Higher Appointment Bookings</h3>
              <p className="text-gray-600">Fill your calendar without cold calling or wasted prospecting effort</p>
            </div>

            <div className="premium-card group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <span className="text-white font-bold text-2xl">3x</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Return on Ad Spend (ROAS)</h3>
              <p className="text-gray-600">Maximize your marketing investment with precision-targeted campaigns</p>
            </div>

            <div className="premium-card group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Streamlined Sales Processes</h3>
              <p className="text-gray-600">Work smarter with pre-qualified prospects and fewer unqualified leads</p>
            </div>

            <div className="premium-card group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">More Closed Deals</h3>
              <p className="text-gray-600">Accelerate your sales cycle with motivated, ready-to-buy prospects</p>
            </div>

            <div className="premium-card group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-rose-500/50 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Time to Revenue</h3>
              <p className="text-gray-600">Reduce your sales cycle with prospects who are already interested and qualified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-luxury py-24 bg-section-gradient">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-primary text-4xl md:text-5xl mb-6">
              Trusted by <span className="gradient-text">Mortgage Loan Originators and Real Estate Agents</span> Nationwide
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="testimonial-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="avatar-glow w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-glow-blue">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah M.</div>
                  <div className="text-gray-600 text-sm">Mortgage Loan Originator</div>
                </div>
              </div>
              <blockquote className="text-gray-700">
                &ldquo;Using their funnel system, I doubled my qualified leads in 30 days without increasing my ad budget. The quality is night and day compared to before.&rdquo;
              </blockquote>
            </div>

            <div className="testimonial-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="avatar-glow w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-glow-blue">
                  <span className="text-white font-bold">JL</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Jason L.</div>
                  <div className="text-gray-600 text-sm">Real Estate Agent</div>
                </div>
              </div>
              <blockquote className="text-gray-700">
                &ldquo;The automated booking and lead nurture freed up hours in my week. Now I spend time closing, not chasing.&rdquo;
              </blockquote>
            </div>

            <div className="testimonial-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="avatar-glow w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-glow-blue">
                  <span className="text-white font-bold">ET</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Emily T.</div>
                  <div className="text-gray-600 text-sm">Mortgage Broker</div>
                </div>
              </div>
              <blockquote className="text-gray-700">
                &ldquo;Their focus on pre-qualification has saved me so much time. Every call is with a motivated buyer.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Explanation */}
      <section className="section-luxury py-24 bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-primary text-4xl md:text-5xl mb-6">
                Why We Use <span className="gradient-text">Perspective.co</span> to Power Your Funnels
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Perspective.co is the industry&apos;s most advanced funnel platform built for agencies like ours. Its mobile-first design, ease of customization, and conversion-focused templates give you an unfair advantage in lead generation with less technical hassle.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We leverage their proven system to create funnels that convert like crazy while managing everything behind the scenes — so you can focus on closing deals.
              </p>
              <button onClick={openDemo} className="btn-primary">
                Learn More About Our Process
              </button>
            </div>
            <div className="premium-card p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="icon-glow w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <p className="font-semibold">Perspective.co Platform</p>
                <p className="text-sm mt-2">Advanced Funnel Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="heading-primary text-4xl md:text-5xl mb-6 text-white">
            Ready to Stop Wasting Time on Low-Quality Leads?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Book your free funnel strategy call now and discover how our proven funnel system can deliver exclusive, qualified mortgage and real estate leads straight to your calendar.
          </p>
          
          <div className="space-y-4">
            <button onClick={openDemo} className="btn-secondary text-lg block mx-auto">
              Book Your Free Funnel Strategy Call Now
            </button>
            <p className="text-blue-100">
              Not sure if this is right for you? <a href="mailto:hello@hnsndigital.com" className="underline hover:text-white">Reach out and let&apos;s chat.</a>
            </p>
          </div>
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
              <a href="tel:+1234567890" className="hover:text-white transition-colors">Call Us</a>
              <a href="mailto:hello@hnsndigital.com" className="hover:text-white transition-colors">Email</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>Advanced funnel strategies for mortgage and real estate professionals. Built on Perspective.co.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}