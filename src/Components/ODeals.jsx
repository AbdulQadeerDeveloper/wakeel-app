import React from "react";
import { OnlineDealingsData } from "../Data";
import './ODealings.css'


const OnlineDealings = () => {
  return (
    <section id='online-dealings' className="global-container">
      <div className='global-spacer-mini'></div>
      
      <h1 className='global-heading'>Online Dealings</h1>
      <p className='global-paragraph'>We Provide Various Services</p>

      <div className='Odeals'>
        {OnlineDealingsData.map(data => (
          <div key={data.heading} className="s-card">
            <div className="s-image">
              <img src={data.image} alt={data.heading} />
            </div>

            <h4>{data.heading}</h4>

            <p>{data.text}</p>
          </div>
        ))}

      </div>

    </section>

  )
}

export default OnlineDealings;