import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would normally come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "why-simplicity-wins": {
      title: "Why simplicity wins in web design",
      date: "May 15, 2023",
      readTime: "5 min read",
      content: `
        <p>In the ever-evolving landscape of web design, one principle has consistently proven its value: simplicity. At HNSN Digital, we believe that simplicity isn't just an aesthetic choice—it's a fundamental approach that leads to better user experiences, higher conversion rates, and more effective websites.</p>
        
        <h2>The cognitive burden of complexity</h2>
        
        <p>Every element on a webpage requires mental processing from your visitors. Each button, animation, or section adds to the cognitive load, potentially overwhelming users and distracting them from your core message or call to action.</p>
        
        <p>Research in cognitive psychology has consistently shown that humans have limited cognitive resources. When faced with too many choices or too much information, we often experience decision paralysis or simply disengage.</p>
        
        <h2>Simplicity enhances usability</h2>
        
        <p>A simple website is inherently more usable. When navigation is clear, content is concise, and visual hierarchy is well-established, users can easily find what they're looking for and complete desired actions.</p>
        
        <p>This doesn't mean your website should be bare or lacking in personality. Rather, it means that every element should serve a purpose and contribute to the overall user experience.</p>
        
        <h2>The business case for simplicity</h2>
        
        <p>Beyond the user experience benefits, simplicity offers tangible business advantages:</p>
        
        <ul>
          <li>Faster loading times, which improve SEO and reduce bounce rates</li>
          <li>Easier maintenance and updates</li>
          <li>Better performance across devices</li>
          <li>Clearer messaging that resonates with visitors</li>
          <li>Higher conversion rates due to reduced friction</li>
        </ul>
        
        <h2>How we approach simplicity</h2>
        
        <p>At HNSN Digital, our design process is guided by a commitment to purposeful simplicity:</p>
        
        <ol>
          <li>We start with content strategy, focusing on your core message</li>
          <li>We establish a clear visual hierarchy that guides users through the experience</li>
          <li>We eliminate unnecessary elements that don't contribute to your goals</li>
          <li>We ensure that design supports functionality, not the other way around</li>
        </ol>
        
        <p>The result is a website that feels effortless to use, clearly communicates your value proposition, and effectively converts visitors into customers.</p>
        
        <h2>Conclusion</h2>
        
        <p>In a digital world filled with noise and distractions, simplicity is more than just a design trend—it's a competitive advantage. By embracing simplicity in your web presence, you create space for your message to resonate and your users to engage.</p>
      `,
    },
    "importance-of-performance": {
      title: "The importance of performance in modern websites",
      date: "April 22, 2023",
      readTime: "7 min read",
      content: `
        <p>Website performance isn't just a technical consideration—it's a critical factor that directly impacts user experience, conversion rates, and even search engine rankings. At HNSN Digital, we prioritize performance optimization in every project we undertake.</p>
        
        <h2>The impact of speed on user behavior</h2>
        
        <p>Research has consistently shown that users have little patience for slow-loading websites:</p>
        
        <ul>
          <li>47% of users expect a page to load in 2 seconds or less</li>
          <li>40% will abandon a site that takes more than 3 seconds to load</li>
          <li>A 1-second delay in page response can result in a 7% reduction in conversions</li>
        </ul>
        
        <p>These statistics highlight a simple truth: in the digital world, speed equals revenue.</p>
        
        <h2>Performance and SEO</h2>
        
        <p>Since 2010, Google has included site speed as a ranking factor in its search algorithms. With the introduction of Core Web Vitals, performance metrics have become even more central to SEO success.</p>
        
        <p>A fast website isn't just better for users—it's better for search visibility, which means more organic traffic and lower customer acquisition costs.</p>
        
        <h2>Mobile performance matters more than ever</h2>
        
        <p>With mobile traffic now accounting for more than half of all web traffic, optimizing for mobile performance is essential. Mobile users often face additional constraints like slower network connections and less powerful devices, making performance optimization even more critical.</p>
        
        <h2>Our approach to performance optimization</h2>
        
        <p>At HNSN Digital, we build performance into our development process from the ground up:</p>
        
        <ol>
          <li>We use modern development practices like code splitting and lazy loading</li>
          <li>We optimize images and media for faster loading</li>
          <li>We minimize HTTP requests and leverage browser caching</li>
          <li>We implement efficient CSS and JavaScript</li>
          <li>We regularly test and measure performance using industry-standard tools</li>
        </ol>
        
        <h2>The business case for investing in performance</h2>
        
        <p>Improving website performance isn't just about technical metrics—it delivers real business results:</p>
        
        <ul>
          <li>Walmart found that for every 1 second improvement in page load time, conversions increased by 2%</li>
          <li>Pinterest reduced perceived wait times by 40% and saw a 15% increase in SEO traffic</li>
          <li>The Financial Times found that a 1-second delay in loading time resulted in a 4.9% drop in article views</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>In today's competitive digital landscape, website performance isn't optional—it's essential. By prioritizing speed and responsiveness, you're not just improving technical metrics; you're enhancing user experience, boosting conversion rates, and ultimately driving business growth.</p>
      `,
    },
    // Add other blog posts as needed
    default: {
      title: "Blog Post",
      date: "January 1, 2023",
      readTime: "5 min read",
      content: "<p>This blog post is coming soon.</p>",
    },
  }

  return posts[slug as keyof typeof posts] || posts.default
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <Link href="/how-we-think" className="inline-flex items-center text-sm hover:text-gray-500 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all posts
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                <time dateTime={post.date}>{post.date}</time>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div
              className="prose prose-gray dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </main>
  )
}

