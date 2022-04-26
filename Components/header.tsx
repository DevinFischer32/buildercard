import { NextComponentType } from 'next'
import Link from 'next/link'

const Header: NextComponentType = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>buildercard</a>
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
          <a>sign in</a>
        </Link>
      </nav>
    </div>
  )
}
export default Header
