import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function Component() {
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

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-400 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-lg font-semibold text-gray-900">B2B Marketing Agency</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Dapper
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
            Services <ChevronDown className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
            Expertise <ChevronDown className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Cases
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
            Resources <ChevronDown className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Careers
          </a>
          <Button className="bg-green-400 hover:bg-green-500 text-gray-900 font-medium">
            Talk to us <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We build <span className="italic font-light">high-performing</span>
              <br />
              marketing engines for
              <br />
              B2B Brands
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              We build, optimize, and scale marketing engines that generate pipeline and improve marketing ROI.
            </p>

            <Button
              variant="outline"
              className="bg-green-400 hover:bg-green-500 border-green-400 text-gray-900 font-medium px-6 py-3"
            >
              Discover more <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative">
            {/* Main metric card */}
            <Card className="absolute top-0 right-0 w-72 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">54%</div>
                <div className="text-sm text-gray-600">increase in pipeline with Demand Generation strategy</div>
              </CardContent>
            </Card>

            {/* Storyteq card */}
            <Card className="absolute top-32 right-20 w-64 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gray-900 rounded"></div>
                  <span className="font-semibold text-gray-900">storyteq</span>
                </div>
                <Button size="sm" className="bg-green-400 hover:bg-green-500 text-gray-900">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Campaign card */}
            <Card className="absolute top-64 right-8 w-80 shadow-lg transform rotate-1 hover:rotate-0 transition-transform bg-indigo-600 text-white">
              <CardContent className="p-4">
                <div className="text-sm mb-2">Too many campaigns, not enough hours in a day?</div>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="w-12 h-12 bg-red-400 rounded"></div>
                  <div className="w-12 h-12 bg-yellow-400 rounded"></div>
                  <div className="w-12 h-12 bg-green-400 rounded"></div>
                  <div className="w-12 h-12 bg-blue-400 rounded"></div>
                  <div className="w-12 h-12 bg-purple-400 rounded"></div>
                  <div className="w-12 h-12 bg-pink-400 rounded"></div>
                  <div className="w-12 h-12 bg-orange-400 rounded"></div>
                  <div className="w-12 h-12 bg-teal-400 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" className="bg-orange-400 hover:bg-orange-500 text-gray-900 text-xs px-2 py-1">
                    Book a Demo
                  </Button>
                  <span className="text-xs">story</span>
                </div>
              </CardContent>
            </Card>

            {/* Abstract geometric shape */}
            <div className="absolute top-20 left-20 w-96 h-96 opacity-20">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path
                  d="M100 50 L300 80 L350 250 L150 300 L50 180 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <path d="M120 70 L280 100 L320 230 L170 280 L70 160 Z" fill="none" stroke="#D1D5DB" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
