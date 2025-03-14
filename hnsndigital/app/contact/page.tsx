"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">Contact</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
            Ready to start your project? Get in touch and let's discuss how we can help.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-2xl font-normal mb-6">Get in touch</h2>

              {isSubmitted ? (
                <div className="py-8">
                  <h3 className="text-xl mb-4">Thanks for reaching out</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We've received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-sm px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-6">Contact information</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a href="mailto:hello@hnsndigital.com" className="hover:text-gray-500">
                    hello@hnsndigital.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <a href="tel:+15551234567" className="hover:text-gray-500">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Office</p>
                  <address className="not-italic">
                    123 Design Street
                    <br />
                    Creative City, 10001
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

