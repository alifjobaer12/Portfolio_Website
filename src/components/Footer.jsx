import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-800 mt-8 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Md Jobaer Islam Alif · Built with React & Tailwind
      </div>
    </footer>
  )
}
