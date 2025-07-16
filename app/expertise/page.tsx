import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Users, TrendingUp, ArrowRight, Target } from "lucide-react"
import Link from "next/link"

export default function ExpertisePage() {
  const skills = [
    { name: "Digital Strategy", level: 95 },
    { name: "Content Marketing", level: 90 },
    { name: "SEO/SEM", level: 88 },
    { name: "Social Media", level: 85 },
    { name: "Email Marketing", level: 92 },
    { name: "Analytics", level: 87 },
    { name: "Paid Advertising", level: 83 },
    { name: "Marketing Automation", level: 80 },
  ]

  const certifications = [
    "Google Ads Certified",
    "Google Analytics Certified",
    "HubSpot Content Marketing",
    "Facebook Blueprint",
    "Hootsuite Social Media",
    "Mailchimp Expert",
  ]

  const industries = [
    "SaaS & Technology",
    "E-commerce",
    "Healthcare",
    "Financial Services",
    "Real Estate",
    "Professional Services",
    "Manufacturing",
    "Education",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Expertise Built Through <span className="text-green-600">Experience</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                With over 5 years in digital marketing, I've developed deep expertise across multiple channels and
                industries, delivering measurable results for businesses of all sizes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-700">Industries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Certified Professional</h3>
                    <p className="text-sm text-gray-600">Multiple platform certifications</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {certifications.slice(0, 3).map((cert, index) => (
                    <Badge key={index} variant="secondary" className="mr-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Skills & Proficiencies</h2>
            <p className="text-xl text-gray-700">Specialized expertise across the full marketing spectrum</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-green-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="justify-center p-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Experience</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">My Approach to Marketing</h2>
            <p className="text-xl text-gray-700">A proven methodology that delivers consistent results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Research</h3>
              <p className="text-gray-600 text-sm">Deep dive into your market, competitors, and audience</p>
            </Card>
            <Card className="text-center p-6">
              <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Develop targeted strategies aligned with your goals</p>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Execute</h3>
              <p className="text-gray-600 text-sm">Implement campaigns with precision and attention to detail</p>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Optimize</h3>
              <p className="text-gray-600 text-sm">Continuously improve based on data and performance</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Put This Expertise to Work for You</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to see how my skills and experience can drive your business forward?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-medium">
              Schedule a Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
