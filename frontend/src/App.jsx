import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import ValueGrid from "./components/ValueGrid";
import Pilot from "./components/Pilot";
//import Collaboration from "./components/Collaboration";
import Revenue from "./components/Revenue";
import CTAForm from "./components/CTAForm";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WaitlistForm from "./components/WaitlistForm";
import "./index.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <ValueGrid />
      <Pilot />
      {/* <Collaboration /> */}
      <Revenue />
      <CTAForm />
      <BlogSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/waitlist" element={<WaitlistForm />} />
        </Routes>
      </div>
    </Router>
  );
}
