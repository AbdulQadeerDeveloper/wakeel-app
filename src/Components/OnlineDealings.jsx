import React from "react";
import "./OnlineDealings.css";
import { WakeelAccount } from "../Images";
import { OnlineDealingsData } from "../Data";

function OnlineDealings() {
  return (
    <section id="online-dealings">
      <div className="global-spacer"></div>
      <div className="global-container online-dealings">
        <div className="odealings-img">
          <div className="img-box">
            <div className="hero-bg"></div>
            <img src={WakeelAccount} alt="profile" />
          </div>
        </div>

        <div className="odealings">
          <h1 className="global-heading">Online Dealings</h1>
          <div className="offered-services">
            {OnlineDealingsData.map((item) => (
              <div key={item.id} className={`oservice ${item.id !== OnlineDealingsData.length ? "border" : ""}`}>
                <div className="oservice-name">
                  <div className="oservice-icon">{item.icon}</div>
                  <span className="global-green">{item.text}</span>
                </div>
                <div className="oservice-detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default OnlineDealings;
