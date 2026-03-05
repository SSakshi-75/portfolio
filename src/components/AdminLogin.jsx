import { useState } from "react"
import axios from "axios"

function AdminLogin(){

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleLogin=async()=>{
    const res = await axios.post("http://localhost:5000/api/admin/login",{
      email,
      password
    })

    localStorage.setItem("token",res.data.token)
    alert("Login Successful")
  }

  return(
    <div className="h-screen flex justify-center items-center">
      <div className="border p-8 w-80">

        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

        <input
          placeholder="Email"
          className="border w-full p-2 mb-3"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="border px-4 py-2 hover:bg-black hover:text-white transition">
          Login
        </button>

      </div>
    </div>
  )
}

export default AdminLogin