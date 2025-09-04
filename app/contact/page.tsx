import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
