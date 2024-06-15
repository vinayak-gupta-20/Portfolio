import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import Skills from './Skills.jsx'
import Projects from './ProjectSection.jsx'
import Social from './SocialSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Social/>
    </>
  </React.StrictMode>,
)
