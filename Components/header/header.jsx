import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  console.log(navbarOpen)

  return (
    <div className="relative border-b border-black bg-builderBlue p-2">
      <Link href="/">
        <a className="font-Rampart text-3xl">buildercard</a>
      </Link>
      {!navbarOpen ? (
        <div className="absolute right-3 top-3 w-max">
          <MenuIcon
            className="w-7"
            onClick={() => {
              setNavbarOpen(!navbarOpen)
            }}
          />
        </div>
      ) : (
        <div className="absolute right-1 top-1 grid w-max grid-cols-1 bg-red-100 p-2">
          <div className="relative mb-5">
            <XIcon
              className="absolute right-0 w-5"
              onClick={() => {
                setNavbarOpen(!navbarOpen)
              }}
            />
          </div>
          <h1 className="underline underline-offset-2">
            Hello, User <span className="text-builderGreen">!</span>
          </h1>
          <h1 className="my-2">About</h1>
          {/* <h1 className="mb-2">logout</h1> */}

          <Link href="/register">
            <a className="mb-2 rounded border border-builderGreen p-1 px-3 text-center">
              sign up
            </a>
          </Link>
          <Link href="/login">
            <a className="rounded bg-builderGreen  p-1 px-3 text-center text-white">
              sign in
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}
export default Header
