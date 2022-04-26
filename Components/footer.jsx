import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <section>
        <h1>buildercard</h1>
        <p>
          We asked ourselves why the largest industry in America is so
          underserved by financial institutions. The answer was simple: normal
          credit cards don’t jive well with the sometimes unpredictable nature
          of construction revenue, and banks don’t have the capacity to
          customize a product for construction firms. So, we did.
        </p>
      </section>
      <section>
        <div>
          <Link href="/company">
            <a>Company</a>
          </Link>
          <Link href="/updates">
            <a>Monthly Updates</a>
          </Link>
          <Link href="/careers">
            <a>Careers</a>
          </Link>
          <Link href="/invest">
            <a>Invest</a>
          </Link>
        </div>
        <div>
          <Link href="/support">
            <a>Support</a>
          </Link>
          <Link href="/support/helpcenter">
            <a>Help center</a>
          </Link>
          <Link href="/email">
            <a>Email</a>
          </Link>
          <Link href="/phone">
            <a>Phone</a>
          </Link>
          <Link href="/pigeon">
            <a>Carrier pigeon</a>
          </Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer
