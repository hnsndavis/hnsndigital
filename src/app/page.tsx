'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 header-blur border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">HNSN Digital</h1>
            <p className="text-sm text-gray-600">Mortgage Appointment Engine</p>
          </div>
          <a href="#contact" className="btn-primary">
            Book Strategy Call
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Get 15-75 Qualified Borrower Consultations Per Month
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Done-for-you funnels + ads + nurture. All-inclusive pricing. 3-month commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contact" className="btn-primary text-lg px-8 py-4 pulse-cta">
                Book Strategy Call
              </a>
              <a href="#pricing" className="btn-secondary text-lg px-8 py-4">
                View Pricing
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto fade-in stagger-1">
              <p className="text-gray-700 font-medium">
                ✅ All ad spend included • ✅ Mobile-first funnels • ✅ CRM automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="included" className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-16 fade-in">
            What&apos;s Included in Every Package
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Mobile-First Quiz Funnel",
                description: "Perspective-optimized funnel that converts prospects into qualified consultations"
              },
              {
                icon: "🎯",
                title: "Pre-Consultation Nurture",
                description: "12+ touchpoints to build trust and increase show-up rates"
              },
              {
                icon: "📊",
                title: "Facebook/Google Ad Management",
                description: "Professional ad campaigns with targeting and optimization"
              },
              {
                icon: "⚙️",
                title: "CRM Setup & Automation",
                description: "Complete lead management system with automated workflows"
              },
              {
                icon: "📈",
                title: "Monthly Reporting Dashboard",
                description: "Track your consultations, conversion rates, and ROI"
              },
              {
                icon: "💰",
                title: "Ad Spend Included",
                description: "All advertising costs included in your monthly fee"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center fade-in">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualified Consultation Definition */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8">
            What Is a &quot;Qualified Consultation&quot;?
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Located in your licensed state(s)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Purchase/refi intent within 90 days</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Self-reported credit score 620+</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Completed quiz + booked consultation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Provided contact info + timeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">STARTER</h3>
              <div className="text-4xl font-bold text-blue-900 mb-6">
                $2,000<span className="text-lg text-gray-600">/month</span>
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-6">
                15-25 qualified consultations
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Mobile-first quiz funnel
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Facebook/Google ads (included)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  CRM setup & automation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Monthly reporting
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Ad spend included
                </li>
              </ul>
              <a href="#contact" className="btn-primary w-full text-center">
                Get Started
              </a>
            </div>

            {/* Growth */}
            <div className="pricing-card featured">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">GROWTH</h3>
              <div className="text-4xl font-bold text-blue-900 mb-6">
                $3,500<span className="text-lg text-gray-600">/month</span>
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-6">
                30-45 qualified consultations
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Advanced targeting
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  A/B testing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Ad spend included
                </li>
              </ul>
              <a href="#contact" className="btn-primary w-full text-center">
                Get Started
              </a>
            </div>

            {/* Scale */}
            <div className="pricing-card">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">SCALE</h3>
              <div className="text-4xl font-bold text-blue-900 mb-6">
                $5,000<span className="text-lg text-gray-600">/month</span>
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-6">
                50-75 qualified consultations
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Everything in Growth
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Multi-channel campaigns
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Custom audiences
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Ad spend included
                </li>
              </ul>
              <a href="#contact" className="btn-primary w-full text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-16">
            Proven Results for Mortgage Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 fade-in">
            <div className="bg-white rounded-lg p-8 shadow-lg stats-counter">
              <div className="text-4xl font-bold text-blue-900 mb-2">87%</div>
              <p className="text-gray-600">Average show-up rate for booked consultations</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg stats-counter">
              <div className="text-4xl font-bold text-blue-900 mb-2">32</div>
              <p className="text-gray-600">Average consultations per month (Growth plan)</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg stats-counter">
              <div className="text-4xl font-bold text-blue-900 mb-2">14 days</div>
              <p className="text-gray-600">Average time to first qualified consultation</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 italic mb-4">
              &quot;HNSN Digital delivered 43 qualified consultations in my first month. The quality of leads has been exceptional.&quot;
            </p>
            <p className="font-semibold text-blue-900">— Sarah M., Licensed MLO, Texas</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What&apos;s included in the ad spend?",
                answer: "All advertising costs for Facebook and Google campaigns are included in your monthly fee. We typically allocate $1,500-$3,000+ in ad spend depending on your plan and market conditions."
              },
              {
                question: "How do you qualify leads?",
                answer: "Our quiz funnel pre-qualifies prospects based on location, credit score, purchase timeline, and loan amount. Only prospects meeting your criteria make it to your calendar."
              },
              {
                question: "What&apos;s the 3-month commitment?",
                answer: "We require a 3-month minimum commitment to allow time for optimization and consistent results. Most clients see their best performance in months 2-3."
              },
              {
                question: "How fast will I see results?",
                answer: "Most clients receive their first qualified consultation within 7-14 days. Full optimization typically occurs within the first month."
              },
              {
                question: "Do you work with MLOs in all states?",
                answer: "Yes, we work with licensed mortgage loan officers in all 50 states. Our targeting ensures prospects are only from your licensed states."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-blue-900">{faq.question}</span>
                  <span className="text-2xl text-blue-900">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Fill Your Calendar with Qualified Consultations?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Book a strategy call to discuss your goals and see if we&apos;re a good fit.
          </p>
          <a 
            href="mailto:hello@hnsndigital.com"
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            Book Strategy Call
          </a>
          <p className="mt-4 text-blue-200">
            Or email us at hello@hnsndigital.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HNSN Digital</h3>
              <p className="text-gray-400">Mortgage Appointment Engine</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">hello@hnsndigital.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <p className="text-gray-400 text-sm">
                NMLS Disclaimer: This is a marketing service for licensed mortgage professionals. 
                Equal Housing Opportunity.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 HNSN Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
