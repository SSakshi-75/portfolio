import { useEffect,useState } from "react"
import axios from "axios"

function Admin(){

  const [messages,setMessages]=useState([])

  useEffect(()=>{
    const token = localStorage.getItem("token")

    axios.get("http://localhost:5000/api/contact",{
      headers:{ Authorization: token }
    })
    .then(res=>setMessages(res.data))
  },[])

  return(
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {messages.map((msg,index)=>(
        <div key={index} className="border p-4 mb-4">
          <p><b>Name:</b> {msg.name}</p>
          <p><b>Email:</b> {msg.email}</p>
          <p><b>Message:</b> {msg.message}</p>
        </div>
      ))}

    </div>
  )
}

export default Admin