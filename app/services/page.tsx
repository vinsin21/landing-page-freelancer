import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, PenTool, BarChart3, Share2, Mail, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Digital Strategy",
      description: "Comprehensive marketing strategies tailored to your business goals and target audience.",
      features: ["Market Research", "Competitor Analysis", "Growth Planning", "KPI Setting"],
    },
    {
      icon: <PenTool className="w-8 h-8 text-green-500" />,
      title: "Content Marketing",
      description: "Engaging content that drives traffic, builds authority, and converts visitors into customers.",
      features: ["Blog Writing", "Social Media Content", "Email Campaigns", "Video Scripts"],
    },
    {
      icon: <Search className="w-8 h-8 text-green-500" />,
      title: "SEO & SEM",
      description: "Improve your search visibility and drive qualified traffic through organic and paid search.",
      features: ["Keyword Research", "On-Page SEO", "Google Ads", "Performance Tracking"],
    },
    {
      icon: <Share2 className="w-8 h-8 text-green-500" />,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across social platforms.",
      features: ["Strategy Development", "Content Creation", "Community Management", "Paid Social"],
    },
    {
      icon: <Mail className="w-8 h-8 text-green-500" />,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with targeted email campaigns that convert.",
      features: ["List Building", "Automation Setup", "Campaign Design", "A/B Testing"],
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Analytics & Optimization",
      description: "Data-driven insights to continuously improve your marketing performance.",
      features: ["Performance Analysis", "Conversion Optimization", "ROI Tracking", "Reporting"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Marketing Services That <span className="text-green-600">Drive Results</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From strategy to execution, I provide comprehensive marketing solutions that help your business grow and
            thrive in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how these services can be tailored to meet your specific business needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-medium">
              Get Your Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
