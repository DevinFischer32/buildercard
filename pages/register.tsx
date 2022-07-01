import { NextPage } from 'next'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  UserIcon,
  AtSymbolIcon,
  LockClosedIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import modelFooter from '../public/Icons/modelFooter.svg'

const Register: NextPage = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [username, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [formValid, setFormValid] = useState<boolean>(false)

  // Need to create validation
  // sequelize validates email and if password is longer than 8

  const router: NextRouter = useRouter()

  // const handleSubmit: Function = (e: FormDataEvent) => {
  //   e.preventDefault()
  //   try {
  //     axios.post('http://localhost:5000/register', {
  //       first_name: firstName,
  //       last_name: lastName,
  //       username,
  //       email,
  //       password,
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setFirstName('')
  //     setLastName('')
  //     setUserName('')
  //     setEmail('')
  //     setPassword('')
  //     setTimeout(() => {
  //       router.push('/login')
  //     }, 1500)
  //   }
  // }

  return (
    <div className="flex  h-screen w-screen flex-col items-center justify-between p-5">
      <h1 className="text-2xl">Create Account</h1>
      <form className="flex w-screen flex-col items-center">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className="my-3 w-2/3 bg-builderBlue p-1 pl-10 placeholder:mr-5  placeholder:text-right placeholder:text-black focus:outline-builderBlueD"
            type="text"
            placeholder="First Name"
            value={firstName}
            autoComplete="off"
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className="my-3 w-2/3 bg-builderBlue p-1 pl-10 placeholder:mr-5 placeholder:text-right placeholder:text-black focus:outline-builderBlueD"
            type="text"
            placeholder="Last Name"
            value={lastName}
            autoComplete="off"
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </div>
        <div className="relative w-2/3">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="my-3 w-full bg-builderBlue p-1 pl-10 placeholder:mr-5 placeholder:text-right placeholder:text-black focus:outline-builderBlueD"
            type="text"
            placeholder="Username"
            value={username}
            autoComplete="off"
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <UserIcon className="absolute top-4 left-3 h-5 w-5" />
        </div>
        <div className="relative w-2/3">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="my-3 w-full bg-builderBlue p-1 pl-10 placeholder:mr-5 placeholder:text-right placeholder:text-black focus:outline-builderBlueD"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <AtSymbolIcon className="absolute top-4 left-3 h-5 w-5" />
        </div>
        <div className=" relative w-2/3">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            className="  my-3 w-full bg-builderBlue p-1 pl-10 placeholder:mr-5 placeholder:text-right placeholder:text-black  focus:outline-builderBlueD"
            type="text"
            placeholder="Password"
            value={password}
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <LockClosedIcon className="absolute top-4 left-3 h-5 w-5" />
        </div>
        <button
          className="my-5 w-1/2 rounded-xl border-2 border-builderBlue bg-builderBlueL p-1 px-3"
          // onClick={(e) => handleSubmit(e)}
        >
          Sign up
        </button>
      </form>
      <Link href="/login">
        <a className=" underline decoration-builderBlue underline-offset-2">
          Already Have an Account?
        </a>
      </Link>

      {/* <div>
        <Image src={modelFooter} />
      </div> */}
    </div>
  )
}
export default Register
