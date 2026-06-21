import Hero from "@/components/hero/Hero"
import Navbar from "@/components/navbar/Navbar"
import FloatingWhatsApp from "@/components/whatsApp/FloatingWhatsApp"
// import { div } from "framer-motion/client"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FloatingWhatsApp/>
    </div>
  )
}

export default Home
