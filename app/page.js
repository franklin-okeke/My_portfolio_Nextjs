import BooksSection from "@/components/books/BooksSection"
import ContactSection from "@/components/contact/ContactSection"
import EducationSection from "@/components/education/EducationSection"
import Footer from "@/components/footer/Footer"
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
      <ContactSection/>
      <EducationSection/>
      <Footer/>
    </div>
  )
}

export default Home
