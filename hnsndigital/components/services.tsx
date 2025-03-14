export default function Services() {
  const services = [
    {
      title: "Website Design",
      description: "Clean, intuitive designs that reflect your brand and engage your audience.",
    },
    {
      title: "Web Development",
      description: "Efficient, responsive code that brings your designs to life with seamless functionality.",
    },
    {
      title: "CMS Integration",
      description: "User-friendly content management systems that give you control over your content.",
    },
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-normal mb-12">Services</h2>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="border-t border-gray-200 dark:border-gray-800 pt-8">
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

