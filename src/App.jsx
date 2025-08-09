import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-6 max-w-6xl mx-auto w-full">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-gray-900 font-bold">MJ</div>
            <span>Md Jobaer Islam Alif</span>
          </div>
          <div className="hidden md:flex gap-6 items-center text-sm text-gray-300">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#resume" className="px-4 py-2 bg-primary rounded-md text-gray-900 font-medium">Resume</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
