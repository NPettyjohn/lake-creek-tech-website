import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <nav>
          <div className="logo">My Company</div>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="App-hero">
        <h1>Welcome to My Company</h1>
        <p>Your success is our priority</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </section>

      {/* Features Section */}
      <section id="features" className="App-features">
        <h2>Our Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Feature 1</h3>
            <p>Detail about feature 1.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 2</h3>
            <p>Detail about feature 2.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 3</h3>
            <p>Detail about feature 3.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="App-about">
        <h2>About Us</h2>
        <p>We are a company committed to providing the best services for our customers.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="App-contact">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
