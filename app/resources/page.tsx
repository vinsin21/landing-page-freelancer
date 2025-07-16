import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Play, FileText, Calendar, ArrowRight, Clock, User } from "lucide-react"

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "10 B2B Lead Generation Strategies That Actually Work in 2024",
      excerpt:
        "Discover the most effective lead generation tactics that are driving results for B2B companies this year.",
      category: "Lead Generation",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Complete Guide to Marketing Attribution",
      excerpt:
        "Learn how to properly track and attribute your marketing efforts to understand what's really driving conversions.",
      category: "Analytics",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Content Marketing ROI: How to Measure What Matters",
      excerpt:
        "A comprehensive guide to measuring the true impact of your content marketing efforts on business growth.",
      category: "Content Marketing",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Email Marketing Automation: From Setup to Scale",
      excerpt: "Step-by-step guide to building email automation workflows that nurture leads and drive conversions.",
      category: "Email Marketing",
      readTime: "15 min read",
      date: "Nov 28, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Social Media Marketing for B2B: Beyond LinkedIn",
      excerpt: "Explore how B2B companies can effectively leverage various social platforms for business growth.",
      category: "Social Media",
      readTime: "7 min read",
      date: "Nov 20, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "SEO in 2024: What's Changed and What Still Works",
      excerpt: "Navigate the evolving SEO landscape with insights on current best practices and algorithm updates.",
      category: "SEO",
      readTime: "11 min read",
      date: "Nov 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const resources = [
    {
      title: "Marketing Strategy Template",
      description: "A comprehensive template to plan your marketing strategy with clear objectives and tactics.",
      type: "Template",
      icon: <FileText className="w-6 h-6 text-green-500" />,
      downloadCount: "2.3k downloads",
    },
    {
      title: "Lead Generation Checklist",
      description: "50-point checklist to optimize your lead generation campaigns for maximum conversion.",
      type: "Checklist",
      icon: <Download className="w-6 h-6 text-green-500" />,
      downloadCount: "1.8k downloads",
    },
    {
      title: "Content Calendar Template",
      description: "Plan and organize your content marketing with this easy-to-use calendar template.",
      type: "Template",
      icon: <Calendar className="w-6 h-6 text-green-500" />,
      downloadCount: "3.1k downloads",
    },
    {
      title: "ROI Calculator Spreadsheet",
      description: "Calculate the return on investment for your marketing campaigns with this detailed spreadsheet.",
      type: "Tool",
      icon: <FileText className="w-6 h-6 text-green-500" />,
      downloadCount: "1.5k downloads",
    },
  ]

  const webinars = [
    {
      title: "Mastering B2B Lead Generation",
      description: "Learn the strategies and tactics that generate high-quality leads for B2B businesses.",
      duration: "45 minutes",
      date: "January 15, 2025",
      status: "upcoming",
    },
    {
      title: "Content Marketing That Converts",
      description: "Discover how to create content that not only engages but also drives conversions.",
      duration: "60 minutes",
      date: "December 18, 2024",
      status: "recorded",
    },
    {
      title: "Email Marketing Automation Masterclass",
      description: "Build sophisticated email workflows that nurture leads and increase customer lifetime value.",
      duration: "90 minutes",
      date: "November 20, 2024",
      status: "recorded",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Marketing <span className="text-green-600">Resources</span> & Insights
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Free resources, guides, and insights to help you grow your business. Learn from proven strategies and
            actionable tactics.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
              <p className="text-xl text-gray-700">Actionable marketing insights and strategies</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Free Marketing Resources</h2>
            <p className="text-xl text-gray-700">Download proven templates and tools to accelerate your marketing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-50 rounded-lg">{resource.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{resource.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{resource.downloadCount}</span>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Webinars & Training</h2>
            <p className="text-xl text-gray-700">Deep-dive training sessions on advanced marketing topics</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="w-5 h-5 text-green-500" />
                    <Badge variant={webinar.status === "upcoming" ? "default" : "secondary"}>
                      {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {webinar.date}
                    </div>
                  </div>
                  <Button
                    className={`w-full ${
                      webinar.status === "upcoming"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    {webinar.status === "upcoming" ? "Register Now" : "Watch Recording"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Updated with Marketing Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly marketing tips, case studies, and resources delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-medium px-6">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
