import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.img
        src={profile}
        className="w-62 h-62 rounded-full border-2 border-black object-cover object-top"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <h1 className="text-4xl font-bold mb-4">Hi, I'm Sakshi Singh 👋</h1>

      <p className="text-gray-600 mb-6">
        MERN Stack Developer | BCA Final Year Student
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/SSakshi-75"
          target="_blank"
          className="border border-black px-5 py-2 hover:bg-black hover:text-white transition"
        >
          GitHub
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sakshi-singh-8a421238b"
          target="_blank"
          className="border border-black px-5 py-2 hover:bg-black hover:text-white transition"
        >
          LinkedIn
          <FaLinkedin />
        </a>
      </div>

      <a href="resume.pdf" download className="mt-6 underline">
        Download Resume
      </a>
    </section>
  );
}

export default Home;
