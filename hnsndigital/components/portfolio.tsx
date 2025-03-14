"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = {
    all: [
      {
        title: "E-commerce Website",
        category: "E-commerce",
        image: "/placeholder.svg?height=400&width=600",
        description: "A fully responsive e-commerce platform with seamless checkout experience.",
      },
      {
        title: "Corporate Rebrand",
        category: "Corporate",
        image: "/placeholder.svg?height=400&width=600",
        description: "Complete website redesign for a financial services company.",
      },
      {
        title: "Restaurant Booking System",
        category: "Hospitality",
        image: "/placeholder.svg?height=400&width=600",
        description: "Online reservation system with integrated menu and special events.",
      },
      {
        title: "Healthcare Provider Portal",
        category: "Healthcare",
        image: "/placeholder.svg?height=400&width=600",
        description: "Patient management system with secure login and appointment scheduling.",
      },
      {
        title: "Real Estate Listings",
        category: "Real Estate",
        image: "/placeholder.svg?height=400&width=600",
        description: "Property listing website with advanced search and filtering options.",
      },
      {
        title: "Educational Platform",
        category: "Education",
        image: "/placeholder.svg?height=400&width=600",
        description: "Learning management system with course creation and student tracking.",
      },
    ],
    ecommerce: [
      {
        title: "E-commerce Website",
        category: "E-commerce",
        image: "/placeholder.svg?height=400&width=600",
        description: "A fully responsive e-commerce platform with seamless checkout experience.",
      },
    ],
    corporate: [
      {
        title: "Corporate Rebrand",
        category: "Corporate",
        image: "/placeholder.svg?height=400&width=600",
        description: "Complete website redesign for a financial services company.",
      },
    ],
    other: [
      {
        title: "Restaurant Booking System",
        category: "Hospitality",
        image: "/placeholder.svg?height=400&width=600",
        description: "Online reservation system with integrated menu and special events.",
      },
      {
        title: "Healthcare Provider Portal",
        category: "Healthcare",
        image: "/placeholder.svg?height=400&width=600",
        description: "Patient management system with secure login and appointment scheduling.",
      },
      {
        title: "Real Estate Listings",
        category: "Real Estate",
        image: "/placeholder.svg?height=400&width=600",
        description: "Property listing website with advanced search and filtering options.",
      },
      {
        title: "Educational Platform",
        category: "Education",
        image: "/placeholder.svg?height=400&width=600",
        description: "Learning management system with course creation and student tracking.",
      },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Showcasing Our Best Work</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse through our recent projects and see how we've helped businesses transform their online presence.
            </p>
          </div>
        </div>

        <div ref={ref} className="mt-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(projects).map(([category, projectList]) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {projectList.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="overflow-hidden h-full">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button variant="outline" className="text-white border-white hover:bg-white/20">
                              View Project <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-bold text-xl">{project.title}</h3>
                            <p className="text-sm text-primary">{project.category}</p>
                            <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

