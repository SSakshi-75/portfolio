function Navbar(){
  return(
    <div className="fixed w-full bg-white border-b border-black p-4 flex justify-between z-50">
      <h1 className="font-bold text-xl">Sakshi Singh</h1>

      <div className="space-x-6 hidden md:block font-bold">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar