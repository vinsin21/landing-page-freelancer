"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Star,
  Quote,
  Play,
  Award,
  Zap,
  Shield,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Animation hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

// Counter animation hook
function useCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isActive, end, duration, start])

  return [count, setIsActive] as const
}

export default function HomePage() {
  const [heroRef, heroInView] = useInView(0.3)
  const [servicesRef, servicesInView] = useInView(0.2)
  const [benefitsRef, benefitsInView] = useInView(0.2)
  const [processRef, processInView] = useInView(0.2)
  const [statsRef, statsInView] = useInView(0.3)
  const [testimonialsRef, testimonialsInView] = useInView(0.2)
  const [portfolioRef, portfolioInView] = useInView(0.2)
  const [ctaRef, ctaInView] = useInView(0.3)

  const [projectsCount, setProjectsActive] = useCounter(50, 2000)
  const [roiCount, setRoiActive] = useCounter(247, 2000)
  const [clientsCount, setClientsActive] = useCounter(15, 2000)

  useEffect(() => {
    if (statsInView) {
      setProjectsActive(true)
      setRoiActive(true)
      setClientsActive(true)
    }
  }, [statsInView, setProjectsActive, setRoiActive, setClientsActive])

  const services = [
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Digital Strategy",
      description: "Data-driven strategies that align with your business goals and drive measurable results.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Lead Generation",
      description: "Proven systems to attract, nurture, and convert high-quality leads into customers.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Content Marketing",
      description: "Engaging content that builds authority, drives traffic, and converts visitors.",
    },
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: "Fast Results",
      description: "See improvements in your marketing performance within the first 30 days.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Proven Methods",
      description: "Strategies tested across 50+ successful projects and 15+ industries.",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: "24h Response",
      description: "Quick communication and support whenever you need it.",
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: "Certified Expert",
      description: "Google, HubSpot, and Facebook certified marketing professional.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Deep dive into your business, goals, and current marketing performance.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a customized marketing strategy tailored to your specific needs.",
    },
    {
      step: "03",
      title: "Execute",
      description: "Implement campaigns with precision and attention to detail.",
    },
    {
      step: "04",
      title: "Optimize",
      description: "Continuously improve performance based on data and insights.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Alex transformed our lead generation completely. We saw a 300% increase in qualified leads within 3 months.",
      author: "Sarah Johnson",
      title: "CEO, TechFlow Solutions",
      rating: 5,
    },
    {
      quote: "Professional, strategic, and results-driven. The ROI on our marketing investment has been incredible.",
      author: "Michael Chen",
      title: "Marketing Director, Urban Lifestyle Co.",
      rating: 5,
    },
    {
      quote: "Our online presence was transformed completely. We're now the go-to practice in our area.",
      author: "Dr. Amanda Rodriguez",
      title: "Practice Owner, Premier Medical Group",
      rating: 5,
    },
  ]

  const portfolioPreview = [
    {
      title: "SaaS Lead Generation",
      result: "247% ROI Increase",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "E-commerce Growth",
      result: "320% Traffic Boost",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Healthcare Marketing",
      result: "400% More Appointments",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-200 rounded-lg opacity-30 rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-green-300 rounded-lg opacity-40 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-green-200 rounded-lg opacity-30 -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-60 w-20 h-20 bg-green-400 rounded-lg opacity-50 rotate-30 animate-bounce"></div>
        <div className="absolute top-60 left-40 w-16 h-16 bg-green-300 rounded-lg opacity-40 -rotate-45 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              I help businesses <span className="italic font-light text-green-600">grow</span>
              <br />
              through strategic
              <br />
              marketing
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              As a freelance marketing specialist, I create data-driven strategies that generate leads, increase
              conversions, and build lasting customer relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-green-400 hover:bg-green-500 text-gray-900 font-medium px-8 py-3 transform hover:scale-105 transition-all duration-200">
                  Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-green-400 text-green-600 hover:bg-green-50 font-medium px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-200"
                >
                  View My Work <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Results card */}
            <Card className="absolute top-0 right-0 w-72 shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">247%</div>
                    <div className="text-sm text-gray-600">ROI increase</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Average client results in 6 months</div>
              </CardContent>
            </Card>

            {/* Clients card */}
            <Card className="absolute top-32 right-20 w-64 shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Across 15+ industries</div>
              </CardContent>
            </Card>

            {/* Specialization card */}
            <Card className="absolute top-64 right-8 w-80 shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl bg-green-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-white" />
                  <span className="font-semibold">Specializations</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white/20 rounded px-2 py-1 transform hover:scale-105 transition-transform">
                    B2B Marketing
                  </div>
                  <div className="bg-white/20 rounded px-2 py-1 transform hover:scale-105 transition-transform">
                    Lead Generation
                  </div>
                  <div className="bg-white/20 rounded px-2 py-1 transform hover:scale-105 transition-transform">
                    Content Strategy
                  </div>
                  <div className="bg-white/20 rounded px-2 py-1 transform hover:scale-105 transition-transform">
                    SEO/SEM
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="relative z-10 bg-gradient-to-br from-gray-50 via-white to-green-50 py-20 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-25 animate-float"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Core Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Services That{" "}
              <span className="text-green-600 relative">
                Drive Growth
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 opacity-30 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive marketing solutions designed to accelerate your business growth and maximize ROI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 ${
                  servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-green-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-[2px] bg-white rounded-lg"></div>

                <CardContent className="relative z-10 p-8 text-center">
                  {/* Icon container with animation */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                  </div>

                  <h3 className="font-bold text-xl lg:text-2xl mb-4 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Animated CTA */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-green-600 hover:text-green-700 hover:bg-green-50 font-medium"
                    >
                      Learn More{" "}
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Mobile tap indicator */}
                  <div className="md:hidden absolute top-4 right-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center opacity-60">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </CardContent>

                {/* Mobile touch animation */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-r from-green-400/10 via-green-500/10 to-green-600/10 opacity-0 active:opacity-100 transition-opacity duration-200 rounded-lg"></div>
              </Card>
            ))}
          </div>

          <div
            className={`text-center mt-16 transition-all duration-1000 delay-600 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link href="/services">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">Marketing Pro</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the difference of working with a dedicated marketing specialist
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 ${
                  benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300 transform group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-green-600">Proven Process</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach that delivers consistent results for every client
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`text-center relative transition-all duration-700 ${
                  processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg transform hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative z-10 bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Results That Speak</h2>
            <p className="text-xl opacity-90">Numbers don't lie - here's what I've achieved for clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`text-center transition-all duration-1000 delay-200 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-5xl font-bold mb-2">{projectsCount}+</div>
              <div className="text-xl opacity-90">Successful Projects</div>
            </div>
            <div
              className={`text-center transition-all duration-1000 delay-400 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-5xl font-bold mb-2">{roiCount}%</div>
              <div className="text-xl opacity-90">Average ROI Increase</div>
            </div>
            <div
              className={`text-center transition-all duration-1000 delay-600 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-5xl font-bold mb-2">{clientsCount}+</div>
              <div className="text-xl opacity-90">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-green-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                  testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section ref={portfolioRef} className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${portfolioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent <span className="text-green-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from real businesses across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioPreview.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group ${
                  portfolioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{project.result}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-1000 delay-600 ${portfolioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link href="/portfolio">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 transform hover:scale-105 transition-all duration-200">
                View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="relative z-10 bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how I can help you achieve your business goals with proven marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 font-medium transform hover:scale-105 transition-all duration-200"
                >
                  Get Your Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 font-medium transform hover:scale-105 transition-all duration-200 bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
