import React from "react";
import { ServicesData } from "../Data";


const Services = () => {
  return (
    <section className="services-section" id='services'>
      {/* Services Top */}
      <div className="services-top">
        <h2 className=" global-heading">Our Services</h2>

        <p className="global-paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-container">
        {ServicesData.map(item => (
          <div key={item.title} className="service-card">
            <img src={item.image} alt={item.title} className="service-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="global-btn">Explore Now</button>
          </div>
        ))}
      </div>

      <div className="global-spacer"></div>
    </section>
  );
};

export default Services;
