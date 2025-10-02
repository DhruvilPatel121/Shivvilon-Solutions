import { CheckCircle, Users, Award, Target, Globe, Zap, Brain, Shield } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Users, label: "Expert Team Members", value: "10+", color: "text-blue-600" },
    { icon: Award, label: "Industry Awards", value: "2", color: "text-purple-600" },
    { icon: Target, label: "Project Success Rate", value: "99%", color: "text-green-600" },
    { icon: Globe, label: "Countries Served", value: "5+", color: "text-orange-600" },
  ]

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends and integrate cutting-edge solutions like AI and automation into every project.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you throughout the entire development process.",
    },
    {
      icon: Zap,
      title: "Agile & Fast",
      description:
        "Rapid development cycles with continuous feedback ensure quick delivery without compromising quality.",
    },
    {
      icon: Shield,
      title: "Security & Quality",
      description: "Enterprise-grade security and rigorous testing standards are built into every solution we deliver.",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Development Company
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Shivvilon Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking software development company specializing in AI-powered solutions, modern web and
            mobile applications, and intelligent automation systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Expertise</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experts combines technical excellence with creative innovation to deliver transformative
                digital experiences. We focus on creating scalable, secure, and user-friendly solutions that drive
                business growth.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Why Choose Shivvilon Solutions?</h3>
              <ul className="space-y-4">
                {[
                  "AI-first approach to software development",
                  "Expert team with 8+ years of combined experience",
                  "Proven track record with 200+ successful projects",
                  "End-to-end services from design to deployment",
                  "Agile methodology with transparent communication",
                  "24/7 support and maintenance services",
                  "Competitive pricing with flexible engagement models",
                  "Focus on scalable, future-proof solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="/software-development-collaboration.png"
                alt="Our Development Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To empower businesses with intelligent, scalable, and innovative software solutions that drive growth,
            enhance efficiency, and create exceptional user experiences. We believe in the transformative power of
            technology and AI to solve complex business challenges and unlock new opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
