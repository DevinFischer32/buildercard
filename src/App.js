import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/Portals/LoginPage";
import SignUpPage from "./Pages/Portals/SignUpPage";

function App() {
  return (
    <main className="bg-bg-W">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/regisiter" element={<SignUpPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default App;
