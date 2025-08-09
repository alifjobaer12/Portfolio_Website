import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'C','C++','Python','Java','JavaScript','HTML','CSS','React','Tailwind','MySQL','CustomTkinter'
]

export default function Skills(){
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4" initial="hidden" whileInView="visible" viewport={{once:true}}>
        {skills.map((s,i)=>(
          <motion.div key={s} variants={{hidden:{opacity:0,y:8}, visible:{opacity:1,y:0}}} transition={{delay: i*0.05}} className="bg-gray-800 p-3 rounded-lg text-center text-sm">
            {s}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
