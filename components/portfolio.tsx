import { ExternalLink, Github, Brain, Smartphone, Globe, Database, Zap, Bot } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Portfolio() {
  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'Intelligent e-commerce solution with AI-driven product recommendations, chatbot support, and automated inventory management.',
      image: '/ai-ecommerce-platform.png',
      category: 'AI & E-Commerce',
      technologies: ['Next.js', 'TensorFlow', 'OpenAI', 'Stripe', 'PostgreSQL'],
      features: ['AI Recommendations', 'Smart Chatbot', 'Predictive Analytics', 'Auto Inventory'],
      icon: Brain,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform with patient management, telemedicine, and AI-assisted diagnosis tools.',
      image: '/healthcare-ai-system.png',
      category: 'Healthcare & AI',
      technologies: ['React', 'Python', 'FastAPI', 'TensorFlow', 'WebRTC'],
      features: ['Patient Portal', 'Telemedicine', 'AI Diagnosis', 'Appointment System'],
      icon: Database,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Smart Financial Dashboard',
      description: 'Real-time financial analytics with AI-powered insights, automated reporting, and predictive market analysis.',
      image: '/ai-financial-dashboard.png',
      category: 'FinTech & Analytics',
      technologies: ['Vue.js', 'Python', 'Django', 'Chart.js', 'Redis'],
      features: ['Real-time Analytics', 'AI Insights', 'Risk Assessment', 'Auto Reports'],
      icon: Zap,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Learning Management System',
      description: 'Personalized learning platform with AI tutors, adaptive content delivery, and progress tracking.',
      image: '/ai-learning-platform.png',
      category: 'EdTech & AI',
      technologies: ['Next.js', 'OpenAI', 'Supabase', 'Stripe', 'WebRTC'],
      features: ['AI Tutoring', 'Adaptive Learning', 'Progress Analytics', 'Video Streaming'],
      icon: Brain,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Smart Real Estate Platform',
      description: 'Property platform with AI valuation, virtual tours, and automated property matching for buyers.',
      image: '/smart-real-estate.png',
      category: 'PropTech & AI',
      technologies: ['Angular', 'Python', 'TensorFlow', 'Google Maps', 'Firebase'],
      features: ['AI Valuation', 'Virtual Tours', 'Smart Matching', 'Market Predictions'],
      icon: Globe,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Intelligent Social Media App',
      description: 'Social platform with AI content moderation, smart feed algorithms, and automated engagement insights.',
      image: '/ai-social-media-app.png',
      category: 'Social Media & AI',
      technologies: ['React Native', 'Node.js', 'TensorFlow', 'Socket.io', 'MongoDB'],
      features: ['AI Moderation', 'Smart Feed', 'Engagement AI', 'Real-time Chat'],
      icon: Smartphone,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Business Process Automation Suite',
      description: 'Complete automation platform with workflow builder, AI decision making, and integration capabilities.',
      image: '/business-automation-suite.png',
      category: 'Automation & Workflow',
      technologies: ['React', 'Python', 'Celery', 'Redis', 'PostgreSQL'],
      features: ['Workflow Builder', 'AI Decisions', 'API Integration', 'Analytics Dashboard'],
      icon: Bot,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'AI-Powered CRM System',
      description: 'Customer relationship management with AI lead scoring, automated follow-ups, and predictive sales analytics.',
      image: '/ai-crm-system.png',
      category: 'CRM & Sales AI',
      technologies: ['Next.js', 'Python', 'Scikit-learn', 'PostgreSQL', 'Redis'],
      features: ['AI Lead Scoring', 'Auto Follow-ups', 'Sales Predictions', 'Customer Insights'],
      icon: Database,
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-teal-500 to-green-500'
    }
  ]

  const categories = ['All', 'AI & E-Commerce', 'Healthcare & AI', 'FinTech & Analytics', 'EdTech & AI', 'PropTech & AI', 'Social Media & AI', 'Automation & Workflow', 'CRM & Sales AI']

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our AI-Powered Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects showcasing cutting-edge AI integration, modern development practices, 
            and innovative solutions that have transformed businesses across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "default" : "secondary"}
              className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="secondary" asChild className="bg-white/90 hover:bg-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild className="bg-white/90 hover:bg-white">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      className={`bg-gradient-to-r ${project.gradient} text-white text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your AI-Powered Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with intelligent automation and cutting-edge technology.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
