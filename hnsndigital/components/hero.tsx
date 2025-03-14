import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6">
            We design and develop websites that work.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            HNSN Digital is a focused web design and development studio creating effective digital experiences for
            businesses.
          </p>
          <div className="inline-block">
            <Link
              href="/start-project"
              className="text-sm px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

