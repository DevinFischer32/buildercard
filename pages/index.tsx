import type { NextPage } from 'next'
import Link from 'next/link'
import HowContainer from '../Components/howContainer'
import WhyContainer from '../Components/whyContainer'
import Header from '../Components/header'
import blueprint from '../public/Icons/blueprints.svg'
import calculator from '../public/Icons/calculator.svg'
import compass from '../public/Icons/compass.svg'
import tape from '../public/Icons/tape.svg'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <section>
        <div>
          <h1>The credit card for construction firms.</h1>
          <p>
            Pay us back only after you’ve been paid. Lowest interest rates
            around. Software to make you faster.
          </p>
          <Link href='/apply'><a>Apply now</a><Link/>
        </div>
        <div>{/* Builder */}</div>
      </section>

      <section>
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
      </section>

      <section>
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
      </section>
    </div>
  )
}

export default Home
