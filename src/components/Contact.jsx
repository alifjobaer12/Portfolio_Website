import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <p className="text-gray-300 mb-6">Email: <a className="underline" href="mailto:alifjobaer12@gmail.com">alifjobaer12@gmail.com</a> · Phone: +8801960024750</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-5 rounded-lg">
          <h4 className="font-semibold mb-2">Location</h4>
          <p className="text-gray-300">h12, r11, pc culture housing society, adabor, dhaka 1207</p>
        </div>

        <div className="bg-gray-800 p-5 rounded-lg">
          <h4 className="font-semibold mb-2">Social</h4>
          <ul className="text-gray-300">
            <li><a href="https://www.linkedin.com/in/alifjobaer12" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/alifjobaer12" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://x.com/allifjobaer12" target="_blank" rel="noreferrer">X / Twitter</a></li>
            <li><a href="https://codeforces.com/profile/alifjobaer12" target="_blank" rel="noreferrer">Codeforces</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
