'use client'

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { toast } from "react-toastify"

async function Register() {
    const {data:session, status:sessionStatus} = useSession()
    const router = useRouter()

    useEffect(()  => {
        if(sessionStatus === "authenticated"){
            router.push("/blog")
        }
    },[sessionStatus, router]);

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");


        if(!username || !email || !password || !confirmPassword){
            toast.error("All fields are required");
            return;
        }
        else if(password !== confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        try {
            console.log("Now I contact the api")
            const res = await fetch("https://demure-designs.vercel.app/api/auth/register", {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({username,email,password,confirmPassword})
            })
            if(res.status === 400){
                toast.error("User already exists.")
                console.log("User already exists.")
                return;
            }
            else if(res.status===201){
                router.push("/login")
                toast.success("User successfully registered");
                console.log("User registered successfully.")
                return;
            }
        } catch (error) {
            toast.error(error);
            return;
        }
        
    }

  return (sessionStatus !== "authenticated" &&
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded shadow:md">
            <h2 className="w-96 text-2xl font-bold">Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="fontsize:md font-bold mb-2">Username</label><br/>
                <input type="text" name="username" id="username" className="p-2 border w-full border-gray-500 mb-2 rounded" /><br/>

                <label htmlFor="email" className="fontsize:md font-bold mb-2">Email</label><br/>
                <input type="text" name="email" id="email" className="p-2 border w-full border-gray-500 mb-2 rounded" /><br/>

                <label htmlFor="password" className="fontsize:md font-bold mb-2">Password</label><br/>
                <input type="password" name="password" id="password" className="p-2 border w-full border-gray-500 mb-2 rounded" /><br/>

                <label htmlFor="confirmPassword" className="fontsize:md font-bold mb-2">Confirm Password</label><br/>
                <input type="password" name="confirmPassword" id="confirmPassword" className="p-2 border w-full border-gray-500 mb-2 rounded" /><br/>
                <button type="submit" className="bg-teal-400 hover:bg-teal-500 rounded w-full p-2 mt-2">Register</button>
                <span>Already registered?
                    <Link href='/login' className="text-teal-400 hover:underline"> Login</Link>
                </span>
            </form>
        </div>
    </div>
  )
}

export default Register