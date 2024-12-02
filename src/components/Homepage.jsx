import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Resume Critique Tool</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Introduction Section */}
      <section>
        <h2>Transform Your Resume, Land Your Dream Job</h2>
        <p>
          Our tool provides AI-powered insights and personalized feedback to
          help you craft a winning resume.
        </p>
        <button>
          <Link to="/signup">Get Started for Free</Link>
        </button>
      </section>

      {/* Benefits Section */}
      <section>
        <h3>Why Use Our Tool?</h3>
        <ul>
          <li>
            📋 Analyze your resume for formatting, clarity, and content quality.
          </li>
          <li>💡 Get actionable tips tailored to your industry.</li>
          <li>
            🚀 Improve your chances of landing interviews with optimized
            resumes.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section>
        <h3>Ready to Level Up Your Resume?</h3>
        <p>
          Join thousands of professionals who have transformed their resumes!
        </p>
        <button>
          <Link to="/signup">Sign Up Now</Link>
        </button>
      </section>
    </div>
  );
};

export default Homepage;
