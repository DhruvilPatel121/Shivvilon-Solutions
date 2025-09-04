import { CheckCircle, Users, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function HowWeWork() {
  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business needs, analyze requirements, and create a comprehensive project roadmap.",
      icon: Lightbulb,
      details: ["Requirement Analysis", "Technical Feasibility", "Project Planning", "Technology Selection"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our design team creates intuitive user experiences and interactive prototypes using Figma and modern design tools.",
      icon: Users,
      details: ["User Research", "Wireframing", "UI/UX Design", "Interactive Prototypes"],
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Development & AI Integration",
      description: "We build your solution using cutting-edge technologies, integrating AI and automation where beneficial.",
      icon: Code,
      details: ["Agile Development", "AI Integration", "Code Reviews", "Progress Updates"],
      color: "from-green-500 to-teal-500"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing ensures your application is bug-free, secure, and performs optimally across all platforms.",
      icon: TestTube,
      details: ["Automated Testing", "Manual QA", "Performance Testing", "Security Audits"],
      color: "from-orange-500 to-red-500"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process, ensuring smooth launch with zero downtime and optimal performance.",
      icon: Rocket,
      details: ["Cloud Deployment", "CI/CD Setup", "Performance Monitoring", "Launch Support"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements to keep your application running smoothly and up-to-date.",
      icon: HeadphonesIcon,
      details: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Feature Enhancements"],
      color: "from-pink-500 to-rose-500"
    }
  ]

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative development with regular feedback loops",
      features: ["2-week sprints", "Daily standups", "Continuous delivery", "Client collaboration"]
    },
    {
      title: "DevOps Integration",
      description: "Automated workflows for faster, reliable deployments",
      features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Monitoring & alerts"]
    },
    {
      title: "AI-Driven Development",
      description: "Leveraging AI tools to accelerate development",
      features: ["Code generation", "Automated testing", "Performance optimization", "Intelligent debugging"]
    }
  ]

  return (
    <section id="how-we-work" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 6-step process ensures successful project delivery from concept to launch and beyond. 
            We combine agile methodologies with AI-powered development tools for maximum efficiency.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-20">
          {process.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-500 mb-1">STEP {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1 flex justify-center">
                <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl`}>
                  {step.step}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Development Methodologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h4>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Typical Project Timeline</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1-2</span>
              </div>
              <h4 className="font-semibold text-gray-900">Weeks</h4>
              <p className="text-sm text-gray-600">Discovery & Design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">4-8</span>
              </div>
              <h4 className="font-semibold text-gray-900">Weeks</h4>
              <p className="text-sm text-gray-600">Development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">1-2</span>
              </div>
              <h4 className="font-semibold text-gray-900">Weeks</h4>
              <p className="text-sm text-gray-600">Testing & QA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900">Week</h4>
              <p className="text-sm text-gray-600">Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
