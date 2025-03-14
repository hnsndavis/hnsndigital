import Link from "next/link"

export default function ProjectCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-normal mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Let's work together to create a website that drives results for your business.
          </p>
          <div>
            <Link
              href="/start-project"
              className="text-sm px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors inline-block"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

