"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Lightbulb, PenTool, Code2, Rocket, BarChart } from "lucide-react"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a strategic plan.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Concept",
      description: "Our team develops creative concepts and wireframes based on your requirements and feedback.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Design",
      description: "We create stunning visual designs that align with your brand and engage your audience.",
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient, and responsive code.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Launch",
      description: "After thorough testing, we deploy your website and ensure everything runs smoothly.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Growth",
      description: "We provide ongoing support, maintenance, and optimization to help your site evolve and grow.",
    },
  ]

  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our proven process ensures we deliver exceptional results every time.
            </p>
          </div>
        </div>

        <div ref={ref} className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-800"></div>

          <div className="grid grid-cols-1 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 justify-start md:justify-end">
                      <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>{step.icon}</div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>

                <div className="hidden md:block relative w-12 h-12">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="md:hidden mt-4 mb-8 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

