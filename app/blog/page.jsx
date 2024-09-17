/*import Blog from '@/components/Blog'
import React from 'react'

const Page = () => {
  return (
    <Blog />
  )
}

export default Page */

'use client'

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from 'react'

function Blog() {
  const {data: session, status: sessionStatus} = useSession();
  const router  = useRouter();

  useEffect(()=> {
    if(sessionStatus !== "authenticated"){
      router.push("/login")
    }
  }, [sessionStatus, router ])
  return (sessionStatus === 'authenticated' &&
    <div className="flex justify-center items-center min-h-screen">
        <button className="bg-blue-400 hover:bg-blue-500 rounded p-2" onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default Blog