import Link from 'next/link'

const Header = () => {
  return (
    <div className="border-b border-black bg-builderBlue">
      <div>
        <Link href="/">
          <a className="font-Rampart">buildercard</a>
        </Link>
        <h1>Why buildercard</h1>
        <h1>How it works</h1>
        <h1>About</h1>
      </div>
      <nav>
        <Link href="/register">
          <a>sign up</a>
        </Link>
        <Link href="/login">
          <a className="bg-builderGreen text-white">sign in</a>
        </Link>
      </nav>
    </div>
  )
}
export default Header
