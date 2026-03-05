function Projects(){
  return(
    <section id="projects" className="bg-white py-20 text-center px-8">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">
            Hospital Management System
          </h3>
          <p className="text-gray-700">
            Full stack MERN project with authentication, admin dashboard and MongoDB integration.
          </p>
        </div>

        <div className="border p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">
            Personal Portfolio Website
          </h3>
          <p className="text-gray-700">
            Responsive portfolio built using React, Tailwind CSS and backend API integration.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Projects