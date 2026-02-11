import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Story from './components/Story'
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
 
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-x-hidden ">
      <Hero></Hero>
      <About></About>
      <Navbar></Navbar>
       <Features></Features>
       <Story></Story>
       <Contact></Contact>
       <Footer></Footer>
       </main>
   )
}

export default App
