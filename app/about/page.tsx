import Header from "@/components/header"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </main>
  )
}
