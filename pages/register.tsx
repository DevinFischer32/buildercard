import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Register: NextPage = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [username, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [formValid, setFormValid] = useState<boolean>(false)

  useEffect(() => {
    if (firstName?.length && lastName?.length) {
    }
  }, [firstName, lastName, email, password])

  const handleSubmit: Function = (e: FormDataEvent) => {
    e.preventDefault()
    if (1 === 1) {
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
    } else return
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
    </div>
  )
}
export default Register
