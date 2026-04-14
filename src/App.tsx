import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import AboutUs from "./components/sections/AboutUs"
import Hero from "./components/sections/Hero"
import Menu from "./components/sections/Menu"
import Promotion from "./components/sections/Promotion"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Promotion/>
      <Menu/>
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default App
