import React from "react";
import { ServicesData } from "../Data";
import { Link } from "react-router-dom";


const Services = () => {

  return (
    <section className="services-section" id='services'>
      {/* Services Top */}
      <div className="services-top">
        <h2 className=" global-heading">Our Services</h2>

        <p className="global-paragraph">
          "Wakiel App is a Lawyer Appointment System. In this system, a client can free register and login and make an appointment with his/her desired lawyer. Client can search lawyer based on location or chember departmentwise and appoint quickly. A client can also put his case on our platform, and our lawyer community will bid on the subject case. Lawyer can also login and create prescription for his clients, manage schedule etc."
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-container">
        {ServicesData.map(item => (
          <div key={item.title} className="service-card">
            <div className="service-image">
              {item.image}
            </div>
            {/* <img src= alt={item.title}  /> */}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to='https://play.google.com/store/apps' target='_blank'>
              <button className="global-btn">Explore Now</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="global-spacer"></div>
    </section>
  );
};

export default Services;
