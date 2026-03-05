import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Admin from "./components/Admin"
import AdminLogin from "./components/AdminLogin"

function MainPage(){
  return(
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
       
      </Routes>
    </Router>
  )
}

export default App