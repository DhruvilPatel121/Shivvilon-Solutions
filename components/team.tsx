// import { Linkedin, Twitter, Github, Brain, Code, Palette, Shield, Database, Zap } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'

// export default function Team() {
//   const team = [
//     {
//       name: 'Dhruvil Bhuva',
//       role: 'FOUNDER & CEO',
//       image: '/team-ceo-ai-expert.png',
//       bio: 'Visionary leader with 2+ years in AI and software development. Expert in machine learning and business strategy.',
//       specialties: ['AI Strategy', 'Machine Learning', 'Business Development', 'Team Leadership'],
//       icon: Brain,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-purple-500 to-pink-500'
//     },
//     {
//       name: 'Prink Hapaliya',
//       // role: 'CTO & Full-Stack Architect',
//       role: 'CTO',
//       image: '/team-cto-fullstack.png',
//       bio: 'Technical expert specializing in scalable architecture, cloud solutions, and modern development practices.',
//       specialties: ['System Architecture', 'Cloud Computing', 'DevOps', 'Technical Leadership'],
//       icon: Code,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-blue-500 to-cyan-500'
//     },
//     {
//       name: 'Arjun Odedara',
//       // role: 'Lead AI/ML Engineer',
//       role: 'COO',
//       image: '/team-ai-ml-engineer.png',
//       bio: 'AI specialist with expertise in deep learning, NLP, and computer vision. PhD in Machine Learning.',
//       specialties: ['Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow/PyTorch'],
//       icon: Brain,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-green-500 to-teal-500'
//     },
//     {
//       name: 'Emily Davis',
//       role: 'Head of Design & UX',
//       image: '/team-ux-designer.png',
//       bio: 'Creative designer focused on user-centered design, Figma expertise, and creating exceptional digital experiences.',
//       specialties: ['UI/UX Design', 'Figma', 'Design Systems', 'User Research'],
//       icon: Palette,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-pink-500 to-rose-500'
//     },
//     {
//       name: 'David Kim',
//       role: 'Senior Full-Stack Developer',
//       image: '/team-fullstack-developer.png',
//       bio: 'Full-stack expert with 8+ years in React, Node.js, and modern web technologies. Automation enthusiast.',
//       specialties: ['React/Next.js', 'Node.js', 'TypeScript', 'API Development'],
//       icon: Code,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-orange-500 to-red-500'
//     },
//     {
//       name: 'Lisa Wang',
//       role: 'DevOps & Security Engineer',
//       image: '/team-devops-security.png',
//       bio: 'Infrastructure specialist ensuring reliable, scalable, and secure deployments with cloud expertise.',
//       specialties: ['AWS/GCP', 'Kubernetes', 'CI/CD', 'Security'],
//       icon: Shield,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-indigo-500 to-purple-500'
//     },
//     {
//       name: 'James Wilson',
//       role: 'Data Engineer & Analyst',
//       image: '/team-data-engineer.png',
//       bio: 'Data expert specializing in big data processing, analytics pipelines, and business intelligence solutions.',
//       specialties: ['Data Engineering', 'Analytics', 'Python', 'SQL'],
//       icon: Database,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-yellow-500 to-orange-500'
//     },
//     {
//       name: 'Sophie Martinez',
//       role: 'Mobile Development Lead',
//       image: '/team-mobile-developer.png',
//       bio: 'Mobile specialist with expertise in React Native, Flutter, and native iOS/Android development.',
//       specialties: ['React Native', 'Flutter', 'iOS/Android', 'Mobile UX'],
//       icon: Zap,
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#'
//       },
//       gradient: 'from-teal-500 to-green-500'
//     }
//   ]

//   const departments = [
//     {
//       name: 'AI & Machine Learning',
//       count: 8,
//       description: 'Specialists in AI, ML, and intelligent automation',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       name: 'Full-Stack Development',
//       count: 12,
//       description: 'Frontend, backend, and API development experts',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       name: 'Design & UX',
//       count: 6,
//       description: 'UI/UX designers and design system specialists',
//       color: 'from-pink-500 to-rose-500'
//     },
//     {
//       name: 'DevOps & Security',
//       count: 5,
//       description: 'Infrastructure, deployment, and security experts',
//       color: 'from-green-500 to-teal-500'
//     }
//   ]

//   return (
//     <section id="team" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Meet Our Expert Team
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our diverse team of AI specialists, full-stack developers, designers, and engineers 
//             brings together decades of experience in cutting-edge technology and innovation.
//           </p>
//         </div>

//         {/* Team Departments */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {departments.map((dept, index) => (
//             <div key={index} className={`bg-gradient-to-r ${dept.color} rounded-xl p-6 text-white text-center`}>
//               <div className="text-3xl font-bold mb-2">{dept.count}</div>
//               <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
//               <p className="text-sm opacity-90">{dept.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Team Members */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {team.map((member, index) => (
//             <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
//               <CardContent className="p-6">
//                 <div className="relative mb-4">
//                   <img
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
//                   />
//                   <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center shadow-lg`}>
//                     <member.icon className="w-5 h-5 text-white" />
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
//                 <p className="text-blue-600 font-medium mb-3">{member.role}</p>
//                 <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
//                 {/* Specialties */}
//                 <div className="mb-4">
//                   <div className="flex flex-wrap gap-1 justify-center">
//                     {member.specialties.map((specialty, idx) => (
//                       <Badge key={idx} variant="outline" className="text-xs">
//                         {specialty}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex justify-center space-x-3">
//                   <a
//                     href={member.social.linkedin}
//                     className="text-gray-400 hover:text-blue-600 transition-colors"
//                   >
//                     <Linkedin className="h-4 w-4" />
//                   </a>
//                   <a
//                     href={member.social.twitter}
//                     className="text-gray-400 hover:text-blue-400 transition-colors"
//                   >
//                     <Twitter className="h-4 w-4" />
//                   </a>
//                   <a
//                     href={member.social.github}
//                     className="text-gray-400 hover:text-gray-900 transition-colors"
//                   >
//                     <Github className="h-4 w-4" />
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Team Culture */}
//         <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Team Culture</h3>
//             <p className="text-lg text-blue-100 max-w-3xl mx-auto">
//               We foster a collaborative environment where innovation thrives, continuous learning is encouraged, 
//               and every team member contributes to our shared success.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <Brain className="w-12 h-12 mx-auto mb-4 text-blue-200" />
//               <h4 className="text-lg font-semibold mb-2">Innovation Driven</h4>
//               <p className="text-blue-100 text-sm">We stay at the forefront of technology and encourage creative problem-solving.</p>
//             </div>
//             <div className="text-center">
//               <Code className="w-12 h-12 mx-auto mb-4 text-blue-200" />
//               <h4 className="text-lg font-semibold mb-2">Continuous Learning</h4>
//               <p className="text-blue-100 text-sm">Regular training, conferences, and skill development opportunities for all team members.</p>
//             </div>
//             <div className="text-center">
//               <Zap className="w-12 h-12 mx-auto mb-4 text-blue-200" />
//               <h4 className="text-lg font-semibold mb-2">Work-Life Balance</h4>
//               <p className="text-blue-100 text-sm">Flexible schedules, remote work options, and a supportive work environment.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
