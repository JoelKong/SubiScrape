import Github from "../../components/Github"
import Hero from "../../components/Hero"
import Link from "../../components/Link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <>
      <div className="flex max-w-5xl mx-auto flex-col py-2 min-h-screen">
        <Header />
        <main className="flex flex-1 flex-col items-center px-4 mt-12 sm:mt-20">
          <Github />
          <Hero />

          <Link />
        </main>

        <Footer />
      </div>
    </>
  )
}
