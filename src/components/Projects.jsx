import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Productivity Tracker',
    desc: 'A console-based productivity tool to log and manage daily tasks with simple efficiency.',
    tech: 'C, C++',
    repo: 'https://github.com/alifjobaer12/project-productivity-tracker-',
    live: ''
  },
  {
    title: 'Assignments 1',
    desc: 'A web development assessment demonstrating responsive layouts and interactivity.',
    tech: 'HTML, CSS, JS',
    repo: 'https://github.com/alifjobaer12/Assignment-1',
    live: 'https://alifjobaer12-1stassignment.surge.sh/'
  },
  {
    title: 'Assignments 3 (My Portfolio)',
    desc: 'A portfolio assessment built with core web technologies showcasing projects and skills.',
    tech: 'HTML, CSS, JS',
    repo: 'https://github.com/alifjobaer12/My-Portfolio',
    live: 'https://alifjobaer12-final-assignment2.surge.sh/'
  },
  {
    title: 'School Management System',
    desc: 'A desktop application to manage student records, fees, and user roles (admin/student).',
    tech: 'Python, CustomTkinter, MySQL',
    repo: 'https://github.com/alifjobaer12/School_Management_System',
    live: ''
  },
  {
    title: 'SmartSchool',
    desc: 'An enhanced school management desktop app with additional features and exportable builds.',
    tech: 'Python, CustomTkinter, MySQL',
    repo: 'https://github.com/alifjobaer12/SmartSchool',
    live: ''
  },
  {
    title: 'ChronoMate',
    desc: 'A time-management desktop utility built with CustomTkinter to track activities and schedules.',
    tech: 'Python, CustomTkinter, MySQL',
    repo: 'https://github.com/alifjobaer12/ChronoMate',
    live: ''
  },
  {
    title: 'YoutubeDownloader',
    desc: 'A small desktop utility to download videos (for personal learning and offline viewing).',
    tech: 'Python, CustomTkinter',
    repo: 'https://github.com/alifjobaer12/YoutubeDownloader',
    live: ''
  },
  {
    title: 'Calculator',
    desc: 'A simple desktop calculator application built with CustomTkinter.',
    tech: 'Python, CustomTkinter',
    repo: 'https://github.com/alifjobaer12/Normal_Calculator',
    live: ''
  }
]

export default function Projects(){
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx)=>(
          <motion.div key={idx} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay: idx*0.06}} className="bg-gray-800 p-5 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-300 mb-3">{p.desc}</p>
            <div className="text-sm text-gray-400 mb-3">Tech: {p.tech}</div>
            <div className="flex gap-3">
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded-md">GitHub</a>
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 bg-primary rounded-md text-gray-900">Live</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
