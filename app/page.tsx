import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-200 rounded-lg opacity-30 rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-green-300 rounded-lg opacity-40 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-green-200 rounded-lg opacity-30 -rotate-12"></div>
        <div className="absolute bottom-40 right-60 w-20 h-20 bg-green-400 rounded-lg opacity-50 rotate-30"></div>
        <div className="absolute top-60 left-40 w-16 h-16 bg-green-300 rounded-lg opacity-40 -rotate-45"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
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
                <Button className="bg-green-400 hover:bg-green-500 text-gray-900 font-medium px-8 py-3">
                  Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-green-400 text-green-600 hover:bg-green-50 font-medium px-8 py-3 bg-transparent"
                >
                  View My Work <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative">
            {/* Results card */}
            <Card className="absolute top-0 right-0 w-72 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
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
            <Card className="absolute top-32 right-20 w-64 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
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
            <Card className="absolute top-64 right-8 w-80 shadow-lg transform rotate-1 hover:rotate-0 transition-transform bg-green-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-white" />
                  <span className="font-semibold">Specializations</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white/20 rounded px-2 py-1">B2B Marketing</div>
                  <div className="bg-white/20 rounded px-2 py-1">Lead Generation</div>
                  <div className="bg-white/20 rounded px-2 py-1">Content Strategy</div>
                  <div className="bg-white/20 rounded px-2 py-1">SEO/SEM</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">200%</div>
            <div className="text-gray-700">Average Growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24h</div>
            <div className="text-gray-700">Response Time</div>
          </div>
        </div>
      </section>
    </div>
  )
}
