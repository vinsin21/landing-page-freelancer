import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      title: "SaaS Lead Generation Campaign",
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      description:
        "Developed and executed a comprehensive lead generation strategy for a B2B SaaS company, focusing on content marketing and paid advertising.",
      results: [
        "247% increase in qualified leads",
        "65% reduction in cost per lead",
        "180% improvement in conversion rate",
      ],
      tags: ["Lead Generation", "Content Marketing", "Google Ads", "LinkedIn Ads"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "E-commerce Growth Strategy",
      client: "Urban Lifestyle Co.",
      industry: "E-commerce",
      description:
        "Complete digital marketing overhaul for an e-commerce brand, including SEO, social media, and email marketing campaigns.",
      results: [
        "320% increase in organic traffic",
        "150% boost in online sales",
        "45% improvement in customer retention",
      ],
      tags: ["SEO", "Social Media", "Email Marketing", "Conversion Optimization"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Healthcare Practice Marketing",
      client: "Premier Medical Group",
      industry: "Healthcare",
      description:
        "Local SEO and reputation management campaign for a multi-location healthcare practice to increase patient acquisition.",
      results: [
        "400% increase in online appointments",
        "85% improvement in local search rankings",
        "200% growth in positive reviews",
      ],
      tags: ["Local SEO", "Reputation Management", "Google My Business", "Content Strategy"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Financial Services Rebrand",
      client: "Wealth Advisors Inc.",
      industry: "Financial Services",
      description:
        "Complete digital marketing strategy for a financial advisory firm's rebrand, focusing on thought leadership and client acquisition.",
      results: [
        "190% increase in website traffic",
        "125% growth in consultation requests",
        "300% improvement in social engagement",
      ],
      tags: ["Brand Strategy", "Content Marketing", "LinkedIn Marketing", "Thought Leadership"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Real Estate Lead Funnel",
      client: "Metro Realty Group",
      industry: "Real Estate",
      description:
        "Automated lead generation and nurturing system for a real estate agency using Facebook ads and email marketing.",
      results: [
        "275% increase in qualified leads",
        "60% reduction in lead acquisition cost",
        "140% improvement in lead-to-sale conversion",
      ],
      tags: ["Facebook Ads", "Marketing Automation", "Lead Nurturing", "CRM Integration"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Manufacturing B2B Campaign",
      client: "Industrial Solutions Ltd.",
      industry: "Manufacturing",
      description:
        "B2B marketing campaign targeting industrial clients through LinkedIn advertising and content marketing.",
      results: [
        "350% increase in B2B inquiries",
        "80% improvement in sales cycle length",
        "220% growth in pipeline value",
      ],
      tags: ["B2B Marketing", "LinkedIn Ads", "Industrial Marketing", "Sales Enablement"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const testimonials = [
    {
      quote:
        "The results exceeded our expectations. Our lead quality improved dramatically and our sales team couldn't be happier.",
      author: "Sarah Johnson",
      title: "CEO, TechFlow Solutions",
      company: "SaaS",
    },
    {
      quote: "Professional, strategic, and results-driven. The ROI on our marketing investment has been incredible.",
      author: "Michael Chen",
      title: "Marketing Director, Urban Lifestyle Co.",
      company: "E-commerce",
    },
    {
      quote: "Our online presence was transformed completely. We're now the go-to practice in our area.",
      author: "Dr. Amanda Rodriguez",
      title: "Practice Owner, Premier Medical Group",
      company: "Healthcare",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Portfolio of <span className="text-green-600">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Real results from real businesses. See how strategic marketing has helped companies across various
            industries achieve their growth goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">247%</div>
              <div className="text-gray-700">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{project.industry}</Badge>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-gray-600">{project.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-700">Don't just take my word for it - hear from satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Be My Next Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help you achieve similar results for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-medium">
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
