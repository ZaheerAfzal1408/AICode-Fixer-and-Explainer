import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { Link } from "react-router-dom";
import "./Home.css"
export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="hero">
          <h1>Welcome to AI Code Explainer & Bug Fixer 💻</h1>
          <p>Paste your code, let AI explain it in simple words, and detect bugs with suggested fixes.</p>
          <Link to="/explain" className="btn">Code Explainer</Link>
        </section>

        <section className="features">
          <h2>🌟 What Can AI Code Helper Do?</h2>
          <div className="card-container">
            <div className="card">
              <div className="icon">📖</div>
              <h3>Code Explainer</h3>
              <p>Get clear, beginner-friendly explanations of any code snippet. Perfect for learning and understanding complex algorithms.</p>
            </div>
            <div className="card">
              <div className="icon">🐛</div>
              <h3>Bug Fixer</h3>
              <p>Identify bugs, understand what's wrong, and get corrected code with detailed explanations of the fixes.</p>
            </div>
            <div className="card">
              <div className="icon">🛠️</div>
              <h3>Multi-Language Support</h3>
              <p>Works with Python, JavaScript, Java, C++, and many more programming languages and frameworks.</p>
            </div>
            <div className="card">
              <div className="icon">🎓</div>
              <h3>Learning-Friendly</h3>
              <p>Explanations designed for beginners but detailed enough for experienced developers to learn new concepts.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>🚀 How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Paste Your Code</h3>
              <p>Simply copy & paste your code snippet into the input box.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>AI Analyzes</h3>
              <p>Our AI reads your code, explains it, and detects bugs instantly.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Get Results</h3>
              <p>Receive clear explanations, corrected code, and suggestions to improve.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
