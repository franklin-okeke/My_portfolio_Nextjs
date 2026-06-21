import BooksSection from "@/components/books/BooksSection"
import Hero from "@/components/hero/Hero"
import Navbar from "@/components/navbar/Navbar"
import Projects from "@/components/projects/Projects"
import Services from "@/components/services/Services"
import Skills from "@/components/skills/Skills"
import FloatingWhatsApp from "@/components/whatsApp/FloatingWhatsApp"



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FloatingWhatsApp/>
      <Services/>
      <Skills/>
      <Projects/>
      <BooksSection/>
    </div>
  )
}

export default Home
