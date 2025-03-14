import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HowWeThinkPage() {
  const posts = [
    {
      title: "Why simplicity wins in web design",
      excerpt:
        "In a world of complex websites, we believe that simplicity creates the best user experiences. This article explores the benefits of minimalist design and how it can improve engagement and conversion rates.",
      date: "May 15, 2023",
      slug: "why-simplicity-wins",
      readTime: "5 min read",
    },
    {
      title: "The importance of performance in modern websites",
      excerpt:
        "Website speed isn't just about user experience—it directly impacts your bottom line. Learn how optimizing your site's performance can lead to higher conversion rates and better SEO rankings.",
      date: "April 22, 2023",
      slug: "importance-of-performance",
      readTime: "7 min read",
    },
    {
      title: "Designing for accessibility: Why it matters",
      excerpt:
        "Creating accessible websites isn't just the right thing to do—it's essential for reaching a wider audience. This post covers key accessibility principles and how to implement them in your web projects.",
      date: "March 18, 2023",
      slug: "designing-for-accessibility",
      readTime: "6 min read",
    },
    {
      title: "The future of web development: Trends to watch",
      excerpt:
        "From AI-powered tools to new frameworks and design patterns, the web development landscape is constantly evolving. Here's our take on the trends that will shape the industry in the coming years.",
      date: "February 5, 2023",
      slug: "future-of-web-development",
      readTime: "8 min read",
    },
    {
      title: "Content-first design: A better approach to web projects",
      excerpt:
        "Starting with content rather than design can lead to more effective websites. This article explains our content-first methodology and how it benefits our clients' projects.",
      date: "January 12, 2023",
      slug: "content-first-design",
      readTime: "5 min read",
    },
  ]

  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center text-sm hover:text-gray-500 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">How We Think</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
            Insights, ideas, and perspectives on web design, development, and digital strategy.
          </p>

          <div className="space-y-16">
            {posts.map((post, index) => (
              <article key={index} className="border-t border-gray-200 dark:border-gray-800 pt-12">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl mb-4">
                  <Link href={`/how-we-think/${post.slug}`} className="hover:text-gray-500">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/how-we-think/${post.slug}`}
                  className="text-sm inline-flex items-center hover:text-gray-500"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

