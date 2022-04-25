import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'

const Login: NextPage = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')

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
        })
    } catch (error) {
      console.log(error)
    } finally {
      setUsername('')
      setPassword('')
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          value={password}
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
      <Link href="/register">
        <a>Don't have an Account?</a>
      </Link>
      <h1>{message}</h1>
    </div>
  )
}

export default Login
