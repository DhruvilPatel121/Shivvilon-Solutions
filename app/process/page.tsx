import Header from "@/components/header"
import Footer from "@/components/footer"
import HowWeWork from "@/components/how-we-work"

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <HowWeWork />
      </div>
      <Footer />
    </main>
  )
}
