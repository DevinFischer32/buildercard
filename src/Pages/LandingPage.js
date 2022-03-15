import React, { useState } from "react";
import { Link } from "react-router-dom";
import blueprints from "../Images/blueprints.svg";
import bulldozer from "../Images/bulldozer.svg";
import calculator from "../Images/calculator.svg";
import compass from "../Images/compass.svg";
import tape from "../Images/tape.svg";
import worker from "../Images/worker.svg";

export default function LandingPage() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header className="bg-bg-LB p-3 flex">
        <div>buildercard</div>
        <div
          onMouseEnter={(e) => setMenu(true)}
          onMouseLeave={(e) => setMenu(false)}
        >
          {menu ? (
            <nav className="flex">
              <h1>Why buildercard</h1>
              <h1>How it works</h1>
              <h1>About</h1>
            </nav>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        <div className="flex">
          <Link to="/signin">
            <p>Sign in</p>
          </Link>
          <Link to="/regisiter" className="">
            <p>Sign up</p>
          </Link>
        </div>
      </header>
      <section className="bg-bg-LB pt-0 p-3">
        <div>
          <h1>
            The credit card for <span className="font-bold"> construction</span>{" "}
            firms.
          </h1>
          <p>
            Pay us back only after you’ve been paid. Lowest interest rates
            around. Software to make you faster.
          </p>
          <button>Apply</button>
        </div>
        <div>
          {" "}
          <img src={worker} alt="" />
        </div>
      </section>
      <section className="p-3">
        <h1> Why buildercard?</h1>
        <div>
          <p>Pay us once you get paid</p>
          <p>Kiss cash flow problems good bye.</p>
        </div>
        <div>
          <p>2x higher credit limits</p>
          <p>We partner deep with your firm.</p>
        </div>
        <div>
          <p>3x lower interest rates</p>
          <p>Buildercard offers unbeatable rates, between 6.99-19.99% APR.</p>
        </div>
        <div>
          <p>Finance not just materials, but labor too</p>
          <p>We’re serious about enabling you to maximize leverage.</p>
        </div>
        <div>
          <img src={bulldozer} alt="" />
        </div>
      </section>
      <section className="p-3">
        <h1 className="mb-2">How buildercard works:</h1>
        <div className="flex flex-col sm:grid grid-cols-2">
          <div>
            <div className="flex mb-3">
              <img src={calculator} alt="" />
              <h1>1.</h1>
              <h1>Create new job</h1>
            </div>
            <p className="w-10/12">
              Buildercard finances individual projects. Create a new job on the
              online buildercard portal, and submit any document that shows how
              much you’ll get paid for that job.
            </p>
          </div>
          <div>
            <div className="flex mb-3">
              <img src={tape} alt="" />
              <h1>2.</h1>
              <h1>We extend credit</h1>
            </div>
            <p className="w-10/12">
              Normally 70-90% of expected job revenue. For example, if you’ve
              won a $100K job, buildercard might extend an $80K credit limit to
              be used for this specific project.
            </p>
          </div>
          <div>
            <div>
              <div className="flex mb-3">
                <img src={blueprints} alt="" />
                <h1>3.</h1>
                <h1>Spend</h1>
              </div>
              <p className="w-10/12">
                Buy whatever materials and tools you need to get the job done.
                As you incur payroll costs throughout the project, we’ll pay
                that too.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex mb-3">
                <img src={compass} alt="" />
                <h1>4.</h1>
                <h1>Get paid, pay us</h1>
              </div>
              <p className="w-10/12">
                You use buildercard to invoice the general contractor or
                developer. The GC or developer pays buildercard directly, we
                subtract the interest fee, and send you your job income same
                day!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-bg-green p-3">
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
            <h1>Company</h1>
            <h1>Careers</h1>
            <h1>Monthly update</h1>
            <h1>Invest</h1>
          </div>
          <div>
            <h1>Support</h1>
            <h1>Help center</h1>
            <h1>Email</h1>
            <h1>Phone</h1>
            <h1>Carrier pigeon</h1>
          </div>
        </section>
      </footer>
    </div>
  );
}
