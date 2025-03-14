import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design",
      description:
        "We create clean, intuitive designs that reflect your brand and engage your audience. Our design process focuses on user experience, ensuring that your website is not only visually appealing but also easy to navigate.",
      details: [
        "User experience (UX) design",
        "User interface (UI) design",
        "Responsive design for all devices",
        "Brand integration",
        "Wireframing and prototyping",
      ],
    },
    {
      title: "Web Development",
      description:
        "Our development team builds websites with clean, efficient code that brings your designs to life with seamless functionality. We focus on performance, security, and maintainability.",
      details: [
        "Front-end development (HTML, CSS, JavaScript)",
        "Back-end development",
        "E-commerce solutions",
        "Performance optimization",
        "Security implementation",
      ],
    },
    {
      title: "CMS Integration",
      description:
        "We implement user-friendly content management systems that give you complete control over your content. This allows you to update your website without technical knowledge.",
      details: [
        "WordPress development",
        "Custom CMS solutions",
        "Content migration",
        "Training and documentation",
        "Ongoing support",
      ],
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a strategic plan.",
    },
    {
      number: "02",
      title: "Design",
      description: "We create a visual design that aligns with your brand and engages your audience.",
    },
    {
      number: "03",
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient, and responsive code.",
    },
    {
      number: "04",
      title: "Launch",
      description: "After thorough testing, we deploy your website and ensure everything runs smoothly.",
    },
  ]

  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
            We offer focused web design and development services to help your business establish an effective online
            presence.
          </p>

          {/* Services */}
          <div className="space-y-24 mb-24">
            {services.map((service, index) => (
              <div key={index}>
                <h2 className="text-3xl font-normal mb-6">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process */}
          <h2 className="text-3xl font-normal mb-12">Our Process</h2>
          <div className="space-y-12 mb-16">
            {process.map((step, index) => (
              <div key={index} className="border-t border-gray-200 dark:border-gray-800 pt-8 grid grid-cols-12 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <span className="text-sm text-gray-400">{step.number}</span>
                </div>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
            <h2 className="text-2xl font-normal mb-6">Ready to start your project?</h2>
            <Link
              href="/contact"
              className="text-sm px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors inline-block"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

