"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function StartProjectPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Add a small delay to show loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      <div className="container px-4 mx-auto pt-20 pb-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-sm hover:text-gray-500">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      ) : (
        <div className="flex-1 w-full bg-white dark:bg-black">
          <iframe
            src="https://keeganhansendavis.notion.site/ebd/1a63554e09f28023ab94d56bc5acb057"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Start a project form"
            className="w-full h-full"
            style={{ height: "calc(100vh - 160px)" }} // Adjusted to account for footer
          />
        </div>
      )}
    </main>
  )
}

