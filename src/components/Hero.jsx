import React from 'react'
import { motion } from 'framer-motion'

const bio = "I’m a passionate problem solver and competitive programmer, currently studying at BUBT. I build modern applications — from efficient algorithms to user-friendly interfaces."

export default function Hero(){
  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
      <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Md Jobaer Islam Alif</h1>
        <h2 className="text-xl text-gray-300 mb-5">Competitive Programmer & Software Engineer</h2>
        <p className="text-gray-300 max-w-xl mb-6">{bio}</p>
        <div className="flex gap-3">
          <a href="#projects" className="px-5 py-2 bg-primary rounded-md text-gray-900 font-semibold">View Projects</a>
          <a href="#contact" className="px-5 py-2 border border-gray-700 rounded-md text-gray-300">Contact</a>
        </div>
      </motion.div>

      <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg">
        <img src="/public/profile.jpg" alt="Profile" className="w-full h-full object-cover"/>
      </motion.div>
    </section>
  )
}
