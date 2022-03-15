import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <header className="bg-sky-300 p-2">
        <div>buildercard</div>
        <div>
          <h1>Why buildercard</h1>
          <h1>How it works</h1>
          <h1>About</h1>
        </div>
        <nav>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </nav>
      </header>
      <footer className="bg-green-200 sm:grid-cols-2 p-2 sm:grid">
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
