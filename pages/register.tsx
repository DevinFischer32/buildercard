import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Register: NextPage = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [username, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [formValid, setFormValid] = useState<boolean>(false)

  // Need to create validation
  // sequelize validates email and if password is longer than 8

  const handleSubmit: Function = (e: FormDataEvent) => {
    e.preventDefault()
    try {
      axios.post('http://localhost:5000/register', {
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setFirstName('')
      setLastName('')
      setUserName('')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button onClick={(e) => handleSubmit(e)}>Create Account</button>
      </form>
      <Link href="/login">
        <a>Already Have an Account?</a>
      </Link>
    </div>
  )
}
export default Register
