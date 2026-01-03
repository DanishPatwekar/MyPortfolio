import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Particals from './Components/Particals'
import Home from './Sections/Home'
import About from './Sections/About'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import Footer from './Sections/Footer'
import Contact from './Sections/Contact'
import MyCursor from './Components/MyCursor'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' relative gradient text-white max-h-full h-full'>
        <Nav/>
        <MyCursor/>
        {/* <Particals/> */}
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
