import React from "react";

function Details() {
  return (
    <div className="details-container">
      <section className="details-section">
        <h2>About Octaview Client</h2>
        <p className="version-badge">v0.1.3</p>
        <p className="details-description">
          A professional React component for seamless job listings integration.
          The octaview-client is a production-ready React component designed to
          integrate dynamic job listings into your application. With a focus on
          performance and customization, it provides a complete solution for
          displaying job opportunities from your API.
        </p>
      </section>

      <section className="details-section">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Real-time Job Listings</h3>
            <p>Fetch and display job listings in real-time with automatic updates and pagination.</p>
          </div>
          <div className="feature-card">
            <h3>Enterprise-ready Security</h3>
            <p>API key authentication and secure data handling to protect sensitive information.</p>
          </div>
          <div className="feature-card">
            <h3>Complete Customization</h3>
            <p>Flexible styling options that seamlessly integrate with your application's design system.</p>
          </div>
          <div className="feature-card">
            <h3>Performance Optimized</h3>
            <p>Lightweight implementation with optimized rendering for smooth user experience.</p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h2>Test the Demo</h2>
        <div className="test-info">
          <p>This is a demonstration of the Octaview Client package. To test the application:</p>
          <ol>
            <li>Switch to the "Career Opportunities" tab to view the Octaview client in action</li>
            <li>Browse through the available job listings</li>
            <li>Click "Apply" on a job listing to test the application process</li>
          </ol>
          <div className="demo-credentials">
            <h3>Demo Dashboard Access</h3>
            <p>To access the admin dashboard for this demo, use the following credentials:</p>
            <div className="credentials-box">
              <p><strong>Email:</strong>octaview.test@yopmail.com</p>
              <p><strong>Password:</strong> Demo@123</p>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h2>Getting Started</h2>
        <div className="code-block">
          <pre>npm install octaview-client</pre>
        </div>
        <p>Then import it in your project:</p>
        <div className="code-block">
          <pre>import OctaviewClient from 'octaview-client';</pre>
        </div>
      </section>

      <section className="details-section">
        <h2>Support</h2>
        <p>
          For support inquiries, please email: 
          <a href="mailto:mammen999@gmail.com">mammen999@gmail.com</a>
        </p>
        <p>
          Visit our GitHub repository for bug reports and feature requests.
        </p>
      </section>
    </div>
  );
}

export default Details;