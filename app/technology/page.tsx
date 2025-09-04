import Header from "@/components/header"
import Footer from "@/components/footer"
import TechStack from "@/components/tech-stack"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <TechStack />
      </div>
      <Footer />
    </main>
  )
}
