import { Star, Quote, Brain, Zap, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Robert Anderson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      image: '/client-ceo-testimonial.png',
      rating: 5,
      text: 'Shivvilon Solutions delivered an AI-powered e-commerce platform that increased our sales by 300%. Their expertise in machine learning and automation is unmatched.',
      project: 'AI E-Commerce Platform',
      results: ['300% Sales Increase', 'AI Recommendations', '50% Cost Reduction'],
      category: 'E-Commerce & AI'
    },
    {
      name: 'Jennifer Martinez',
      company: 'HealthFirst Medical',
      role: 'CTO',
      image: '/client-healthcare-cto.png',
      rating: 5,
      text: 'The healthcare management system with AI diagnosis tools has revolutionized our patient care. The team\'s technical expertise and attention to detail is exceptional.',
      project: 'Healthcare AI System',
      results: ['40% Faster Diagnosis', 'Improved Patient Care', 'HIPAA Compliant'],
      category: 'Healthcare & AI'
    },
    {
      name: 'Michael Thompson',
      company: 'FinanceFlow Solutions',
      role: 'Founder',
      image: '/client-fintech-founder.png',
      rating: 5,
      text: 'Our AI-powered financial dashboard provides real-time insights that have transformed our decision-making process. Outstanding work from the Shivvilon Solutions team.',
      project: 'Financial AI Dashboard',
      results: ['Real-time Analytics', 'Predictive Insights', '60% Time Savings'],
      category: 'FinTech & Analytics'
    },
    {
      name: 'Amanda White',
      company: 'EduTech Innovations',
      role: 'Product Manager',
      image: '/client-edtech-pm.png',
      rating: 5,
      text: 'The AI-powered learning platform with personalized tutoring has increased student engagement by 250%. The development process was smooth and professional.',
      project: 'AI Learning Platform',
      results: ['250% Engagement', 'Personalized Learning', 'AI Tutoring'],
      category: 'EdTech & AI'
    },
    {
      name: 'James Wilson',
      company: 'PropertyPro Real Estate',
      role: 'Director',
      image: '/client-proptech-director.png',
      rating: 5,
      text: 'The smart real estate platform with AI valuation and virtual tours has given us a competitive edge. Property matching accuracy improved by 400%.',
      project: 'Smart Real Estate Platform',
      results: ['400% Better Matching', 'AI Valuation', 'Virtual Tours'],
      category: 'PropTech & AI'
    },
    {
      name: 'Sophie Clark',
      company: 'SocialConnect Media',
      role: 'Co-founder',
      image: '/client-social-cofounder.png',
      rating: 5,
      text: 'The AI-powered social media app with intelligent content moderation and smart feeds has exceeded all expectations. User retention increased by 180%.',
      project: 'AI Social Media App',
      results: ['180% User Retention', 'AI Moderation', 'Smart Algorithms'],
      category: 'Social Media & AI'
    }
  ]

  const stats = [
    { icon: Target, value: '99%', label: 'Client Satisfaction', color: 'text-green-600' },
    { icon: Zap, value: '200+', label: 'Projects Delivered', color: 'text-blue-600' },
    { icon: Brain, value: '150+', label: 'AI Solutions Built', color: 'text-purple-600' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions have transformed businesses across industries, 
            delivering measurable results and exceptional value.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                  <Badge className="ml-auto bg-blue-100 text-blue-800">
                    {testimonial.category}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Project Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.results.map((result, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}.0)</span>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.project}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with our AI-powered solutions and expert development team.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
