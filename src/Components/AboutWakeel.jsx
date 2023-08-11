import React from "react";
import "./About.css";
import { Profile } from "../Images";

function Responsive() {
  return (
    <>
      <div className="row">
        <h3 className="heading">Our Mission</h3>
        <p className="para">
          Empowering Your Legal Journey - At our app, our mission is simple - to empower individuals with reliable legal advice and support. We believe in demystifying the complexities of the law,
          making it accessible to everyone, anytime, and anywhere.
        </p>
      </div>

      <div className="row">
        <h3 className="heading">Our Team</h3>
        <p className="para">
          Experts You Can Trust - Meet the dedicated team of skilled attorneys behind our app. With a passion for justice and a commitment to excellence, our experts are here to guide you through your
          legal challenges and ensure your rights are protected.
        </p>
      </div>
    </>
  );
}

function AboutWakeel() {
  return (
    <>
      {/* About sSection */}
      <section id="about" className="global-container">
        {/* Spacer */}
        <div className="global-spacer-mini" />

        {/* Top Box */}
        <div className=" WaAboutWakeel">
          {/* Left Side */}
          <div className="About-col About-tablet-col">
            <div className="row">
              <h1 className="global-heading">About Wakiel App</h1>
              <h3 className="heading">Our App</h3>
              <div className="para">
                Access Legal Expertise at Your Fingertips. Discover the ultimate online legal advisor that puts the power of legal knowledge in your hands. Our app provides instant access to:
                <ul className="bullets">
                  <li>Experienced attorneys</li>
                  <li>Making legal guidance just a tap away</li>
                </ul>
              </div>
            </div>

            <div className="desktop">
              <Responsive />
            </div>
          </div>

          {/* Right Side */}
          <div className="About-col about-right">
            <div className="image-box">
              <img src={Profile} alt="about" />
            </div>
          </div>
        </div>

        {/* Tablet + Mobile Mode */}
        <div className=" WaAboutWakeel tablet">
          <Responsive />
        </div>

        {/* Spacer */}

        <div className="global-spacer-mini" />
      </section>
    </>
  );
}

export default AboutWakeel;
