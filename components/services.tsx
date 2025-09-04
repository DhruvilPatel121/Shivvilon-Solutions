import {
  Brain,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Palette,
  Zap,
  Bot,
  Cog,
  LineChart,
  Rocket,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, chatbots, predictive analytics, and intelligent automation systems.",
      features: ["GPT Integration", "Computer Vision", "NLP Solutions", "Predictive Models"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Bot,
      title: "Process Automation",
      description: "Streamline your business operations with intelligent automation and workflow optimization.",
      features: ["RPA Solutions", "Workflow Automation", "API Integration", "Data Processing"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.",
      features: ["React/Next.js", "Progressive Web Apps", "E-commerce", "CMS Solutions"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps with seamless user experiences.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design from Figma prototypes to pixel-perfect implementations.",
      features: ["Figma to Code", "Design Systems", "User Research", "Prototyping"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, deployment, and DevOps automation.",
      features: ["AWS/GCP/Azure", "Microservices", "CI/CD Pipelines", "Container Orchestration"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Big data processing, analytics pipelines, and database optimization.",
      features: ["Data Pipelines", "Analytics", "Database Design", "Real-time Processing"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits, penetration testing, and secure development practices.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Secure Coding"],
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with custom dashboards and analytics.",
      features: ["Custom Dashboards", "Data Visualization", "KPI Tracking", "Reporting Systems"],
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Cog,
      title: "API Development",
      description: "RESTful APIs, GraphQL endpoints, and seamless third-party integrations.",
      features: ["REST APIs", "GraphQL", "Microservices", "Third-party Integration"],
      gradient: "from-gray-500 to-gray-700",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications with advanced optimization techniques and monitoring.",
      features: ["Code Optimization", "Database Tuning", "CDN Setup", "Performance Monitoring"],
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Complete digital transformation consulting and implementation services.",
      features: ["Strategy Consulting", "Legacy Modernization", "Process Digitization", "Change Management"],
      gradient: "from-blue-600 to-indigo-600",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered solutions to modern web development, we offer end-to-end services to transform your business
            and accelerate your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-First Approach</h3>
            <p className="text-gray-600">
              Every solution is enhanced with artificial intelligence for maximum efficiency and innovation.
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
            <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Development</h3>
            <p className="text-gray-600">
              Agile methodologies and modern tools ensure fast delivery without compromising quality.
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
            <p className="text-gray-600">
              Built for growth with cloud-native architecture and enterprise-grade scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
