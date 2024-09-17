'use client'
import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

function Login() {
    const router = useRouter();
    const {data: session, status: sessionStatus} = useSession();

    useEffect(() => {
        if(sessionStatus === "authenticated"){
            router.push("/blog");
        }
    }, [sessionStatus, router])

    const handleSubmit = async(e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        if(!email || !password){
            toast.error("All fields are required.");
            return
        }
        else{
            try {
                const res = await signIn('https://demure-designs.vercel.app/credentials', {
                    redirect:false,
                    email,password
                })
                if(res?.error){
                    if(res?.url){
                        router.replace('/blog');
                    }
                    else{
                        toast.error("Invalid credentials");
                        return;
                    }
                }
                else{
                    toast.success("User login successful");
                    router.push('/blog')
                }
            } catch (error) {
                toast.error(error);
                return;
            }
        }
    }
  return ( sessionStatus !== "authenticated" &&
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='p-8 bg-white rounded shadow:md'>
            <h2 className='text-2xl font-bold w-96'>Log in</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email' className='fontsize:md font-bold mb-2'>Email</label><br />
                    <input type='text' name='email' id='email' className='p-2 w-full border border-gray-500 rounded' /><br />

                    <label htmlFor='password' className='fontsize:md font-bold mb-2'>Password</label><br />
                    <input type='password' name='password' id='password' className='p-2 w-full border border-gray-500 rounded' /><br />
                    <button type='submit' className='bg-teal-400 hover:bg-teal-500 p-2 rounded w-full mt-4'>Log in</button>
                    <p>Don&#39;t have an account?
                        <Link href='/register' className='text-teal-700 hover:underline'> Register</Link>
                    </p>
                </form>
        </div>
    </div>
  )
}

export default Login