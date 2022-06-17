import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
import { NextRouter, useRouter } from 'next/router'
import { UserIcon, LockClosedIcon } from '@heroicons/react/outline'

const Login: NextPage = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const router: NextRouter = useRouter()

  const handleSubmit: Function = (e: FormDataEvent) => {
    e.preventDefault()
    try {
      axios
        .post('http://localhost:5000/login', {
          username,
          password,
        })
        .then((res) => {
          setMessage(res.data)
          if (res.status === 200) {
            // router.push('/')
            console.log(res)
          }
        })
    } catch (error) {
      console.log(error)
    } finally {
      setUsername('')
      setPassword('')
    }
  }

  return (
    <div className="flex  h-screen w-screen flex-col items-center justify-between p-5">
      <div className="mt-10 text-center text-2xl">
        <h1>Sign in to</h1>
        <h1 className="font-Rampart ">buildercard</h1>
      </div>
      <form className="flex w-screen flex-col items-center">
        <div className=" relative w-2/3">
          <input
            type="text"
            placeholder="Username"
            className="my-3 w-full bg-builderBlue p-1 pl-10 placeholder:mr-5 placeholder:text-right placeholder:text-black focus:outline-builderBlueD"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <UserIcon className="absolute top-4 left-3 h-5 w-5" />
        </div>
        <div className=" relative w-2/3">
          <input
            value={password}
            type="text"
            className="my-3 w-full bg-builderBlue p-1 pl-10 placeholder:mr-5 placeholder:text-right placeholder:text-black focus:outline-builderBlueD"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockClosedIcon className="absolute top-4 left-3 h-5 w-5" />
        </div>
        <button
          className="my-5 rounded-xl border-2 border-builderBlue bg-builderBlueL p-1 px-5"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </form>
      <Link href="/register">
        <a className=" underline decoration-builderBlue underline-offset-2">
          Don't have an Account?
        </a>
      </Link>
      <h1>{message}</h1>
    </div>
  )
}

export default Login
