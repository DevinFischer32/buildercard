import { NextPage } from 'next'
import React, { useState } from 'react'
import axios from 'axios'

const Login: NextPage = () => {
  const [username, setUsername] = useState<String>('')
  const [password, setPassword] = useState<String>('')

  const handleSubmit: Function = (e: FormDataEvent) => {
    e.preventDefault()
    try {
      axios.post('http://localhost:5000/login', {
        username,
        password,
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
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  )
}

export default Login
