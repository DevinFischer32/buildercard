import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HowContainer from '../Components/howContainer'
import WhyContainer from '../Components/whyContainer'
import Footer from '../Components/footer'
import Header from '../Components/header/header'
import blueprint from '../public/Icons/blueprints.svg'
import calculator from '../public/Icons/calculator.svg'
import compass from '../public/Icons/compass.svg'
import tape from '../public/Icons/tape.svg'
import worker from '../public/Icons/worker.svg'
import bulldozer from '../public/Icons/bulldozer.svg'

import bull from '../public/Icons/test/bull.svg'
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <section className="bg-builderBlue  p-3 pb-4 pt-10">
        <div>
          <h1 className="font-Playfair text-3xl">
            The credit card for <span className="font-bold">construction</span>{' '}
            firms.
          </h1>
          <p className="my-5 w-2/3">
            Pay us back only after you’ve been paid. Lowest interest rates
            around. Software to make you faster.
          </p>
          <Link href="/apply">
            <a className="rounded bg-builderGreen p-2 px-4 text-sm text-white">
              Apply now
            </a>
          </Link>
        </div>
        <div>
          <Image src={worker} />
        </div>
      </section>

      <section className="mt-10  p-3 py-4">
        <h1 className="mb-5 font-Playfair text-3xl">Why buildercard?</h1>
        <div className="z-10">
          <WhyContainer
            header="Pay us once you get paid"
            subHeader="Kiss cash flow problems good bye."
          />
          <WhyContainer
            header="2x higher credit limits"
            subHeader="We partner deep with your firm."
          />
          <WhyContainer
            header="3x lower interest rates"
            subHeader="Buildercard offers unbeatable rates, between 6.99-19.99% APR."
          />
          <WhyContainer
            header="Finance not just materials, but labor too"
            subHeader="We’re serious about enabling you to maximize leverage."
          />
        </div>
        <div className="mt-10 animate-drive">
          <Image src={bull} className="" />
        </div>
      </section>

      <section className="p-3 py-4">
        <h1 className="mb-5 font-Playfair text-3xl">How buildercard works:</h1>
        <div className="grid grid-cols-1 justify-items-center gap-4">
          <HowContainer
            number={1}
            src={calculator}
            header="Create new job"
            description="Buildercard finances individual projects. Create a new job on the online buildercard portal, and submit any document that shows how much you’ll get paid for that job."
          />
          <HowContainer
            number={2}
            src={tape}
            header="We extend credit"
            description="Normally 70-90% of expected job revenue. For example, 
          if you’ve won a $100K job, buildercard might extend an
          $80K credit limit to be used for this specific project."
          />
          <HowContainer
            number={3}
            src={blueprint}
            header="Spend"
            description="Buy whatever materials and tools you need to get the job done. As you incur payroll costs throughout the project, we’ll pay that too."
          />
          <HowContainer
            number={4}
            src={compass}
            header="Get paid, pay us"
            description="You use buildercard to invoice the general contractor 
          or developer. The GC or developer pays buildercard directly, we subtract the interest fee, and send you your job income same day!"
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
