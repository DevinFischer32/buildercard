import React from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="flex flex-col w-1/2 ">
      <div className="flex">
        <h1>Register Account</h1>
        <Link to="/">
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
      <input type="text" placeholder="firstname" />
      <input type="text" placeholder="lastname" />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="position" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="retype password" />
      <Link to="/signin"> Already have an Account?</Link>
    </div>
  );
}
