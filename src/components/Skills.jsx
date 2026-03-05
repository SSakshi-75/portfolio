import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa"
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si"

function Skills(){
  return(
    <section id="skills" className="py-20 bg-white text-center px-8">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         
        <div className="border p-6 hover:bg-black hover:text-white transition">

          <FaReact className="text-4xl mx-auto mb-2"/>
          React
        </div>

        <div className="border p-6 hover:bg-black hover:text-white transition">
          <SiMongodb className="text-4xl mx-auto mb-2"/>
          MongoDB
        </div>

        <div className="border p-6 hover:bg-black hover:text-white transition">
          <SiExpress className="text-4xl mx-auto mb-2"/>
          Express
        </div>

        <div className="border p-6 hover:bg-black hover:text-white transition">
          <FaNodeJs className="text-4xl mx-auto mb-2"/>
          Node.js
        </div>

        <div className="border p-6 hover:bg-black hover:text-white transition">
          <SiJavascript className="text-4xl mx-auto mb-2"/>
          JavaScript
        </div>

        <div className="border p-6 hover:bg-black hover:text-white transition">
          <SiTailwindcss className="text-4xl mx-auto mb-2"/>
          Tailwind CSS
        </div>

        <div className="border p-6 hover:bg-black hover:text-white transition">
          <FaGithub className="text-4xl mx-auto mb-2"/>
          GitHub
        </div>

      </div>
    </section>
  )
}

export default Skills