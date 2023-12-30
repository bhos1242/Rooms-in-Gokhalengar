"use client"

import { useSession } from "next-auth/react"
import toast, { Toaster } from "react-hot-toast";

// import { getServerSession } from 'next-auth/next'
// import Image from 'next/image'
// import { authOptions } from './api/auth/[...nextauth]/route'

export default function Home() {
  // const data = await getServerSession(authO ptions)


  return (
  <>
    <Toaster />
    Homepage
    </>
  )
}
