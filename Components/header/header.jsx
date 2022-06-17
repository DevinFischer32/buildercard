import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
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
          <div className="fixed  right-0 top-0 z-10 grid h-screen w-screen grid-cols-[2fr_3fr]">
            <div className=" bg-black opacity-50"></div>

            <div className=" relative flex flex-col bg-white p-2">
              <div className="mt-10 flex justify-center">
                <h1 className="mr-3 h-16 text-2xl underline underline-offset-2">
                  Hello, User <span className="text-builderGreen">!</span>
                </h1>
              </div>

              <nav>
                <h1 className="my-2">About us</h1>
                <h1>Support</h1>
                <h1 className="my-2">FAQ</h1>
                <h1 className="mb-2">logout</h1>
              </nav>

              <div className="mt-10 flex flex-col">
                <Link href="/register">
                  <a className="mb-4 h-max rounded border border-builderGreen p-1 px-3 text-center">
                    sign up
                  </a>
                </Link>
                <Link href="/login">
                  <a className="h-max rounded bg-builderGreen p-1 px-3 text-center text-white">
                    sign in
                  </a>
                </Link>
              </div>
              <button
                className="absolute right-2 left-2 bottom-5 mt-4 rounded bg-builderBlue p-1 px-3 font-bold"
                onClick={() => {
                  setNavbarOpen(!navbarOpen)
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default Header
