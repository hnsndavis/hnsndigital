"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "10+ years of industry experience",
    "Dedicated project managers",
    "Transparent communication",
    "Ongoing support and maintenance",
    "Results-driven approach",
    "Cutting-edge technology",
  ]

  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-normal mb-12">About</h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-400">
            <p>
              HNSN Digital is a web design and development studio focused on creating effective digital experiences for
              businesses of all sizes.
            </p>
            <p>
              We believe in simplicity, functionality, and purpose. Every website we create is designed with your
              business goals in mind, ensuring that it not only looks great but also performs exceptionally.
            </p>
            <p>
              With over a decade of experience in the digital space, we've refined our process to deliver websites that
              are clean, fast, and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

