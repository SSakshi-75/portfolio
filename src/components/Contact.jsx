import { useState } from "react"
import axios from "axios"

function Contact(){

  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    await axios.post("http://localhost:5000/api/contact",form)

    alert("Message Sent Successfully")
    setForm({name:"",email:"",message:""})
  }

  return(
    <section id="contact" className="bg-white cls
     py-20 text-center px-8">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3"
          required
        />

        <button className="border px-6 py-2 hover:bg-black hover:text-white transition">
          Send
        </button>

      </form>
    </section>
  )
}

export default Contact