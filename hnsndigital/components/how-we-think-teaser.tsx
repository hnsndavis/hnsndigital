import Link from "next/link"

export default function HowWeThinkTeaser() {
  const latestPosts = [
    {
      title: "Why simplicity wins in web design",
      excerpt: "In a world of complex websites, we believe that simplicity creates the best user experiences.",
      date: "May 15, 2023",
      slug: "why-simplicity-wins",
    },
    {
      title: "The importance of performance in modern websites",
      excerpt: "Website speed isn't just about user experience—it directly impacts your bottom line.",
      date: "April 22, 2023",
      slug: "importance-of-performance",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-normal">How We Think</h2>
            <Link href="/how-we-think" className="text-sm hover:text-gray-500">
              View all
            </Link>
          </div>

          <div className="space-y-12">
            {latestPosts.map((post, index) => (
              <div key={index} className="border-t border-gray-200 dark:border-gray-800 pt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl mb-3">
                  <Link href={`/how-we-think/${post.slug}`} className="hover:text-gray-500">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/how-we-think/${post.slug}`}
                  className="text-sm inline-flex items-center hover:text-gray-500"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

