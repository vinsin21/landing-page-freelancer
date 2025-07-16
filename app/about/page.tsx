import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Coffee, Heart, Target, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Results-Driven",
      description:
        "Every strategy is designed with measurable outcomes in mind. I focus on metrics that matter to your business.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Client-Centric",
      description:
        "Your success is my success. I work as an extension of your team, understanding your unique challenges and goals.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Continuous Learning",
      description:
        "Marketing evolves rapidly. I stay ahead of trends and continuously update my skills to deliver cutting-edge solutions.",
    },
    {
      icon: <Heart className="w-8 h-8 text-green-500" />,
      title: "Authentic Approach",
      description:
        "I believe in honest, transparent communication and building genuine relationships with clients and their audiences.",
    },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Started Marketing Journey",
      description: "Began my career at a digital marketing agency, learning the fundamentals of online marketing.",
    },
    {
      year: "2020",
      title: "Specialized in B2B",
      description: "Focused on B2B marketing strategies, working with SaaS and technology companies.",
    },
    {
      year: "2021",
      title: "First Major Success",
      description: "Achieved 300% ROI increase for a client, establishing my reputation for delivering results.",
    },
    {
      year: "2022",
      title: "Went Freelance",
      description: "Started my own marketing consultancy to provide more personalized service to clients.",
    },
    {
      year: "2023",
      title: "Expanded Services",
      description: "Added marketing automation and advanced analytics to my service offerings.",
    },
    {
      year: "2024",
      title: "50+ Successful Projects",
      description: "Reached milestone of 50+ completed projects across 15+ industries.",
    },
  ]

  const personalFacts = [
    "Coffee enthusiast ☕ - I start every day with a perfect cup",
    "Marathon runner 🏃‍♂️ - Completed 3 marathons and counting",
    "Tech geek 💻 - Always exploring the latest marketing tools",
    "Travel lover ✈️ - Visited 25+ countries for inspiration",
    "Podcast host 🎙️ - Weekly marketing insights podcast",
    "Mentor 👨‍🏫 - Help aspiring marketers grow their careers",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-green-600">Alex Johnson</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A passionate marketing strategist with over 5 years of experience helping businesses grow through
                data-driven marketing strategies. I believe that great marketing combines creativity with analytics to
                deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3">
                    Let's Work Together <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 font-medium px-8 py-3 bg-transparent"
                  >
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">50+ Happy Clients</h3>
                  <p className="opacity-90">Across 15+ Industries</p>
                </div>
              </div>
              <Card className="absolute -bottom-6 -left-6 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="font-semibold">Google Certified</div>
                    <div className="text-sm text-gray-600">Marketing Professional</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">My Core Values</h2>
            <p className="text-xl text-gray-700">The principles that guide every project and client relationship</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-xl text-gray-700">From marketing enthusiast to trusted business partner</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Beyond Marketing</h2>
              <p className="text-xl text-gray-700 mb-8">
                When I'm not crafting marketing strategies, you'll find me exploring new places, staying active, or
                diving into the latest marketing trends and tools.
              </p>
              <div className="space-y-3">
                {personalFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <Coffee className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-bold text-2xl text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Cups of Coffee</div>
              </Card>
              <Card className="p-4 text-center">
                <BookOpen className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-bold text-2xl text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Books Read</div>
              </Card>
              <Card className="p-4 text-center">
                <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-bold text-2xl text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Countries Visited</div>
              </Card>
              <Card className="p-4 text-center">
                <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-bold text-2xl text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to take your marketing to the next level? I'd love to hear about your business and discuss how we can
            achieve your goals together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-medium">
              Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
