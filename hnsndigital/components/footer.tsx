import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-100 dark:border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} HNSN Digital</p>
            </div>

            <div className="flex gap-6">
              <Link
                href="mailto:hello@hnsndigital.com"
                className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Email
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                X
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

