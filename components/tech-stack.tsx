import { Card, CardContent } from '@/components/ui/card'

export default function TechStack() {
  const technologies = {
    "Frontend Development": [
      { name: "React", logo: "/tech-logos/react.png", description: "Modern UI library" },
      { name: "Next.js", logo: "/tech-logos/nextjs.png", description: "Full-stack framework" },
      { name: "Vue.js", logo: "/tech-logos/vue.png", description: "Progressive framework" },
      { name: "Angular", logo: "/tech-logos/angular.png", description: "Enterprise platform" },
      { name: "TypeScript", logo: "/tech-logos/typescript.png", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", logo: "/tech-logos/tailwind.png", description: "Utility-first CSS" }
    ],
    "Backend Development": [
      { name: "Node.js", logo: "/tech-logos/nodejs.png", description: "JavaScript runtime" },
      { name: "Python", logo: "/tech-logos/python.png", description: "Versatile language" },
      { name: "Django", logo: "/tech-logos/django.png", description: "Python web framework" },
      { name: "Express.js", logo: "/tech-logos/express.png", description: "Node.js framework" },
      { name: "FastAPI", logo: "/tech-logos/fastapi.png", description: "Modern Python API" },
      { name: "GraphQL", logo: "/tech-logos/graphql.png", description: "Query language" }
    ],
    "AI & Machine Learning": [
      { name: "TensorFlow", logo: "/tech-logos/tensorflow.png", description: "ML platform" },
      { name: "PyTorch", logo: "/tech-logos/pytorch.png", description: "Deep learning" },
      { name: "OpenAI", logo: "/tech-logos/openai.png", description: "GPT integration" },
      { name: "Hugging Face", logo: "/tech-logos/huggingface.png", description: "NLP models" },
      { name: "LangChain", logo: "/tech-logos/langchain.png", description: "LLM framework" },
      { name: "Scikit-learn", logo: "/tech-logos/sklearn.png", description: "ML library" }
    ],
    "Mobile Development": [
      { name: "React Native", logo: "/tech-logos/react-native.png", description: "Cross-platform" },
      { name: "Flutter", logo: "/tech-logos/flutter.png", description: "Google's UI toolkit" },
      { name: "Swift", logo: "/tech-logos/swift.png", description: "iOS development" },
      { name: "Kotlin", logo: "/tech-logos/kotlin.png", description: "Android development" },
      { name: "Expo", logo: "/tech-logos/expo.png", description: "React Native platform" },
      { name: "Ionic", logo: "/tech-logos/ionic.png", description: "Hybrid apps" }
    ],
    "Cloud & DevOps": [
      { name: "AWS", logo: "/tech-logos/aws.png", description: "Cloud services" },
      { name: "Google Cloud", logo: "/tech-logos/gcp.png", description: "Google's cloud" },
      { name: "Azure", logo: "/tech-logos/azure.png", description: "Microsoft cloud" },
      { name: "Docker", logo: "/tech-logos/docker.png", description: "Containerization" },
      { name: "Kubernetes", logo: "/tech-logos/kubernetes.png", description: "Orchestration" },
      { name: "Vercel", logo: "/tech-logos/vercel.png", description: "Deployment platform" }
    ],
    "Design & Prototyping": [
      { name: "Figma", logo: "/tech-logos/figma.png", description: "Design collaboration" },
      { name: "Adobe XD", logo: "/tech-logos/adobe-xd.png", description: "UX design tool" },
      { name: "Sketch", logo: "/tech-logos/sketch.png", description: "Digital design" },
      { name: "Framer", logo: "/tech-logos/framer.png", description: "Interactive prototypes" },
      { name: "Principle", logo: "/tech-logos/principle.png", description: "Animation tool" },
      { name: "InVision", logo: "/tech-logos/invision.png", description: "Design workflow" }
    ],
    "Database & Storage": [
      { name: "PostgreSQL", logo: "/tech-logos/postgresql.png", description: "Relational database" },
      { name: "MongoDB", logo: "/tech-logos/mongodb.png", description: "NoSQL database" },
      { name: "Redis", logo: "/tech-logos/redis.png", description: "In-memory store" },
      { name: "Supabase", logo: "/tech-logos/supabase.png", description: "Backend as a service" },
      { name: "Firebase", logo: "/tech-logos/firebase.png", description: "Google's platform" },
      { name: "Prisma", logo: "/tech-logos/prisma.png", description: "Database toolkit" }
    ],
    "Automation & Testing": [
      { name: "Selenium", logo: "/tech-logos/selenium.png", description: "Web automation" },
      { name: "Cypress", logo: "/tech-logos/cypress.png", description: "E2E testing" },
      { name: "Jest", logo: "/tech-logos/jest.png", description: "JavaScript testing" },
      { name: "Playwright", logo: "/tech-logos/playwright.png", description: "Browser automation" },
      { name: "GitHub Actions", logo: "/tech-logos/github-actions.png", description: "CI/CD workflows" },
      { name: "Zapier", logo: "/tech-logos/zapier.png", description: "Workflow automation" }
    ]
  }

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and tools to deliver exceptional results. 
            From AI and machine learning to modern web frameworks and design tools.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h4>
                      <p className="text-xs text-gray-600">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss which technologies are perfect for your project
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Tech Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
