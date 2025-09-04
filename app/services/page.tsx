import Header from "@/components/header"
import Footer from "@/components/footer"
import Services from "@/components/services"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </main>
  )
}
