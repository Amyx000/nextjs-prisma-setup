import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [data, Setdata] = useState({
    name: "",
    email: "",
    img: ""
  })

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault()
      const res = await fetch("http://localhost:3000/api/users/createuser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data })
      })
      Setdata({
        name: "",
        email: "",
        img: ""
      })

  }


  return (
    <>
      <h1 style={{ "textAlign": "center" }}>Next.js with Prisma</h1>
      <form style={{ "display": "flex", "flexDirection": "column", "gap": '20px',"width":"50%","margin":"100px auto" }}>
        <input type={"text"} placeholder="Enter name" value={data.name} onChange={e => Setdata(prev => ({ ...prev, name: e.target.value }))} />
        <input type={"text"} placeholder="Enter email" value={data.email} onChange={e => Setdata(prev => ({ ...prev, email: e.target.value }))} />
        <input type={"text"} placeholder="Enter image url" value={data.img} onChange={e => Setdata(prev => ({ ...prev, img: e.target.value }))} />
        <button onClick={handleClick}>Add</button>
      </form>
      <button style={{"display":"block","width":"100px","margin":"0 auto"}} onClick={()=>router.push("/user")}>Check Users</button>
    </>
  )
}
